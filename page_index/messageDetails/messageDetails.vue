<template>
	<view class="messageDetails">
		<text class="title">
			系统公告名称为什么说系统公告标题
		</text>
		<view style="margin-bottom: 40rpx;">
			<text style="font-weight: 400;font-size: 28rpx;color: #AAA9B9;line-height: 58rpx;margin-right: 32rpx;">2023-12-26</text>
			<text style="font-weight: 400;font-size: 28rpx;color: #AAA9B9;line-height: 58rpx;">admin</text>
		</view>
		<image style="margin-right: 20rpx;width: 690rpx;height: 282rpx;margin-bottom: 40rpx;" src="https://img.edows.cn/wx/systemMsgImg.png"  ></image>
		<text class="content">
			消息通知内容列表展示，这里是个文本字号28行间距48。这里可以写很多字。消息通知内容列表展示，这里是个文本。字号28行间距48。这里可以写很多字。消息通知内容列表展示，这里是个文本。字号28行间距48这里可以写很多字。
		</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.messageDetails{
		display: flex;
		flex-direction: column;
		padding: 20rpx 30rpx;
		background: #FFFFFF;
		.title{
			// width: 689rpx;
			// height: 138rpx;
			font-family: Source Han Sans CN, Source Han Sans CN;
			font-weight: 500;
			font-size: 48rpx;
			color: #333333;
			line-height: 68rpx;
			margin-bottom: 24rpx;
		}
		.content{
			width: 690rpx;
			height: 302rpx;
			font-family: Source Han Sans CN, Source Han Sans CN;
			font-weight: 400;
			font-size: 32rpx;
			color: #333333;
			line-height: 64rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
		}
	}
	
</style>
