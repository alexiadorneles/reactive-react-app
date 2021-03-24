// eslint-disable-next-line no-undef
module.exports = function override(config) {
	// if (!config.module.rules[1].oneOf) {
	// 	config.module.loaders = []
	// }

	const loaders = config.module.rules[1].oneOf
	loaders.splice(loaders.length - 1, 0, {
		test: /\.scss$/,
		use: [
			'style-loader',
			// 'css-loader',
			// 'sass-loader',
			'@teamsupercell/typings-for-css-modules-loader',
		],
	})

	// config.module.rules[1].oneOf.push({ test: /\.css$/, loader: 'typings-for-css-modules?modules' })
	// config.module.rules[1].oneOf.push({
	// 	test: /\.scss$/,
	// 	loader: 'typings-for-css-modules?modules&sass',
	// })
	// config.module.rules[1].oneOf.push({
	// 	test: /^((?!\.global).)*\.(scss|sass)$/,
	// 	loader: '@teamsupercell/typings-for-css-modules-loader',
	// })

	console.log('overriden!')
	console.log(config.module.rules[1].oneOf)

	return config
}
