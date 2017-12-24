/*
 * @file
 * @desc keep module latest
 * @date 2017/12/21
 *
 */

// 后面花括号是函数参数的默认值，前面花括号内的等号是解构赋值的默认值，是两码事
module.exports = ({
	moduleName = '',
	cwd = process.cwd(),
	registry = 'https://registry.npmjs.org/',
	beforeInstall = () => {}
} = {}) => {
	return new Promise(resolve => {
		resolve('a')
	})
}