<!-- 没有收货地址 -->
<template>
    <div id="noaddress">
        <img src="../assets/nodata.png" alt="">
        <span>暂无数据~</span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        };
    },

    methods: {}
}

</script>
<style scoped>
#noaddress{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 15px;
    color: #A4A4A4;
    height: 80vh;
    background: #FFFFFF;
}
#noaddress img{
    width: 238px;
    height: 169px;
    margin-bottom: 39px;
}
</style>