<template>
	<view class="bannercerbg">
		<view class="serch">
			<view class="select" @click="morecity">
				<view class="uni-input" style="margin-right: 10rpx;">{{city}} </view>
				<u-icon name="arrow-down-fill" color="#999999" size="10"></u-icon>
			</view>
			<view class="secboxx">
				<u--input 
				:customStyle="{background: '#F7F7F7'}"
				placeholder="请输入门店名称" 
				border="surround" shape="circle" v-model="shopName"
				>
				</u--input>
				<view class="iconser" @click="serdata">
					<u-icon name="search" color="#999999" size="32"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import bmap from '@/libs/bmap-wx.min.js'
	import props from '../uni_modules/uview-ui/libs/config/props'
	export default {
		data() {
			props:{
				shopName:''
			}
			return {
				city:'',
				shopName:''
			}
		},
		mounted(){
			this.city=uni.getStorageSync('City_Name').slice(0, -1)
		},
		methods:{
			// 城市选择
			morecity(){
				uni.navigateTo({
				  url: "/pages/choosecity/choosecity",
				});
			},
			serdata(){
				console.log(this.shopName)
			}
		}
	}
</script>

<style scoped>
	.bannercerbg  {
		width: 100%;
		background-color: white;
		height: 100rpx;
		display: flex;
		justify-content: space-around;
	}
	
	.serch {
		height: 70rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	
	.select {
		font-size: 32rpx;
		display: flex;
		align-items: center;
		margin-right: 10rpx;
	}
	/deep/.u-input {
		height: 66rpx;
		font-size: 24rpx;
		border-radius: 33rpx 33rpx 33rpx 33rpx;
		color: black;
	}
	.secboxx{
		width: 575rpx;
		position: relative;
	}
	.iconser{
		position: absolute;
		right: 20rpx;
		top: 6rpx;
		z-index: 99;
	}
</style>