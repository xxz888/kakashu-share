<!-- 抽奖页面 -->
<template>
    <div id="lucky">
        <van-nav-bar
            title="会员来抽奖"
            :left-arrow="false"
            fixed
            :border='false'
            />
        <div class="main">
            <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loading-text="加载中..."> -->
            <div class="header">
                <img src="../../assets/index/luckyheaderbg.png" alt="">
            </div>
            <div class="content" v-if="dataList.length == 8">
                <div class="cont_header">
                    <img src="../../assets/index/luckyliwu.png" alt="">
                    <p>当前还剩<span style="color:#E50D11;font-size:17px;margin:0 5px;">{{userCount}}</span>次抽奖机会</p>
                </div>
                <!-- <div class="cont_top">当前积分：{{coin}}</div> -->
                <div class="cont_top"></div>
                <div class="top">
                    <div class="item" v-for="item in 3" :key="item">
                        <!-- <div v-if="dataList[item-1].id == luckId" class="zhezhao"></div> -->
                        <img v-if="dataList[item-1].pictureUrl" :src="dataList[item-1].pictureUrl" alt="">
                        <img v-else src="../../assets/logo.png" alt="">
                        <span>{{dataList[item-1].prizeName}}</span>
                    </div>
                </div>
                <div class="middle">
                    <div class="item">
                        <!-- <div v-if="dataList[3].id == luckId" class="zhezhao"></div> -->
                        <img v-if="dataList[7].pictureUrl" :src="dataList[7].pictureUrl" alt="">
                        <img v-else src="../../assets/logo.png" alt="">
                        <span>{{dataList[7].prizeName}}</span>
                    </div>
                    <div class="mo item1" @click="goLuck()">
                        <p>立即抽奖</p>
                    </div>
                    <div class="item">
                        <!-- <div v-if="dataList[4].id == luckId" class="zhezhao"></div> -->
                        <img v-if="dataList[3].pictureUrl" :src="dataList[3].pictureUrl" alt="">
                        <img v-else src="../../assets/logo.png" alt="">
                        <span>{{dataList[3].prizeName}}</span>
                    </div>
                </div>
                <div class="btm">
                    <div class="item" v-for="item in 8" :key="item" v-if="item<4">
                        <!-- <div v-if="dataList[item-1].id == luckId" class="zhezhao"></div> -->
                        <img v-if="dataList[7-item].pictureUrl" :src="dataList[7-item].pictureUrl" alt="">
                        <img v-else src="../../assets/logo.png" alt="">
                        <span>{{dataList[7-item].prizeName}}</span>
                    </div>
                </div>
                <!-- 抽奖圈闪烁小灯 -->
                <!-- <div class="topTag">
                    <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                    <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                    <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                    <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                </div> -->
                <div class="rightTag">
                    <!-- <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                    <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                    <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                    <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div> -->
                    <div class="tagItem huang"></div>
                    <div class="tagItem hong"></div>
                    <div class="tagItem huang"></div>
                    <div class="tagItem hong"></div>
                    <div class="tagItem huang"></div>
                    <div class="tagItem hong"></div>
                    <div class="tagItem huang"></div>
                    <div class="tagItem hong"></div>
                </div>
                <div class="btmTag">
                    <!-- <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                    <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                    <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                    <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div> -->
                    <div class="tagItem huang"></div>
                    <div class="tagItem hong"></div>
                    <div class="tagItem huang"></div>
                    <div class="tagItem hong"></div>
                    <div class="tagItem huang"></div>
                    <div class="tagItem hong"></div>
                    <div class="tagItem huang"></div>
                    <div class="tagItem hong"></div>
                </div>
                <div class="leftTag">
                    <!-- <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                    <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                    <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div>
                    <div class="tagItem hong" v-if="showTag"></div>
                    <div class="tagItem huang" v-if="!showTag"></div>
                    <div class="tagItem hong" v-if="!showTag"></div>
                    <div class="tagItem huang" v-if="showTag"></div> -->
                    <div class="tagItem huang"></div>
                    <div class="tagItem hong"></div>
                    <div class="tagItem huang"></div>
                    <div class="tagItem hong"></div>
                    <div class="tagItem huang"></div>
                    <div class="tagItem hong"></div>
                    <div class="tagItem huang"></div>
                    <div class="tagItem hong"></div>
                </div>
            </div>
            <div class="guize" @click="gonext('myprize')"></div>
            <div class="luckUser">
                <div class="luckUserTop">
                    <div class="luckTopItem"></div>
                    <span>中奖用户</span>
                    <div class="luckTopItem"></div>
                </div>
                <div class="luckUserCont">
                    <van-swipe :touchable="false" :autoplay="3000" ref="luckSwiper" :show-indicators="false" style="height:255px;" :height="85" indicator-color="white" vertical @change="luckUserChange">
                        <van-swipe-item v-for="(item,i) in luckUserList" :key="i">
                            <div class="luckItem">
                                <div class="luckItemLeft">
                                    <p>{{item.userName |nameLast}}（{{item.phone |tophone}}）</p>
                                    <span>{{item.createTime}}</span>
                                </div>
                                <div class="luckItemRight">
                                    <img v-if="item.pictureUrl" :src="item.pictureUrl" alt="">
                                    <img v-else src="../../assets/logo.png" alt="">
                                    <span>{{item.prizeName}}</span>
                                </div>
                            </div>
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <!-- </van-pull-refresh> -->

            <!-- 中奖弹窗 -->
            <van-popup v-model="luckPopup">
                <div class="popupLuck">
                    <div class="popupContent">
                        <img :src="userDraw.imgUrl" alt="">
                        <span>{{userDraw.prizeName}}</span>
                    </div>
                    <div class="popupLuckSub" @click="gonext('myOrder')">立即查看</div>
                </div>
            </van-popup>
            <!-- 未中奖弹窗 -->
            <van-popup v-model="noluckPopup">
                <div class="nopopupLuck">
                    <div class="popupContent">
                        <img :src="userDraw.imgUrl" alt="">
                        <span>{{userDraw.prizeName}}</span>
                    </div>
                    <div class="popupLuckSub" @click="noluckPopup = false">确认</div>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>
import { getAccountQuery } from '@/api/memberData';
import { queryFindall , newLuckDraw , queryLucks , queryUserAll } from '@/api/luck';
import { NavBar , Swipe, SwipeItem , Dialog , PullRefresh , Popup } from 'vant';
export default {
    data () {
        return {
            productList:[0,1,2,4,7,6,5,3],
            domeList:[0,1,2,4,7,6,5,3],
            luckId:0,
            coin:0,
            brandId:'',
            dataList:[],
            phone:'',
            i:0, //转到哪个位置
            count:0, // 圈数
            luck:1,//获奖编号
            minSpeed:500, //最小转圈速度
            speed:500, //转圈速度，越大越慢
            timer:'',
            userDraw:'',
            isClick:true,
            swiperIm:false,
            luckUserList:[],
            userId:'',
            userLuck:{
                availableNumber:0, // 剩余抽奖次数
            },
            isLoading:false,
            showTag:true,
            luckPopup:false,
            noluckPopup:false,
            token:'',
            userCount:0, // 抽奖次数
        };
    },
    components:{
        [NavBar.name]:NavBar,
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        [Dialog.Component.name]: Dialog.Component,
        [PullRefresh.name]:PullRefresh,
        [Popup.name]:Popup,
    },
    filters:{
        nameLast:function(value){
            if(value){
                let str = value.substring(0,1)
                let str1 = value.substring(value.length-1,value.length)
                return str + '*' + str1
            }else{
                return value
            }
        },
        tophone:function(value){
            if(value){
                let str = value.substring(0,3)
                let str1 = value.substring(value.length-4,value.length)
                return str + ' **** ' + str1
            }else{
                return value
            }
        }
    },
    created(){
        if(location.href.split('?')[1]){
            let urlArr = location.href.split('?')[1].split('&')
            this.phone = urlArr[0].split('=')[1]
            this.token = urlArr[1].split('=')[1]
            this.brandId = urlArr[2].split('=')[1]
            this.userId = urlArr[3].split('=')[1]
            let deviceId = urlArr[5].split('=')[1]
            localStorage.setItem('phone',this.phone)
            localStorage.setItem('token',this.token)
            localStorage.setItem('brandId',this.brandId)
            localStorage.setItem('userId',this.userId)
            localStorage.setItem('deviceId',deviceId)
        }else{
            this.phone = localStorage.getItem('phone')
            this.token = localStorage.getItem('token')
            this.brandId = localStorage.getItem('brandId')
            this.userId = localStorage.getItem('userId')
        }
        this.getConfig()
        this.getLuckUser()
        this.getuserLuck()
        this.getAmount()
    },
    methods: {
        onClickLeft(){
            this.$router.push({name:'index'})
        },
        onClickRight() {
            this.$toast({position:'bottom',message:'需要跳转活动规则页面'});
        },
        // 下拉刷新
        onRefresh(){
            setTimeout(() => {
                this.isLoading = false;
                this.getConfig()
                this.getLuckUser()
                this.getuserLuck()
                this.getAmount()
            }, 1000);
        },
        // 获取抽奖配置
        getConfig(){
            let _this = this
            queryFindall(_this.brandId)
            .then(res=>{
                // console.log(res,'111')
                if(res.resp_code == '000000'){
                    // _this.dataList = res.result
                    _this.productList = []
                    // _this.dataList.map((item,i)=>{
                    //     if(i == 0){
                    //         _this.productList.push(_this.dataList[0].id)
                    //     }
                    //     if(i == 1){
                    //         _this.productList.push(_this.dataList[1].id)
                    //     }
                    //     if(i == 2){
                    //         _this.productList.push(_this.dataList[2].id)
                    //     }
                    //     if(i == 3){
                    //         _this.productList.push(_this.dataList[4].id)
                    //     }
                    //     if(i == 4){
                    //         _this.productList.push(_this.dataList[7].id)
                    //     }
                    //     if(i == 5){
                    //         console.log('这是5')
                    //         _this.productList.push(_this.dataList[6].id)
                    //     }
                    //     if(i == 6){
                    //         _this.productList.push(_this.dataList[5].id)
                    //         return
                    //     }
                    //     if(i == 7){
                    //         _this.productList.push(_this.dataList[3].id)
                    //     }
                    // })
                    // for(let i = _this.productList.length;i< 9;i++){
                    //     _this.productList.push(i)
                    // }
                    res.result.forEach(item=>{
                        // if(item.state == 1 && item.prizeCount > 0){
                        //     _this.productList.push(item.id)
                        //     _this.dataList.push(item)
                        // }
                        _this.productList.push(item.id)
                        _this.dataList.push(item)
                    })
                    let num = _this.productList.length
                    for(let i = num;i<8;i++){
                        if(_this.productList.indexOf(num) > -1){
                            i--
                            num++
                        }else{
                            _this.productList.push(num)
                            let obj = {
                                'id':num,
                                'prizeName':'暂无奖品',
                            }
                            _this.dataList.push(obj)
                        }
                    }
                    // console.log(_this.productList,'商品')
                }else{
                    _this.$toast({position:'bottom',message:res.resp_message});
                }
            })
        },
        // 执行抽奖
        goLuck(){
            let _this = this
            if(this.isClick){
                this.isClick = false
                newLuckDraw(_this.brandId,_this.phone)
                .then(res=>{
                    // console.log(res)
                    if(res.resp_code == '000000' || res.resp_code == '100000'){
                        _this.luck = res.result.id
                        _this.userDraw = res.result
                        _this.roll()
                        _this.getuserLuck()
                        // _this.getConfig()
                    }else{
                        _this.$dialog({
                            title: '温馨提示',
                            message: res.resp_message
                        }).then(() => {
                        // on close
                            this.isClick = true
                        });
                    }
                })
            }else{

            }
        },
        roll(){
            // 速度衰减
            let _this = this
            _this.speed -= 70;
            if(_this.speed<=70){
                _this.speed=70;
            }
            _this.luckId = _this.productList[_this.i]
            let itemDom = document.querySelectorAll('.item')
            let tagDom = document.querySelectorAll('.tagItem')
            for(let i = 0;i<8;i++){
                itemDom[i].classList.remove('zhezhao')
            }
            // for(let i = 0;i<tagDom.length;i++){
            //     tagDom[i].classList.remove('huang')
            //     tagDom[i].classList.remove('hong')
            //     if(i%2 == this.i%2){
            //         tagDom[i].classList.add('huang')
            //     }else{
            //         tagDom[i].classList.add('hong')
            //     }
            // }
            itemDom[_this.domeList[_this.i]].classList.add('zhezhao')
            _this.i++
            if(_this.i>=_this.dataList.length){
                _this.i = 0;
                _this.count++;
            }
            if(_this.count>=4&&(_this.luckId)==_this.luck){
                // if(_this.userDraw.type != 1){
                //     // this.$dialog({
                //     //     title: '恭喜中奖！',
                //     //     message: '您的奖品为：'+this.userDraw.awardName
                //     // }).then(() => {
                //     //     // on close
                //     // });
                //     _this.luckPopup = true
                // }else{
                //     // this.$dialog({
                //     //     title: '很遗憾',
                //     //     message: this.userDraw.awardName+',请再接再厉！'
                //     // }).then(() => {
                //     //     // on close
                //     // });
                //     _this.noluckPopup = true
                // }
                // console.log(_this.userDraw,'userDraw')
                if(_this.userDraw.prizeType == 7){
                    _this.noluckPopup = true
                }else{
                    _this.luckPopup = true
                }
                        // _this.getConfig()
                clearTimeout(this.timer);
                _this.isClick=true;
                _this.count = 0;
                _this.speed=_this.minSpeed;
            }else{
                _this.timer = setTimeout(_this.roll,_this.speed);//不满足条件时调用定时器
                //最后一圈减速
                if(_this.count>=4||_this.speed<=70){
                    _this.speed+=90;
                }
            }
        },
        // 轮播图切换监听
        luckUserChange(index){
            console.log(index)
            if(index == (this.luckUserList.length-1)){
                // this.swiperIm = false
                this.$refs.luckSwiper.swipeTo(0,{'immediate':true})
                // this.swiperIm = true
            }
        },
        // 查询中奖人员
        getLuckUser(){
            let _this = this
            queryLucks(_this.brandId)
            .then(res=>{
                console.log(res)
                if(res.resp_code == '000000'){
                    _this.luckUserList = res.result.content
                }else if(res.resp_code == '000001'){
                    _this.luckUserList = res.result
                }else{
                    _this.$toast({position:'bottom',message:res.resp_message});
                }
            })
        },
        // 获取用户抽奖信息
        getuserLuck(){
            let _this = this
            queryUserAll(_this.userId)
            .then(res=>{
                // console.log(res)
                if(res.resp_code == '000000'){
                    _this.userCount = res.result
                }else{
                    _this.$toast({position:'bottom',message:res.resp_message});
                }
            })
        },
        // 跳转页面
        gonext(item){
            this.$router.push({name:item})
        },
        // 获取个人资产
        getAmount(){
            let _this = this
            getAccountQuery(_this.token)
            .then(res=>{
                // console.log(res)
                if(res.resp_code == '000000'){
                    _this.coin = res.result.coin
                }else{
                    _this.$toast({position:'bottom',message:res.resp_message});
                }
            })
        },
    }
}

</script>
<style scoped>
#lucky{
    /* background: url('../assets/index/luckybg.png') no-repeat;
    background-size: 100%; */
}
.main{
    padding-top: 47px;
    /* height: 914px; */
    box-sizing: border-box;
    /* background-color: #0f68c5; */
    /* background-image: url('../../assets/index/luckybg.png'); */
    /* background-repeat: no-repeat; */
    /* background-size: 100%; */
    background: linear-gradient(to bottom,#FFC637,#FF8108);
}
.content{
    width: 349px;
    height: 352px;
    margin: 27px auto 0;
    box-sizing: border-box;
    background: url('../../assets/index/contentbg.png') no-repeat;
    background-size: 100%;
    padding: 0 31px;
    position: relative;
}
.cont_header{
    width: 214px;
    height: 35px;
    background: url('../../assets/index/contheaderbg.png') no-repeat;
    background-size: 100%;
    margin: 0 auto;
    position: relative;
    top: -17px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
}
.cont_header img{
    width: 17px;
    height: 17px;
    margin-right: 10px;
}
.cont_top{
    height: 23px;
    line-height: 23px;
    text-align: center;
    font-size: 14px;
    color: #682711;
    margin-top: 7px;
    margin-bottom: 4px;
}
.top,.btm,.middle{
    display: flex;
    justify-content: space-around;
}
.item{
    width: 94px;
    height: 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background: #FFFFFF; */
    margin: 2px;
    border-radius: 10px;
    position: relative;
    background: url('../../assets/index/itembg.png') no-repeat;
    background-size: 100%;
}
.item1{
    width: 94px;
    height: 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background: #FFFFFF; */
    margin: 2px;
    border-radius: 10px;
    position: relative;
    background: url('../../assets/index/itembg.png') no-repeat;
    background-size: 100%;
}
.item img{
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
}
.item span{
    font-size: 9px;
}
.mo{
    background: url('../../assets/index/mobg.png') no-repeat;
    background-size: 100%;
    box-shadow: 0 1px 19px 20px rgba(255,234,97,0.64);
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 500;
}
.mo img{
    width: 78px;
    height: 78px;
}
.zhezhao{
    /* position: absolute; */
    /* top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    background: rgba(0,0,0,.2);
    /* border-radius: 10px; */
}
.header{
    width: 272px;
    margin: 51px auto 0;
}
.header img{
    width: 100%;
}
.guize{
    width: 105px;
    height: 25px;
    background: url('../../assets/index/guizebg.png') no-repeat;
    background-size: 100%;
    margin: 18px auto 38px;
}
.luckUserTop{
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #FDEA44;
    font-size: 20px;
    margin-bottom: 24px;
    font-weight: 600;
}
.luckTopItem{
    width: 107px;
    height: 2px;
    background: #FDEA44;
}
.luckUserCont{
    height: 255px;
}
.luckUserCont .van-swiper .van-swiper-item{
    height: 77px!important;
}
.luckItem{
    background: #FFFFFF;
    width: 320px;
    height: 77px;
    margin: 0 auto;
}
.luckItem{
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
}
.luckItemLeft{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 17px;
    box-sizing: border-box;
}
.luckItemLeft p{
    font-size: 16px;
    color: #000000;
    font-weight: 500;
}
.luckItemLeft span{
    font-size: 13px;
    color: #7C7B7B;
}
.luckItemRight{
    width: 77px;
    background: url('../../assets/index/itembg.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 9px;
}
.luckItemRight img{
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
}

.topTag{
    width: 349px;
    height: 33px;
    position: absolute;
    top: 37px;
    left: 0;
    box-sizing: border-box;
    display: flex;
    padding: 0 30px;
    justify-content: space-around;
    align-items: center;
}
.leftTag{
    height: 309px;
    width: 33px;
    position: absolute;
    top: 37px;
    left: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    justify-content: space-around;
    align-items: center;
}
.btmTag{
    width: 349px;
    height: 33px;
    position: absolute;
    bottom: 5px;
    left: 0;
    box-sizing: border-box;
    display: flex;
    padding: 0 30px;
    justify-content: space-around;
    align-items: center;
}
.rightTag{
    height: 309px;
    width: 33px;
    position: absolute;
    top: 37px;
    right: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    justify-content: space-around;
    align-items: center;
}
.tagItem{
    width: 9px;
    height: 9px;
    border-radius: 50%;
}
.hong{
    background: #FF0C0C;
}
.bai{
    background: #FFFFFF;
}
.huang{
    background: #FFEE37;
}
/* 中奖弹窗 */
.van-popup{
    background: none!important;
}
/* 中奖背景 */
.popupLuck{
    width: 375px;
    height: 334px;
    background: url('../../assets/index/luckPopup.png') no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
/* 未中奖背景 */
.nopopupLuck{
    width: 375px;
    height: 334px;
    background: url('../../assets/index/noluckPopup.png') no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.popupContent{
    width: 120px;
    height: 101px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 4px solid #FF7A00;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #FFFFFF;
    color: #121212;
    font-size: 13px;
    box-shadow: 0px 10px 20px 0px rgba(255,43,0,.2);
    margin-top: 130px;
}
.popupContent img{
    width: 69px;
    height: 47px;
    margin-bottom: 8px;
}
.popupLuckSub{
    width: 210px;
    height: 40px;
    background: linear-gradient(to right,#ff8d01,#fe3d1d);
    border-radius: 40px;
    text-align: center;
    line-height: 40px;
    color: #FFFFFF;
    font-size: 15px;
    margin-top: 40px;
    box-shadow: 0px 8px 10px 3px rgba(255,43,0,.2);
}
</style>