<template>
	<view class="mine">
		<view class="head">
			<view style="display: flex;flex-direction: row;">
				<img src="https://img.edows.cn/wx/minetx.png" style="width: 118rpx;height: 118rpx;margin-right: 20rpx;">
				<view style="display: flex;flex-direction: column;align-items: left;justify-content: space-evenly;">
					<text style="font-weight: 400;font-size: 40rpx;color: #FFFFFF;">易道大咖用户</text>
					<text style="font-weight: 400;font-size: 26rpx;color: #FFFFFF;line-height: 48rpx;">
						<img src="../../static/minePhone.png" style="width: 22rpx;height: 22rpx;margin-right: 11rpx;">
						136****8888
					</text>
				</view>
			</view>
			<image
				@click="goInvite"
				style="margin-top: 36rpx;width: 686rpx;height: 112rpx;"
				src="https://img.edows.cn/wx/mineInvite.png"
			/>
		</view>

		<view class="content">
			<view class="myOrder">
				<view style="display: flex;justify-content: space-between;width: 100%;">
						<text class="title">我的工单</text>

						<view style="display: flex">
							<text class="check" @click="goCustomerorder(0)">
							查看更多
							</text>
							<u-icon name="arrow-right" style="color:#999999;"></u-icon>

						</view>
				</view>
				<view style="display: block;margin-top: 8rpx;background-image: linear-gradient(to right, rgba(27, 98, 242, 1) 0%, rgba(27, 98, 242, 0) 100%);width: 68rpx;height: 6rpx;border-radius: 20rpx ;	"></view>
				<view class="serviceList">
					<ul>
						<li @click="goCustomerorder(0)">
							<img src="https://img.edows.cn/wx/mineorder1.png" alt="">
							<text>待维修</text>
						</li>
						<li @click="goCustomerorder(1)">
							<img src="https://img.edows.cn/wx/mineorder2.png" alt="">
							<text>维修中</text>
						</li>
						<li @click="goCustomerorder(2)">
							<img src="../../static/mineorder3.png" alt="">
							<text>待评价</text>
						</li>
						<li @click="goCustomerorder(3)">
							<img src="https://img.edows.cn/wx/mineorder4.png" alt="">
							<text>已完成</text>
						</li>

					</ul>
				</view>

			</view>
			<view class="myCar">
				<view style="display: flex;justify-content: space-between;width: 100%;position: relative;">
						<text class="title">我的爱车</text>

						<view @click="goCarList()" style="width: 172rpx;height: 60rpx;background: #F1F6FF;border-radius: 0 0 0 30rpx;display: flex;align-items: center;justify-content: center;position: absolute;right: -32rpx;top:-34rpx;">
							<text class="check" style="color: #000100;">
							我的车库
							</text>
							<u-icon name="arrow-right" style="color:#000100;"></u-icon>

						</view>
				</view>
				<view style="margin-bottom: 38rpx;display: block;margin-top: 8rpx;background-image: linear-gradient(to right, rgba(27, 98, 242, 1) 0%, rgba(27, 98, 242, 0) 100%);width: 68rpx;height: 6rpx;border-radius: 20rpx ;	"></view>
				<view style="display: flex;">
					<view>
						<img src="https://img.edows.cn/wx/nocarshow.png" style="width: 234rpx;height: 100rpx;" alt="" srcset="">
					</view>
					<view class="carInfo">
						<text class="carName">奥迪A8</text>
						<text class="vehicleModel">闽AXW888</text>
						<text class="carIntroduction">2023款2.0T手自一体  45TFSI豪华动感型</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goInvite(){
				uni.navigateTo({
					url:'/pages/Invite/Invite',
				})
			},
			goCustomerorder(current){
				current = current.toString()
				uni.setStorageSync('orderIndex',current)
				
				uni.switchTab({
				  url: "/pages/customerorder/customerorder",
				  
				});
			},
			goCarList(){
				uni.navigateTo({
				  url: "/page_index/carlist/carlist",
				});
				
			}
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6
	}
</style>
<style lang="scss" scoped>
	.mine{
		display: flex;
		flex-direction: column;

	}
	.head{
		padding: 41rpx 32rpx 0 32rpx;
		box-sizing: border-box;
		// background-image: url('../../static/minebac.png') ;
		// background-repeat: no-repeat;
		// background-size: auto;
		// background-position: center; /* 可选：设置图片在背景中的位置 */
		background: linear-gradient( 180deg, #4782FF 0%, #316BE4 100%);
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		display: flex;
		flex-direction: column;
	}
	.content{
		padding: 0 32rpx;
		width: 100%;
		box-sizing: border-box;

	}
	.myOrder,
	.myCar{
		width: 100%;
		padding: 34rpx 32rpx;
		box-sizing: border-box;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		margin-top: 22rpx;
		display: block;
	}
	.title{
		font-weight: 500;
		font-size: 34rpx;
		color: #000100;
		line-height: 38rpx;
	}
	.check{
		font-weight: 400;
		font-size: 24rpx;
		color: #999999;
		line-height: 38rpx;
	}
	.serviceList{
		margin-top: 47rpx;
	}
	ul {
		list-style-type: none; /* 去除列表项前的标记 */
		padding: 0; /* 去除默认的内边距 */
		margin: 0; /* 去除默认的外边距 */
		display: flex; /* 使用Flexbox布局 */
		flex-direction: row; /* 设置为横向排序 */
		justify-content: space-around;
		margin-top: 47rpx
	}
	li img{
		width: 80rpx;
		height: 80rpx;
		margin-bottom: 2rpx;
	}
	li text{
		width: 72rpx;
		height: 35rpx;
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 400;
		font-size: 24rpx;
		color: #333333;
		line-height: 38rpx;
		text-align: center;
		margin-left: 2rpx;
		margin-bottom: 8rpx;
	}
	li{
		display: flex;
		flex-direction: column;
	}
	.carInfo{
		display: flex;
		flex-direction: column;
		.carName{
			height: 35rpx;
			font-weight: 500;
			font-size: 24rpx;
			color: #333333;
			line-height: 38rpx;
		}
		.vehicleModel{
			height: 46rpx;
			font-weight: bold;
			font-size: 32rpx;
			color: #000000;
			line-height: 38rpx;
		}
		.carIntroduction{
			height: 29rpx;
			font-weight: 400;
			font-size: 20rpx;
			color: #999999;
			line-height: 38rpx;
		}
	}
</style>
