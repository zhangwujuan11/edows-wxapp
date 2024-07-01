<template>
	<view class="content" style="height: calc(100vh - 40rpx); overflow: hidden;background-color: #F1F1F1;">
		<navBar :item='{leftText:leftText,leftIcon:leftIcon,leftIconColor:leftIconColor, navTitle: navTitle,bgColor:bgColor}'></navBar>
		<!-- 搜素 -->
		<view class="search-city">
			<u-search v-model="searchValue" bgColor="#fff" placeholderColor="#CECCCC" :showAction="true"
				@change="changeClick" actionText="搜索" :animation="false" clearabled @custom="customClick"></u-search>
		</view>
		<view v-if="searchValue" style="height: calc(100vh);overflow-y: scroll;margin-top: 20rpx;">
			<view v-if="searchArr.length > 0">
				<view class="list-cell" :class="searchArr.length -1 == index ? 'not-line':''"
					v-for="(cell, index) in searchArr" @click="citylistClick(cell)" :key="index">
					{{cell.fullName}}
				</view>
			</view>
			<!-- 没有搜素到的城市 -->
			<view v-else class="searchNot" style="text-align: center;">
				<image src="" mode=""></image>
				<text>抱歉！没有找到该城市</text>
			</view>
		</view>
		<view v-else>
			<!-- 获取当前定位城市 -->
			<view class="currentPosition">
				<text class="position-text">当前定位城市：</text>
				<u-icon name="map-fill" color="#2979ff" size="20"></u-icon>
				<text class="position-value" @click="cityClick">{{city}}</text>
			</view>
			
			<view>
				<u-index-list :index-list="indexList" custom-nav-height="64" :sticky="false">
					<view class="hotcity" id="_hotcity"  v-if="!cell.fullName">
						<view class="hotcity-title">
							热门城市
						</view>
						<view class="hotcity-value">
							<view class="hotcity-city" v-for="(item,index) in hotCity" :key="index" @click="hotCityClick(item)">
								{{item}}
							</view>
						</view>
					</view>
					<template v-for="(item, index) in cityList">
						<!-- #ifdef APP-NVUE -->
						<u-index-anchor :text="indexList[index]" bgColor="#F1F1F1"
							v-if="item.data.length >0 && indexList[index] != '热'"></u-index-anchor>
						<!-- #endif -->
						<u-index-item>
							<!-- #ifndef APP-NVUE -->
							<u-index-anchor :text="indexList[index]" bgColor="#F1F1F1"
								v-if="item.data.length >0 && indexList[index] != '热'"></u-index-anchor>
							<!-- #endif -->
							<view class="list-cell" :class="item.data.length == indexs ? 'not-line':''"  v-if="cell.fullName"
								v-for="(cell, indexs) in item.data" @click="citylistClick(cell)" :key="indexs">
								{{cell.fullName}}
							</view>
						</u-index-item>
					</template>
				</u-index-list>
			</view>
		</view>
		<u-loading-page bg-color="#e8e8e8" :loading="lodingis"></u-loading-page>
	</view>
</template>

<script>
	import bmap from '@/libs/bmap-wx.min.js'
	import cityCode from '@/page_index/static/cityCode.js';

	export default {
		data() {
			return {
				lodingis: false,
				leftIcon: 'arrow-left',
				leftIconColor: '#fff',
				navTitle: '选择城市',
				bgColor: '#000',
				allCitys: [], // 所有城市数据
				indexList: [],
				cityList: [],
				searchValue: '', // 搜素内容
				city: '',
				hotCity: ['北京', '上海', '天津', '重庆', '广州', '深圳', '成都', '杭州'],
				searchArr: [],
				open: false, // 判断是否从区域选择进入该页面 默认否
			}
		},
		methods: {
			customClick(e) { // 搜素点击
				let name = e.replace(/\s*/g, ""); // 去除空格 避免多次请求
				this.searchValue = name
				if (name) {
					this.getSearch();
				}
			},
			changeClick(e) { // 输入框变化的时候
				let name = e.replace(/\s*/g, "");
				this.searchValue = name
				if (name) {
					this.getSearch();
				}
			},
			citylistClick(e) { // 列表点击
				this.getPageValue(e);
			},
			cityClick() { // 获取定位的选择
				this.getData(this.city)
			},
			hotCityClick(e) { // 热门城市点击
				this.getData(e)
			},
			getData(cityValue) {
				// 传的城市参数拿到城市数据——热门城市/当前定位
				let data = {};
				this.allCitys.map((item, index) => {
					if (cityValue == item.shortName) {
						data = item
					}
				})
				console.log('data',data);
				if (JSON.stringify(data) == '{}') {
					uni.showToast({
						title: '当前城市不存在',
						icon: 'error',
					})
				}
			},
			getPageValue(cityValue){
				uni.setStorageSync( 'City', cityValue )
				uni.navigateBack({
					delta: 1
				})
			},
			getData(){
				uni.navigateBack({
					delta: 1
				})
			},
			async getSearch() { // 搜素城市
				var that = this;
				that.searchArr = [];
				if (this.searchValue !== '') {
					this.lodingis = true;

					this.allCitys.map(item => {
						if (item.fullName.includes(this.searchValue)) {
							that.searchArr.push(item)
						}
					})
					this.lodingis = false;

				} else {
					this.options = [];
				}
				// 新建百度地图对象 
				//      var BMap = new bmap.BMapWX({ 
				//          ak: 'LA26lnRd6tMIlCFP3Ce3H6otX5g5Gd0e' 
				//      }); 
				//      var fail = function(data) { 
				//          console.log(data) 
				//      }; 
				//      var success = function(data) { 
				//          var sugData = ''; 
				//          for(var i = 0; i < data.result.length; i++) { 
				//              sugData = sugData + data.result[i].name + ','; 

				//          } 
				//  that.searchArr = sugData.split(",")
				// console.log(that.searchArr)
				//      } 
			}
		},
		onLoad() {
			this.city=uni.getStorageSync('City_Name')
			this.allCitys = cityCode.city;
			this.indexList = cityCode.newlist;
			this.cityList = cityCode.newdata;

		}
	}
</script>

<style lang="less" scoped>
	// @import url("@/utils/index.less");

	.not-line {
		border-bottom: none !important;
	}

	.content {
		padding: 20rpx 0;

		.search-city {
			padding: 0 33rpx;
		}

		.searchNot {
			flex-direction: column;
			padding-top: 100rpx;

			image {
				display: block;
			}

			text {
				display: block;
				font-size: 28rpx;
				color: #4A4A4A;
			}
		}
	}

	.currentPosition {
		padding: 30rpx 33rpx;
		display: flex;
		background-color: white;
		margin: 28rpx 0;
		text {
			display: block;
			font-size: 32rpx;
		}

		.position-text {
			margin-left: 6rpx;
		}
	}

	.hotcity {
		padding-bottom: 30rpx;

		.hotcity-title {
			padding-bottom: 30rpx;
			font-size: 32rpx;
			text-indent: 30rpx;
		}

		.hotcity-value {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			background-color: #fff;
			padding: 32rpx;
			justify-content: space-around;
			.hotcity-city {
				font-size: 32rpx;
				background-color:#F1F1F1;
				border-radius: 6rpx;
				padding: 14rpx 0;
				box-sizing: border-box;
				margin-bottom: 16rpx;
				width: 150rpx;
				text-align: center;
			}
		}
	}

	.list-cell {
		border-bottom: 1px solid rgb(214, 215, 217);
		box-sizing: border-box;
		width: 100%;
		padding: 20rpx 33rpx;
		overflow: hidden;
		color: #323233;
		font-size: 30rpx;
		line-height: 24px;
		background-color: white;
	}

	/deep/ .u-index-list {
		scroll-view {
			max-height: calc(100vh - 268rpx) !important;
		}
	}
	.position-value{
		margin-left: 10rpx;
	}
	
</style>