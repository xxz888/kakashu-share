<!-- 没有收货地址 -->
<template>
    <div id="noaddress">
        <img src="../assets/noaddress.png" alt="">
        <!-- <span>您还没有收货地址哦~</span> -->
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
    height: 100vh;
    background: #FFFFFF;
}
#noaddress img{
    width: 238px;
    height: 263px;
    margin-bottom: 39px;
}
</style>