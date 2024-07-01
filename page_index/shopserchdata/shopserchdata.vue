<template>
	<view class="contant">
		<view style="background-color: white;display: flex;justify-content: center;padding-bottom: 22rpx;">
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
		
		<view class="stagebox addressbox">
			<view class="itemul" @click="gopage()">
				<view class="itemli">
					<image src="https://img.edows.cn/wx/bg.jpg" mode=""></image>
					<view>
						<view class="addresscon">
							<text>五星门店</text>
							易道大咖工场店(福州高新区某某路店)
						</view>
						<view class="borradd">
							<text>
								某某路10号
							</text>
							<text>
								1.66km
							</text>
						</view>
					</view>
				</view>
			</view>
			<view class="itemul">
				<view class="itemli">
					<image src="https://img.edows.cn/wx/m.png" mode=""></image>
					<view>
						<view class="addresscon">
							<text>五星门店</text>
							易道大咖工场店(福州高新区某某路店)
						</view>
						<view class="borradd">
							<text>
								某某路10号
							</text>
							<text>
								1.66km
							</text>
						</view>
					</view>
				</view>
			</view>
			<view class="itemul">
				<view class="itemli">
					<image src="https://img.edows.cn/wx/m.pn" mode=""></image>
					<view>
						<view class="addresscon">
							<text>五星门店</text>
							易道大咖工场店(福州高新区某某路店)
						</view>
						<view class="borradd">
							<text>
								某某路10号
							</text>
							<text>
								1.66km
							</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 无门店时候显示 -->
			<!-- <view class="nodata">
				<image src="https://img.edows.cn/wx/noshopdata.png" mode=""></image>
				<text>未搜索到门店，请重新输入</text>
			</view> -->
		</view>
		
	</view>
</template>

<script>
	import Topserchbox from "@/components/Serchnabat.vue"
	export default {
		components:{
			Topserchbox
		},
		data() {
			return {
				shopName:''
			}
		},
		onLoad(){
		},
		methods: {
			// 门店详情
			gopage(){
				uni.navigateTo({
				  url: "/pages/shopdetail/shopdetail",
				});
			}
		},
	}
</script>

<style scoped>
	.contant{
		width: 100%;
		height: 100vh;
		background-color: #F1F1F1;
	}
	.stagebox {
		  display: flex;
		  flex-direction: column;
		  align-items: center;justify-content: center;
	  }
	  .stagebox .text{
		  font-family: Source Han Sans CN, Source Han Sans CN;
		  font-weight: 500;
		  font-size: 34rpx;
		  color: #000100;
		  line-height: 38rpx;
		  text-align: left;
		  font-style: normal;
		  text-transform: none;
		  display: flex;
		  justify-content: space-between;
	  }
	  .item .icon{
		  width: 80rpx;
		  height: 80rpx;
	  }
	  .itemul .item{
		  width: calc(100% / 4);
		  display: flex;
		  flex-direction: column;
		  align-items: center;
		  justify-content: center;
		  font-family: Source Han Sans CN, Source Han Sans CN;
		  font-weight: 400;
		  font-size: 24rpx;
		  color: #333333;
		  font-style: normal;
		  text-transform: none;
		  margin-bottom: 40rpx;
	  }
	  .showmore{
		  font-family: Source Han Sans CN, Source Han Sans CN;
		  font-weight: 400;
		  font-size: 24rpx;
		  color: #000100;
		  line-height: 38rpx;
		  text-align: left;
		  font-style: normal;
		  text-transform: none;
		  display: flex;
		  align-items: center;
	  }
	  .showmore image{
		  width: 12rpx;
		  height: 20rpx;
		  margin-left: 10rpx;
	  }
	  .itemli{
		  display: flex;
		  padding: 40rpx 32rpx;
		  box-sizing: border-box;
	  }
	  .itemli image{
		  width: 195rpx;
		  height: 146rpx;
		  margin-right: 24rpx;
	  }
	.addressbox .itemul{
		padding-top: 0;
		margin-top: 32rpx;
		width: 686rpx;
		background: white;
		border-radius: 20rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.addresscon text{
		background:  #3272F4;
		color: white;
		border-radius: 4px;
		font-size: 22rpx;
		padding: 2rpx 11rpx;
		margin-right: 10rpx;
	}
	.addresscon{
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 500;
		font-size: 32rpx;
		color: #0E1D29;
		line-height: 50rpx;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}
	.borradd{
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 400;
		font-size: 24rpx;
		color: #0E1D29;
		line-height: 50rpx;
		text-align: left;
		font-style: normal;
		text-transform: none;
		display: flex;
		justify-content: space-between;
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
	.nodata{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #999999;
		font-size: 28rpx;
	}
	.nodata image{
		width: 540rpx;
		height: 287rpx;
		margin-bottom: 32rpx;
	}
</style>
