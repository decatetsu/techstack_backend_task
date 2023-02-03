module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        "import/order": ["off"],
        "import/no-internal-modules": ["off"],
        "import/no-named-as-default": ["off"],
        "import/prefer-default-export": ["off"],
        "sort-keys": ["off"],
        "camelcase": ["off"],
        "arrow-body-style": ["error", "as-needed"],
        "comma-dangle": ["error", "always-multiline"],
        "sort-imports": ["off"],
        "no-restricted-globals": ["off"],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/no-unused-vars": ["off"],
        "@typescript-eslint/no-use-before-define": ["off"],
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/naming-convention": ["error", {
            "format": ["camelCase", "UPPER_CASE", "snake_case", "PascalCase"],
            "leadingUnderscore": "allow",
            "selector": "parameter"
        }],
        "react/static-property-placement": ["off"],
        "react/prop-types": ["off"],
        "simple-import-sort/imports": [
            "error",
            {
                "groups": [
                    ["^(react|path)"],
                    ["^\\u0000"],
                    ["^@?\\w"],
                    ["^[^. ]"],
                    ["^\\."],
                    ["^(images|!!raw-loader)"],
                    ["w*(w*.*css)"]
                ]
            }
        ]
    },
};
