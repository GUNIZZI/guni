module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                paths: ['src'],
            },
            alias: {
                map: [
                    ['@', './src'], // @ 별칭을 src 폴더로 매핑
                ],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
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
        // JSX 확장자만 허용
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        // React import 필수 여부 - off로 import 하지 않아도 됨
        'react/react-in-jsx-scope': 'off',
        // 컴포넌트/상수 외 export 경고(jsx에 한함)
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        // 함수 컴포넌트의 변환 - off로 제한하지 않음
        'react/function-component-definition': 'off',
        // export가 하나만 있을때 default를 사용해야 하는 규칙 - off로 사용하지 않음
        'import/prefer-default-export': 'off',
        // package에 명시되지 않은 외부 모듈의 import 금지 - 단, 개발 의존성의 import는 허용
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        // import 문의 순서를 강제
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
        // import 문에서 확장자 제한 - js, jsx, tx, tsx 확장자에 대해 강제로 제한
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
