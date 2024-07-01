<template>
	<view class="complain">
		<u--form
		ref="uForm"
		:model="form"
		:rules="rules">
			<view class="content">
				<view class="title">投诉内容</view>
				<u-form-item
					prop="complain"
				>
					<u--textarea placeholder="请输入内容" v-model="form.complain" style="height: 240rpx	;"></u--textarea>
				</u-form-item>
				<u-upload
					multiple
					:maxCount="10"
				></u-upload>
			</view>
			<u-form-item
			prop="contacts"
			>
				<view class="connection">
					<text class="text">联系人</text>
					<u--input
						placeholder="请输入"
						v-model="form.contacts" 
					></u--input>
				</view>
			</u-form-item>
			<u-form-item
			prop="contactPhone"
			>

				<view class="connection">
					
					<text class="text">联系电话</text>
					<u--input
					placeholder="请输入"
					v-model="form.contactPhone"
					></u--input>
				</view>
			</u-form-item>

			<view class="tabbar">

				<view class="bottom_but" style='background-color: #F5F7FB;color:#010914' @click="goIndex()">返回首页</view>
				<view class="bottom_but" @click="submit()">立即提交</view>
			</view>
			<view style="height: 148rpx;width: 100%;"></view>
		</u--form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					contactPhone:'',
					contacts:'',
					complain:'',
				},
				rules:{
					'contactPhone':{
						type:'string',required:true,message:'该项为必填项',trigger:['change','blur']
					},
					'contacts':{
						type:'string',required:true,message:'该项为必填项',trigger:['change','blur']
					},
					'complain':{
						type:'string',required:true,message:'该项为必填项',trigger:['change','blur']
					},
				},
			};
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules)
		},

		methods: {
			// 返回首頁
			goIndex(){
				console.log('22222');

				uni.navigateBack({
					delta:88
				})
			},
			// 提交
			submit(){
				this.$refs.uForm.validate().then(res => {
					// 返回的res.data 已经进行JSON.parse
					uni.navigateBack({
						 delta: 1
					});
				}).catch(err => {
				})

			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F1F1F1 !important;
	}
</style>

<style lang="scss" scoped>
	.complain{
		display: flex;
		flex-direction: column;
	}
	.content{
		padding: 44rpx 32rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		margin-top:24rpx;
		margin-bottom:20rpx;
		.title{
			margin-bottom: 23rpx;
			color: #333333;
			font-size: 32rpx;
		}
		.title::before{
			content: "*";
			color: red;
			margin-right: 5px; /* 可选：添加一些间距 */
		}
	}
	::v-deep .input-placeholder{
		font-weight: normal;
		font-size: 32rpx;
		color: #C1C1C1;
		line-height: 46rpx;
		text-align: right;
		font-style: normal;
		text-transform: none;
	}
	.u-input__content.data-v-113bc24f{
		font-size: 32rpx;
		color: #C1C1C1;
		line-height: 46rpx;
		text-align: right !important;
		// width: 64rpx !important;
		margin-left: auto !important;
	}
	::v-deep .u-input__content.data-v-113bc24f{
		font-size: 32rpx;
		color: #C1C1C1;
		line-height: 46rpx;
		text-align: right !important;
		// width: 64rpx !important;
		margin-left: auto !important;
	}
	::v-deep .u-form-item__body.data-v-067e4733 {
		padding: 0;
	}
	.u-input__content__field-wrapper__field.data-v-113bc24f {
		text-align: right !important;
	}
	::v-deep .u-input__content__field-wrapper__field.data-v-113bc24f {
		text-align: right !important;
	}
	::v-deep .uni-input-input {
		text-align: right !important;
	}
	::v-deep .uni-textarea-placeholder{
		text-align: left !important;

	}
	.connection{
		background-color: #FFFFFF;
		padding: 37rpx 32rpx;
		box-sizing: border-box;
		height: 118rpx;
		display: flex;
		width: 100%;
		.text{
			font-weight: normal;
			font-size: 32rpx;
			color: #333333;
			line-height: 46rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
			// margin-left:auto;
		}
		.text::before{
			content: "*";
			color: red;
			margin-right: 5px; /* 可选：添加一些间距 */
		}
	}
	::v-deep .uni-input-wrapper{
		width: 100rpx;
		margin-left:auto;
	}
	
	.tabbar{
		width: 100%;
		height: 148rpx;
		
		position: fixed;
		bottom: 0;
		left:0;
		background: #FFFFFF;
		box-shadow: 0rpx -6rpx 12rpx 1rpx rgba(0,0,0,0.1);
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		padding: 30rpx 32rpx;
		box-sizing: border-box;			
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.bottom_but{
		width: 330rpx;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		color: #FFFFFF;
		background: #2063EB;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
	}
</style>
