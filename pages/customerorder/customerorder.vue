<template>
	<view >
		<u-subsection bgColor='#FFFFFF' :list="['待维修','维修中','待评价','已完成']" :current="current" @change="sectionChange" font-size="32rpx"></u-subsection>
		<view class="order">
			<view class="card" v-for="e in 4 " :key="e">
				<!-- 店名&状态 -->
				<view style="display: flex;align-items: center;margin-bottom: 32rpx">
					<!-- <u--image style="margin-right: 10rpx" src="../../static/orderIcon.png" width="30rpx" height="30rpx" @click="click"></u--image> -->
					<image style="width: 30rpx;height: 30rpx;margin-right: 10rpx" src="../../static/orderIcon.png"  ></image>
					<text class="text_shopName">易道大咖某某路店{{e}}</text>
					<text class="text_sta" style="color:#4D7FF5" v-if="e==0">待维修</text>
					<text class="text_sta" style="color:#05B14A" v-if="e==1">维修中</text>
					<text class="text_sta" style="color:#E99731" v-if="e==2">待评价</text>
					<text class="text_sta" style="color:#999999" v-if="e==3">已完成</text>
				</view>
				<view class="line"></view>
				<!-- 项目&价格&数量 -->
				<view style="display: flex;">
					<view class="">
						<image style="margin-right: 24rpx;width: 146rpx;height: 146rpx;" src="https://img.edows.cn/wx/m.png"  ></image>
					</view>
					<!-- <u--image style="margin-right: 10rpx;margin-right: 24rpx;" src="../../static/index/m.png" width="146rpx" height="146rpx" @click="click"></u--image> -->
					<view style="display: flex;flex-direction: column;justify-content: space-between;width: 100%;">
						<view>
							<text class="itemName"  v-if="true">项目名称展示在这里项目</text>
							<text style="margin-left: auto;float: right;"  v-if="true">×1</text>
						</view>
						<text class="itemPrice"  v-if="true">￥2309.00</text>
					</view>
				</view>
				<!-- 按钮 -->
				<view class="buts">
					<view class="but" @click="goDetails">查看详情</view>
					<view class="but" @click="Call">联系门店</view>
					<view class="but" style="color:#2063EB;border-color: #2063EB;" v-if="e!=3" @click="goMap">门店导航</view>
					<view class="but" style="color:#2063EB;border-color: #2063EB;" v-if="e==3" @click="goEvaluate">评价晒单</view>
					<!-- <view class="but">评价晒单</view> -->
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import bmap from '@/libs/bmap-wx.min.js'

	export default {
		data() {
			return {
				current:0,
				// 地图
				markers: [],
				latitude: '', 
				longitude: '', 
				placeData: {} ,
				address:'"福州市台江区茶亭国际"',
			}
		},
		onShow(){
			this.current =  parseInt(uni.getStorageSync('orderIndex') || 0)
			uni.setStorageSync('orderIndex',"0")

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
			sectionChange(e){
				this.current = e
			},
			goEvaluate(){
				uni.navigateTo({
					url:'/page_order/orderEvaluate/orderEvaluate',
				})
			},
			goDetails(){
				uni.navigateTo({
					url:'/page_order/orderDetails/orderDetails',
				})
			},
			// 联系门店
			Call(){
				uni.makePhoneCall({
					phoneNumber: '13188888888'
				});
			},
			// 门店导航
			goMap(){
				uni.openLocation({ 
				   latitude: Number(this.latitude), //要去的纬度
				   longitude: Number(this.longitude), //要去的经度 
				   address: this.address, //要去的具体地址
					name: '茶亭国际艾盈店（易道大咖）',
				}) 
			}
		}
	}
</script>

<style>
	page  {
		background-color: #F6F6F6;	
	}
</style>

<style scoped lang="scss">

	.order{
		display: flex;
		flex-direction: column;
		padding: 0 32rpx;
		/* background-color: #F6F6F6; */
	}
	.card{
		width: 100%;
		height: 410rpx;
		background: #FFFFFF;
		margin-top: 24rpx;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		display: flex;
		flex-direction: column;
		padding: 42rpx 32rpx;
		box-sizing: border-box;
		.text_shopName{
			font-weight: 400;
			font-size: 32rpx;
			color: #333333;
			line-height: 38rpx;
		}
		.text_sta{
			font-weight: 400;
			font-size: 32rpx;
			color: #333333;
			line-height: 38rpx;
			margin-left: auto;
		}
		.line{
			/* height: 1rpx; */
			border-top: 1rpx solid #D7D7D7;
			margin-bottom: 32rpx;
		}
		.itemName{
			font-weight: 500;
			font-size: 32rpx;
			color: #0E1D29;
			line-height: 40rpx;
		}
		.itemPrice{
			font-weight: bold;
			font-size: 40rpx;
			color: #0E1D29;
			line-height: 40rpx;
		}
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
		
	}
	
	

</style>
