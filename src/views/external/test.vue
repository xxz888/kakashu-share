<template>
  <div class="box" v-drag>
     {{positionX}}
     {{positionY}}
  </div>
</template>
<script>
export default {
  data(){
    return{
      positionX:'',
      positionY:''
    }
  },
  methods:{
    // move(e){
    //   let odiv=e.target;
    //   let disX = e.clientX - odiv.offsetLeft;
    
    //   let disY = e.clientY - odiv.offsetTop;
    //   document.onmousemove = e =>{
    //     let left = e.clientX - disX
    //     let top = e.clientY - disY
    //     this.positionX = left
    //     this.positionY = top

    //     odiv.style.left = left +'px'
    //     odiv.style.top = top+'px'
    //   }

    //   document.onmouseup = e =>{
    //        document.onmousemove = null;
    //         document.onmouseup = null;
    //   }
    // }
  }
}
</script>
<style scoped>
.box {
  text-align: left !important;
  width: 100px;
  height: 100px;
  padding: 0px 20px 60px 20px ;
  background-color: #fff;
  position: relative;
  cursor: pointer;
}

</style>