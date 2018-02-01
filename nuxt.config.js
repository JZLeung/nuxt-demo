module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'nuxt-demo',
        meta: [{
            charset: 'utf-8'
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        },
        {
            hid: 'description',
            name: 'description',
            content: 'Nuxt.js project'
        }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }, {
            rel: 'stylesheet',
            href: 'https://cdn.bootcss.com/mini.css/2.3.7/mini-default.min.css'
        }]
    },
    css: [
        {src: '~assets/styles/common.scss', lang: 'sass'}
    ],
    env: {
        baseUrl: 'https://news-at.zhihu.com/api/4'
    },
    modules: [
        '@nuxtjs/axios',
        // '@nuxtjs/proxy'
    ],
    axios: {
        baseURL: 'https://cnodejs.org/api/v1',
        // browserBaseURL: 'https://example.com/api',
        // debug: true,
        // proxy: true
    },
    // proxy: [
    //     [
    //         '/',
    //         {
    //             target: 'https://news-at.zhihu.com', // api主机
    //             // pathRewrite: {'^/': '/api/4/'}
    //             // pathRewrite: {
    //             //     '^/api': '/'
    //             // }
    //         }
    //     ]
    // ],
    /*
     ** Customize the progress bar color
     */
    loading: {
        color: '#3B8070'
    },
    /*
     ** Build configuration
     */
    plugins: [
        '~plugins/global',
        '~plugins/axios',
    ],
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
