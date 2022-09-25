
const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    indexPath: 'index.html', // 制定生成的index.html的输入路径（相对于 outputDir）
    css: {
        loaderOptions: {
            less: {
                lessOptions:{
                    modifyVars: {
                    // 直接覆盖变量
                        'blue':'#2E91FF',
                        'text-color': '#333',
                        'border-color': '#eee',
                        'nav-bar-arrow-size':'18px',
                        'nav-bar-icon-color': '#000000',
                        'nav-bar-text-color': '#000000',
                        'nav-bar-title-text-color': '#000000',
                    },
                }
            },
            postcss: {
                plugins: [
                    autoprefixer({
                        browsers: ['Android >= 4.0', 'iOS >= 8']
                    }),
                    pxtorem({
                        rootValue: 37.5,// 换算的基数 默认100，作用 设计稿上元素宽375px,最终页面会换算成 10rem
                        propList: ['*']
                    })
                ]
            } ,
        }
    },
    devServer: {
        proxy: {
            '/api': {
                // target: 'https://taxbackend.51jishang.com', // 税筹1.0正式环境接口IP
                // target: 'https://test-tax.mingchetech.com', //税筹1.0测试环境接口IP 
                target: 'http://test-jobbackend.51jishang.com', //职链APP2.0测试环境接口IP 
                changeOrigin: true, 
                pathRewrite: {'^/api': ''} 
            }
        }
    }
}