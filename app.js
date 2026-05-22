/* global CONFIG */
let currentViewData = { gameIdx: null, sceneIdx: null };
let viewMode = 'slider'; 
let isMagOn = false;

let currentPathA = '';
let currentPathB = '';
let imageNaturalW = 1920;
let imageNaturalH = 1080;

let scale = 1;
let translateX = 0;
let translateY = 0;

let action = 'none'; 
let sliderPercent = 50;
let startMouseX = 0, startMouseY = 0;
let startTransX = 0, startTransY = 0;
let initialPinchDistance = 0;
let initialScale = 1;

let shroud, elSliderBase, elSliderOverlay, elSliderClipper, elHandle;
let elSbsLeft, elSbsRight, labelL, labelR;
let magMain, magL, magR;

function init()
{
    shroud = document.getElementById('viewer-shroud');
    elSliderBase = document.getElementById('img-base');
    elSliderOverlay = document.getElementById('img-overlay');
    elSliderClipper = document.getElementById('slider-overlay-clipper');
    elHandle = document.getElementById('slider-handle');
    elSbsLeft = document.getElementById('sbs-left');
    elSbsRight = document.getElementById('sbs-right');
    labelL = document.getElementById('label-left');
    labelR = document.getElementById('label-right');
    magMain = document.getElementById('mag-main');
    magL = document.getElementById('mag-sbs-left');
    magR = document.getElementById('mag-sbs-right');

    if (!shroud) return;

    buildNavAndHome();
    setupEventListeners();

    const params = new URLSearchParams(window.location.search);
    if (params.has('g') && params.has('s'))
    {
        const g = parseInt(params.get('g'));
        const s = parseInt(params.get('s'));
        loadGame(g, s); 
    } 
    else
    {
        goHome();
    }

    refreshSlider();
    window.addEventListener('resize', refreshSlider);
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) menuBtn.addEventListener('click', toggleSidebar);

    const copyBtn = document.getElementById('copyLinkBtn');
    if (copyBtn) copyBtn.addEventListener('click', copyShareLink);

    document.addEventListener('fullscreenchange', () =>
    {
        const fsBtn = document.getElementById('fsBtn');
        if (fsBtn) fsBtn.classList.toggle('on', !!document.fullscreenElement);
        setTimeout(refreshSlider, 50);
    });
    document.addEventListener('webkitfullscreenchange', () =>
    {
        const fsBtn = document.getElementById('fsBtn');
        if (fsBtn) fsBtn.classList.toggle('on', !!document.webkitFullscreenElement);
        setTimeout(refreshSlider, 50);
    });

    // Sidebar overlay close
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);
}

function buildNavAndHome()
{
    const nav = document.getElementById('game-nav');
    const homeGrid = document.getElementById('home-game-grid');
    if (!nav || !homeGrid) return;

    nav.innerHTML = '';
    homeGrid.innerHTML = '';

    const sortedGames = [...CONFIG.games].sort((a, b) => a.name.localeCompare(b.name));
    sortedGames.forEach((game) =>
    {
        const gameIdx = CONFIG.games.indexOf(game);
        const card = document.createElement('div');
        card.className = 'grid-card';
        card.onclick = () => loadGame(gameIdx);

        if (game.icon)
        {
            const img = document.createElement('img');
            img.src = game.icon;
            img.className = 'game-icon';
            img.loading = 'lazy';
            img.alt = `${game.name} icon`;
            card.appendChild(img);
        } 
        else
        {
            const placeholder = document.createElement('div');
            placeholder.className = 'game-icon-placeholder';
            placeholder.innerText = '🎮';
            card.appendChild(placeholder);
        }

        const title = document.createElement('span');
        title.className = 'game-title';
        title.innerText = game.name;
        card.appendChild(title);

        homeGrid.appendChild(card);

        const groupDiv = document.createElement('div');
        groupDiv.className = 'game-group';

        const gameBtn = document.createElement('button');
        gameBtn.className = 'game-btn';
        gameBtn.innerText = game.name;
        gameBtn.id = `nav-game-${gameIdx}`;
        gameBtn.onclick = () => loadGame(gameIdx);

        const sceneList = document.createElement('div');
        sceneList.className = 'scene-list';
        sceneList.id = `scene-list-${gameIdx}`;

        game.scenes.forEach((scene, sceneIdx) =>
        {
            const sceneBtn = document.createElement('button');
            sceneBtn.className = 'scene-btn';
            sceneBtn.innerText = scene.name;
            sceneBtn.id = `btn-scene-${gameIdx}-${sceneIdx}`;
            sceneBtn.onclick = (e) =>
            {
                e.stopPropagation(); 
                loadScene(gameIdx, sceneIdx);
            };
            sceneList.appendChild(sceneBtn);
        });

        groupDiv.appendChild(gameBtn);
        groupDiv.appendChild(sceneList);
        nav.appendChild(groupDiv);
    });
}

function goHome()
{
    document.getElementById('home-view').style.display = 'flex';
    document.getElementById('app-view').style.display = 'none';
    document.getElementById('image-selectors').style.display = 'none';
    currentViewData = { gameIdx: null, sceneIdx: null };

    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('visible');
    const menuBtn = document.getElementById('menuBtn');
    if(menuBtn) menuBtn.classList.remove('active');

    document.querySelectorAll('.scene-list').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.game-btn').forEach(b => b.classList.remove('active'));

    window.history.replaceState({}, '', window.location.pathname);
}

function loadGame(gameIdx, targetSceneIdx = 0)
{
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('app-view').style.display = 'flex';

    document.querySelectorAll('.game-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.scene-list').forEach(list => list.classList.remove('active'));

    document.getElementById(`nav-game-${gameIdx}`).classList.add('active');
    document.getElementById(`scene-list-${gameIdx}`).classList.add('active');

    loadScene(gameIdx, targetSceneIdx);

    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menuBtn');

    if (window.innerWidth > 900)
    {
        sidebar.classList.add('visible');
        if(menuBtn) menuBtn.classList.add('active');
    } 
    else
    {
        sidebar.classList.remove('visible');
        if(menuBtn) menuBtn.classList.remove('active');
        const overlay = document.getElementById('sidebar-overlay');
        if (overlay) overlay.style.display = 'none';
    }
}

function loadScene(gameIdx, sceneIdx)
{
    currentViewData.gameIdx = gameIdx;
    currentViewData.sceneIdx = sceneIdx;
    
    document.querySelectorAll('.scene-btn').forEach(b => b.classList.remove('active'));
    const activeSceneBtn = document.getElementById(`btn-scene-${gameIdx}-${sceneIdx}`);
    if (activeSceneBtn) activeSceneBtn.classList.add('active');

    if (window.innerWidth <= 900)
    {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('visible');
        const menuBtn = document.getElementById('menuBtn');
        if (menuBtn) menuBtn.classList.remove('active');
        const overlay = document.getElementById('sidebar-overlay');
        if (overlay) overlay.style.display = 'none';
    }
    const scene = CONFIG.games[gameIdx].scenes[sceneIdx];
    const selLeft = document.getElementById('select-left');
    const selRight = document.getElementById('select-right');
    
    selLeft.innerHTML = '';
    selRight.innerHTML = '';

    scene.images.forEach((imgObj, idx) =>
    {
        const game = CONFIG.games[gameIdx];
        const plat = imgObj.platform || game.platform || 'N/A';

        let dropdownText = `[${plat}] ${imgObj.label}`;
        if (imgObj.tags && imgObj.tags.length > 0)
        {
            dropdownText += ` (${imgObj.tags.join(', ')})`;
        }

        const optL = document.createElement('option');
        optL.value = idx;
        optL.innerText = dropdownText;
        selLeft.appendChild(optL);

        const optR = document.createElement('option');
        optR.value = idx;
        optR.innerText = dropdownText;
        selRight.appendChild(optR);
    });

    const params = new URLSearchParams(window.location.search);
    let startL = 0;
    let startR = scene.images.length > 1 ? 1 : 0;
    
    if (params.get('g') == gameIdx && params.get('s') == sceneIdx)
    {
        if (params.has('l')) startL = parseInt(params.get('l'));
        if (params.has('r')) startR = parseInt(params.get('r'));
    }

    selLeft.selectedIndex = startL;
    selRight.selectedIndex = startR;

    document.getElementById('image-selectors').style.display = 'flex';
    resetZoomAndPan();
    changeImageSelection();
}

function changeImageSelection()
{
    const gameIdx = currentViewData.gameIdx;
    const sceneIdx = currentViewData.sceneIdx;
    if (gameIdx === null || sceneIdx === null) return;

    const game = CONFIG.games[gameIdx];
    const scene = game.scenes[sceneIdx];

    const idxL = document.getElementById('select-left').value;
    const idxR = document.getElementById('select-right').value;

    const imgL = scene.images[idxL];
    const imgR = scene.images[idxR];

    currentPathA = scene.path + imgL.fileName; // left
    currentPathB = scene.path + imgR.fileName; // right

    const tmpImg = new Image();
    tmpImg.onload = () => { imageNaturalW = tmpImg.naturalWidth; imageNaturalH = tmpImg.naturalHeight; };
    tmpImg.src = currentPathA;

    elSliderBase.style.backgroundImage = `url(${currentPathB})`;
    elSliderOverlay.style.backgroundImage = `url(${currentPathA})`;
    elSbsLeft.style.backgroundImage = `url(${currentPathA})`;
    elSbsRight.style.backgroundImage = `url(${currentPathB})`;

    const buildTags = (imgObj, isRightSide) =>
    {
        let html = '';
        const plat = imgObj.platform || game.platform || '';
        if (plat) html += `<span class="plat-tag ${isRightSide ? 'right' : ''}">${plat}</span>`;
        if (imgObj.tags && imgObj.tags.length > 0)
        {
            imgObj.tags.forEach(tag => { html += `<span class="feature-tag">${tag}</span>`; });
        }
        return html;
    };

    labelL.innerHTML = `<span>${imgL.label}</span>` + buildTags(imgL, false);
    labelR.innerHTML = `<span>${imgR.label}</span>` + buildTags(imgR, true);

    const newUrl = new URL(window.location);
    newUrl.searchParams.set('g', gameIdx);
    newUrl.searchParams.set('s', sceneIdx);
    newUrl.searchParams.set('l', idxL);
    newUrl.searchParams.set('r', idxR);
    window.history.replaceState({}, '', newUrl);

    applyTransform();
    setTimeout(refreshSlider, 50);
}

function getPinchDistance(touches)
{
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

function toggleSidebar()
{
    const sidebar = document.getElementById('sidebar');
    const isVisible = sidebar.classList.toggle('visible');
    
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) menuBtn.classList.toggle('active', isVisible);

    const overlay = document.getElementById('sidebar-overlay');
    if (overlay) overlay.style.display = (isVisible && window.innerWidth <= 900) ? 'block' : 'none';

    setTimeout(refreshSlider, 310); 
}

function applyTransform()
{
    const transformStr = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    [elSliderBase, elSliderOverlay, elSbsLeft, elSbsRight].forEach(el =>
    {
        if (el) el.style.transform = transformStr;
    });
}

function resetZoomAndPan()
{
    scale = 1; translateX = 0; translateY = 0;
    applyTransform();
}

function updateSliderByPixels(mouseX)
{
    const rect = shroud.getBoundingClientRect();
    let x = mouseX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    sliderPercent = (x / rect.width) * 100;
    refreshSlider();
}

function refreshSlider()
{
    if (!elSliderClipper || !elHandle) return;
    elSliderClipper.style.clipPath = `inset(0 ${100 - sliderPercent}% 0 0)`;
    elHandle.style.left = `${sliderPercent}%`;
}

function getRenderedSize(containerW, containerH)
{
    const imgAR = imageNaturalW / imageNaturalH;
    const paneAR = containerW / containerH;
    let rendW, rendH, offX, offY;
    if (imgAR > paneAR)
    {
        rendW = containerW; rendH = containerW / imgAR;
        offX = 0;           offY = (containerH - rendH) / 2;
    }
    else
    {
        rendH = containerH; rendW = containerH * imgAR;
        offX = (containerW - rendW) / 2; offY = 0;
    }
    return { rendW, rendH, offX, offY };
}

function handleMagnifierLogic(e)
{
    if (!isMagOn || action !== 'none' || currentViewData.gameIdx === null)
    {
        hideAllMags();
        return;
    }

    const rect = shroud.getBoundingClientRect();

    if (viewMode === 'slider')
    {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height)
        {
            magMain.style.display = 'block';
            magMain.style.left = (x - 110) + "px";
            magMain.style.top = (y - 110) + "px";

            const { rendW, rendH, offX, offY } = getRenderedSize(rect.width, rect.height);
            const imgX = (x - translateX - offX) / scale;
            const imgY = (y - translateY - offY) / scale;
            const currentMousePercent = (x / rect.width) * 100;
            const activeImg = (currentMousePercent < sliderPercent) ? currentPathA : currentPathB;

            magMain.style.backgroundImage = `url(${activeImg})`;
            magMain.style.backgroundSize = `${rendW * scale * 2}px ${rendH * scale * 2}px`;
            magMain.style.backgroundPosition = `-${(imgX * scale * 2) - 110}px -${(imgY * scale * 2) - 110}px`;
        } 
        else
        {
            magMain.style.display = 'none';
        }
    } 
    else
    {
        const pane = e.target.closest('.sbs-pane');
        if (pane)
        {
            magL.style.display = 'block';
            magR.style.display = 'block';
            const paneRect = pane.getBoundingClientRect();
            const x = e.clientX - paneRect.left;
            const y = e.clientY - paneRect.top;

            const { rendW, rendH, offX, offY } = getRenderedSize(paneRect.width, paneRect.height);

            [magL, magR].forEach((m, i) =>
            {
                m.style.left = (x - 110) + "px";
                m.style.top = (y - 110) + "px";
                const imgX = (x - translateX - offX) / scale;
                const imgY = (y - translateY - offY) / scale;
                const img = (i === 0) ? currentPathA : currentPathB;
                m.style.backgroundImage = `url(${img})`;
                m.style.backgroundSize = `${rendW * scale * 2}px ${rendH * scale * 2}px`;
                m.style.backgroundPosition = `-${(imgX * scale * 2) - 110}px -${(imgY * scale * 2) - 110}px`;
            });
        } 
        else
        {
            hideAllMags();
        }
    }
}

function setupEventListeners()
{
    shroud.addEventListener('mousedown', e =>
    {
        const rect = shroud.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const currentSliderPx = (sliderPercent / 100) * rect.width;

        if (viewMode === 'slider' && Math.abs(mouseX - currentSliderPx) < 40)
        {
            action = 'slider';
        } 
        else
        {
            action = 'pan';
            startMouseX = e.clientX;
            startMouseY = e.clientY;
            startTransX = translateX;
            startTransY = translateY;
            shroud.style.cursor = 'grabbing';
        }
    });

    window.addEventListener('mousemove', e =>
    {
        if (action === 'slider')
        {
            updateSliderByPixels(e.clientX);
        } 
        else if (action === 'pan')
        {
            translateX = startTransX + (e.clientX - startMouseX);
            translateY = startTransY + (e.clientY - startMouseY);
            applyTransform();
        }
        handleMagnifierLogic(e);
    });

    window.addEventListener('mouseup', () =>
    {
        action = 'none';
        shroud.style.cursor = 'crosshair';
    });

    shroud.addEventListener('wheel', e =>
    {
        e.preventDefault();
        const zoomSpeed = 0.15;
        const delta = e.deltaY > 0 ? -zoomSpeed : zoomSpeed;
        const newScale = Math.min(Math.max(1, scale + delta * scale), 15);

        if (newScale !== scale)
        {
            const rect = shroud.getBoundingClientRect();
            let cursorX = e.clientX - rect.left;
            let cursorY = e.clientY - rect.top;

            if (viewMode === 'sbs')
            {
                const pane = e.target.closest('.sbs-pane');
                if (pane) cursorX = e.clientX - pane.getBoundingClientRect().left;
            }

            // $$T_{new} = P - (P - T_{old}) \cdot \frac{S_{new}}{S_{old}}$$
            translateX = cursorX - (cursorX - translateX) * (newScale / scale);
            translateY = cursorY - (cursorY - translateY) * (newScale / scale);

            scale = newScale;
            applyTransform();
            handleMagnifierLogic(e);
        }
    }, { passive: false });

    shroud.addEventListener('touchstart', e =>
    {
        if (e.touches.length === 1)
        {
            const rect = shroud.getBoundingClientRect();
            const touchX = e.touches[0].clientX - rect.left;
            const currentSliderPx = (sliderPercent / 100) * rect.width;

            if (viewMode === 'slider' && Math.abs(touchX - currentSliderPx) < 60)
            {
                action = 'slider';
            } 
            else
            {
                action = 'pan';
                startMouseX = e.touches[0].clientX;
                startMouseY = e.touches[0].clientY;
                startTransX = translateX;
                startTransY = translateY;
            }
        } 
        else if (e.touches.length === 2)
        {
            action = 'zoom';
            initialPinchDistance = getPinchDistance(e.touches);
            initialScale = scale;
        }
    }, { passive: false });

    window.addEventListener('touchmove', e =>
    {
        if (e.target.closest('#viewer-shroud'))
        {
            e.preventDefault();
        }

        if (action === 'slider' && e.touches.length === 1)
        {
            updateSliderByPixels(e.touches[0].clientX);
        } 
        else if (action === 'pan' && e.touches.length === 1)
        {
            translateX = startTransX + (e.touches[0].clientX - startMouseX);
            translateY = startTransY + (e.touches[0].clientY - startMouseY);
            applyTransform();
        } 
        else if (action === 'zoom' && e.touches.length === 2)
        {
            const currentDistance = getPinchDistance(e.touches);
            const pinchRatio = currentDistance / initialPinchDistance;
            const newScale = Math.min(Math.max(1, initialScale * pinchRatio), 15);

            if (newScale !== scale)
            {
                const rect = shroud.getBoundingClientRect();
                const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;

                let cursorX = midX - rect.left;
                let cursorY = midY - rect.top;

                translateX = cursorX - (cursorX - translateX) * (newScale / scale);
                translateY = cursorY - (cursorY - translateY) * (newScale / scale);

                scale = newScale;
                applyTransform();
            }
        }
    }, { passive: false });

    window.addEventListener('touchend', e =>
    {
        if (e.touches.length === 0)
        {
            action = 'none';
        } 
        else if (e.touches.length === 1)
        {
            action = 'pan';
            startMouseX = e.touches[0].clientX;
            startMouseY = e.touches[0].clientY;
            startTransX = translateX;
            startTransY = translateY;
        }
    });

    window.addEventListener('keydown', e =>
    {
        const key = e.key.toLowerCase();
        if (key === 'z') toggleMagnifier();
        if (key === 'v') toggleViewMode();
        if (key === 'r') resetZoomAndPan();
        if (key === 'f') toggleFullscreen();
    });
}

function toggleViewMode()
{
    viewMode = (viewMode === 'slider') ? 'sbs' : 'slider';
    document.getElementById('slider-view').style.display = (viewMode === 'slider') ? 'block' : 'none';
    document.getElementById('sbs-view').style.display = (viewMode === 'sbs') ? 'flex' : 'none';
    document.getElementById('viewBtn').innerText = `Mode: ${viewMode.toUpperCase()}`;
    hideAllMags();
    applyTransform();
}

function toggleMagnifier()
{
    isMagOn = !isMagOn;
    document.getElementById('magBtn').classList.toggle('on', isMagOn);
    hideAllMags();
}

function hideAllMags()
{
    [magMain, magL, magR].forEach(m => { if(m) m.style.display = 'none'; });
}

function copyShareLink()
{
    navigator.clipboard.writeText(window.location.href).then(() =>
    {
        const btn = document.getElementById('copyLinkBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✅ Copied!';
        btn.style.backgroundColor = '#28a745';
        btn.style.borderColor = '#28a745';
        
        setTimeout(() =>
        {
            btn.innerHTML = originalText;
            btn.style.backgroundColor = '';
            btn.style.borderColor = '';
        }, 2000);
    });
}

function toggleFullscreen()
{
    const shroud = document.getElementById('viewer-shroud');
    const fsExitBtn = document.getElementById('fs-exit-btn');

    if (shroud.classList.contains('fake-fullscreen'))
    {
        shroud.classList.remove('fake-fullscreen');
        document.getElementById('fsBtn').classList.remove('on');
        if (fsExitBtn) fsExitBtn.style.display = 'none';
        setTimeout(refreshSlider, 50);
        return;
    }

    if (document.fullscreenElement || document.webkitFullscreenElement)
    {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
        return;
    }

    const target = document.getElementById('app-view');
    const requestFS = target.requestFullscreen || target.webkitRequestFullscreen;

    if (requestFS)
    {
        requestFS.call(target).catch(() =>
        {
            shroud.classList.add('fake-fullscreen');
            document.getElementById('fsBtn').classList.add('on');
            if (fsExitBtn) fsExitBtn.style.display = 'flex';
            setTimeout(refreshSlider, 50);
        });
    } 
    else 
    {
        shroud.classList.add('fake-fullscreen');
        document.getElementById('fsBtn').classList.add('on');
        if (fsExitBtn) fsExitBtn.style.display = 'flex';
        setTimeout(refreshSlider, 50);
    }
}

window.onload = init;