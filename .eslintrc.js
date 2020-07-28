module.exports = {
    env: {
        mocha: true,
    },
    globals: {
        browser: true,
        _browsers: true,
        $: true,
        $$: true,
        __dirname: true,
        expect: true,
        assert: true,
        sprintf: true,
        _view: true,
    },
    extends: ['airbnb-base'],
    rules: {
        'import/no-extraneous-dependencies': 'off',
        'max-classes-per-file': 'off',
        'no-plusplus': 'off',
        indent: ['error', 4],
        'no-shadow': 'off',
        'consistent-return': 'off',
        'array-callback-return': 'off',
        'no-unused-expressions': 'off',
        'class-methods-use-this': 'off',
    },
    parser: 'babel-eslint',
};
