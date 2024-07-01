<template>
	<view class="Invite">
		<image
			class="image1"
			src="https://img.edows.cn/wx/Invite1.png"
		/>

		<view class="image2" >
			<image
				class="Invite2"
				src="https://img.edows.cn/wx/Invite2.png"
			/>
			<text class="text">邀请码</text>
			<text class="code">888888</text>
			<image src="../../static/qrcode.jpg" class="qRCode" alt=""/>
			<view class="buts">
				<view class="but" >保存图片</view>
				<view class="but" @click="goShare">邀请好友</view>
			</view>
		</view>



		<u-overlay :show="showShare" @click="showShare = false">
			<view>
				<image
					:show-menu-by-longpress="true"
					v-show="showShare"
					style="width: 454rpx;height: 601.58rpx;margin-left: 143rpx"
					src="https://img.edows.cn/wx/Invitefx.png"
				/>
			</view>
		</u-overlay>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				showShare:false,
			}
		},
		onLoad(options) {

		},
		methods: {
			goShare(){
				this.showShare = true
			},


		}
	}
</script>

<style scoped lang="scss">
	.Invite{
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		/* padding: 0 32rpx 37rpx 32rpx; */
	}
	.image1{
		width: 100vw;
		height: 100vh;
		position: absolute;
		z-index: -1;
		left: 0;
	}
	.image2{
		width: 686.01rpx;
		height: 932rpx;
		/* width: 100%; */
		position: absolute;
		bottom:37rpx;
		left: 32rpx;
		right: 32rpx;
		background-size: cover;
		display: flex;
		flex-direction: column;
		// background-image: url('../../static/Invite2.png')
		.Invite2{
			width: 686.01rpx;
			height:100%;
			position: absolute;
			z-index: -1;
		}
	}

	.text{
		font-weight: 400;
		font-size: 32rpx;
		color: #333333;
		line-height: 38rpx;
		margin: 0 auto;
		margin-top: 40rpx;
		display: block;
		text-align: center;
	}
	.code{
		height: 70rpx;

		line-height: 70rpx !important;
		font-weight: bold;
		font-size: 48rpx;
		color: #333333;
		line-height: 38rpx;
		margin: 0 auto;
		/* margin-top: 40rpx; */
		display: block;
		text-align: center;
	}
	.qRCode{
		width: 418rpx;
		height: 418rpx;
		background: #FFFFFF;
		margin: 0 auto;
		margin-top: 42rpx;
		display: block;
		z-index: 999;
		text-align: center;
	}
	.buts{
		display: flex;
		/* margin: 0 auto; */
		margin-top: 150rpx;
		justify-content: space-evenly;
		.but{
			width: 280rpx;
			height: 88rpx;
			border-radius: 44rpx 44rpx 44rpx 44rpx;
			border: 2rpx solid #FFFFFF;
			color:#FFFFFF;
			font-weight: 500;
			text-align: center;
			line-height: 88rpx
		}
		.but:nth-child(2){
			color:#31378D;
			background-color: #FFFFFF;
		}
	}

</style>
