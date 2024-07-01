<template>
	<view  class="contant">
		<view class="starylist">
			<view class="starycon">
				<view class="staryconli">
					<view style="display: flex;justify-content: space-between;width: 100%;"> 
						<view style="display: flex">
							<image src="https://img.edows.cn/wx/yddc.png" mode=""></image>
							<view class="staryconlitext">
								小***尼
								<text class="carnum">奥迪-Q8 </text>
								<view style="display: flex;">
									<u-rate  size="14" :count="count" v-model="value" readonly :allowHalf="true"></u-rate>
									<text style="color: #F93B19;margin-left: 15rpx;">
										{{value}}
									</text>
								</view>
							</view>
						</view>
						<view class="date">
							2023.11.02
						</view>
					</view>
					<view class="album__content" >
						<u--text
						  margin="0 0 8px 0"
						  text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
						></u--text>
						<u-album :urls="urls2" multipleMode="column"></u-album>
					  </view>
				</view>
				<view class="staryconli">
					<view style="display: flex;justify-content: space-between;width: 100%;"> 
						<view style="display: flex">
							<image src="https://img.edows.cn/wx/yddc.png" mode=""></image>
							<view class="staryconlitext">
								小***尼
								<text class="carnum">奥迪-Q8 </text>
								<view style="display: flex;">
									<u-rate  size="14" :count="count" v-model="value" readonly :allowHalf="true"></u-rate>
									<text style="color: #F93B19;margin-left: 15rpx;">
										{{value}}
									</text>
								</view>
							</view>
						</view>
						<view class="date">
							2023.11.02
						</view>
					</view>
					<view class="album__content" >
						<u--text
						  margin="0 0 8px 0"
						  text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
						></u--text>
						<u-album :urls="urls2" multipleMode="column"></u-album>
					  </view>
				</view>
				
				<view class="staryconli">
					<view style="display: flex;justify-content: space-between;width: 100%;"> 
						<view style="display: flex">
							<image src="https://img.edows.cn/wx/yddc.png" mode=""></image>
							<view class="staryconlitext">
								小***尼
								<text class="carnum">奥迪-Q8 </text>
								<view style="display: flex;">
									<u-rate  size="14" :count="count" v-model="value" readonly :allowHalf="true"></u-rate>
									<text style="color: #F93B19;margin-left: 15rpx;">
										{{value}}
									</text>
								</view>
							</view>
						</view>
						<view class="date">
							2023.11.02
						</view>
					</view>
					<view class="album__content" >
						<u--text
						  margin="0 0 8px 0"
						  text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
						></u--text>
						<u-album :urls="urls2" multipleMode="column"></u-album>
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
				count: 5,
				value: 3.5,
				urls2: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
					'https://cdn.uviewui.com/uview/album/10.jpg',
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.contant{
		background-color: #F1F1F1;
		padding-top: 24rpx;
	}
	.starylist{
		width: 100%;
		padding: 32rpx;
		border-radius: 20rpx;
		background-color: white;
	}
	
	.comtip{
		display: flex;
		flex-direction: column;
		justify-content: start;
	}
	.staryconli{
		margin-bottom: 33rpx;
		padding-bottom: 33rpx;
		border-bottom: 1px solid #E9E9E9;
	}
	.staryconli image{
		width: 64rpx;
		height: 64rpx;
		margin-right: 16rpx;
	}
	.staryconli .staryconlitext{
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-size: 32rpx;
		color: #333333;
		line-height: 38rpx;
	}
	.staryconli .carnum{
		color: #999999;
		font-size: 24rpx;
		margin-left: 8rpx;
	}
	.staryconli .date{
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 400;
		font-size: 24rpx;
		color: #999999;
	}
	 .album {
	        @include flex;
	        align-items: flex-start;
	
	        &__avatar {
	             padding: 5px;
	             border-radius: 3px;
	         }
	    
	        &__content {
	             flex: 1;
				 margin-bottom: 22rpx;
	         }
	    }
		/deep/.u-album__row__wrapper{
			// margin-right: 0 !important;
		}
		/deep/.u-album__row__wrapper image{
			width: 206rpx !important;
			height: 206rpx !important;
			border-radius: 16rpx !important;
		}
		/deep/.u-album__row__wrapper__text{
			width: 206rpx !important;
			height: 206rpx !important;
		}
		// ::v-deep .u-album__row[data-v-02546599]{
		// 	justify-content: space-around;
		// }
</style>
