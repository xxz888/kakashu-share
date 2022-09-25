<template>
    <div id='content'>
        <div v-html="content">
        </div>
    </div>
</template>
<script>
import { getArticle } from "@/api/article";
export default {
    
    data(){
        return{
            content:'',
            newsid:''
        }
    },
    created(){
         this.newsid = this.$route.params.newsid
         window.appCallWeb = this.appCallWeb;
         this.appCallWeb()
    },
    methods:{
        appCallWeb(params=23,data=1) {
            // alert("得到原生传值结果:" + params+"-"+data)
            //params: 原生调用Vue时传值（params）给Vue
            console.log("得到原生传值结果:" + params+"-"+data);
            console.log('newsid',Number(this.newsid))
            getArticle(Number(this.newsid)||params).then(res=>{
                console.log(res)
                this.content=res.result.content
            })
            
            window.webkit.messageHandlers.WebCallApp.postMessage('WebCallApp')
        },
    }
}
</script>
<style scoped>
#content{
    background-color:#fff ;
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif ;
    padding: 40px 20px 0px 20px;
}
</style>