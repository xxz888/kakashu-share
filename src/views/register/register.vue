<!-- 订单 -->
<template>
  <div>
    <div class="main">
      <div class="right_top_box">
        <img
          class="right_top"
          src="../../assets/register/right_top.png"
          alt=""
        />
      </div>

      <ul class="ul">
        <li>请点击右上角“···”，在浏览器打开此页面。</li>
      </ul>
      <div class="tips">（备注：苹果手机用户请在Safari中打开此页面）</div>
        
      <ul class="ul">
        <li>或手动复制链接至Safari浏览器</li>
      </ul>
      
      <span class="span1">{{ linkAddress }}</span>
      <el-button
        type="text"
        class="btn"
        :data-clipboard-text="linkAddress"
        @click="copy"
        >【点击复制】
      </el-button>
    </div>
  </div>
</template>
<script>
import Clipboard from "clipboard";
import {
  NavBar,
  DropdownMenu,
  DropdownItem,
  PullRefresh,
  List,
  Empty,
  Popup,
  Field,
} from "vant";
import { authPhone, smsSend, getDownload, register } from "@/api/register";
export default {
  data() {
    return {
      scrollTop: 0, //滚动位置
      phone: "",
      token: "",
      brandId: "",
      userId: "",
      ip: "",
      linkAddress: "",
      active: {
        activeCountRecord: 0,
        inviteCount: 0,
        realNameCountRecord: 0,
      },
      direct: {
        directPushAcitveCount: 0,
        directPushCount: 0,
        stagePushAcitveCount: 0,
        stagePushCount: 0,
        twoStagePushAcitveCount: 0,
        twoStagePushCount: 0,
      },
      yearList: [],
      yaer: "",
      month: "",
      monthList: [
        { text: "01月", value: "01" },
        { text: "02月", value: "02" },
        { text: "03月", value: "03" },
        { text: "04月", value: "04" },
        { text: "05月", value: "05" },
        { text: "06月", value: "06" },
        { text: "07月", value: "07" },
        { text: "08月", value: "08" },
        { text: "09月", value: "09" },
        { text: "10月", value: "10" },
        { text: "11月", value: "11" },
        { text: "12月", value: "12" },
      ],
      type: 2,
      payList: [],
      dateTime: "", //当前时间
      bankIconList: [],
      quickList: [],
      isLoading: false,
      isupLoading: false,
      finished: false,
      totalElements: 0,
      page: 1,
      size: 20,
      registerTrueFalseBy: false,
      sms: "",
      rphone: "",
      num: 60,
      message: "获取验证码",
      prePhone: "",
      registerTrue: false,
      ip: "caderapi.caderworld.com",
    };
  },
  created() {
    this.linkAddress =  this.$route.query.downurl;


    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf("micromessenger") != -1;
    console.log(isWeixin);
    if (!isWeixin) {
      this.registerTrue = true;
      let urlArr = location.href.split("?")[1].split("&");
      this.prePhone = urlArr[0].split("=")[1];
      this.brandId = urlArr[1].split("=")[1];
      this.ip = urlArr[2].split("=")[1];
      this.$router.push({
        path: "/register",
        query: { phone: this.prePhone, brandId: this.brandId, ip: this.ip },
      });
    } else {
      this.registerTrue = true;
    }
  },

  components: {
    [NavBar.name]: NavBar,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    [Empty.name]: Empty,
    [Popup.name]: Popup,
    [Field.name]: Field,
  },
  methods: {
    copy: function () {
      var _this = this;
      var clipboard = new Clipboard(".btn"); //单页面引用
      clipboard.on("success", (e) => {
        this.$toast({ message: "已将链接复制到剪切板", position: "bottom" });
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", (e) => {
        // 不支持复制
        Message({
          message: "该浏览器不支持自动复制",
          type: "warning",
        });
        // 释放内存
        clipboard.destroy();
      });
    },
  },
};
/*  */
</script>
<style scoped>
.right_top_box {
  width: 100%;
  text-align: right;
  padding-bottom: 10px;
}
.right_top {
  width: 129px;
  height: 96px;
}
.main {
  padding-top: 47px;
  height: 100vh;
  box-sizing: border-box;
  font-size: 14px;
  text-align: left;
  padding: 47px 15px 20px 15px;
  color: #fff;
  line-height: 28px;
  background: rgba(0, 0, 0, 0.8);
  /* display: none; */
}
.tips {
  color: #fff;
  font-size: 13px;
  padding-bottom: 30px;
}
.ul li {
  list-style: none;
  padding-left: 10px;
}

.span1 {
  word-break: normal;
  width: auto;
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  word-spacing: 5px;
  margin-bottom: 10px;
  margin-left: 10px;
}
.btn{
  margin-left: 2px;
}
</style>