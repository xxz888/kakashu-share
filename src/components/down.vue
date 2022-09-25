<template>
<div>
     <div class="cen">
            <div class="version">
                <img src="../assets/26c50ccd5e571896f1d0f76d707c8f0.jpg" />
                <p class="zi">当前版本 : {{ve}} {{version}}</p>
            </div>

            <h2>浙江瀚德网络科技有限公司</h2>

            <div class="content">
                <span class="zi">更新内容：</span>
              <div v-for="(value,i) in  content" :key="i" class="s">
              <p class="p zi">{{value}}</p>
            </div>
                </div>
          

            <div class="down zi" @click="down()">立即下载</div>

        </div>
</div>
</template>
<script>
export default {
 
    props:{
        ve:'',
    version:'',
    datatime:'',
    content:null
    },
    methods:{
        down(){
           this.$emit('down')
        }
    }
    

}
</script>
<style scoped>
.zi{
    font-size: 4.167vw;
}
 .cen {
            text-align: center;
            margin: 27.778vw auto;
            font-size: 3.889vw;
        }

        .cen>h2 {
            font-weight: 400;
            font-size: 5.556vw;
            margin: 2.778vw;
        }

        .down {
            text-decoration: none;
            background-color: rgb(171, 125, 55);
            color: #fff;
            padding: 2.778vw 11.111vw;
            margin-top: 8.333vw;
            display: inline-block;
            border-radius: 11.111vw;
        }

        .version img {
            width: 27.778vw;
        }

        .version p {
            padding: 0;
            margin: 2.778vw auto;

        }

        .content {
            color: #aaa;
        }

        .content p {
            margin: 1.389vw auto;
            width: 36.111vw;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;            
        }
        .s{
            text-align: left;
        }
        .p{
            margin: 0px auto;
        }
        
      
</style>