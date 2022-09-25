import request from '@/utils/request'
import qs from 'qs'

/** 账户资产 post */
export function getAccountQuery(token) {
    return request({
        url: '/user/app/account/query/'+token,
        method: 'get',
    })
}

// 根据userId获取用户收货地址
export function queryAddress(userId){
    return request({
        url: '/integralmall/app/query/receiveaddress/byuserid',
        method: 'post',
        data: qs.stringify({
            'userId':userId
        })
    })
}

// 添加收货地址
export function addTheAddress(brandId,userId,userPhone,receiver,receiverPhone,province,city,county,detailedAddress,isDefault,areaCode){
    return request({
        url: '/integralmall/app/add/receiveaddress',
        method: 'post',
        data: qs.stringify({
            'brandId':brandId,
            'userId':userId,
            'userPhone':userPhone, // 登录人手机号
            'receiver':receiver, // 收货人
            'receiverPhone':receiverPhone, // 收货人手机号
            'province':province, //省份
            'city':city, // 城市
            'county':county, // 区县
            'detailedAddress':detailedAddress, // 详细地址
            'isDefault':isDefault, //是否默认地址（0：非默认，1：默认）
            'areaCode':areaCode, // 城市code
        })
    })
}

// 修改收货地址
export function updateAddress(id,receiver,receiverPhone,province,city,county,detailedAddress,isDefault,status,areaCode){
    return request({
        url: '/integralmall/app/update/receiveaddress',
        method: 'post',
        data: qs.stringify({
            'id':id, // 地址ID
            'receiver':receiver, // 收货人
            'receiverPhone':receiverPhone, // 收货人手机号
            'province':province, // 省份
            'city':city, // 城市
            'county':county, // 区县
            'detailedAddress':detailedAddress, // 详细地址
            'isDefault':isDefault, // 是否默认(0:非默认,1:默认)
            'status':status, // 是否默认(0:非默认,1:默认)
            'areaCode':areaCode, // 城市code
        })
    })
}

// 查询用户个人中奖记录
export function queryLuckByuserid(userId,size){
    return request({
        url: '/user/app/query/luckdrawwinningrecord/byuserid',
        method: 'post',
        data: qs.stringify({
            'userId':userId,
            'size':size,
            'page':0,
        })
    })
}

// 用户修改中奖记录信息（确认收货，添加、修改奖品收货地址）
export function updateLuckDraw(id,extendStatus,receiver,receiverPhone,province,city,county,detailedAddress,areaCode){
    return request({
        url: '/user/app/update/luckdrawwinningrecord/byid',
        method: 'post',
        data: qs.stringify({
            'id':id,
            'extendStatus':extendStatus, // 收货状态 2：已收货
            'receiver':receiver, // 收货人
            'receiverPhone':receiverPhone, // 收货人手机号
            'province':province, // 省份
            'city':city, // 城市
            'county':county, // 区、县
            'detailedAddress':detailedAddress, // 详细地址
            'areaCode':areaCode, // 地区编码
        })
    })
}

// 修改奖品的收货地址
export function newSetAddress(id,province,city,county,detailedAddress,prizeReceiving,receiver,receiverPhone){
    return request({
        url: '/marketing/app/query/pyx/commodity/luckdraw/update/param',
        method: 'post',
        data: qs.stringify({
            'id':id,
            'province':province,
            'city':city,
            'county':county,
            'detailedAddress':detailedAddress,
            'prizeReceiving':prizeReceiving, // 签收状态（已签收和代签收）
            'receiver':receiver,
            'receiverPhone':receiverPhone,
        })
    })
}