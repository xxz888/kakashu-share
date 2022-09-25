<!-- 我的收货地址 -->
<template>
    <div>
        <van-nav-bar
            title="我的收货地址"
            left-arrow
            fixed
            :border='true'
            right-text="添加收货地址"
            @click-right="onClickRight"
            @click-left="onClickLeft"
            />
        <div class="main" v-if="addressList.length>0">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loading-text="加载中...">
                <div class="addressItem" v-for="(item,i) in addressList" :key="i">
                    <div class="itemTop">
                        <p>收货人：{{item.receiver}}</p>
                        <span>{{item.receiverPhone}}</span>
                    </div>
                    <p>{{item.province}}{{item.city}}{{item.county}}{{item.detailedAddress}}</p>
                    <div class="itemBtm">
                        <div class="itemBtmLeft">
                            <van-icon :name="item.default?'certificate':'circle'" :color="item.default?'#FC5845':''"/>
                            <span :class="item.default?'theme':''">默认地址</span>
                        </div>
                        <div class="itemBtmRight">
                            <div @click="gonext('addTheAddress',item)">
                                <van-icon name="edit" />
                                <span>编辑</span>
                            </div>
                            <div @click="delAddress(item)">
                                <van-icon name="delete" />
                                <span>删除</span>
                            </div>
                        </div>
                    </div>
                </div>
            </van-pull-refresh>
        </div>
        <noAddress v-else />
    </div>
</template>

<script>
import { NavBar , PullRefresh , Icon , Dialog } from 'vant'
import noAddress from '@/components/noAddress'
import { queryAddress , updateAddress } from '@/api/memberData'
export default {
    data () {
        return {
            isLoading:false,
            userId:'',
            addressList:[],
        };
    },
    components:{
        [NavBar.name]:NavBar,
        [PullRefresh.name]:PullRefresh,
        [Icon.name]:Icon,
        [Dialog.Component.name]: Dialog.Component,
        noAddress,
    },
    created(){
        this.userId = localStorage.getItem('userId')
        this.getAddress()
    },
    methods: {
        onClickLeft(){
            this.$router.push({name:'myprize'})
        },
        onClickRight(){
            localStorage.removeItem('address')
            this.$router.push({name:'addTheAddress'})
        },
        // 下拉刷新
        onRefresh(){
            setTimeout(() => {
                this.getAddress()
                this.isLoading = false;
            }, 1000);
        },
        getAddress(){
            let _this = this
            queryAddress(_this.userId)
            .then(res=>{
                console.log(res)
                if(res.resp_code == '000000'){
                    _this.addressList = res.result
                }else{
                    _this.$toast({position:'bottom',message:res.resp_message});
                }
            })
        },
        // 跳转页面
        gonext(name,item){
            localStorage.setItem('address',JSON.stringify(item))
            this.$router.push({name:name})
        },
        // 删除收货地址
        delAddress(item){
            let _this = this
            console.log(item,'我要删除地址')
            Dialog.confirm({
                title: '温馨提示',
                message: '是否删除此收货地址？'
            }).then(() => {
                // on confirm
                updateAddress(item.id,item.receiver,item.receiverPhone,item.province,item.city,item.county,item.detailedAddress,item.isDefault,0,item.areaCode)
                .then(res=>{
                    console.log(res)
                    if(res.resp_code == '000000'){
                        _this.getAddress()
                        _this.$toast({position:'bottom',message:res.resp_message});
                    }else{
                        _this.$toast({position:'bottom',message:res.resp_message});
                    }
                })
            }).catch(() => {
                // on cancel
            });
        }
    }
}

</script>
<style scoped>
.main{
    padding-top: 52px;
}
.addressItem{
    width: 350px;
    height: 140px;
    background: #FFFFFF;
    margin: 0 auto;
    border-radius: 8px;
    padding: 10px 20px 0;
    box-sizing: border-box;
    margin-bottom: 5px;
}
.addressItem>p{
    font-size: 14px;
    color: #999999;
    height: 50px;
    overflow: hidden;
    border-bottom: 1px solid #efefef;
}
.itemTop{
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.itemBtm{
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.itemBtmLeft,.itemBtmRight{
    display: flex;
    align-items: center;
    font-size: 13px;
}
.itemBtmRight div{
    display: flex;
    align-items: center;
    font-size: 13px;
    margin-left: 30px;
}
.itemBtmLeft span,.itemBtmRight span{
    margin-left: 5px;
}
</style>