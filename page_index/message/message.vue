<template>
	<view class="message">
		<view class="list_msg" style="position: relative;" @click="goDetails()">
				<!-- <u--image style="margin-right: 20rpx;" src="../../static/systemMsg.png" width="80rpx" height="80rpx" ></u--image> -->
				<image style="margin-right: 20rpx;width: 80rpx;height: 80rpx" src="../../static/systemMsg.png"  ></image>
				<u-badge  type="error" max="99" :value="10" ></u-badge>
				<view style="display: flex;flex-direction: column;text-align: left;justify-content: space-between;">
					<view style="display: flex;">
						<text class="text_head" >系统公告</text>
						<text class="text_head_time" >04-24 17:56</text>
					</view>
					<text class="text_msg">5月5日22:00至5月6日02:00将对系统进行升...</text>
				</view>
		</view>
		
		<view class="list_msg" style="position: relative;"  >
				<!-- <u--image style="margin-right: 20rpx;" src="../../static/oderMsg.png" width="80rpx" height="80rpx" ></u--image> -->
				<image style="margin-right: 20rpx;width: 80rpx;height: 80rpx" src="../../static/oderMsg.png"  ></image>
				<u-badge  type="error" max="99" :value="1" style="height: 18rpx;position: absolute;left:55rpx"></u-badge>
				<view style="display: flex;flex-direction: column;text-align: left;justify-content: space-between;">
					<view style="display: flex;">
						<text class="text_head" >工单提醒</text>
						<!-- <text class="text_head_time" >04-24 17:56</text> -->
					</view>
					<text class="text_msg">暂无工单提醒</text>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		// name:'消息中心',
		data() {
			return {
				
			}
		},
		methods: {
			goDetails(){
				uni.navigateTo({
				  url: "/page_index/messageDetails/messageDetails",
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.message{
		padding: 16rpx 36rpx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.list_msg{
		display: flex;
		margin-top: 33rpx;
		border-bottom: 1rpx solid #E9E9E9;
		.text_head{
			font-weight: bold;
			font-size: 34rpx;
			color: #262C39;
			line-height: 38rpx;
		}
		.text_msg{
			font-size: 28rpx;
			color: #A9AAB1;
			line-height: 38rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			margin-bottom: 41rpx;
			width: 100%;
		}
		.text_head_time{
			height: 37rpx;
			font-family: Source Han Sans CN, Source Han Sans CN;
			font-weight: 400;
			font-size: 26rpx;
			color: #A9AAB1;
			line-height: 38rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
			margin-left: auto;
		}
		.line{
			width: 100%;
			height: 1;
		}
	}
	::v-deep .u-badge{
		height: 12;
		position: absolute;
		left:55rpx
	}
</style>
