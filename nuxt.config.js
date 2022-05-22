import { resolve } from 'path';

export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	server: {
		port: 53170
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Seito',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~assets/styles/chimplate/chimplate.less',
		'~assets/styles/project.less'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Shared style resources across project
	// Components CSS
	styleResources: {
		less: [
			'~assets/styles/chimplate/chimplate-resources.less',
			'~assets/styles/project-resources.less'
		]
	},

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/style-resources',
		'@nuxtjs/google-fonts'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},

	alias: {
		'@chimplate': resolve(__dirname, './assets/styles/chimplate'),
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		loaders: {
			less: {
				lessOptions: {
					math: 'always'
				}
			}
		}
	}
}
