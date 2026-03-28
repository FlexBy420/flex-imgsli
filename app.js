let currentViewData = { gameIdx: 0, sceneIdx: 0 };
let viewMode = 'slider'; 
let isMagOn = false;

let scale = 1;
let translateX = 0;
let translateY = 0;

let action = 'none'; 
let sliderPercent = 50;
let startMouseX = 0, startMouseY = 0;
let startTransX = 0, startTransY = 0;

let shroud, elSliderBase, elSliderOverlay, elSliderClipper, elHandle;
let elSbsLeft, elSbsRight, labelL, labelR;
let magMain, magL, magR;

function init() {
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

    buildGameNav();
    loadGame(0);
    setupEventListeners();
    refreshSlider();
    window.addEventListener('resize', refreshSlider);
}
function buildGameNav() {
    const nav = document.getElementById('game-nav');
    if (!nav) return;
    nav.innerHTML = '';
    CONFIG.games.forEach((game, idx) => {
        const btn = document.createElement('button');
        btn.innerText = game.name;
        btn.id = `btn-game-${idx}`;
        btn.onclick = () => loadGame(idx);
        nav.appendChild(btn);
    });
}

function loadGame(gameIdx) {
    currentViewData.gameIdx = gameIdx;
    const game = CONFIG.games[gameIdx];

    document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-game-${gameIdx}`);
    if (activeBtn) activeBtn.classList.add('active');

    const sceneNav = document.getElementById('scene-nav');
    sceneNav.innerHTML = '';
    game.scenes.forEach((scene, idx) => {
        const btn = document.createElement('button');
        btn.innerText = scene.name;
        btn.id = `btn-scene-${idx}`;
        btn.onclick = () => loadScene(idx);
        sceneNav.appendChild(btn);
    });
    loadScene(0);
}

function loadScene(sceneIdx) {
    currentViewData.sceneIdx = sceneIdx;
    const game = CONFIG.games[currentViewData.gameIdx];
    const scene = game.scenes[sceneIdx];

    const pathA = `img/${game.id}/${scene.folder}/${scene.labels[0]}.${game.ext}`;
    const pathB = `img/${game.id}/${scene.folder}/${scene.labels[1]}.${game.ext}`;

    elSliderBase.style.backgroundImage = `url(${pathB})`;
    elSliderOverlay.style.backgroundImage = `url(${pathA})`;
    elSbsLeft.style.backgroundImage = `url(${pathA})`;
    elSbsRight.style.backgroundImage = `url(${pathB})`;

    labelL.innerText = scene.labels[0];
    labelR.innerText = scene.labels[1];

    document.querySelectorAll('#scene-nav button').forEach(b => b.classList.remove('active'));
    const sceneBtn = document.getElementById(`btn-scene-${sceneIdx}`);
    if (sceneBtn) sceneBtn.classList.add('active');

    resetZoomAndPan();
    setTimeout(refreshSlider, 50);
}

function applyTransform() {
    const transformStr = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    [elSliderBase, elSliderOverlay, elSbsLeft, elSbsRight].forEach(el => {
        if (el) el.style.transform = transformStr;
    });
}

function resetZoomAndPan() {
    scale = 1; translateX = 0; translateY = 0;
    applyTransform();
}

function updateSliderByPixels(mouseX) {
    const rect = shroud.getBoundingClientRect();
    let x = mouseX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    sliderPercent = (x / rect.width) * 100;
    refreshSlider();
}

function refreshSlider() {
    if (!elSliderClipper || !elHandle) return;
    elSliderClipper.style.clipPath = `inset(0 ${100 - sliderPercent}% 0 0)`;
    elHandle.style.left = `${sliderPercent}%`;
}

function handleMagnifierLogic(e) {
    if (!isMagOn || action !== 'none') {
        hideAllMags();
        return;
    }

    const rect = shroud.getBoundingClientRect();
    const game = CONFIG.games[currentViewData.gameIdx];
    const scene = game.scenes[currentViewData.sceneIdx];
    const pathA = `img/${game.id}/${scene.folder}/${scene.labels[0]}.${game.ext}`;
    const pathB = `img/${game.id}/${scene.folder}/${scene.labels[1]}.${game.ext}`;

    if (viewMode === 'slider') {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            magMain.style.display = 'block';
            magMain.style.left = (x - 110) + "px";
            magMain.style.top = (y - 110) + "px";

            const unscaledX = (x - translateX) / scale;
            const unscaledY = (y - translateY) / scale;

            const currentMousePercent = (x / rect.width) * 100;
            const activeImg = (currentMousePercent < sliderPercent) ? pathA : pathB;

            magMain.style.backgroundImage = `url(${activeImg})`;
            magMain.style.backgroundSize = `${rect.width * scale * 2}px ${rect.height * scale * 2}px`;
            magMain.style.backgroundPosition = `-${(unscaledX * scale * 2) - 110}px -${(unscaledY * scale * 2) - 110}px`;
        } else {
            magMain.style.display = 'none';
        }
    } else {
        const pane = e.target.closest('.sbs-pane');
        if (pane) {
            magL.style.display = 'block';
            magR.style.display = 'block';
            const paneRect = pane.getBoundingClientRect();
            const x = e.clientX - paneRect.left;
            const y = e.clientY - paneRect.top;

            [magL, magR].forEach((m, i) => {
                m.style.left = (x - 110) + "px";
                m.style.top = (y - 110) + "px";
                const unscaledX = (x - translateX) / scale;
                const unscaledY = (y - translateY) / scale;
                const img = (i === 0) ? pathA : pathB;
                m.style.backgroundImage = `url(${img})`;
                m.style.backgroundSize = `${paneRect.width * scale * 2}px ${paneRect.height * scale * 2}px`;
                m.style.backgroundPosition = `-${(unscaledX * scale * 2) - 110}px -${(unscaledY * scale * 2) - 110}px`;
            });
        } else {
            hideAllMags();
        }
    }
}

function setupEventListeners() {
    shroud.addEventListener('mousedown', e => {
        const rect = shroud.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const currentSliderPx = (sliderPercent / 100) * rect.width;

        if (viewMode === 'slider' && Math.abs(mouseX - currentSliderPx) < 40) {
            action = 'slider';
        } else {
            action = 'pan';
            startMouseX = e.clientX;
            startMouseY = e.clientY;
            startTransX = translateX;
            startTransY = translateY;
            shroud.style.cursor = 'grabbing';
        }
    });

    window.addEventListener('mousemove', e => {
        if (action === 'slider') {
            updateSliderByPixels(e.clientX);
        } else if (action === 'pan') {
            translateX = startTransX + (e.clientX - startMouseX);
            translateY = startTransY + (e.clientY - startMouseY);
            applyTransform();
        }
        handleMagnifierLogic(e);
    });

    window.addEventListener('mouseup', () => {
        action = 'none';
        shroud.style.cursor = 'crosshair';
    });

    shroud.addEventListener('wheel', e => {
        e.preventDefault();
        const zoomSpeed = 0.15;
        const delta = e.deltaY > 0 ? -zoomSpeed : zoomSpeed;
        const newScale = Math.min(Math.max(1, scale + delta * scale), 15);

        if (newScale !== scale) {
            const rect = shroud.getBoundingClientRect();
            let cursorX = e.clientX - rect.left;
            let cursorY = e.clientY - rect.top;

            if (viewMode === 'sbs') {
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

    window.addEventListener('keydown', e => {
        const key = e.key.toLowerCase();
        if (key === 'z') toggleMagnifier();
        if (key === 'v') toggleViewMode();
        if (key === 'r') resetZoomAndPan();
    });
}

function toggleViewMode() {
    viewMode = (viewMode === 'slider') ? 'sbs' : 'slider';
    document.getElementById('slider-view').style.display = (viewMode === 'slider') ? 'block' : 'none';
    document.getElementById('sbs-view').style.display = (viewMode === 'sbs') ? 'grid' : 'none';
    document.getElementById('viewBtn').innerText = `Mode: ${viewMode.toUpperCase()}`;
    hideAllMags();
    applyTransform();
}

function toggleMagnifier() {
    isMagOn = !isMagOn;
    document.getElementById('magBtn').classList.toggle('on', isMagOn);
    hideAllMags();
}

function hideAllMags() {
    [magMain, magL, magR].forEach(m => { if(m) m.style.display = 'none'; });
}

window.onload = init;