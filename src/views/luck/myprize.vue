<!-- 我的奖品 -->
<template>
    <div>
        <van-nav-bar
            title="我的奖品"
            left-arrow
            fixed
            :border='false'
            @click-left="onClickLeft"
            />
        <div class="main">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loading-text="加载中...">
                <div class="prizeNav">
                    <div class="prizeNavTop" @click="gonext('myOrder')">
                        <p>我的奖品</p>
                        <div><span>全部</span><img src="../../assets/next.png" alt=""></div>
                    </div>
                    <div class="prizeNavCont">
                        <div class="prizeNavItem" @click="gonext('myOrder',1)">
                            <img src="../../assets/myprize/audit.png" alt="">
                            <span>审核状态</span>
                        </div>
                        <div class="prizeNavItem" @click="gonext('myOrder',2)">
                            <img src="../../assets/myprize/sendGoods.png" alt="">
                            <span>待发货</span>
                        </div>
                        <div class="prizeNavItem" @click="gonext('myOrder',3)">
                            <img src="../../assets/myprize/forGoods.png" alt="">
                            <span>待收货</span>
                        </div>
                        <div class="prizeNavItem" @click="gonext('myOrder',4)">
                            <img src="../../assets/myprize/confirmGoods.png" alt="">
                            <span>确认收货</span>
                        </div>
                    </div>
                </div>
                <div class="address" @click="gonext('address')">
                    <p>我的收货地址</p>
                    <img src="../../assets/next.png" alt="">
                </div>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
import { NavBar , PullRefresh ,} from 'vant'
export default {
    data () {
        return {
            isLoading:false,
        };
    },
    components:{
        [NavBar.name]:NavBar,
        [PullRefresh.name]:PullRefresh,
    },
    methods: {
        onClickLeft(){
            // window.history.go(-1)
            this.$router.push({name:'lucky'})
        },
        // 下拉刷新
        onRefresh(){
            setTimeout(() => {
                this.isLoading = false;
            }, 1000);
        },
        gonext(item,type){
            if(type){
                this.$router.push({name:item,params:{type:JSON.stringify(type)}})
            }else{
                this.$router.push({name:item})
            }  
        },
    }
}

</script>
<style scoped>
.main{
    padding-top: 52px;
}
.prizeNav{
    width: 348px;
    height: 110px;
    border-radius: 16px;
    background: #FFFFFF;
    margin: 0 auto;
    padding: 0 21px;
    box-sizing: border-box;
}
.prizeNavTop{
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E6E6E6;
}
.prizeNavTop>p{
    font-size: 15px;
    color: #3C3C3C;
    font-weight: 600;
}
.prizeNavTop div{
    display: flex;
    align-items: center;
}
.prizeNavTop span{
    font-size: 10px;
    color: #B1B1B1;
}
.prizeNavTop div img{
    width: 5px;
    margin-left: 5px;
}
.prizeNavCont{
    display: flex;
    height: 74px;
    align-items: center;
    justify-content: space-between;
}
.prizeNavItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: #3C3C3C;
}
.prizeNavItem img{
    width: 30px;
    height: 30px;
    margin-bottom: 4px;
}
.address{
    width: 348px;
    height: 40px;
    background: #FFFFFF;
    margin: 20px auto;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    padding: 0 21px;
    box-sizing: border-box;
    align-items: center;
}
.address>p{
    font-size: 15px;
    color: #3C3C3C;
}
.address>span{
    font-size: 10px;
    color: #B1B1B1;
}
.address img{
    width: 7px;
}
</style>