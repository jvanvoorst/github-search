// export const sorts = {
//     STARS: {
//         id: 'STARS',
//         display: 'Stars',
//     },
//     BEST_MATCH: {
//         id: 'BEST_MATCH',
//         display: 'Best Match',
//     },
// };

export const sorts = {
    STARS: 'Stars',
    BEST_MATCH: 'Best Match',
} as const;

export type SortsType = typeof sorts[keyof typeof sorts];

