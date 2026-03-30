const CONFIG = {
    games: [
        {
            name: 'Aliens: Colonial Marines',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/acm/1/720.png', label: '720p', platform: 'RPCS3' },
                        { path: 'img/acm/1/2160.png', label: '2160p', platform: 'RPCS3' }
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
                        { path: 'img/uc1/1/720.png', label: '720p', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc1/1/2160.png', label: '2160p', tags: ['No MSAA'], platform: 'RPCS3' }
                    ]
                },
                {
                    name: 'Plane-wrecked',
                    images: [
                        { path: 'img/uc1/2/720_msaa.png', label: '720p', tags: ['With MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc1/2/720_nomsaa.png', label: '720p', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc1/2/1440_nomsaa.png', label: '1440p', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc1/2/2160_nomsaa.png', label: '2160p', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc1/2/2880_nomsaa.png', label: '2880p', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc1/2/3600_nomsaa.png', label: '3600p', tags: ['No MSAA'], platform: 'RPCS3' }
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
                        { path: 'img/uc2/1/720_nomsaa.png', label: '720p', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/1080_nomsaa.png', label: '1080p', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/1440_nomsaa.png', label: '1440p', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/2160_nomsaa.png', label: '2160p', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/2880_nomsaa.png', label: '2880p', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/3600_nomsaa.png', label: '3600p', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/720_nomsaa_nodof.png', label: '720p', tags: ['No MSAA', 'No DoF'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/1080_nomsaa_nodof.png', label: '1080p', tags: ['No MSAA', 'No DoF'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/1440_nomsaa_nodof.png', label: '1440p', tags: ['No MSAA', 'No DoF'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/2160_nomsaa_nodof.png', label: '2160p', tags: ['No MSAA', 'No DoF'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/2880_nomsaa_nodof.png', label: '2880p', tags: ['No MSAA', 'No DoF'], platform: 'RPCS3' },
                        { path: 'img/uc2/1/3600_nomsaa_nodof.png', label: '3600p', tags: ['No MSAA', 'No DoF'], platform: 'RPCS3' }
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
                        { path: 'img/rcqfb/2/auto.png', label: 'Default', platform: 'RPCS3' },
                        { path: 'img/rcqfb/2/x16.png', label: 'x16 AF', platform: 'RPCS3' },
                        { path: 'img/rcqfb/1/100.png', label: '100%', tags: ['With MSAA'], platform: 'RPCS3' },
                        { path: 'img/rcqfb/1/300.png', label: '300%', tags: ['With MSAA'], platform: 'RPCS3' },
                        { path: 'img/rcqfb/3/100.png', label: '100%', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/rcqfb/3/300.png', label: '300%', tags: ['No MSAA'], platform: 'RPCS3' }
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
                        { path: 'img/rctod/1/100.png', label: '100%', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/rctod/1/300.png', label: '300%', tags: ['No MSAA'], platform: 'RPCS3' }
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
                        { path: 'img/nmhhp/1/720.png', label: '720P', platform: 'RPCS3' },
                        { path: 'img/nmhhp/1/2160.png', label: '2160P', platform: 'RPCS3' }
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
                        { path: 'img/ds2/1/100.png', label: '100%', platform: 'RPCS3' },
                        { path: 'img/ds2/1/200.png', label: '200%', platform: 'RPCS3' },
                        { path: 'img/ds2/1/300.png', label: '300%', platform: 'RPCS3' },
                        { path: 'img/ds2/1/400.png', label: '400%', platform: 'RPCS3' },
                        { path: 'img/ds2/1/500.png', label: '500%', platform: 'RPCS3' },
                        { path: 'img/ds2/1/600.png', label: '600%', platform: 'RPCS3' }
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
                        { path: 'img/sk3/1/100.png', label: '100%', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/sk3/1/200.png', label: '200%', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/sk3/1/300.png', label: '300%', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/sk3/1/400.png', label: '400%', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/sk3/1/500.png', label: '500%', tags: ['No MSAA'], platform: 'RPCS3' },
                        { path: 'img/sk3/1/600.png', label: '600%', tags: ['No MSAA'], platform: 'RPCS3' }
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
                        { path: 'img/mcla/1/100.png', label: '100%', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/mcla/1/200.png', label: '200%', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/mcla/1/300.png', label: '300%', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/mcla/1/400.png', label: '400%', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/mcla/1/500.png', label: '500%', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' },
                        { path: 'img/mcla/1/600.png', label: '600%', tags: ['No MSAA', 'AF x16'], platform: 'RPCS3' }
                    ]
                }
            ]
        }
    ]
};