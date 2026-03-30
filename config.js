const CONFIG = {
    games: [
        {
            name: 'Aliens: Colonial Marines',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/acm/1/720.png', label: '1280x720', platform: 'RPCS3' },
                        { path: 'img/acm/1/2160.png', label: '3840x2160', platform: 'RPCS3' }
                    ]
                }
            ]
        },
        {
            name: 'Uncharted: Drake\'s Fortune',
            scenes: [
                {
                    name: 'The Search for El Dorado',
                    images: [
                        { path: 'img/uc1/1/720.png', label: '1280x720', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc1/1/2160.png', label: '3840x2160', tags: ['No MSAA'], platform: 'RPCS3' }
                    ]
                },
                {
                    name: 'Plane-wrecked',
                    images: [
                        { path: 'img/uc1/2/720_msaa.png', label: '1280x720', tags: ['With MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc1/2/720_nomsaa.png', label: '1280x720', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc1/2/1440_nomsaa.png', label: '2560x1440', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc1/2/2160_nomsaa.png', label: '3840x2160', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc1/2/2880_nomsaa.png', label: '5120x2880', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc1/2/3600_nomsaa.png', label: '6400x3600', tags: ['No MSAA'], platform: 'RPCS3' }
                    ]
                }
            ]
        },
        {
            name: 'Uncharted 2: Among Thieves',
            scenes: [
                {
                    name: 'Urban Warfare',
                    images: [
                        { path: 'img/uc2/1/720_nomsaa.png', label: '1280x720', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/1080_nomsaa.png', label: '1920x1080', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/1440_nomsaa.png', label: '2560x1440', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/2160_nomsaa.png', label: '3840x2160', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/2880_nomsaa.png', label: '5120x2880', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/3600_nomsaa.png', label: '6400x3600', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/720_nomsaa_nodof.png', label: '1280x720', tags: ['No MSAA', 'No DoF'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/1080_nomsaa_nodof.png', label: '1920x1080', tags: ['No MSAA', 'No DoF'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/1440_nomsaa_nodof.png', label: '2560x1440', tags: ['No MSAA', 'No DoF'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/2160_nomsaa_nodof.png', label: '3840x2160', tags: ['No MSAA', 'No DoF'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/2880_nomsaa_nodof.png', label: '5120x2880', tags: ['No MSAA', 'No DoF'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/3600_nomsaa_nodof.png', label: '6400x3600', tags: ['No MSAA', 'No DoF'], platform: 'RPCS3' }
                    ]
                }
            ]
        },
        {
            name: 'Unreal Tournament 3',
            scenes: [
                {
                    name: 'Deimos',
                    images: [
                        { path: 'img/ut3/1/100.png', label: '1280x720', tags: ['x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/1/200.png', label: '2560x1440', tags: ['x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/1/300.png', label: '3840x2160', tags: ['x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/1/400.png', label: '5120x2880', tags: ['x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/1/500.png', label: '6400x3600', tags: ['x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/1/600.png', label: '7680x4320', tags: ['x16 AF'], platform: 'RPCS3' }
                    ]
				},
				{
                    name: 'Torlan',
                    images: [
                        { path: 'img/ut3/2/100.png', label: '1280x720', platform: 'RPCS3' },
                        { path: 'img/ut3/2/100_FSR0to1440p.png', label: '720p to 1440p', tags: ['FSR 0%'], platform: 'RPCS3' },
                        { path: 'img/ut3/2/100_FSR50to1440p.png', label: '720p to 1440p', tags: ['FSR 50%'], platform: 'RPCS3' },
                        { path: 'img/ut3/2/100_FSR100to1440p.png', label: '720p to 1440p', tags: ['FSR 100%'], platform: 'RPCS3' },
                        { path: 'img/ut3/2/100_16xAF.png', label: '1280x720', tags: ['x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/2/100_16xAF_FSR0to1440p.png', label: '720p to 1440p', tags: ['FSR 0%', 'x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/2/100_16xAF_FSR50to1440p.png', label: '720p to 1440p', tags: ['FSR 50%', 'x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/2/100_16xAF_FSR100to1440p.png', label: '720p to 1440p', tags: ['FSR 100%', 'x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/2/200.png', label: '2560x1440', platform: 'RPCS3' },
                        { path: 'img/ut3/2/200_16xAF.png', label: '2560x1440', tags: ['x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/2/400.png', label: '5120x2880', platform: 'RPCS3' },
                        { path: 'img/ut3/2/400_16xAF.png', label: '5120x2880', tags: ['x16 AF'], platform: 'RPCS3' }
                    ]
				},
				{
                    name: 'Suspense',
                    images: [
                        { path: 'img/ut3/3/100.png', label: '1280x720', tags: ['x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/3/100_FSR50to1440p.png', label: '720p to 1440p', tags: ['FSR 50%', 'x16AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/3/100_FSR100to1440p.png', label: '720p to 1440p', tags: ['FSR 100%', 'x16AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/3/150.png', label: '1920x1080', tags: ['x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/3/200.png', label: '2560x1440', tags: ['x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/3/300.png', label: '3840x2160', tags: ['x16 AF'], platform: 'RPCS3' },
                        { path: 'img/ut3/3/600.png', label: '7680x4320', tags: ['x16 AF'], platform: 'RPCS3' }
                    ]
                }
            ]
        },
        {
            name: 'Ratchet & Clank Future: Quest for Booty',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/rcqfb/2/auto.png', label: '960x704', platform: 'RPCS3', tags: ['AF Auto'] },
                        { path: 'img/rcqfb/2/x16.png', label: '960x704', platform: 'RPCS3', tags: ['AF x16'] },
                        { path: 'img/rcqfb/1/100.png', label: '960x704', tags: ['With MSAA'], platform: 'RPCS3' },
                        { path: 'img/rcqfb/1/300.png', label: '2880x2112', tags: ['With MSAA'], platform: 'RPCS3' },
                        { path: 'img/rcqfb/3/100.png', label: '960x704', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/rcqfb/3/300.png', label: '2880x2112', tags: ['No MSAA'], platform: 'RPCS3' }
                    ]
                }
            ]
        },
        {
            name: 'Ratchet and Clank Future: Tools of Destruction Demo',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/rctod/1/100.png', label: '960x704', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/rctod/1/300.png', label: '2880x2112', tags: ['No MSAA'], platform: 'RPCS3' }
                    ]
                }
            ]
        },
        {
            name: 'No More Heroes: Heroes\' Paradise',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/nmhhp/1/720.png', label: '1280x720', platform: 'RPCS3' },
                        { path: 'img/nmhhp/1/2160.png', label: '3840x2160', platform: 'RPCS3' }
                    ]
                }
            ]
        },
        {
            name: 'Dark Souls 2',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/ds2/1/100.png', label: '1280x720', platform: 'RPCS3' },
                        { path: 'img/ds2/1/200.png', label: '2560x1440', platform: 'RPCS3' },
                        { path: 'img/ds2/1/300.png', label: '3840x2160', platform: 'RPCS3' },
                        { path: 'img/ds2/1/400.png', label: '5120x2880', platform: 'RPCS3' },
                        { path: 'img/ds2/1/500.png', label: '6400x3600', platform: 'RPCS3' },
                        { path: 'img/ds2/1/600.png', label: '7680x4320', platform: 'RPCS3' }
                    ]
                }
            ]
        },
        {
            name: 'Skate 3',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/sk3/1/100.png', label: '1152x640', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/sk3/1/200.png', label: '2304x1280', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/sk3/1/300.png', label: '3456x1920', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/sk3/1/400.png', label: '4608x2560', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/sk3/1/500.png', label: '5760x3200', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/sk3/1/600.png', label: '6912x3840', tags: ['No MSAA'], platform: 'RPCS3' }
                    ]
                }
            ]
        },
        {
            name: 'Midnight Club: Los Angeles',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/mcla/1/100.png', label: '960x704', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/mcla/1/200.png', label: '1920x1408', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/mcla/1/300.png', label: '2880x2112', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/mcla/1/400.png', label: '3840x2816', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/mcla/1/500.png', label: '4800x3520', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/mcla/1/600.png', label: '5760x4224', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' }
                    ]
                }
            ]
        },
        {
            name: 'Call Of Duty 4: Modern Warfare',
            scenes: [
                {
                    name: 'Safehouse',
                    images: [
                        { path: 'img/cod4/1/100.png', label: '1024x600', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/cod4/1/200.png', label: '2048x1200', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/cod4/1/300.png', label: '3072x1800', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/cod4/1/400.png', label: '4096x2400', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/cod4/1/500.png', label: '5120x3000', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/cod4/1/600.png', label: '6144x3600', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/cod4/1/700.png', label: '7168x4200', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' }
                    ]
                }
            ]
        }
    ]
};
