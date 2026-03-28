const CONFIG = {
    games: [
        {
            id: 'acm',
            name: 'Aliens: Colonial Marines',
            ext: 'png',
            scenes: [
                {
                    name: 'Scene 1 (Resolution)',
                    folder: '1',
                    labels: ['720', '2160']
                },
            ]
        },
        {
            id: 'uc1',
            name: 'Uncharted: Drake\'s Fortune',
            ext: 'png',
            scenes: [
                {
                    name: 'The Search for El Dorado (Resolution No MSAA)',
                    folder: '1',
                    labels: ['720', '2160']
                }
            ]
        },
        {
            id: 'rcqfb',
            name: 'Ratchet & Clank Future: Quest for Booty',
            ext: 'png',
            scenes: [
                {
                    name: 'Scene 1 (Anisotropic Filter)',
                    folder: '2',
                    labels: ['auto', 'x16']
                },
                {
                    name: 'Scene 1 (Resolution with MSAA)',
                    folder: '1',
                    labels: ['100', '300']
                },
                {
                    name: 'Scene 1 (Resolution without MSAA)',
                    folder: '3',
                    labels: ['100', '300']
                }
            ]
        }
    ]
};