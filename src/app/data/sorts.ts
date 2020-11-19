export const sorts = {
    STARS: 'Stars',
    BEST_MATCH: 'Best Match',
} as const;

export type SortsType = typeof sorts[keyof typeof sorts];

