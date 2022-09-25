<!--  -->
<template>
    <div>
        <van-nav-bar
            :title="title"
            left-arrow
            fixed
            :border='false'
            @click-left="onClickLeft"
            />
            <div class="main">
                <iframe width="100%" height="96%" style="position:relative" frameborder="0" :src="url" ></iframe>
            </div>
    </div>
</template>

<script>
import { NavBar } from 'vant'
export default {
    data () {
        return {
            title:'',
            url:''
        };
    },
    components:{
        [NavBar.name]:NavBar,
    },
    created(){
        this.title = JSON.parse(this.$route.params.title)
        this.url = JSON.parse(this.$route.params.url)
    },
    methods: {
        onClickLeft(){
            window.history.go(-1)
        },
    }
}

</script>
<style scoped>
.main{
    padding-top: 47px;
    height: 100vh;
    box-sizing: border-box;
}
</style>