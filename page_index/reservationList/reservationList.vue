<template>
	<view class="reList">
		<view class="nodataIcon" v-if="nodata">
			<!-- <u--image  src="../../static/nodata.png" width="261.59rpx" height="259.32rpx" ></u--image> -->
			<image style="width: 261.59rpx;height: 259.32rpx;display: block;" src="https://img.edows.cn/wx/nodata.png"  ></image>
			<u--text align="center" style="margin: auto;" text="暂无数据"></u--text>
		</view>
		<view class="dataList" v-if="!nodata" v-for="e in [1,2]">
			<view class="card">
				<view style="display: flex;height: 146rpx;">
					<image style="width: 146rpx;height: 146rpx;display: block;margin-right: 24rpx;" src="https://img.edows.cn/wx/m.png"  ></image>
					<!-- <u--image style="margin-right: 24rpx;" src="../../static/nodata.png" width="146rpx" height="146rpx" ></u--image> -->
					<view style="display: flex;flex-direction: column;">
						<u--text text="【易道大咖】某某路店" style="font-weight: 500;color: #666666;line-height: 50rpx;" size="32rpx"></u--text>
						<u--text text="周三 05月08日 09:00" style="font-weight: 400;color: #666666;" size="28rpx"></u--text>
						<u--text text="某某路10号" style="font-weight: 400;color:#999999" size="24rpx"></u--text>
					</view>
				</view>
<!-- 				<view class="buts">
					<u-button type="primary" shape="circle"  :plain="true" text="查看详情" @click="goinfo"></u-button>
					<u-button type="primary" shape="circle"  :plain="true" text="修改预约" @click="goedit" style="margin: 0 24rpx;"></u-button>
					<u-button type="primary" shape="circle"  :plain="true" text="门店导航"></u-button>
				</view> -->
				
				<view class="buts">
					<view class="but" @click="goinfo">查看详情</view>
					<view class="but" @click="goedit">修改预约</view>
					<view class="but" style="color:#2063EB;border-color: #2063EB;" @click="showmap">门店导航</view>
					<!-- <view class="but">评价晒单</view> -->
				</view>

			</view>
		<!-- 	<u-tabbar
				:fixed="true"
				:placeholder="true"
				:safeAreaInsetBottom="true"
				style="padding: 0 32rpx;"
			>
				<view class="bottom_but">
					
				</view>
			</u-tabbar> -->
		</view>
		
		<view class="tabbar">
			<!-- <view class="bottom_but" @click="nodata = !nodata">查看附近门店</view> -->
			<view class="bottom_but" @click="goShopList">查看附近门店</view>
		</view>
			
	</view>
</template>

<script >
	import bmap from '@/libs/bmap-wx.min.js'

	export default {
		// name:'预约服务列表',
		data() {
			return {
				shopName:'',
				nodata:false,
				// 地图
				markers: [],
				latitude: '', 
				longitude: '', 
				placeData: {} ,
				address:'"福州市台江区茶亭国际"',
			}
		},
		onLoad(options) {
			let that=this
			var BMap = new bmap.BMapWX({
				ak: 'LA26lnRd6tMIlCFP3Ce3H6otX5g5Gd0e'
			});
			var fail = function(data) {
				console.log(data)
			};
			var success = function(data) {
				let wxMarkerData = data.wxMarkerData; 
				that.markers = wxMarkerData 
				that.latitude = wxMarkerData[0].latitude 
				that.longitude =wxMarkerData[0].longitude
			}
			 // 发起geocoding检索请求 
			     BMap.geocoding({ 
					address: that.address, 
					fail: fail, 
					success: success, 
					// 此处需要在相应路径放置图片文件 
					// iconPath: '../../static/icon/address.png', 
					// 此处需要在相应路径放置图片文件 
					// iconTapPath: '../../static/icon/jifen.png' 
			}); 
		},
		methods: {
			goinfo(){
				uni.navigateTo({
				  url: "/page_index/reserveDetails/reserveDetails",
				});
			},
			goedit(){
				uni.navigateTo({
				  url: "/page_index/confirmReserv/confirmReserv?contact=某某路10号&shopName=【易道大咖】某某路店&time=周三 05月08日 09:00&item=更换玻璃&phone=1318888888&msg=备注",
				});
			},
			goShopList(){
				uni.navigateTo({
				  url: "/page_index/shoplist/shoplist",
				});
			},
			// 地图导航
			showmap(){
				uni.openLocation({ 
				   latitude: Number(this.latitude), //要去的纬度
				   longitude: Number(this.longitude), //要去的经度 
				   address: this.address, //要去的具体地址
					name: '茶亭国际艾盈店（易道大咖）',
				}) 
			},
		}
	}
</script>

<style scoped lang="scss">

	.reList{
		background-color: #F1F1F1;
		width: 100%;
		height: 100vh;
		display: flex;
		position: relative; /* 设置为相对定位以便于子元素绝对定位 */
		overflow: hidden; /* 防止内容溢出 */
		flex-direction: column;
	}
	.nodataIcon{
		margin: auto auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.card{
		padding: 40rpx 32rpx;
		margin: 0 auto;
		margin-top: 24rpx;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		width: 686rpx;
		height: 302rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
	}
	.dataList{

	}
/* 	.buts{
		display: flex;
		margin-left: 94rpx;
		margin-top: 18rpx;
		margin-bottom: 40rpx;
	} */
/* 	.but{
		width: 160rpx;
		height: 58rpx;
		background: #FFFFFF;
		border-radius: 29rpx 29rpx 29rpx 29rpx;
		border: 1rpx solid #707070;
		padding: 30rpx 11rpx;
	} */

	
	.buts{
		display: flex;
		margin-top: 32rpx;
		margin-left: auto;
		.but{
			width: 160rpx;
			height: 58rpx;
			background: #FFFFFF;
			border-radius: 29rpx 29rpx 29rpx 29rpx;
			border: 1rpx solid #707070;
			text-align: center;
			line-height: 58rpx;
			font-size: 24rpx;
		}
		.but:nth-child(2){
			margin:0 24rpx;
		}
	}
	
	
	.tabbar{
		width: 100%;
		height: 148rpx;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		box-shadow: 0rpx -6rpx 12rpx 1rpx rgba(0,0,0,0.1);
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		padding: 30rpx 32rpx;
		display: flex;
	}
	.bottom_but{
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		color: #FFFFFF;
		background: #2063EB;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
	}
</style>
