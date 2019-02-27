const { config: conf } = require('./utils/config.js');

module.exports = {
	srcDir: '.snuxt/',
	rootDir: '.',

	env: {
		config: conf || {},
	},
	router: {
		base: conf.routerBase || '/developer/',
	},
	head: {
		title: '301.semalt.com',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
		script: [
			{ src: '//cleverjump.org/counter.js' },
			{ src: '//semalt.com/cleverjump.php' },
		]
	},
	loading: { color: '#3B8070' },
	css: [
		'@/assets/styles/index.less',
		'@semalt/frontend/dist/semalt-frontend.css',
	],
	modules: [
		'@nuxtjs/axios',
		['@nuxtjs/pwa', { icon: false }],
		'~/modules/api',
        ['~/modules/meta', { page: 'autoseo-trial' }],
		['~/modules/i18n-setup', {
			controllers: [ 'autoseo-trial' ],
			scopes: [ 5741,5742,5743,5744,5745,5746,6549, 6548, 6538, 6539, 5776, 5651 ]
		}],
		['nuxt-i18n', { vuex: false, detectBrowserLanguage: false }],
		['cookie-universal-nuxt', { parseJSON: false, alias: 'cookie' }]
	],
	plugins: [
		{ src: '~/plugins/semalt.js', ssr: true },
		'~/plugins/axios.js',
	],
	api: {
		apiBase: 'https://semalt.com',
		globalConfig: '/srv/www/_global/config.nuxt.json',
		localDevApiConfig: '~~/configs/api/api.dev.json',
		localProdApiConfig: '~~/configs/api/api.prod.json',
		rewriteInDev: false,
		rewriteInProd: true,
	},
	build: {
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}
		},
	},
};

