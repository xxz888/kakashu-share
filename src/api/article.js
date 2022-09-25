import qs from 'qs'
import request from '@/utils/request'

export function getArticle(newsid){
        return request({
            url:'/marketing/app/news/query/detail',
            method:'post',
            data:qs.stringify({
                newsid
            })
        })
    }
