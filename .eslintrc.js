module.exports = {
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'plugin:vue/recommended',
		'standard'
	],
	plugins: [
		'vue'
	],
	env: {
		browser: true,
		node: true,
		mocha: true
	},
	globals: {
		expect: true
	},
	"rules":{
        "indent": [2, "tab"],
        "no-tabs": 0
    }
}