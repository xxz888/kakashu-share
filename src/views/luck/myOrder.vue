<!-- 我的奖品订单 -->
<template>
    <div>
        <van-nav-bar
            title="我的订单"
            left-arrow
            fixed
            :border='true'
            @click-left="onClickLeft"
            />
        <div class="orderNav">
            <van-tabs v-model="active" animated swipeable @click="tabs" title-active-color="#FFBE20" color="#FFBE20">
                <van-tab :title="itm.name" v-for="(itm,i) in tabList" :key="i">
                    <!-- <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                        <p v-for="(item,i) in dataList" :key="i">{{i}}</p>
                    </van-list> -->
                    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loading-text="加载中...">
                    <div class="list" v-if="dataList.length > 0">
                        <div class="item" v-for="(item,i) in dataList" :key="i+'item'">
                            <div class="item_left">
                                <div class="itemleft_left">
                                    <div class="itemleft_left_top">
                                        <h5>{{item.prizeName}}</h5>
                                        <p v-if="active == 0 && (item.prizeType == '商品')">中奖时间:{{item.createTime |today}}</p>
                                    </div>
                                    <p v-if="item.prizeType != '商品'">金额/积分：{{item.prizeDesc}}</p>
                                    <p v-if="active == 0"><span @click.stop="addAddress(item)" v-if="item.province">收货地址:{{item.province}}{{item.city}}{{item.county}}{{item.detailedAddress}}</span><span v-if="!item.province && item.prizeType == '商品'" class="addAddress" @click.stop="addAddress(item)">添加收货地址</span></p>
                                    <p v-if="active == 0 && item.province">收货人：{{item.receiver}}&nbsp;&nbsp;&nbsp;&nbsp;电话：{{item.receiverPhone}}</p>
                                    <p v-if="active == 1"><span v-if="item.remarks">描述：{{item.remarks |toRemarks}}</span></p>
                                    <p v-if="active == 3">{{item.expressName}}</p>
                                    <p v-if="active == 3">单号：{{item.expressId}}</p>
                                    <p v-if="active == 3 || active == 1">中奖时间：{{item.createTime |today}}</p>
                                    <p class="luckTime" v-if="(active != 0 && active != 3 && active != 1)|| ( active == 0 && item.prizeType != '商品')">中奖时间：{{item.createTime |today}}</p>
                                </div>
                                <div class="itemleft_right" v-if="active != 0">
                                    <!-- <p v-if="active == 0">中奖时间:{{item.createTime |today}}</p> -->
                                    <p v-if="active == 1 && item.status == '待审核'" class="active0">{{item.status}}</p>
                                    <p v-if="active == 1 && item.status == '已通过'" class="active1">{{item.status}}</p>
                                    <p v-if="active == 1 && item.status == '已拒绝'" class="active2">{{item.status}}</p>
                                    <p v-if="active == 2">{{item.prizeExamine}}</p>
                                    <div class="yifahuo" v-if="active == 3">
                                        <p>{{item.prizeExamine |toextendStatus}}</p>
                                        <span @click="sureGoods(item)">确认收货</span>
                                    </div>
                                    <div class="yishouhuo" v-if="active == 4">
                                        <p>{{item.prizeReceiving}}</p>
                                        <!-- <span>删除</span> -->
                                    </div>
                                </div>
                            </div>
                            <div class="item_right">
                                <img :src="item.pictureUrl" alt="">
                            </div>
                        </div>        
                    </div>
                    <noData v-else></noData>
                    </van-pull-refresh>
                </van-tab>
            </van-tabs>
        </div>
        <van-popup
            v-model="show"
            position="bottom"
        :style="{ height: '40%' }"
        >
            <van-divider>{{text}}收货地址</van-divider>
            <div class="addressList" v-if="addressList.length > 0">
                <div class="addressItem" v-for="(item,i) in addressList" :key="i" @click="setGoodAddress(item)">
                    <p>{{item.receiver}} <span>{{item.receiverPhone}}</span></p>
                    <span>{{item.province}}{{item.city}}{{item.county}}{{item.detailedAddress}}</span>
                </div>
            </div>
            <div class="noAddress" v-else @click="gonext('addTheAddress')">
                <img src="../../assets/noaddress.png" alt="">
                <span>点击添加收货地址</span>
            </div>
        </van-popup>
    </div>
</template>

<script>
import { queryLuckByuserid , updateLuckDraw , queryAddress , newSetAddress } from '@/api/memberData'
import { queryLucks } from "@/api/luck";
import { NavBar , PullRefresh , AddressEdit , Tab, Tabs , List , Dialog , Popup , Divider } from 'vant'
import noData from '@/components/noData'
export default {
    data () {
        return {
            isLoading:false,
            loading:false,
            finished:true,
            brandId:'',
            active:'',
            userId:'',
            size:999,
            dataList:[],
            list:[],
            tabList:[
                {name:'全部',index:0},
                {name:'审核状态',index:1},
                {name:'待发货',index:2},
                {name:'待收货',index:3},
                {name:'已收货',index:4},
            ],
            show:false,
            good:{},
            text:'添加',
            addressList:[],
        };
    },
    components:{
        [NavBar.name]:NavBar,
        [PullRefresh.name]:PullRefresh,
        [AddressEdit.name]:AddressEdit,
        [Tab.name]:Tab,
        [Tabs.name]:Tabs,
        [List.name]:List,
        noData,
        [Dialog.Component.name]: Dialog.Component,
        [Popup.name]:Popup,
        [Divider.name]:Divider,
    },
    filters:{
        today:function(val){
            if(val){
                return val.substring(0,10)
            }else{
                return val
            }
        },
        toexamineStatus:function(val){
            if(val == 0){
                return '待审核'
            }
            if(val == 1){
                return '已通过'
            }
            if(val == 2){
                return '已拒绝'
            }
        },
        toextendStatus:function(val){
            if(val == 0){
                return '待发货'
            }
            if(val == 1){
                return '待收货'
            }
            if(val == 2){
                return '已收货'
            }
        },
        toRemarks:function(val){
            if(val == null){
                return '暂无描述'
            }else{
                return val
            }
        },
    },
    created(){
        this.brandId = localStorage.getItem('brandId')
        this.userId = localStorage.getItem('userId')
            console.log(this.$route.params)
        if(this.$route.params.type){
            this.active = JSON.parse(this.$route.params.type)
            console.log(this.active)
            console.log(this.$route.params)
        }
        this.queryLuckDraw()
        this.getAddress()
    },
    methods: {
        onClickLeft(){
            window.history.go(-1)
        },
        // 下拉刷新
        onRefresh(){
            setTimeout(() => {
                this.queryLuckDraw()
                this.getAddress()
                this.isLoading = false;
            }, 1000);
        },
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.size >= 999) {
                    this.finished = true;
                }
            }, 500);
        },
        // 获取用户中奖纪录
        queryLuckDraw(){
            let _this = this
            queryLucks(_this.brandId,_this.userId)
            .then(res=>{
                console.log(res,'shuju')
                if(res.resp_code == '000000'){
                    _this.list = res.result.content
                    _this.dataList = res.result.content
                    _this.tabs(_this.active)
                }else{
                    _this.$toast({position:'bottom',message:res.resp_message});
                }
            })
        },
        // 切换TAB
        tabs(index){
            console.log(this.active)
            let _this = this
            if(index == 0){
                _this.dataList = _this.list
                return
            }
            if(index == 1){
                _this.dataList = _this.list
                return
            }
            if(index == 2){
                _this.dataList = []
                _this.list.map(item=>{
                    if(item.prizeExamine == '待发放'){
                        _this.dataList.push(item)
                    }
                })
                console.log(_this.dataList)
                return
            }
            if(index == 3){
                _this.dataList = []
                _this.list.map(item=>{
                    if(item.prizeExamine == '已发放' && item.prizeReceiving == '待签收'){
                        _this.dataList.push(item)
                    }
                })
                return
            }
            if(index == 4){
                _this.dataList = []
                _this.list.map(item=>{
                    if(item.prizeReceiving == '已签收' || item.prizeReceiving == "'已签收'"){
                        _this.dataList.push(item)
                    }
                })
                return
            }
        },
        // 查询用户的收货地址
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
        // 确认收货
        sureGoods(item){
            let _this = this
            console.log(item)
            Dialog.confirm({
                title: '温馨提示',
                message: '是否确认收货此奖品？'
            }).then(() => {
                // on confirm
            newSetAddress(item.id,'','','','','已签收')
                .then(res=>{
                    console.log(res)
                    if(res.resp_code == '000000'){
                        _this.queryLuckDraw()
                        _this.$toast({position:'bottom',message:res.resp_message});
                    }else{
                        _this.$toast({position:'bottom',message:res.resp_message});
                    }
                })
            }).catch(() => {
                // on cancel
            });
        },
        // 更换收货地址
        addAddress(item){
            if(item.prizeType != '商品'){
                this.$toast({position:'bottom',message:'现金和积分无需添加收货地址！'});
            }else{
                this.good = item
                this.show = true
            }
        },
        // 添加、修改收货地址
        setGoodAddress(item){
            let _this = this
            console.log(JSON.stringify(item))
            // alert(item.detailedAddress)
            // alert(item.province)
            // alert(item.city)
            // alert(item.county)
            newSetAddress(_this.good.id,item.province,item.city,item.county,item.detailedAddress,'',item.receiver,item.receiverPhone)
            // newSetAddress(_this.good.id)
            .then(res=>{
                if(res.resp_code == '000000'){
                    _this.show = false
                    _this.queryLuckDraw()
                    _this.$toast({position:'bottom',message:res.resp_message});
                }else{
                    _this.$toast({position:'bottom',message:res.resp_message});
                }
            })
        },
        gonext(item){
            this.$router.push({name:item})
        },
    }
}

</script>
<style scoped>
.orderNav{
    padding-top: 46px;
}
.item{
    /* height: 85px; */
    background: #FFFFFF;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
}
.item_right{
    width: 85px;
    height: 100%;
}
.item_right img{
    width: 100%;
    height: 85px;
}
.item_left{
    display: flex;
    justify-content: space-between;
    padding: 10px 14px;
    box-sizing: border-box;
    flex: 1;
}
.itemleft_left{
    flex: 1;
}
.itemleft_left h5{
    font-size: 14px;
    color: #222222;
    font-weight: 500;
}
.itemleft_left p{
    font-size: 11px;
    margin: 5px 0;
    color: #666666;
}
.itemleft_right p{
    font-size: 11px;
    color: #4D4D4D;
}
.itemleft_left .luckTime{
    margin-top: 20px;
}
.yifahuo{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    text-align: right;
}
.yifahuo span{
    width: 65px;
    height: 23px;
    border-radius: 5px;
    color: #FFBE20;
    border: 1px solid #FFBE20;
    font-size: 11px;
    line-height: 23px;
    text-align: center;
}
.yishouhuo span{
    width: 55px;
    height: 23px;
    border-radius: 5px;
    color: #666666;
    border: 1px solid #666666;
    font-size: 11px;
    line-height: 23px;
    text-align: center;
    display: block;
}
.itemleft_left_top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.addAddress{
    width: 90px;
    height: 23px;
    line-height: 23px;
    border: 1px solid #FFBE20;
    border-radius: 5px;
    color: #FFBE20;
    margin-top: 20px;
    display: block;
    text-align: center;
}

.addressItem{
    padding: 10px 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #EEEEEE;
}
.addressItem p{
    font-size: 14px;
    font-weight: 500
}
.addressItem>span{
    font-size: 12px;
    color: #666666;
}
.noAddress{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    flex-direction: column;
}
.noAddress img{
    width: 100px;
}
.noAddress span{
    width: 120px;
    height: 23px;
    line-height: 23px;
    border-radius: 5px;
    color: #FFBE20;
    margin-top: 10px;
    display: block;
    text-align: center;
    font-size: 13px;
}

.itemleft_right .active0{
    color: #333333;
}
.itemleft_right .active1{
    color: #09A30C;
}
.itemleft_right .active2{
    color: #FF2121;
}
</style>