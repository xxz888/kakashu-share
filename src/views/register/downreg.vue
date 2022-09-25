
<template>
  <div>
    <down
      :ve="ve"
      :version="moduel.version"
      @down="_getDownload"
      :datatime="moduel.datatime"
      :content="moduel.content"
    ></down>

    <div
      v-show="registerTrueFalseBy"
      class="ze"
      @click="registerTrueFalseBy = false"
    >
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
    </div>
  </div>
</template>

<script>
import browser from "./browser";
import axios from "../../utils/api";
import down from "../../components/down";
import { authPhone, smsSend, getDownload, register } from "@/api/register";
export default {
  data() {
    return {
      moduel: {},
      ve: "",
      registerTrueFalseBy: false,
      browser,
      isversion: null,
      content: null,
    };
  },
  components: {
    down,
  },
  methods: {
         panduan(){
          if (this.browser.versions.android) {
            this.ve = `Android`;
            this.isversion = 1;
            
          }
          if (this.browser.versions.ios) {
            this.ve = `Ios`;
            this.isversion = 2;
          }
          
         },


    async DownloadVersion() {


      if (this.browser.versions.mobile) {

        let ua = window.navigator.userAgent.toLowerCase(); //获取判断用的对象

        if (ua.match(/MicroMessenger/i) == "micromessenger") {//在微信中打开

          this.registerTrueFalseBy = true;
          this.panduan()

        }else{
          this.panduan()
        }
      } else {
        this.ve = `Android`;
        this.isversion = 1;

        this.$toast({
          message: "请在手机浏览器打开此页面",
          position: "bottom",
        });
      }

      let res = await axios.get(
        `user/app/download2?phoneModel=${this.isversion}`
      );
      this.moduel = res.data.result;
      this.moduel.content = res.data.result.content.split("，");
    },

    _getDownload() {
      if (this.moduel.url != null && this.moduel.url != "") {
        debugger
        window.location.href = this.moduel.url;
      } else {
        this.$toast({ message: "当前无下载链接", position: "bottom" });
      }
    },
  },
  created: function () {
    this.DownloadVersion();
  },
};
</script>
<style scoped>
.ze {
  z-index: 99999;
  position: fixed;
  top: 0vw;
  left: 0vw;
  bottom: 0vw;
  right: 0vw;
  background-color: rgba(0, 0, 0, 0.507);
  width: 100%;
  height: 100%;
}
.tips {
  color: #fff;
  font-size: 3.611vw;
  padding-bottom: 8.333vw;
}
.ul li {
  list-style: none;
  padding-left: 2.778vw;
  color: #fff;
}
.right_top_box {
  width: 100%;
  text-align: right;
  padding-bottom: 2.778vw;
}
.right_top {
  width:36.111vw;
  height: 26.667vw;
  margin-right:4.444vw;
  margin-top: 1.389vw;
}
</style>
