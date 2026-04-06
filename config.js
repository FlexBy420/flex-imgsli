const img = (fileName, label, platform = 'RPCS3', tags = []) => ({ 
    fileName, 
    label, 
    platform, 
    tags 
});

const CONFIG = {
    games: [
        {
            name: 'Aliens: Colonial Marines',
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/BLES01455_00_8DBBDDAEB2EE8029281B07C2AD1EDFA7DBD33419/ICON0.PNG',
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
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/BCES00065_00_E3C2B9C750732074D83311E3428CAF6E0D60301D/ICON0.PNG',
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
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/BCAS20097_00_3BAF9FC65DE4AE89B70D15792EF9FF6ACC5E57AB/ICON0.PNG',
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
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/BLES00200_00_34AA15F14621F78ADA1A82BAB3B7A07BB7EE5CD1/ICON0.PNG',
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
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/BCAS20052_00_12CED172C87A5FAB9195626133237D117EEE917F/ICON0.PNG',
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
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/NPHA20002_00_A2DE45B1A3871FC40AABE556212A741694364EBF/ICON0.PNG',
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
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/BLES01101_00_05904D3896D4A2FE8E4379A4CA69641643F5214F/ICON0.PNG',
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
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/NPEB01853_00_334259944606A16C90B23C571298CB4749D89264/ICON0.PNG',
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
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/BLJM60296_00_6F68335C4A1804BCA102EC5A4BE981254A3AC469/ICON0.PNG',
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
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/NPEB00546_00_9FBD73315AF312E7552F83FE7A4DF8399E66797B/ICON0.PNG',
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
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/BLUS30072_00_B74C6909177E14376E88A4D11CD43B804EDCECEE/ICON0.PNG',
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
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/NPEB01968_00_B1C4DDA95EC63641AE8FAD35D1E28B44D03AF693/ICON0.PNG',
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
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/NPUB30589_00_9C60F5BC8A0265A9A1A36E902F4A6B0D19E8524D/ICON0.PNG',
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
            icon: 'https://tmdb.np.dl.playstation.net/tmdb/BLES00259_00_D621F7CF8D748D82AF61AF7C7847156A859E5C27/ICON0.PNG',
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