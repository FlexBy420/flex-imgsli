const CONFIG = {
    games: [
        {
            id: 'acm',
            name: 'Aliens: Colonial Marines (RPCS3)',
            ext: 'png',
            scenes: [
                {
                    name: 'Scene 1 (Resolution)',
                    folder: '1',
                    labels: ['720', '2160'],
                    displayLabels: ['720p', '2160p']
                },
            ]
        },
        {
            id: 'uc1',
            name: 'Uncharted: Drake\'s Fortune (RPCS3)',
            ext: 'png',
            scenes: [
                {
                    name: 'The Search for El Dorado (Resolution No MSAA)',
                    folder: '1',
                    labels: ['720', '2160'],
                    displayLabels: ['720p', '2160p']
                }
            ]
        },
        {
            id: 'rcqfb',
            name: 'Ratchet & Clank Future: Quest for Booty (RPCS3)',
            ext: 'png',
            scenes: [
                {
                    name: 'Scene 1 (Anisotropic Filter)',
                    folder: '2',
                    labels: ['auto', 'x16'],
                    displayLabels: ['Default', 'x16 AF']
                },
                {
                    name: 'Scene 1 (Resolution with MSAA)',
                    folder: '1',
                    labels: ['100', '300'],
                    displayLabels: ['100%', '300%']
                },
                {
                    name: 'Scene 1 (Resolution without MSAA)',
                    folder: '3',
                    labels: ['100', '300'],
                    displayLabels: ['100%', '300%']
                }
            ]
        }
    ]
};