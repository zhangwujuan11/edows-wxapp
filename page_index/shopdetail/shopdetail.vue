<template>
	<view class="contant">
		<!-- 自定义导航 -->
		<view style="position: fixed;top: 0;z-index: 99999;width: 100%;">
		<view class="ntopnar" :style="{'height':tops+'px'}"></view>
		<view class="nav-bar" :style="{'height':height+'px'}">
		    <view class="nav-bar-content">
		      <u-picker 
			  :show="show" 
			  :columns="columns"
			  @confirm="carchange"
			   @cancel="show = false"></u-picker>
			  <view style="display: flex;align-items: center;">
				  <u-icon name="arrow-left" color="#333333" size="24"  @click="backpage()"></u-icon>
				  <view  @click="show = true"  style="display: flex;align-items: center;">
				  	{{carNum}}
				  	<view style="margin-left: 15rpx;" >
				  		<u-icon name="arrow-down-fill" color="#333333" size="14"></u-icon>
				  	</view>
				  </view>
				 
			  </view>
		    </view>
		  </view>
		  </view>
		  <!-- 自定义导航 -->
		  
		<view class="u-demo-block"  :style="{'margin-top':tops+height+'px'}">
			<u-swiper 
			:list="list5" 
			@change="e => current = e.current" 
			:autoplay="false" 
			indicatorStyle="right: 20px;bottom:30px;"
			height="447rpx"
			imgMode="heightFix"
			radius="0"
			:circular="true">
				<view slot="indicator" class="indicator">
					<view class="indicator__dot" v-for="(item, index) in list5" :key="index"
					:class="index === current ? 'indicator__dot--active' : ''">
					</view>
				</view>
			</u-swiper>
		</view>
		<view class="detailbox">
			<view class="detailcon">
				<view class="detleft">
					<view class="name">
						【易道大咖】福清市凯旋城店
					</view>
					<view style="display: flex;align-items: center;"  @click="goshopevaluate">
						<text class="span">总评分</text>  4.96   
						<text class="span" style="margin-left: 22rpx;">总评论</text> 
						<view style="display: flex;">1071   <u-icon name="arrow-right" color="#999999" size="12"></u-icon> </view>
					</view>
					<view>
						营业时间：08:00-22:00
					</view>
					<view>
						福建省福州市福清市京岚线天翔·凯旋城西...
					</view>
					<view>
						<text class="span">距离您1.54km</text>
					</view>
				</view>
				<view class="detright">
					<view @click="showmap" style="margin-right: 24rpx;display: flex;flex-direction: column;align-items: center;">
						<image src="../../static/index/daohang.png" mode=""></image>
						导航
					</view>
					<view @click="playphone" style="margin-right: 24rpx;display: flex;flex-direction: column;align-items: center;">
						<image src="../../static/index/dianhua.png" mode=""></image>
						电话
					</view>
					
				</view>
			</view>
			<u-button 
			icon="clock" iconColor="#ffffff" 
			:customStyle="{'margin-top': '32rpx'}"
			color="linear-gradient(90deg,#1B62F2, #6195FF)" 
			@click="goConfirm"> 
				<text style="font-size: 28rpx;margin-right: 24rpx;margin-left: 16rpx;"> 预约到店 </text>
				<text style="font-size: 24rpx;margin-right: 150rpx;">更换玻璃  我们更专业</text>
				<u-icon name="arrow-right" color="#ffffff" size="16"></u-icon>
			</u-button>
		</view>
		<view class="starylist">
			<view class="tip">
				<view class="comtip">
					门店评价
					<image src="../../static/index/bottomlin.png" mode=""></image>
				</view>
				<view style="display: flex;align-items: center;" @click="goshopevaluate">
					21258条评价
					<u-icon name="arrow-right" color="#999999" size="14"></u-icon>
				</view>
			</view>
			
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
	import bmap from '@/libs/bmap-wx.min.js'
	export default {
		data() {
			return {
				// 地图
				markers: [],
				latitude: '', 
				longitude: '', 
				placeData: {} ,
				address:'福州市台江区鳌峰小区',
				//
				count: 5,
				value: 3.5,
				carNum:'闽AXW888',
				show:false,
				columns:[['columns','6666','7777']],
				height:'',
				tops:'',
				current:0,
				list5: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
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
		onReady() {
			uni.getSystemInfo({
					success: (e) => {
						this.tops = e.statusBarHeight;//20
						let custom = uni.getMenuButtonBoundingClientRect();//32
						this.height = custom.height + (custom.top - e.statusBarHeight) * 2;
					}
				})
		},
		onLoad() {
			let that=this
			var BMap = new bmap.BMapWX({
				ak: 'LA26lnRd6tMIlCFP3Ce3H6otX5g5Gd0e'
			});
			var fail = function(data) {
				console.log(data)
			};
			var success = function(data) {
				let wxMarkerData = data.wxMarkerData; 
				that.markers = wxMarkerData 
				that.latitude = wxMarkerData[0].latitude 
				that.longitude =wxMarkerData[0].longitude
			}
			 // 发起geocoding检索请求 
			     BMap.geocoding({ 
					address: that.address, 
					fail: fail, 
					success: success
			}); 
		},
		methods: {
			// 切换车辆确定
			carchange(e){
				this.carNum=e.value[0]
				this.show=false
			},
			// 导航返回键
			backpage(){
				uni.navigateBack({
					delta:1
				})
			},
			// 地图导航
			showmap(){
				console.log(this.address)
				let that=this
				uni.openLocation({ 
				    latitude: Number(that.latitude), //要去的纬度
				    longitude: Number(that.longitude), //要去的经度 
					name: '地点',
				    address: that.address, //要去的具体地址
					
				}) 
			},
			goConfirm(){
				uni.navigateTo({
				  url: "/page_index/confirmReserv/confirmReserv",
				});
			},
			// 门店评价
			goshopevaluate(){
				uni.navigateTo({
				  url: "/page_index/shopevaluate/shopevaluate",
				});
			},
			// 确认预约单
			goConfirm(){
				uni.navigateTo({
				  url: "/page_index/confirmReserv/confirmReserv",
				});
			},
			//电话
			playphone(){
				uni.makePhoneCall({
				// 手机号 这里可以直接写号码如 12345 也可以写获取号码的字段如this.mobile
				phoneNumber: '13276913603', 
				// 成功回调
				success: (res) => {
					console.log('调用成功!')	
				},
				// 失败回调
				fail: (res) => {
					console.log('调用失败!')
				}
			  });
			},
		}
	}
</script>

<style lang="scss" scoped>
	.contant{
		background-color: #F1F1F1;
	}
	
	// 导航
	.ntopnar{
		background-color: white;
	}
	.nav-bar {
	  /* 添加样式，比如背景色、高度、边框等 */
	  background-color: #ffffff;
	  display: flex;
	  align-items: center;
	  justify-content: left;
	  font-family: Source Han Sans CN, Source Han Sans CN;
	  font-weight: 400;
	  font-size: 40rpx;
	  color: #333333;
	}
	.nav-bar-content {
	  display: flex;
	  align-items: center;
	}
	
	
	
	
	.indicator {
		@include flex(row);
		justify-content: center;

		&__dot {
			height: 6px;
			width: 6px;
			border-radius: 100px;
			background-color: rgba(255, 255, 255, 0.35);
			margin: 0 5px;
			transition: background-color 0.3s;

			&--active {
				background-color: #ffffff;
				width: 12px;
			}
		}
	}

	.indicator-num {
		padding: 2px 0;
		background-color: rgba(0, 0, 0, 0.35);
		border-radius: 100px;
		width: 35px;
		@include flex;
		justify-content: center;

		&__text {
			color: #FFFFFF;
			font-size: 12px;
		}
	}
	.detailbox{
		background-color: white;
		width: 100%;
		border-radius: 20rpx;
		padding: 32rpx;
		height: 36rpx;
		margin-top: -20rpx;
		box-sizing: border-box;
		position: relative;
		z-index: 9999;
		height: 100%;
	}
	.detailcon{
		background: url(https://img.edows.cn/wx/shopdetailbg.png) no-repeat;
		background-size: 454rpx 454rpx;
		background-position: 130% 28%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.detright{
		display: flex;
		font-size: 20rpx;
	}
	.detright image{
		width: 30rpx;
		height: 30rpx;
		margin-bottom: 10rpx;
	}
	.detleft{
		line-height: 65rpx;
		font-size: 24rpx;
		color: #333333 ;
	}
	.detleft .name{
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: bold;
		font-size: 32rpx;
		color: #333333;
	}
	.detleft .span{
		color: #999999;
		margin-right: 15rpx;
	}
	.starylist{
		width: 100%;
		padding: 32rpx;
		border-radius: 20rpx;
		background-color: white;
		height: 300rpx;
		margin-top: 24rpx;
	}
	.starylist .tip{
		display: flex;
		justify-content: space-between;
		margin-bottom: 42rpx;
	}
	.starylist .tip image{
		width: 68rpx;
		height: 6rpx;
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