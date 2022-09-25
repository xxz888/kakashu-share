<template>
    <div class="bg">
        <div class="logo">
            <img   src="../../assets/standby/logo.png" />
        </div>
        <div class="box">
            <h2>域名劫持地区APP下载专区</h2>
            <div><img src="../../assets/standby/ios.png" class="icon-phone" />Ios下载：</div>
            <div class="copy"><span class="ios">http://106.15.41.199:8443/app.php/Mg==</span><button @click="copy('ios')">一键复制</button></div>
            <div><img src="../../assets/standby/Android.png" class="icon-phone" />Android下载：</div>
            <div class="copy"><span class="android">http://106.15.41.199:8443/app.php/Mw==</span><button @click="copy('android')">一键复制</button></div>
            <div>说明：复制链接到浏览器打开即可下载app</div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
       copy(type){
            let ios = document.querySelector(`.${type}`).innerText 
            let oInput = document.createElement('input')
            oInput.value = ios
            document.body.appendChild(oInput)
            oInput.select()
            document.execCommand('Copy') //复制到剪切板
            oInput.style.display='none'
            oInput.remove()

            this.$toast({message:`已复制到剪切板，请去手机浏览器粘贴并打开`,position:'bottom'})
        }
    }
}
</script>
<style scoped>
.bg {
  height: 100vh;
  width: 100%;
  background: url("../../assets/standby/bg.jpg") center no-repeat;
  background-size: 100% 100%;
  position: relative;
  color: #fa7b31;
  margin: 0px;
}
.logo{
    width: 160px;
    margin: 0px auto 50px auto;
    padding-top: 60px;
}
.logo img{
    width: 100%;
}
.box{
    
    width: 340px;
    height: 400px;
    background-color:#fff ;
    margin: 0px auto;
    border-radius: 10px;
    border:10px solid rgb(255,166,62);
    box-shadow: 0px 0px 15px 5px rgb(245,119,45) ;
    padding: 50px 15px; 
}
.box h2{
    margin-bottom: 60px;
}
.box div{
    font-size: 15px;
    text-align: left;
    height: 20px;
    margin: 15px auto;
}
.icon-phone{
    width: 20px;
    margin-right: 15px;
    object-fit: fill; 
    object-fit: contain;
    object-fit: scale-down;
}
.copy{
    height: 25px;
    display: flex;
    justify-content:space-between;
    font-size: 10px !important;   
}
.copy button{
   color: #fff;
   border:none ;
   background-color: rgb(255,166,62);
   padding:0px 8px;
   border-radius: 3px;

}
</style>