<template>
	<view class="orderEvaluateSuc">
		<image
			style="width: 88rpx;height: 88rpx;"
			src="../../static/evaluateSuc.png"
		/>
		<text class="text1">评价成功</text>
		<text class="text2">感谢您的评价，我们会继续为您提供更优质的商品及服务</text>
		<view class="bus" @click="goIndex">返回首页</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goIndex(){
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>
<style >
	page{
		background-color: #F6F6F6;
	}

</style>
<style lang="scss" scoped>
	.orderEvaluateSuc{
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		margin-top: 200rpx;
		.text1{
			font-weight: bold;
			font-size: 32rpx;
			color: #333333;
			margin: 20rpx 0;
		}
		.text2{
			font-weight: 400;
			font-size: 24rpx;
			color: #999999;
			margin-bottom: 88rpx;
		}
		.bus{
			width: 210rpx;
			height: 72rpx;
			border-radius: 44rpx 44rpx 44rpx 44rpx;
			border: 2rpx solid #666666;
			text-align: center;
			line-height: 72rpx;

			font-weight: 400;
			font-size: 28rpx;
			color: #333333;
		}
	}

</style>
