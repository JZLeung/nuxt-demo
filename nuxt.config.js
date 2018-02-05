module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - CNode 社区',
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
        }],
        script: [
            {src: 'https://hm.baidu.com/hm.js?a8f76b33f969e78c5e0166414e724649'}
        ]
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
        '~plugins/filters',
        '~plugins/ga',
    ],
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            const sassResourcesLoader = {  
                loader: 'sass-resources-loader',  
                options: {  
                    resources: [  
                        'assets/styles/mixins.scss'  
                    ]
                }  
            } 
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
            config.module.rules.forEach((rule) => {  
                if (rule.test.toString() === '/\\.vue$/') {  
                    rule.options.loaders.sass.push(sassResourcesLoader)  
                    rule.options.loaders.scss.push(sassResourcesLoader)  
                }  
                if (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1) {  
                    rule.use.push(sassResourcesLoader)  
                }  
            })  
        }
    }
}
