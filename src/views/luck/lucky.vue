<!-- 抽奖页面 -->
<template>
    <div id="lucky">
        <van-nav-bar
            title="抽奖"
            :left-arrow="false"
            fixed
            :border='false'
            />
      <div class="main">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
               <div class="box">
                 <LuckyWheel
                        ref="LuckyWheel"
                        width="300px"
                        height="300px"
                        :prizes="prizes"
                        :default-style="defaultStyle"
                        :blocks="blocks"
                        :buttons="buttons"
                        @start="startCallBack"
                        @end="endCallBack"
                    />
               </div>
            </van-pull-refresh>

            <!-- 中奖弹窗 -->
            <van-popup v-model="luckPopup">
                <div class="popupLuck">
                    <div class="popupContent">
                        <!-- <img :src="userDraw.imgUrl" alt=""> -->
                        
                    </div>
                    <div class="popupLuckSub" @click="gonext('myOrder')">立即查看</div>
                </div>
            </van-popup>
            
            <!-- 未中奖弹窗 -->
            <van-popup v-model="noluckPopup">
                <div class="nopopupLuck">
                    <div class="popupContent">
                        <!-- <img :src="userDraw.imgUrl" alt=""> -->
                       
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
import { LuckyWheel } from 'vue-luck-draw'
import { NavBar , Swipe, SwipeItem , Dialog , PullRefresh , Popup } from 'vant';
export default {
  data () {
    return {
      luckPopup:false,
      noluckPopup:false,
      isLoading:false,
      prizes: [],
      defaultStyle: {
        fontColor: '#d64737',
        fontSize: '14px'
      },
      blocks: [
        { padding: '13px', background: '#d64737' }
      ],
      buttons: [
        // { radius: '50px', background: '#d64737' },
        // { radius: '45px', background: '#fff' },
        // { radius: '41px', background: '#f6c66f', pointer: true },
        {
          radius: '35px', background: '#ffdea0',
          imgs: [{ src: require('@/assets/zhi.png'), width: '100%', top: '-150%' }]
        }
      ],
    }
  },
  components:{
        [NavBar.name]:NavBar,
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        [Dialog.Component.name]: Dialog.Component,
        [PullRefresh.name]:PullRefresh,
        [Popup.name]:Popup,
        LuckyWheel
  },
  mounted () {
    this.getPrizesList()
  },
  methods: {
    onRefresh(){

    },
    getPrizesList () {
      const prizes = []
      let data = ['1元红包', '100元红包', '0.5元红包', '2元红包', '10元红包', '50元红包', '0.3元红包', '5元红包']
      data.forEach((item, index) => {
        prizes.push({
          title: item,
          background: index % 2 ? '#f9e3bb' : '#f8d384',
          fonts: [{ text: item, top: '10%' }],
        //   imgs:[{ src:item, width: '30%', top: '35%' }],
        })
      })
      this.prizes = prizes
    },
    startCallBack () {
      this.$refs.LuckyWheel.play()
      setTimeout(() => {
          console.log(Math.random() * 8 >> 0)
        this.$refs.LuckyWheel.stop(Math.random() * 8 >> 0)
      }, 3000)
    },
    endCallBack (prize) {
      alert(`恭喜你获得${prize.title}`)
    },
  }
}
</script>
<style scoped>
#lucky{
    padding: 60px 15px 15px 15px;
    background: #fff;
}
.box{
     border: 1px solid #aaa;
     
}

</style>