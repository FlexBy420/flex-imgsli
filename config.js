const img = (fileName, label, platform = 'RPCS3', tags = []) => ({ 
    fileName, 
    label, 
    platform, 
    tags 
});
// eslint-disable-next-line no-unused-vars
const CONFIG = {
    games: [
        {
            name: 'Aliens: Colonial Marines',
            icon: 'img/acm/ICON0.png',
            scenes: [
                {
                    name: 'Scene 1',
                    path: 'img/acm/1/',
                    images: [
                        img('720.png', '1280x720'),
                        img('ps3_720.png', '1280x720', 'PS3'),
                        img('2160.png', '3840x2160')
                    ]
                }
            ]
        },
        {
            name: 'Uncharted: Drake\'s Fortune',
            icon: 'img/uc1/ICON0.png',
            scenes: [
                {
                    name: 'The Search for El Dorado',
                    path: 'img/uc1/1/',
                    images: [
                        img('720.png', '1280x720', 'RPCS3', ['No MSAA']),
                        img('2160.png', '3840x2160', 'RPCS3', ['No MSAA'])
                    ]
                },
                {
                    name: 'Plane-wrecked',
                    path: 'img/uc1/2/',
                    images: [
                        img('720_msaa.png', '1280x720', 'RPCS3', ['With MSAA']),
                        img('720_nomsaa.png', '1280x720', 'RPCS3', ['No MSAA']),
                        img('1440_nomsaa.png', '2560x1440', 'RPCS3', ['No MSAA']),
                        img('2160_nomsaa.png', '3840x2160', 'RPCS3', ['No MSAA']),
                        img('2880_nomsaa.png', '5120x2880', 'RPCS3', ['No MSAA']),
                        img('3600_nomsaa.png', '6400x3600', 'RPCS3', ['No MSAA'])
                    ]
                }
            ]
        },
        {
            name: 'Uncharted 2: Among Thieves',
            icon: 'img/uc2/ICON0.png',
            scenes: [
                {
                    name: 'Urban Warfare',
                    path: 'img/uc2/1/',
                    images: [
                        img('720_nomsaa.png', '1280x720', 'RPCS3', ['No MSAA']),
                        img('1080_nomsaa.png', '1920x1080', 'RPCS3', ['No MSAA']),
                        img('1440_nomsaa.png', '2560x1440', 'RPCS3', ['No MSAA']),
                        img('2160_nomsaa.png', '3840x2160', 'RPCS3', ['No MSAA']),
                        img('2880_nomsaa.png', '5120x2880', 'RPCS3', ['No MSAA']),
                        img('3600_nomsaa.png', '6400x3600', 'RPCS3', ['No MSAA']),
                        img('720_nomsaa_nodof.png', '1280x720', 'RPCS3', ['No MSAA', 'No DoF']),
                        img('1080_nomsaa_nodof.png', '1920x1080', 'RPCS3', ['No MSAA', 'No DoF']),
                        img('1440_nomsaa_nodof.png', '2560x1440', 'RPCS3', ['No MSAA', 'No DoF']),
                        img('2160_nomsaa_nodof.png', '3840x2160', 'RPCS3', ['No MSAA', 'No DoF']),
                        img('2880_nomsaa_nodof.png', '5120x2880', 'RPCS3', ['No MSAA', 'No DoF']),
                        img('3600_nomsaa_nodof.png', '6400x3600', 'RPCS3', ['No MSAA', 'No DoF'])
                    ]
                }
            ]
        },
        {
            name: 'Unreal Tournament 3',
            icon: 'img/ut3/ICON0.png',
            scenes: [
                {
                    name: 'Deimos',
                    path: 'img/ut3/1/',
                    images: [
                        img('100.png', '1280x720', 'RPCS3', ['x16 AF']),
                        img('200.png', '2560x1440', 'RPCS3', ['x16 AF']),
                        img('300.png', '3840x2160', 'RPCS3', ['x16 AF']),
                        img('400.png', '5120x2880', 'RPCS3', ['x16 AF']),
                        img('500.png', '6400x3600', 'RPCS3', ['x16 AF']),
                        img('600.png', '7680x4320', 'RPCS3', ['x16 AF'])
                    ]
                },
                {
                    name: 'Torlan',
                    path: 'img/ut3/2/',
                    images: [
                        img('100.png', '1280x720'),
                        img('100_FSR0to1440p.png', '720p to 1440p', 'RPCS3', ['FSR 0%']),
                        img('100_FSR50to1440p.png', '720p to 1440p', 'RPCS3', ['FSR 50%']),
                        img('100_FSR100to1440p.png', '720p to 1440p', 'RPCS3', ['FSR 100%']),
                        img('100_16xAF.png', '1280x720', 'RPCS3', ['x16 AF']),
                        img('100_16xAF_FSR0to1440p.png', '720p to 1440p', 'RPCS3', ['FSR 0%', 'x16 AF']),
                        img('100_16xAF_FSR50to1440p.png', '720p to 1440p', 'RPCS3', ['FSR 50%', 'x16 AF']),
                        img('100_16xAF_FSR100to1440p.png', '720p to 1440p', 'RPCS3', ['FSR 100%', 'x16 AF']),
                        img('200.png', '2560x1440'),
                        img('200_16xAF.png', '2560x1440', 'RPCS3', ['x16 AF']),
                        img('400.png', '5120x2880'),
                        img('400_16xAF.png', '5120x2880', 'RPCS3', ['x16 AF'])
                    ]
                },
                {
                    name: 'Suspense',
                    path: 'img/ut3/3/',
                    images: [
                        img('100.png', '1280x720', 'RPCS3', ['x16 AF']),
                        img('100_FSR50to1440p.png', '720p to 1440p', 'RPCS3', ['FSR 50%', 'x16AF']),
                        img('100_FSR100to1440p.png', '720p to 1440p', 'RPCS3', ['FSR 100%', 'x16AF']),
                        img('150.png', '1920x1080', 'RPCS3', ['x16 AF']),
                        img('200.png', '2560x1440', 'RPCS3', ['x16 AF']),
                        img('300.png', '3840x2160', 'RPCS3', ['x16 AF']),
                        img('600.png', '7680x4320', 'RPCS3', ['x16 AF'])
                    ]
                }
            ]
        },
        {
            name: 'Ratchet & Clank Future: Quest for Booty',
            icon: 'img/rcqfb/ICON0.png',
            scenes: [
                {
                    name: 'Scene 1',
                    path: 'img/rcqfb/',
                    images: [
                        img('2/auto.png', '960x704', 'RPCS3', ['AF Auto']),
                        img('2/x16.png', '960x704', 'RPCS3', ['AF x16']),
                        img('1/100.png', '960x704', 'RPCS3', ['With MSAA']),
                        img('1/300.png', '2880x2112', 'RPCS3', ['With MSAA']),
                        img('3/100.png', '960x704', 'RPCS3', ['No MSAA']),
                        img('3/300.png', '2880x2112', 'RPCS3', ['No MSAA'])
                    ]
                }
            ]
        },
        {
            name: 'Ratchet and Clank Future: Tools of Destruction Demo',
            icon: 'img/rctod/ICON0.png',
            scenes: [
                {
                    name: 'Scene 1',
                    path: 'img/rctod/1/',
                    images: [
                        img('100.png', '960x704', 'RPCS3', ['No MSAA']),
                        img('300.png', '2880x2112', 'RPCS3', ['No MSAA']),
                        img('400.png', '3840x2816', 'RPCS3', ['No MSAA', 'x16 AF']),
                        img('500.png', '4800x3520', 'RPCS3', ['No MSAA', 'x16 AF']),
                        img('600.png', '5760x4224', 'RPCS3', ['No MSAA', 'x16 AF']),
                    ]
                }
            ]
        },
        {
            name: 'No More Heroes: Heroes\' Paradise',
            icon: 'img/nmhhp/ICON0.png',
            scenes: [
                {
                    name: 'Scene 1',
                    path: 'img/nmhhp/1/',
                    images: [
                        img('720.png', '1280x720'),
                        img('2160.png', '3840x2160')
                    ]
                }
            ]
        },
        {
            name: 'Dark Souls 2',
            icon: 'img/ds2/ICON0.png',
            scenes: [
                {
                    name: 'Scene 1',
                    path: 'img/ds2/1/',
                    images: [
                        img('100.png', '1280x720'),
                        img('200.png', '2560x1440'),
                        img('300.png', '3840x2160'),
                        img('400.png', '5120x2880'),
                        img('500.png', '6400x3600')
                    ]
                }
            ]
        },
        {
            name: 'Skate 3',
            icon: 'img/sk3/ICON0.png',
            scenes: [
                {
                    name: 'Scene 1',
                    path: 'img/sk3/1/',
                    images: [
                        img('100.png', '1152x640', 'RPCS3', ['No MSAA']),
                        img('200.png', '2304x1280', 'RPCS3', ['No MSAA']),
                        img('300.png', '3456x1920', 'RPCS3', ['No MSAA']),
                        img('400.png', '4608x2560', 'RPCS3', ['No MSAA']),
                        img('500.png', '5760x3200', 'RPCS3', ['No MSAA']),
                        img('600.png', '6912x3840', 'RPCS3', ['No MSAA'])
                    ]
                }
            ]
        },
        {
            name: 'Midnight Club: Los Angeles',
            icon: 'img/mcla/ICON0.png',
            scenes: [
                {
                    name: 'Scene 1',
                    path: 'img/mcla/1/',
                    images: [
                        img('100.png', '960x704', 'RPCS3', ['No MSAA', 'AF x16']),
                        img('200.png', '1920x1408', 'RPCS3', ['No MSAA', 'AF x16']),
                        img('300.png', '2880x2112', 'RPCS3', ['No MSAA', 'AF x16']),
                        img('400.png', '3840x2816', 'RPCS3', ['No MSAA', 'AF x16']),
                        img('500.png', '4800x3520', 'RPCS3', ['No MSAA', 'AF x16']),
                        img('600.png', '5760x4224', 'RPCS3', ['No MSAA', 'AF x16'])
                    ]
                }
            ]
        },
        {
            name: 'Call Of Duty 4: Modern Warfare',
            icon: 'img/cod4/ICON0.png',
            scenes: [
                {
                    name: 'Safehouse',
                    path: 'img/cod4/1/',
                    images: [
                        img('100.png', '1024x600', 'RPCS3', ['No MSAA', 'AF x16']),
                        img('200.png', '2048x1200', 'RPCS3', ['No MSAA', 'AF x16']),
                        img('300.png', '3072x1800', 'RPCS3', ['No MSAA', 'AF x16']),
                        img('400.png', '4096x2400', 'RPCS3', ['No MSAA', 'AF x16']),
                        img('500.png', '5120x3000', 'RPCS3', ['No MSAA', 'AF x16']),
                        img('600.png', '6144x3600', 'RPCS3', ['No MSAA', 'AF x16']),
                        img('700.png', '7168x4200', 'RPCS3', ['No MSAA', 'AF x16'])
                    ]
                }
            ]
        },
        {
            name: 'Batman: Arkham Origins Blackgate',
            icon: 'img/bmbg/ICON0.png',
            scenes: [
                {
                    name: 'Scene 1',
                    path: 'img/bmbg/1/',
                    images: [
                        img('100.png', '1280x720', 'RPCS3', ['AF x16']),
                        img('200.png', '2560x1440', 'RPCS3', ['AF x16']),
                        img('300.png', '3840x2160', 'RPCS3', ['AF x16']),
                        img('400.png', '5120x2880', 'RPCS3', ['AF x16']),
                        img('500.png', '6400x3600', 'RPCS3', ['AF x16']),
                        img('600.png', '7680x4320', 'RPCS3', ['AF x16'])
                    ]
                }
            ]
        },
        {
            name: 'Counter Strike: Global Offensive',
            icon: 'img/csgo/ICON0.png',
            scenes: [
                {
                    name: 'Weapons Course',
                    path: 'img/csgo/1/',
                    images: [
                        img('ps3_100.png', '1280x720', 'PS3'),
                        img('100.png', '1280x720'),
                        img('150.png', '1920x1080'),
                        img('200.png', '2560x1440'),
                        img('300.png', '3840x2160'),
                        img('400.png', '5120x2880'),
                        img('500.png', '6400x3600'),
                        img('600.png', '7680x4320')
                    ]
                }
            ]
        },
        {
            name: 'Battlefield: Bad Company',
            icon: 'img/bfbc/ICON0.png',
            scenes: [
                {
                    name: 'Scene 1',
                    path: 'img/bfbc/1/',
                    images: [
                        img('100.png', '1280x720'),
                        img('200.png', '2560x1440'),
                        img('300.png', '3840x2160'),
                        img('100_nograin.png', '1280x720', 'RPCS3', ['No Film Grain']),
                        img('200_nograin.png', '2560x1440', 'RPCS3', ['No Film Grain']),
                        img('300_nograin.png', '3840x2160', 'RPCS3', ['No Film Grain'])
                    ]
                }
            ]
        }
    ]
};