module.exports = {
    env: {
        browser: false,
        es2021:  true,
    },
    extends:       [ 'airbnb-base', 'prettier' ],
    parser:        '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType:  'module',
    },
    plugins: [ '@typescript-eslint' ],
    rules:   {
        'no-unused-vars':        [ 'error', { argsIgnorePattern: 'reply|request' } ],
        'max-len':               [ 'error', { code: 120 } ],
        'space-in-parens':       [ 'error', 'always' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'object-curly-spacing':  [ 'error', 'always' ],
        'key-spacing':           [ 'error', { align: 'value' } ],
        'padded-blocks':         [ 'error', 'always' ],
        'quotes':                [ 'error', 'single' ]
    },
};
