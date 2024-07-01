<template>
	<view class="reserveDetails">
		<view :class="ReseveType ? 'SuccessReseve' : 'CancelReseve'">
			<!-- <u--image style="margin-right: 13rpx;margin-top: 12rpx;" src="../../static/tickIcon.png" width="42.33rpx" height="42.33rpx" ></u--image> -->
			<image style="width: 42.33rpx;height: 42.33rpx;display: block;margin-right: 13rpx;margin-top: 12rpx;" src="../../static/tickIcon.png"  ></image>
			<view style="">
				<u--text :text="ReseveType ? '预约成功' : '取消预约'" size="48rpx" color="#FFFFFF" style="margin-bottom: 2rpx;"> </u--text>
				<u--text text="感谢你选择易道大咖" size="28rpx" color="#FFFFFF"> </u--text>
			</view>
			<view style="margin-left: auto;margin-top: 15rpx;">
				<u--text text="2024-5-14  11:42" style="font-weight: 400;margin-top: 15rpx;" size="28rpx" color="#FFFFFF"> </u--text>
				
			</view>
		</view>
		<!-- <u--button type="primary" -->
		<view class="warn">
			<u-icon name="bell" color="#C44E1C" size="28"></u-icon>

			<!-- <u-icon name="bell" color="#2979ff" color="#2979ff" size="28" ></u-icon> -->
			<u--text style="font-weight:400;margin-left: 10rpx;" text="温馨提示：请您在预约时间到店，若您过时到店需根据门店实 际情况现场排队" color="#C44E1C" size="24rpx"></u--text>
		</view>
		<view class="content">
			<u--text text="预约信息" size="32rpx"> </u--text>
			<view style="margin-top: 8rpx;background-image: linear-gradient(to right, rgba(27, 98, 242, 1) 0%, rgba(27, 98, 242, 0) 100%);width: 68rpx;height: 6rpx;border-radius: 20rpx ;	"></view>
			<view class="content_form" style="margin-top: 24rpx;">
				<view class="item">
					<view class="left">
						服务门店：
					</view>
					<view class="center">
						{{ '【易道大咖】某某路门店' }}
					</view>
					<view class="right">
						<image style="width: 30rpx;height: 30rpx;display: block;margin-right: 8rpx;" src="../../static/call.png"  ></image>
						<!-- <u--image style="margin-right: 8rpx;" :showLoading="true" src="../../static/call.png" width="30rpx" height="30rpx" ></u--image> -->
						<u--text text="电话" mode="phone" :callText="'1310595111113'"  size="24rpx" call></u--text>
					</view>	
				</view>
				
				<view class="item">
					<view class="left">
						门店地址：
					</view>
					<view class="center">
						{{ '福州高新区高新大道某某1-1号' }}
					</view>
					<view class="right" @click="goMap">
						<image style="width: 30rpx;height: 30rpx;display: block;margin-right: 8rpx;" src="../../static/map.png"  ></image>
						<!-- <u--image style="margin-right: 8rpx;" :showLoading="true" src="../../static/map.png" width="30rpx" height="30rpx" ></u--image> -->
						<u--text text="导航" size="24rpx"></u--text>
					</view>	
				</view>
				
				<view style="display: flex;align-items: center;">
					<view class="left">
						预约时间：
					</view>
					<view class="center">
						{{ '5月11日 周六 09:00' }}
					</view>
				</view>
				
				<view style="display: flex;align-items: center;">
					<view class="left">
						预约项目：
					</view>
					<view class="center">
						{{ '项目一' }}
					</view>
				</view>
				
				<view style="display: flex;align-items: center;">
					<view class="left">
						车牌号码：
					</view>
					<view class="center">
						{{ '闽AWX888' }}
					</view>
				</view>
				
				<view style="display: flex;align-items: center;">
					<view class="left">
						联 系 人  ：
					</view>
					<view class="center">
						{{ '张三' }}
					</view>
				</view>
				
				<view style="display: flex;align-items: center;">
					<view class="left">
						手 机 号 ：
					</view>
					<view class="center">
						{{ '13666668888' }}
					</view>
				</view>
				
				<view style="display: flex;align-items: center;">
					<view class="left">
						预约备注：
					</view>
					<view class="center">
						{{ '-' }}
					</view>
				</view>
			</view>
		</view>
		<view class="tabbar">
			<view class="bottom_but" @click="CancelOpen=true">取消预约</view>
			<view class="bottom_but" @click="goConfiirm()">修改预约</view>
		</view>
		<view style="height: 148rpx;"></view>
		<u-popup :show="CancelOpen" :round="10" mode="center" closeable @close="()=>CancelOpen=false">
			<view class="verify">
				<u--text text="温馨提示" size="32rpx" :bold="true"></u--text>
				<view class="" style="display: flex;flex-direction: column;width: 100%;">
					<view class="verify_warn">
							<image style="width: 88rpx;height: 88rpx;display: block;align-items: center;margin: 0 auto;" src="../../static/ReseveWarn.png"  ></image>
							<!-- <u--image style="align-items: center;" src="../../static/ReseveWarn.png" width="88rpx" height="88rpx"></u--image> -->
							<u--text text="确定取消预约？" margin="24rpx 0 0 0" size="32rpx" align="center" ></u--text>
					</view>
					
					<view class="verify_buts">
						<view class="verify_but" @click="confirm()">确认</view>
						<view class="verify_but" @click="()=>CancelOpen=false">取消</view>
					</view>
				</view>

			</view>
		</u-popup>
	</view>
</template>

<script>
	import bmap from '@/libs/bmap-wx.min.js'

	export default {
		// name:'预约详情',
		data() {
			return {
				// 预约状态 取消预约 预约成功
				ReseveType:true,
				CancelOpen:false,
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
			confirm(){
				this.CancelOpen=false
				this.ReseveType = false
			},
			goConfiirm(){
				console.log('1');
				uni.navigateTo({
				//   url: "/pages/confirmReserv/confirmReserv",
				  url: "/page_index/confirmReserv/confirmReserv?contact=某某路10号&shopName=【易道大咖】某某路店&time=周三 05月08日 09:00&item=更换玻璃&phone=1318888888&msg=备注",

				});
	
			},
			// 地图
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

<style lang="scss" scoped>
	.reserveDetails{
		width: 100%;
		display: flex;
		overflow: hidden;
		flex-direction: column;
	}
	.CancelReseve{
		width: 100%;
		height: 207rpx;
		padding: 32rpx;
		box-sizing: border-box;
		display: flex;
		background-image: linear-gradient(to right, #A4A4A4, #D8D8D8);	
		// background-image: linear-gradient(to right, #2063EC, #6599FF);	
	}
	.SuccessReseve{
		width: 100%;
		height: 207rpx;
		padding: 32rpx;
		box-sizing: border-box;
		display: flex;
		// background-image: linear-gradient(to right, #A4A4A4, #D8D8D8);	
		background-image: linear-gradient(to right, #2063EC, #6599FF);	
	}
	.warn{
		width: 100%;
		height: 120rpx;
		background: #FFFBD8;
		padding: 25rpx 32rpx;
		box-sizing: border-box;
		display: flex;
	}
	.content{
		padding: 24rpx 32rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
	}
	.content_form{
		display: flex;
		flex-direction: column;
		.left{
			width: 140rpx;
			font-family: Source Han Sans CN, Source Han Sans CN;
			font-weight: 400;
			font-size: 28rpx;
			color: #666666;
			line-height: 88rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
		}
		.center{
			width: 379rpx;
			font-family: Source Han Sans CN, Source Han Sans CN;
			font-weight: bold;
			font-size: 28rpx;
			color: #333333;
			line-height: normal;
			text-align: left;
			font-style: normal;
			text-transform: none;
		}
		.right{
			margin-left: auto;
			display: flex;
			font-family: Source Han Sans CN, Source Han Sans CN;
			font-weight:bold;
			font-size: 24rpx;
			color: #333333;
			line-height: 0rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
		}
		.item{
			display: flex;
			align-items: center;
		}
		
	}
	// /deep/.u-text__value[data-v-50004b49]{
	// 	font-weight: 500 !important;
	// }
	.tabbar{
		width: 100%;
		height: 148rpx;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		box-shadow: 0rpx -6rpx 12rpx 1rpx rgba(0,0,0,0.1);
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		padding: 30rpx 32rpx;
		box-sizing: border-box;
		display: flex;
	}
	.bottom_but{
		width: 50%;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		color: #FFFFFF;
		background: #2063EB;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
	}
	.bottom_but:nth-child(1){
		background-color: #FFFFFF;
		color: #333333;
		margin-right: 26rpx;
		border: 2rpx solid #666666;
	}
	.verify{
		height: 490rpx;
		width:616rpx;
		padding: 28rpx 40rpx;
		.verify_warn{
			margin-top: 40rpx;
			align-items: center;
		}
	}
	.verify_buts{
		width:100%;
		display: flex;
		justify-content: center;
		margin-top: 80rpx;
		.verify_but{
			width: 50%;
			height: 88rpx ;
			line-height: 88rpx;
			color: #010914;
			text-align: center;
			background: #F5F7FB;
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			
		}
		.verify_but:nth-child(1){
			background-color: #2063EB;
			margin-right: 16rpx;
			color: #FFFFFF;
		}
	}
</style>
