export const languages = {
    JAVASCRIPT: 'Javascript',
    JAVA: 'Java',
    HTML: 'HTML',
    PYTHON: 'Python',
    CSS: 'CSS',
    'C#': 'C#',
    PHP: 'PHP',
    'C++': 'C++',
    RUBY: 'Ruby',
    JUPYTER_NOTEBOOK: 'Jupyter Notebook',
    ANY: 'Any',
} as const;

export type LanguagesType = typeof languages[keyof typeof languages];
