export const languages = {
    JAVASCRIPT: 'Javascript',
    PHP: 'PHP',
    RUBY: 'Ruby',
    ALL: 'All',
} as const;

export type LanguagesType = typeof languages[keyof typeof languages];
