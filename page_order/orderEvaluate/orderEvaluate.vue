<template>
	<view class="orderEvaluate">
		<view class="starRating">
			<view style="display: flex;margin-bottom: 32rpx">
				<view >
					<image
						src="https://img.edows.cn/wx/m.png"
						style="width: 112rpx;height: 112rpx;margin-right: 24rpx;"
					/>
				</view>
				
				<text style="color: #0E1D29;font-weight: 500;font-size: 32rpx;line-height: 50rpx;">
					<view style="line-height: 50rpx;padding: 1rpx 11rpx;height: 32rpx;background: #3272F4;border-radius: 4rpx 4rpx 4rpx 4rpx;font-weight: 500;font-size: 22rpx;color: #FFFFFF;text-align: center;font-weight: 600;margin-right: 10rpx;">
						五星门店
					</view>
					易道大咖工场店(福州高新新区某某路店)
				</text>
			</view>
			<view style=" display: flex; align-items: center;">
				<text style="font-size: 24rpx;font-weight: 400;color: #000000;margin-right: 20rpx;">服务态度</text>
				<image
					v-for="i in 5"
					:key="i"
					src="../../static/evaluateStar.png"
					class="star "
					:class="{ 'active': i <= activeStars[0] }"
					@click="setActiveStars(0,i)"
				/>
			</view>

			<view class="line"></view>


			<view style="display: flex;margin-bottom: 32rpx;align-items: center">
				<view >
					<image
						src="https://img.edows.cn/wx/evaluateServe.png"
						style="width: 112rpx;height: 112rpx;margin-right: 24rpx;"
					/>
				</view>
				
				<text style="color: #0E1D29;font-weight: 500;font-size: 32rpx;line-height: 50rpx;">
	
					门店服务技师

				</text>
			</view>
			<view style=" display: flex; align-items: center;">
				<text style="font-size: 24rpx;font-weight: 400;color: #000000;margin-right: 20rpx;">服务态度</text>
				<image
					v-for="i in 5"
					:key="i"
					src="../../static/evaluateStar.png"
					class="star "
					:class="{ 'active': i <= activeStars[1] }"
					@click="setActiveStars(1,i)"
				/>
			</view>
			
			<view class="line"></view>

			<view style="display: flex;margin-bottom: 32rpx;align-items: center">
				<view >
					
					<image
						src="https://img.edows.cn/wx/evaluateServe.png"
						style="width: 112rpx;height: 112rpx;margin-right: 24rpx;"
					/>
				</view>
				
				<text style="color: #0E1D29;font-weight: 500;font-size: 32rpx;line-height: 50rpx;">

					门店服务客服
				</text>
			</view>
			<view style=" display: flex; align-items: center;">
				<text style="font-size: 24rpx;font-weight: 400;color: #000000;margin-right: 20rpx;">服务态度</text>
				<image
					v-for="i in 5"
					:key="i"
					src="../../static/evaluateStar.png"
					class="star "
					:class="{ 'active': i <= activeStars[2] }"
					@click="setActiveStars(2,i)"
				/>
			</view>
		</view>

		<view class="evacontent">
				
			<u--textarea v-model="evacontent" count placeholder="门店服务、客服服务、商品是否满意，有什么想对我们说的..." style="margin-bottom: 33rpx;" height="125"></u--textarea>
			<u-upload
				:fileList="fileList1"
				name="1"
				multiple
				:maxCount="10"
			></u-upload>
		</view>
		<view class="tabbar">
			<view class="bottom_but" @click="evaluate">提交评价</view>
		</view>
		<view style="height: 148rpx;"></view>

	</view>
</template>


<script>
	export default {
		data() {
			return {
				activeStars: [0,0,0], // 初始化星星,
				evacontent:''
			}
		},
 
		methods: {
			setActiveStars(index,starNumber) {
				this.$set(this.activeStars, index,starNumber, )
				// this.activeStars = starNumber;
			},
			evaluate(){
				uni.navigateTo({
					url:'/page_order/orderEvaluate/orderEvaluateSuc',
				})
			}
		}
	}
</script>
<style>
	page{
		background-color: #F6F6F6;
	}
</style>
<style lang="scss" scoped>
	.orderEvaluate{
		display: flex;	
		flex-direction: column;
		padding: 24rpx 32rpx;
	}
	.starRating{
		background-color: #FFFFFF;
		padding: 40rpx 32rpx;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
	}
	.star{
		width: 40rpx;
		height: 40rpx;
		margin-right:  16rpx;
	}
	.active{
		filter: brightness(0) saturate(100%) invert(39%) sepia(78%) saturate(3808%) hue-rotate(357deg) brightness(94%) contrast(94%);

	}
	.line{
		margin: 32rpx 0;
		height: 1rpx;
		width: 100%;
		display: block;
		background-color: pink;
		border-bottom: 1rpx solid #E5E5E5;
	}
	.evacontent{
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



