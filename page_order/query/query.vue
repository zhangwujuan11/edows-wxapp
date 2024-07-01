<template>
	<view class="query">
		<view class="card_job">
			<view>
				<image
					style="width: 112rpx;height: 112rpx;margin-right: 24rpx;"
					src="../../static/queryJob.png"
				/>
			</view>
			<view style="display: flex;flex-direction: column;justify-content: space-between;">
				<text class="text">作业前</text>
				<view style="display: flex;">
					<u-radio-group
						v-model="radiovalue"
						placement="row"
					>
						<u-radio
							:customStyle="{marginRight: '40px'}"
							name="符合"
							:key="1"
							labelSize="24rpx"
							label="符合规范操作"
						>
						</u-radio>
						<u-radio
							:key="2"
							label="不符合规范操作"
							labelSize="24rpx"
							name="不符合"
						>
						</u-radio>
					</u-radio-group>
				</view>

			</view>
		</view>


		<view class="queryContent">
				
				<u--textarea v-model="querycontent" count placeholder="有什么想对我们说的..." style="margin-bottom: 33rpx;" height="125"></u--textarea>
				<u-upload
					:fileList="fileList1"
					name="1"
					multiple
					:maxCount="10"
				></u-upload>
			</view>
			<view class="tabbar">
				<view class="bottom_but" @click="submit">提交质疑</view>
		</view>
		<view style="height: 148rpx;"></view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radiovalue:1,
				querycontent:'',
				fileList1:[]
			}
		},
		methods: {
			submit(){

				uni.navigateBack({ delta: 1 })
			}
		}
	}
</script>

<style>
	Page{
		background-color: #F6F6F6;
	}
</style>

<style scoped lang="scss">
	.query{
		padding: 24rpx 32rpx;
		box-sizing: border-box;
		width:100%;
		display: flex;
		flex-direction: column;
	}
	.card_job{
		padding: 42rpx 32rpx;
		box-sizing: border-box;	
		background-color: #FFFFFF;
		height: 186rpx;
		width:100%;
		display: flex;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		.text{
			font-weight: 500;
			font-size: 32rpx;
			color: #0E1D29;
			line-height: 50rpx;
		}
	}
	.queryContent{
		width: 100%;
		margin-top: 24rpx;
		background-color: #FFFFFF;
		padding: 32rpx;
		box-sizing: border-box;

	}
	.u-textarea[data-v-09988a29]{
		padding: 0rpx;

	}
	.tabbar{
		width: 100%;
		height: 148rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #FFFFFF;
		box-shadow: 0rpx -6rpx 12rpx 1rpx rgba(0,0,0,0.1);
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		padding: 30rpx 32rpx;
		box-sizing: border-box;
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
