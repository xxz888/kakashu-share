<template>
    <div>
         <van-nav-bar title="卡德中国"   />
       
     
	 
	   <div class="china">
	   <chaina></chaina>
	     
            
           
        </div>
		
	   <div> 
		     <th>卡德中国</th>
               <th>拟设立机构区域</th>
               <th>已设立机构区域</th>
		   <chaintab :region='region'></chaintab>
	   </div>



    </div>
</template>
<script>
import '@/assets/kade/gongzhong.less'
import {NavBar,Icon} from 'vant'
import chaina from '@/components/external/chaina';
import chaintab from '@/components/external/table'
export default {
	data(){
		return{
			isLoading:false,
			region:[

				{province:'北京',city:'北京',districts:''},
				{province:'上海',city:'上海',districts:'上海青浦区'},
				{province:'天津',city:'天津',districts:''},
				{province:'重庆',city:'重庆',districts:''},
				{province:'广东省',city:'广州市、深圳市、东莞市、佛山市、汕头市、揭阳市、中山市、江门市、珠海市',districts:'惠州市、阳江市，佛山市禅城区'},
				{province:'山东省',city:'济南市、烟台市、济宁市、聊城市、淄博市、菏泽市、泰安市',districts:'青岛市黄岛区、临沂市、潍坊市'},
				{province:'河南省',city:'南阳市、新乡市、商丘市、安阳市、驻马店市、平顶山市、许昌市、开封市',districts:'郑州市、洛阳市、焦作市'},
				{province:'江苏省',city:'苏州市、南京市、无锡市、常州市、南通市、泰州市、连云港市、扬州市',districts:'徐州市、盐城市'},
				{province:'河北省',city:'石家庄市、唐山市、邯郸市、廊坊市、邢台市、沧州市、张家口市、秦皇岛市',districts:'保定市竞秀区、衡水市桃城区'},
				{province:'四川省',city:'绵阳市、宜宾市、达州市、凉山彝族自治州、南充市、泸州市、眉山市、德阳市、乐山市',districts:'成都市'},
				{province:'浙江省',city:'宁波市、温州市、金华市、台州市、嘉兴市、绍兴市、湖州市、衢州市、丽水市',districts:'杭州临平、杭州城东、杭州城北、温州乐清市'},
				{province:'安徽省',city:'合肥市、黄山市、芜湖市、滁州市、阜阳市、六安市、安庆市、宣城市、亳州市、宿州市',districts:''},
				{province:'湖南省',city:'长沙市、岳阳市、怀化市、衡阳市、株洲市、永州市、常德市、邵阳市、郴州市、益阳市',districts:''},
				{province:'湖北省',city:'武汉市、宜昌市、荆州市、黄冈市、孝感市、十堰市、黄石市、恩施土家族苗族自治州、荆门市',districts:'襄阳市'},
				{province:'山西省',city:'太原市、忻州市、临汾市、运城市、晋中市、长治市、吕梁市、晋城市、大同市、阳泉市',districts:''},
				{province:'福建省',city:'泉州市、厦门市、宁德市、漳州市、莆田市、南平市、龙岩市、三明市',districts:'福州市'},
				{province:'陕西省',city:'西安市、咸阳市、安康市、榆林市、宝鸡市、渭南市、汉中市、延安市、商洛市、铜川市',districts:''},
				{province:'辽宁省',city:'沈阳市、大连市、鞍山市、锦州市、营口市、葫芦岛市、丹东市、铁岭市、抚顺市、盘锦市',districts:''},
				{province:'云南省',city:'昆明市、玉溪市、大理白族自治州、红河哈尼族彝族自治州、楚雄彝族自治州、普洱市临沧市、曲靖市、西双版纳傣族自治州、昭通市',districts:''},
				{province:'江西省',city:'南昌市、赣州市、九江市、上饶市、吉安市、萍乡市、景德镇市、鹰潭市、新余市、抚州市',districts:''},
				{province:'广西省',city:'南宁市、崇左市、桂林市、柳州市、河池市、北海市、百色市、贵港市、钦州市',districts:'玉林市'},
				{province:'黑龙江省',city:'佳木斯市、绥化市、鸡西市、大庆市、牡丹江市、齐齐哈尔市、双鸭山市、鹤岗市、大兴安岭地区',districts:'哈尔滨市、长春市'},
				{province:'甘肃省',city:'兰州市、武威市、平凉市、白银市、酒泉市、陇南市、庆阳市、天水市、临夏回族自治州',districts:'张掖市'},
				{province:'内蒙古自治区',city:'呼和浩特市、赤峰市、包头市、鄂尔多斯市、通辽市、兴安盟乌兰察布市、呼伦贝尔市、巴彦淖尔市、乌海市',districts:''},
				{province:'贵州省',city:'贵阳市、遵义市、毕节市、黔南布依族苗族自治州、黔东南苗族侗族自治州、安顺市、六盘水市、铜仁市、黔西南布依族苗族自治州',districts:''},
				{province:'新疆维吾尔族自治区',city:'乌鲁木齐市、喀什地区伊犁市、昌吉回族自治州石河子市、哈密市、阿克苏地区克拉玛依市、巴音郭楞蒙古自治州、阿勒泰地区',districts:'新疆阿克陶'},
				{province:'青海',city:'西宁市、黄南藏族自治州、海南藏族自治州',districts:''},
				{province:'宁夏回族自治区',city:'银川市、中卫市、吴忠市、固原市',districts:''},
				{province:'海南',city:'海口市、儋州市、三亚市文昌市、五指山市、澄迈县市、乐东黎族自治县市、临高县市、屯昌县市',districts:''},
				{province:'西藏自治区',city:'那曲地区、拉萨市',districts:''},
				]
		}
	},
    components:{
        [NavBar.name]:NavBar,
		[Icon.name]:Icon,
		chaina,
		chaintab
    },
    methods:{
        onClickLeft(){
             this.publicJs.back();
        },
		
    }
}
</script>
<style scoped>
th{
	font-size: 15px;
	padding: 7px 12px;
	
}
</style>