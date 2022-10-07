<!-- 订单 -->
<template>
  <div class="register_bg">
    <!-- <div class="bg_btn" @click="registerTrueFalseBy = true">立即下载</div> -->

    <van-popup v-model="registerTrueFalseBy" round class="register">
      <div class="register_box">
        <div class="logo">
          <img src="../../assets/register/logo.png" alt="" />
        </div>
        <ul class="list">
          <li class="item">
            <div class="title">手机号</div>
            <div class="input">
              <div class="left">
                <img src="../../assets/register/phone_icon.png" alt="" />
              </div>
              <div class="right">
                <van-field
                  class="ra"
                  v-model="rphone"
                  clearable
                  placeholder="请输入手机号"
                />
              </div>
            </div>
          </li>
          <li class="item">
            <div class="title">密码</div>
            <div class="input">
              <div class="left">
                <img src="../../assets/register/phone_icon.png" alt="" />
              </div>
              <div class="right">
                <van-field
                  class="ra"
                  v-model="password"
                  clearable
                  placeholder="请输入密码"
                />
              </div>
            </div>
          </li>
          <li class="item">
            <div class="title">验证码</div>
            <div class="input">
              <div class="left">
                <img src="../../assets/register/v_code_icon.png" alt="" />
              </div>
              <div class="right">
                <van-field
                  class="ra"
                  v-model="sms"
                  center
                  clearable
                  placeholder="请输入短信验证码"
                >
                  <template #button>
                    <!-- <van-button type="primary" size="small" slot="button" :color="num==60?'#08C416':'#08C416'" loading-type="spinner" :loading="num==60?false:true" :loading-text="num==60?message:message" @click="getCode()">获取验证码</van-button> -->
                    <div
                      class="sms"
                      @click="message == '获取验证码' ? getCode() : ''"
                    >
                      {{ message }}
                    </div>
                  </template>
                </van-field>
              </div>
            </div>
          </li>
        </ul>

        <!-- <div @click="toDownLoad" style="margin-top:20px;font-size:14px" class="sms">我已注册，立即下载</div> -->
        <div class="btn" @click="_register()">立即注册</div>
        <!-- <a class="btn2" @click="directDown()">已有账号？直接下载</a> -->
      </div>
    </van-popup>
  </div>
</template>
<script>
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
      brandId: 100,
      userId: "",
      ip: "",
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
      registerTrueFalseBy: true,
      sms: "",
      rphone: "",
      num: 60,
      message: "获取验证码",
      prePhone: "",
      password: "",
    };
  },
  created() {
    localStorage.clear();
    // if (!localStorage.getItem("token")) {
    if (location.href.split("?").length > 0) {
          let urlArr = location.href.split("?")[1].split("&");
    this.prePhone = urlArr[0].split("=")[1];
    this.brandId = urlArr[1].split("=")[1];
    }

    // sessionStorage.setItem("brandId", this.brandId);
    // localStorage.setItem("token", this.token);

    //     } else {
    //     this.phone = localStorage.getItem("phone");
    //     this.token = localStorage.getItem("token");
    //     this.brandId = localStorage.getItem("brandId");
    //     this.userId = localStorage.getItem("userId");
    //     this.ip = localStorage.getItem("ip");
    //  }
    //  this.formatDateTime(new Date())
    //  this.getbankIcon()
    // this.getData()
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
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
    // 获取验证码
    getCode() {
      let _this = this;
      if (_this.rphone == "") {
        _this.$toast({ message: "请输入手机号", position: "bottom" });
      } else if (_this.rphone.length != 11) {
        _this.$toast({
          message: "请确认手机号的格式是否正确",
          position: "bottom",
        });
      } else {
        authPhone(this.brandId, this.rphone).then((res) => {
          if (res.resp_code == "000000") {
            //用户已注册，注册了，直接跳下载页面
            this._getDownload();
          } else {
            //用户未注册，发送验证码
            smsSend(_this.brandId, _this.rphone).then((res) => {
              // console.log(res)
              if (res.resp_code == "000000") {
                let timer = setInterval(() => {
                  _this.message = "(" + _this.num + ")秒";
                  _this.num--;
                  // console.log(_this.num);
                  if (_this.num == 0) {
                    clearInterval(timer);
                    _this.num = 60;
                    _this.message = "获取验证码";
                  }
                }, 1000);
              }
              _this.$toast({ message: res.resp_message, position: "bottom" });
            });
          }
        });
      }
    },
    directDown() {
      if (!this.rphone) {
        this._getDownload();
      } else {
        this._authPhone();
      }
    },
    _register() {
          if (this.password == "") {
            this.$toast({ message: "请设置密码", position: "bottom" });
            return;
          }
          if (this.sms == "") {
            this.$toast({ message: "请先获取验证码", position: "bottom" });
            return;
          }
          register(
            this.brandId,
            this.rphone,
            this.sms,
            this.prePhone,
            this.password
          ).then((res) => {
            if (res.resp_code == "000000") {
              this.$toast({ message: "注册成功", position: "bottom" });
              this._getDownload();
            }else{
              this.$toast({ message: res.resp_message, position: "bottom" });
            }
          });
    },
    // _authPhone() {
    //     authPhone(this.brandId, this.rphone).then((res) => {
    //       console.log(res, "验证手机号是否注册");
    //       if (res.resp_code == "000000") {
    //         this._getDownload()
    //         // this.$router.push("/down");
    //       } else {
    //           if (this.password == "") {
    //           this.$toast({ message: "请设置密码", position: "bottom" });
    //           return;
    //         }
    //         if (this.sms == "") {
    //           this.$toast({ message: "请先获取验证码", position: "bottom" });
    //           return;
    //         }
    //         register(this.brandId, this.rphone, this.sms, this.prePhone,this.password).then(
    //           (res) => {
    //             if (res.resp_code == "000000") {
    //               this.$toast({ message: "注册成功", position: "bottom" });
    //               // this.$router.push("/down");
    //               this._getDownload()
    //             }
    //           }
    //         );
    //       }
    //     });
    // },
    toDownLoad() {
      this._getDownload();
    },
    _getDownload() {
      getDownload(this.brandId).then((res) => {
        console.log(res, "获取下载链接");
        if (res.resp_code == "000000") {
          var u = navigator.userAgent,
            app = navigator.appVersion;
          var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //g
          var isIOS = u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
          if (isAndroid) {
            console.log("isAndroid");
            if (
              res.result.downloadAndroidUrl != null &&
              res.result.downloadAndroidUrl != ""
            ) {
              // window.location.href = res.result.android.url;

               window.location.href = res.result.downloadAndroidUrl;
            } else {
              this.$toast({ message: "当前无下载链接", position: "bottom" });
            }
          }

          if (isIOS) {
            if (res.result.iOS.url != null && res.result.iOS.url != "") {
               window.location.href = res.result.iOS.url;
              //  this.$router.push({path:"/register",query: { downurl: res.result.iOS.url}});
            } else {
              this.$toast({ message: "当前无下载链接", position: "bottom" });
            }
          }
        }
      });
    },
  },
};
/*  */
</script>
<style scoped>
.register_bg {
  height: 100vh;
  /* height: 825px; */
  width: 100%;
  background: url("../../assets/register/bg.png") center no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.bg_btn {
  width: 296px;
  height: 44px;
  background: #ffffff;
  box-shadow: 0px 3px 8px 0px rgba(93, 32, 0, 0.2);
  border-radius: 22px;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: #9B3C9D;
  font-size: 20px;
  line-height: 44px;
  text-align: center;
}
.register.van-popup {
  overflow-y: unset !important;
  /* background-color: rgb(3, 4, 36); */
}
.register_box {
  width: 275px;
  position: relative;
  z-index: 10000;
}
.logo {
  height: 60px;
  width: 100%;
}
.logo > img {
  height: 70px;
  width: 70px;
  text-align: center;
  margin-top: -30px;
  background: #fff;
  border-radius: 50%;
}
.list {
  font-size: 14px;
  padding: 0 35px;
}
.item .title {
  color: #9B3C9D;
  text-align: left;
  padding-top: 10px;
}
.input {
  border-bottom: 2px solid #9B3C9D;
  display: flex;
}
.input .left {
  width: 30px;
}
.input .left img {
  height: 24px;
  width: 24px;
  margin-top: 8px;
}
.btn {
  width: 230px;
  height: 40px;
  background: #9B3C9D;
  border-radius: 29px;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-weight: 500;
  margin: 30px auto 10px auto;
}
.btn2 {
  display: inline-block;
  font-size: 14px;
  text-align: center;
  color: blue;
  margin-bottom: 30px;
}
.sms {
  color: #9B3C9D;
}
/* .ra{
    border-radius: 30px;
} */
</style>