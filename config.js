const CONFIG = {
    games: [
        {
            name: 'Aliens: Colonial Marines (RPCS3)',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/acm/1/720.png', label: '720p' },
                        { path: 'img/acm/1/2160.png', label: '2160p' }
                    ]
                }
            ]
        },
        {
            name: 'Uncharted: Drake\'s Fortune (RPCS3)',
            scenes: [
                {
                    name: 'The Search for El Dorado',
                    images: [
                        { path: 'img/uc1/1/720.png', label: '720p (No MSAA)' },
                        { path: 'img/uc1/1/2160.png', label: '2160p (No MSAA)' }
                    ]
                },
                {
                    name: 'Plane-wrecked',
                    images: [
                        { path: 'img/uc1/2/720_msaa.png', label: '720p (With MSAA)' },
                        { path: 'img/uc1/2/720_nomsaa.png', label: '720p (No MSAA)' },
                        { path: 'img/uc1/2/1440_nomsaa.png', label: '1440p (No MSAA)' },
                        { path: 'img/uc1/2/2160_nomsaa.png', label: '2160p (No MSAA)' },
                        { path: 'img/uc1/2/2880_nomsaa.png', label: '2880p (No MSAA)' },
                        { path: 'img/uc1/2/3600_nomsaa.png', label: '3600p (No MSAA)' }
                    ]
                }
            ]
        },
        {
            name: 'Uncharted 2: Among Thieves (RPCS3)',
            scenes: [
                {
                    name: 'Urban Warfare',
                    images: [
                        { path: 'img/uc2/1/720_nomsaa.png', label: '720p (No MSAA)' },
                        { path: 'img/uc2/1/1080_nomsaa.png', label: '1080p (No MSAA)' },
                        { path: 'img/uc2/1/1440_nomsaa.png', label: '1440p (No MSAA)' },
                        { path: 'img/uc2/1/2160_nomsaa.png', label: '2160p (No MSAA)' },
                        { path: 'img/uc2/1/2880_nomsaa.png', label: '2880p (No MSAA)' },
                        { path: 'img/uc2/1/3600_nomsaa.png', label: '3600p (No MSAA)' },
                        { path: 'img/uc2/1/720_nomsaa_nodof.png', label: '720p (No MSAA & No DoF)' },
                        { path: 'img/uc2/1/1080_nomsaa_nodof.png', label: '1080p (No MSAA & No DoF)' },
                        { path: 'img/uc2/1/1440_nomsaa_nodof.png', label: '1440p (No MSAA & No DoF)' },
                        { path: 'img/uc2/1/2160_nomsaa_nodof.png', label: '2160p (No MSAA & No DoF)' },
                        { path: 'img/uc2/1/2880_nomsaa_nodof.png', label: '2880p (No MSAA & No DoF)' },
                        { path: 'img/uc2/1/3600_nomsaa_nodof.png', label: '3600p (No MSAA & No DoF)' }
                    ]
                }
            ]
        },
        {
            name: 'Ratchet & Clank Future: Quest for Booty (RPCS3)',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/rcqfb/2/auto.png', label: 'Default' },
                        { path: 'img/rcqfb/2/x16.png', label: 'x16 AF' },
                        { path: 'img/rcqfb/1/100.png', label: '100% (With MSAA)' },
                        { path: 'img/rcqfb/1/300.png', label: '300% (With MSAA)' },
                        { path: 'img/rcqfb/3/100.png', label: '100% (No MSAA)' },
                        { path: 'img/rcqfb/3/300.png', label: '300% (No MSAA)' }
                    ]
                }
            ]
        },
        {
            name: 'Ratchet and Clank Future: Tools of Destruction Demo (RPCS3)',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/rctod/1/100.png', label: '100% (No MSAA)' },
                        { path: 'img/rctod/1/300.png', label: '300% (No MSAA)' }
                    ]
                }
            ]
        },
        {
            name: 'No More Heroes: Heroes\' Paradise (RPCS3)',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/nmhhp/1/720.png', label: '720P' },
                        { path: 'img/nmhhp/1/2160.png', label: '2160P' }
                    ]
                }
            ]
        },
        {
            name: 'Dark Souls 2 (RPCS3)',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/ds2/1/100.png', label: '100%' },
                        { path: 'img/ds2/1/200.png', label: '200%' },
                        { path: 'img/ds2/1/300.png', label: '300%' },
                        { path: 'img/ds2/1/400.png', label: '400%' },
                        { path: 'img/ds2/1/500.png', label: '500%' },
                        { path: 'img/ds2/1/600.png', label: '600%' }
                    ]
                }
            ]
        },
        {
            name: 'Skate 3 (RPCS3)',
            scenes: [
                {
                    name: 'Scene 1',
                    images: [
                        { path: 'img/sk3/1/100.png', label: '100% (No MSAA)' },
                        { path: 'img/sk3/1/200.png', label: '200% (No MSAA)' },
                        { path: 'img/sk3/1/300.png', label: '300% (No MSAA)' },
                        { path: 'img/sk3/1/400.png', label: '400% (No MSAA)' },
                        { path: 'img/sk3/1/500.png', label: '500% (No MSAA)' },
                        { path: 'img/sk3/1/600.png', label: '600% (No MSAA)' }
                    ]
                }
            ]
        }
    ]
};