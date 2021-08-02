module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		allowImportExportEverywhere: true,
	},
	rules: {
		'no-console': 'off',
		'import/prefer-default-export': 'off',
		'no-use-before-define': 'off',
		'no-param-reassign': [2, { props: false }],
	},
};
