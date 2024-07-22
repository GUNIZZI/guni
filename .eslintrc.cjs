module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    extends: [
        'airbnb',
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'jsx-a11y', 'react-hooks', 'react-refresh', 'import'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    ['parent', 'sibling', 'index'],
                    'object',
                    'type',
                ],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '{.,..}/**/*',
                        group: 'parent',
                        position: 'before',
                    },
                    {
                        pattern: '@mui/**',
                        group: 'type',
                        position: 'after',
                    },
                    {
                        pattern: '**/*.+(css|scss|sass|less)',
                        group: 'type',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
};
