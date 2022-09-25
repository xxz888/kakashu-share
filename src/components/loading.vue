<template>
    <div class="loading">
        <van-loading style="z-index:999" type="spinner" color="#FC5845" />
        <p>加载中...</p>
    </div>
</template>
 
<script>
import { Loading } from 'vant';
export default {
    name: 'LOADING',
    data () {
        return {}
    },
    components:{
        [Loading.name]:Loading,
    }
}
</script>
<style scoped>
  .loading{
    position: fixed;
    top:0;
    left:0;
    z-index:10000;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    /* display: table-cell;
    vertical-align: middle;
    text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  /* .loading img{
  	width: 1rem;
  	height: 1rem;
    margin:7.5rem auto;
  } */
  p{
      color: #FC5845;
    margin-top: 10px;
  }
</style>