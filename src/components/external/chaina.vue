<template>
    <div>
        <div class="map-service">
	<div class="map-service-right">
		<div class="china-map">

		<div class="region-list active postition-1 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-01"></span>
					<span class="pulse delay-02"></span>
					<span class="pulse delay-03"></span></div>
				<div class="show-regin"><span>山东</span></div>
			</div>
			<div class="region-list active postition-2 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-02"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-04"></span></div>
				<div class="show-regin"><span>广东</span></div>
			</div>

			<!-- <div class="region-list postition-3">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-03"></span>
					<span class="pulse delay-02"></span>
					</div>
			</div> -->

			<div class="region-list active postition-3 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-08"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-04"></span></div>
				<div class="show-regin"><span>黑龙江</span></div>
			</div>

			<div class="region-list active postition-4 	 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-04"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-04"></span></div>
				<div class="show-regin"><span>江苏</span></div>
			</div>
			
		
			<div class="region-list waite postition-5 waite-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-05"></span>
					<span class="pulse delay-02"></span>
					</div>
				<div class="show-regin"><span>杭州</span></div>
			</div>

			<div class="region-list active postition-6 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-06"></span></div>
				<div class="show-regin"><span>河北</span></div>
			</div>

			<div class="region-list  postition-7 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-07"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-04"></span></div>
				<div class="show-regin"><span>新疆</span></div>
			</div>
			
		
			<div class="region-list active postition-8 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-08"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-04"></span></div>
				<div class="show-regin"><span>河南</span></div>
			</div>

			<div class="region-list  postition-9 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-09"></span>
					<span class="pulse delay-08"></span>
					<span class="pulse delay-09"></span></div>
				<div class="show-regin"><span>甘肃</span></div>
			</div>

			<div class="region-list  postition-10 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-10"></span>
					<span class="pulse delay-09"></span>
					<span class="pulse delay-05"></span></div>
				<div class="show-regin"><span>四川</span></div>
			</div>

			<div class="region-list  postition-11 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-11"></span>
					<span class="pulse delay-09"></span>
					<span class="pulse delay-05"></span></div>
				<div class="show-regin"><span>湖北</span></div>
			</div>
			
			<div class="region-list  postition-12 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-1"></span>
					<span class="pulse delay-09"></span>
					<span class="pulse delay-05"></span></div>
				<div class="show-regin"><span>福建</span></div>
			</div>
			<div class="region-list  postition-13 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-3"></span>
					<span class="pulse delay-09"></span>
					<span class="pulse delay-05"></span></div>
				<div class="show-regin"><span>广西</span></div>
			</div>
		
		
		
	
		</div>
	</div>
</div>
    </div>
</template>
<style scoped>
body{
background-color: #fff;
}
*{margin:0;padding:0;list-style-type:none;}
a,img{border:0;text-decoration:none;}

.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}
*html .clearfix{height:1%}

.map-service{position:relative;background:url(../../assets/kade/map_balck_whole_bg.jpg) center no-repeat;height: 300px;}
.map-service-right{margin-left:80px;}
.china-map{ width: 100%; height:220px;background:url(../../assets/kade/map_black_bg.png) center no-repeat; background-size: 300px 220px; position: absolute; left: 0px; top: 60px;}
.region-list{position:absolute;left:0;top:0}

@-webkit-keyframes warn{
0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}
100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}
}
@-moz-keyframes warn{
0%{-moz-transform:scale(0);transform:scale(0);opacity:1}
100%{-moz-transform:scale(1);transform:scale(1);opacity:0}
}
@-o-keyframes warn{
0%{-o-transform:scale(0);transform:scale(0);opacity:1}
100%{-o-transform:scale(1);transform:scale(1);opacity:0}
}
@keyframes warn{
0%{-webkit-transform:scale(0);-moz-transform:scale(0);-o-transform:scale(0);transform:scale(0);opacity:1}
100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);opacity:0}
}
.area-box .dot{position:absolute;left:0;width:5px;height:5px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#a2a9b4;opacity:1;filter:alpha(opacity=100)}
.area-box .pulse{position:absolute;top:-22px;left:-23px;height:50px;width:50px;border:2px solid #b7b7b7;-webkit-border-radius:48px;-moz-border-radius:48px;border-radius:48px;-webkit-box-shadow:0 0 4px #82878f,0 0 10px #82878f inset;-moz-box-shadow:0 0 4px #82878f,0 0 10px #82878f inset;box-shadow:0 0 4px #82878f,0 0 10px #82878f inset;opacity:.12;filter:alpha(opacity=0);-webkit-animation:warn 2s ease-out both;-moz-animation:warn 2s ease-out both;-o-animation:warn 2s ease-out both;animation:warn 2s ease-out both;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-o-animation-iteration-count:infinite;animation-iteration-count:infinite;background:0 0}
.area-box .delay-01{-webkit-animation-delay:0;-moz-animation-delay:0;-o-animation-delay:0;animation-delay:0}
.area-box .delay-02{-webkit-animation-delay:.4s;-moz-animation-delay:.4s;-o-animation-delay:.4s;animation-delay:.4s}
.area-box .delay-03{-webkit-animation-delay:.8s;-moz-animation-delay:.8s;-o-animation-delay:.8s;animation-delay:.8s}
.area-box .delay-04{-webkit-animation-delay:1.2s;-moz-animation-delay:1.2s;-o-animation-delay:1.2s;animation-delay:1.2s}
.area-box .delay-05{-webkit-animation-delay:1.6s;-moz-animation-delay:1.6s;-o-animation-delay:1.6s;animation-delay:1.6s}
.area-box .delay-06{-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}
.area-box .delay-07{-webkit-animation-delay:2.4s;-moz-animation-delay:2.4s;-o-animation-delay:2.4s;animation-delay:2.4s}
.area-box .delay-08{-webkit-animation-delay:-.4s;-moz-animation-delay:-.4s;-o-animation-delay:-.4s;animation-delay:-.4s}
.area-box .delay-09{-webkit-animation-delay:-.8s;-moz-animation-delay:-.8s;-o-animation-delay:-.8s;animation-delay:-.8s}
.area-box .delay-10{-webkit-animation-delay:-1.2s;-moz-animation-delay:-1.2s;-o-animation-delay:-1.2s;animation-delay:-1.2s}
.area-box .delay-11{-webkit-animation-delay:4s;-moz-animation-delay:4s;-o-animation-delay:4s;animation-delay:4s}
.region-list.active .area-box .dot{background:#009fd9}
.region-list.active .area-box .pulse{border-color:#009fd9;top:-22px;left:-23px;height:50px;width:50px;-webkit-box-shadow:0 0 12px #0080d9,0 0 20px #0080d9 inset;-moz-box-shadow:0 0 12px #0080d9,0 0 20px #0080d9 inset;box-shadow:0 0 12px #0080d9,0 0 20px #0080d9 inset}
.region-list.waite .area-box .dot{background:#f90}
.region-list.waite .area-box .pulse{border-color:#f90}
.show-regin{position:absolute;left:2px;height:0;top:0;width:11px;opacity:0;-o-transition:all .5s ease-in-out;-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}
.online-node .show-regin,.region-list:hover .show-regin,.underline-node .show-regin,.waite-node .show-regin{height:127px;opacity:1}
.show-regin span{position:absolute;left:8px;top:-11px;padding:6px 0px;font-size:12px;color:#ccc;-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;text-align:center;white-space:nowrap;}

.area-box{z-index:77}
.show-regin{z-index:66}

.region-list.active .show-regin span{position:relative;color:#ccc}
.region-list.waite .show-regin span{color:#ccc}

.postition-1{left:270px;top:105px}
.postition-2{left:255px;top:180px}
.postition-3{left:310px;top:40px}
.postition-4{left:290px;top:129px}
.postition-5{left:290px;top:145px}
.postition-6{left:256px;top:96px}
.postition-7{left:100px;top:80px}
.postition-8{left:250px;top:120px}
.postition-9{left:185px;top:100px}
.postition-10{left:185px;top:145px}
.postition-11{left:240px;top:140px}
.postition-12{left:277px;top:168px}
.postition-13{left:225px;top:185px}




.douhao{width:0}
</style>