<!-- 添加收货地址 -->
<template>
    <div>
        <van-nav-bar
            :title="title+'收货地址'"
            left-arrow
            fixed
            :border='false'
            @click-left="onClickLeft"
            />
        <div class="main">
                <van-address-edit
                :area-list="areaList"
                :show-postal="false"
                :address-info="address"
                show-set-default
                show-search-result
                :search-result="searchResult"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
                />
        </div>
    </div>
</template>

<script>
import { NavBar , PullRefresh , AddressEdit , Dialog } from 'vant'
import areaList from '@/components/area'
import { addTheAddress , updateAddress } from '@/api/memberData'
export default {
    data () {
        return {
            isLoading:false,
            areaList:areaList,
            searchResult:[],
            brandId:'',
            userId:'',
            phone:'',
            address:{},
            title:'添加',
        };
    },
    components:{
        [NavBar.name]:NavBar,
        [PullRefresh.name]:PullRefresh,
        [AddressEdit.name]:AddressEdit,
        [Dialog.Component.name]: Dialog.Component,
    },
    created(){
        this.brandId = localStorage.getItem('brandId')
        this.userId = localStorage.getItem('userId')
        this.phone = localStorage.getItem('phone')
        if(localStorage.getItem('address')){
            let address = JSON.parse(localStorage.getItem('address'))
            this.address.name = address.receiver
            this.address.tel = address.receiverPhone
            this.address.areaCode = address.areaCode
            this.address.addressDetail = address.detailedAddress
            this.address.isDefault = address.default
            this.address.id = address.id
            console.log(this.address)
            this.title = '修改'
        }
    },
    methods: {
        onClickLeft(){
            window.history.go(-1)
        },
        // 下拉刷新
        onRefresh(){
            setTimeout(() => {
                // this.$toast('刷新成功');
                this.isLoading = false;
            }, 1000);
        },
        onSave(val) {
            console.log(val)
            let _this = this
            if(this.title == '添加'){
                addTheAddress(_this.brandId,_this.userId,_this.phone,val.name,val.tel,val.province,val.city,val.county,val.addressDetail,val.isDefault,val.areaCode)
                .then(res=>{
                    console.log(res)
                    if(res.resp_code == '000000'){
                        _this.$toast({position:'bottom',message:res.resp_message});
                        _this.$router.push({name:'address'})
                    }else{
                        _this.$toast({position:'bottom',message:res.resp_message});
                    }
                })
            }else{
                Dialog.confirm({
                    title: '温馨提示',
                    message: '是否修改此收货地址？'
                }).then(() => {
                    // on confirm
                    let item = this.address
                    updateAddress(item.id,val.name,val.tel,val.province,val.city,val.county,val.addressDetail,val.isDefault,'',val.areaCode)
                    .then(res=>{
                        console.log(res)
                        if(res.resp_code == '000000'){
                            _this.$toast({position:'bottom',message:res.resp_message});
                            _this.$router.push({name:'address'})
                        }else{
                            _this.$toast({position:'bottom',message:res.resp_message});
                        }
                    })
                }).catch(() => {
                    // on cancel
                });
            }
        },
        onDelete() {
            
        },
        onChangeDetail(val) {
            console.log(val)
        }
    }
}

</script>
<style scoped>
.main{
    padding-top: 52px;
}
.van-switch--on{
    background-color: #FEE500!important;
}
</style>