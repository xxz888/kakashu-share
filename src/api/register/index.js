import request from '@/utils/request'
import qs from 'qs'

// 注册

/** 验证账号 post */
export function authPhone(brandId,phone) {
    return request({
        url: '/user/app/query/phone',
        method: 'post',
        data:qs.stringify({
            "brandId":brandId,//手机号
            "phone":phone,//手机号
        }),
    })
}

/** 获取下载地址 post */
export function getDownload(brand_id) {
    return request({
        url: '/user/app/versionnumber',
        method: 'get',
        params:{
            "brand_id": brand_id,//品牌		
        },
    })
}

/** 用户注册 post */
export function register(brandId,phone,vericode,preUserPhone,password) {
    return request({
        url: '/user/app/register',
        method: 'post',
        headers:{
            'deviceId':'ZWEERE-HETYUII-HWEWETRY-DSDSDG-MDRTT-NRTR'
        },
        data:qs.stringify({
            "brand_id":brandId,//品牌	
            "phone":phone,//接收验证码的手机号	
            "vericode":vericode,//用户接收的验证码
            "invitecode":preUserPhone,//邀请人手机号	
            "password":password//用户设置的手机号
        }),
    })
}

/** 获取验证码 post */
export function smsSend(brand_id,phone) {
    return request({
        url: '/notice/app/sms/send',
        method: 'get',
        params:{
            "brand_id":brand_id,//品牌	
            "phone":phone,//接收验证码的手机号	
        },
    })
}
