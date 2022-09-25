import axios from 'axios'
import Vue from 'vue';
import { Dialog } from 'vant';
import store from '../store/index';
import router from '../router/index'
// 全局注册
Vue.use(Dialog);
console.log(1)

function getUrlParam(name) { //截取url参数
    var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");
    if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " "));
}
var ip=null
if(getUrlParam('ip')==undefined && localStorage.getItem('ip') == undefined){
    ip="api.flyaworld.com"
}else if(localStorage.getItem('ip')){
    ip = localStorage.getItem('ip')
}else{ 
    ip=getUrlParam('ip')
}
  
if(ip == null){
    ip = 'api.flyaworld.com'
}
// 创建axios 实例
const service = axios.create({
//   baseURL: 'https://api.flyaworld.com/v1.0', // api的base_url
    //    baseURL: 'http://test1012.caderworld.com/v1.0', // api的base_url  
    baseURL:'https://api.carcsu.com/v1.0',
    timeout: 50000 // 请求超时时间
})
// const token = localStorage.getItem('token')

const platform = Math.ceil(navigator.platform.length / 3)
let str = '';
let num = 0;
const arr = returnCitySN["cip"].split('.')
arr.forEach((item,i)=>{
  if(i != arr.length-1){
    str += item + navigator.platform.substring(num,num+platform)
    num += platform
  }else{
    str += item
  }
})

// request 拦截器
service.interceptors.request.use(
    config => {
        store.commit('showLoading')
        // 这里可以自定义一些config 配置
        if (localStorage.getItem('token')!=null) {
            config.headers['authToken'] = localStorage.getItem('token') // 让每个请求携带自定义token 请根据实际情况自行修改
        }

        if (config.method == 'get') {
            config.data = true
          }
        let deviceId = localStorage.getItem('deviceId')||str
        config.headers['deviceId'] = deviceId
        config.headers['host'] = 'api.dingdingxiaoer.com'
        return config
    },
    error => {
        //  这里处理一些请求出错的情况
        store.commit('hideLoading')

        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        store.commit('hideLoading')
        const res = response.data
        // 这里处理一些response 正常放回时的逻辑
        if(res.resp_code == '000005'){
            Dialog.alert({
                title: '登录过期',
                message: '您的登录已经过期，请重新登录'
            }).then(() => {
                // router.push({name:'login'})
            });
        }else{return res}
        
    },
    error => {
        // 这里处理一些response 出错时的逻辑
        store.commit('hideLoading')
        Dialog.alert({
            title: '网络波动',
            // message: JSON.stringify(error)
            message: "当前网络波动，请稍后再试"
        }).then(() => {
            // router.push({name:'login'})
        });
        return Promise.reject(error)
    }
)

export default service