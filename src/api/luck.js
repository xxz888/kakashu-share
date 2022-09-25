import request from '@/utils/request'
import qs from 'qs'

// 查询抽奖配置
export function queryLuckConfig(brandId){
    return request({
        url: '/user/app/query/luckdrawconfig/bybrandid',
        method: 'post',
        data: qs.stringify({
            'brandId':brandId,
        })
    })
}

// 新查询奖品配置
export function queryFindall(brandId){
    return request({
        url:  '/marketing/app/query/kd/luckdraw/prize/config',
        method: 'post',
        data: qs.stringify({
            'brandId':brandId,
        })
    })
}

// 进行抽奖
export function luckdraw(brandId,phone){
    return request({
        url: '/user/app/execute/luckdraw',
        method: 'post',
        data: qs.stringify({
            'brandId':brandId,
            'phone':phone,
        })
    })
}

// 新抽奖接口
export function newLuckDraw(brandId,phone){
    return request({
        url:  '/marketing/app/execute/kd/luckdraw',
        method: 'post',
        data: qs.stringify({
            'brandId':brandId,
            'phone':phone,
        })
    })
}

// 查询所有中奖记录
export function queryLuchs(brandId){
    return request({
        url: '/user/app/query/luckdrawwinningrecord/bybrandid',
        method: 'post',
        data: qs.stringify({
            'brandId':brandId,
            'size':99,
            'page':0,
        })
    })
}

// 新查询所有中奖记录
export function queryLucks(brandId,userId){
    return request({
        url: 'marketing/app/query/pyxluckdrawmanagerconfig/query/all',
        method: 'post',
        data: qs.stringify({
            'brandId':brandId,
            'userId':userId,
            'size':99,
            'page':0,
            'order':'DESC', // 排序
        })
    })
}

// 查询用户当前抽奖信息
// export function queryUserLuck(userId){
//     return request({
//         url: '/marketing/app/query/pyx/userdirectcount/query/all',
//         method: 'post',
//         data: qs.stringify({
//             'userId':userId,
//         })
//     })
// }

// 新查询抽奖次数
export function queryUserAll(userId){
    return request({
        url: '/marketing/app/get/kd/luckdraw/count/info',
        method: 'post',
        data:qs.stringify({
            'userId':userId,
        })
    })
}

// 新用户添加收货地址和确认收货
export function updateAddress(id,province,city,county,detailedAddress){
    return request({
        url:  '/marketing/web/query/pyx/commodity/luckdraw/update/param',
        method: 'post',
        data: qs.stringify({
            'id':id,
            'province':province,
            'city':city,
            'county':county,
            'detailedAddress':detailedAddress,
        })
    })
}