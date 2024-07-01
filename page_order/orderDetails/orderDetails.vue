<template>
	<view class="orderDetails">
		<view style="background: url('https://img.edows.cn/wx/topbg.png') no-repeat;background-size: 100% 89%;height: 472rpx;width: 100%;position: absolute;top: 0;left: 0;z-index: 0;">
			<text class="text_orderStatus">订单已完成</text>
		
		</view>
		<view class="crad_details" style="z-index: 1;">
			<view class="steps" v-for="e,i in temporaryData.slice(0, showCount)">
				<view class="steps_head">
					<image
						src="../../static/stepsSuc.png"
						class="stepsSuc"
						v-if="e.status == 1"
					/>
					<view class="stepsNo" v-if="e.status != 1"></view>
					<text class="text">{{ e.title }}</text>
					<view class="query" v-if="e.query == 1" @click="goQuery">提出质疑</view>
					<text class="time">{{ e.time }}</text>
				</view>
				<view class="steps_content">
					<view class="stepsLine_box">
						<view class="stepsLine" v-if="i != showCount-1 "></view>
					</view>
					<view style="display: flex;flex-direction: column;width: 100%;">
						<text class="text">{{ e.text }}</text>
						<div class="grid-container" v-if="e.imgList.length > 0" >
							<div class="grid-item" v-for="ee in e.imgList"><image :src="ee.imgList" alt="Image 1"/></div>
						</div>
						<div class="file" v-if="e.file != ''" >
							<view style="display: flex;align-items: center">
								<image
									src="../../static/PDFicon.png"
									style="width: 38rpx;height: 40rpx;margin-right: 12rpx;"
								/>
								<text>{{ e.fileName }}</text>
							</view>
							<view style="display: flex;align-items: center">
								<view style="width: 38rpx;height: 40rpx;margin-right: 12rpx;"></view>
								<text >{{ e.fileNo }}</text>

							</view>

							
						</div>
					</view>

				</view>
			</view>
			<view class="steps_bottom">
				<image
					style="width: 56rpx;height: 56rpx;"
					src="https://img.edows.cn/wx/yddc.png"
				/>
				<text class="text">易道大咖某某路店</text>
				<view class="text" style="margin-left: auto;display: flex;align-items: center;flex-wrap: wrap;">
					<image style="width: 30rpx;height: 30rpx;line-height: 30rpx;display: block;margin-right: 4rpx;color:#333333 ;" src="../../static/call.png"  ></image>
						<!-- <u--image style="margin-right: 8rpx;" :showLoading="true" src="../../static/call.png" width="30rpx" height="30rpx" ></u--image> -->
					<u--text text="联系门店" mode="phone" :callText="'1310595111113'" class="text"  size="24rpx" call></u--text>
				</view>
			</view>
			<view class="stretch" @click="showCount = temporaryData.length" v-if="showCount == 2">
				展开<u-icon name="arrow-down" color="#747474" style="width: 14.8rpx;height: 8.88rpx;"></u-icon>
			</view>
			<view class="stretch" @click="showCount = 2" v-if="showCount !== 2">
				收缩<u-icon name="arrow-up" color="#747474" style="width: 14.8rpx;height: 8.88rpx;"></u-icon>
			</view>
		</view>

		<view class="userInfo">
			<text class="title">用户信息</text>
			<view style="margin-top: 8rpx;background-image: linear-gradient(to right, rgba(27, 98, 242, 1) 0%, rgba(27, 98, 242, 0) 100%);width: 68rpx;height: 6rpx;border-radius: 20rpx ;	"></view>
			<view style="margin-bottom: 28rpx;margin-top: 40rpx;">
				<text class="left">用户姓名：</text>
				<text class="right">张三</text>
			</view>
			<view style="margin-bottom: 28rpx;">
				<text class="left">联系方式：</text>
				<text class="right">123****8900</text>
			</view>
			<view style="margin-bottom: 28rpx;">
				<text class="left">预约时间：</text>
				<text class="right">2024-05-05  16:00</text>
			</view>
			<view style="margin-bottom: 28rpx;">
				<text class="left">车牌号码：</text>
				<text class="right">闽AWX888</text>
			</view>
			<view style="margin-bottom: 28rpx;">
				<text class="left">车辆车型：</text>
				<text class="right">车型数据</text>
			</view>
			<view >
				<text class="left">预约备注：</text>
				<text class="right">备注说明</text>
			</view>
		</view>
		
		<view class="shopList">
			<text class="title">商品清单</text>
			<view style="margin-bottom: 40rpx;margin-top: 8rpx;background-image: linear-gradient(to right, rgba(27, 98, 242, 1) 0%, rgba(27, 98, 242, 0) 100%);width: 68rpx;height: 6rpx;border-radius: 20rpx ;	"></view>
			<view style="display: flex;margin-bottom: 24rpx;" v-for="e in 5 ">
				<view>
					<image
						src="https://img.edows.cn/wx/m.png"
						style="width: 146rpx;height: 146rpx;margin-right: 24rpx;display: block"
					/>
				</view>
				
				<view style="display: flex;flex-direction: column;justify-content: space-between;width: 100%;">
					<text class="shopName">商品名称{{ e+1 }}</text>
					<view style="display: flex;">
						<text class="price">￥{{ 188*e+1 }}</text>
						<text class="count" style="margin-left: auto;">X{{ e+1 }}</text>
					</view>
				</view>
			</view>
		</view>


		<view class="orderInfo">
			<text class="title">订单信息</text>
			<view style="margin-top: 8rpx;background-image: linear-gradient(to right, rgba(27, 98, 242, 1) 0%, rgba(27, 98, 242, 0) 100%);width: 68rpx;height: 6rpx;border-radius: 20rpx ;	"></view>
			<view style="margin-bottom: 28rpx;margin-top: 40rpx;">
				<text class="left">订 单 号：</text>
				<text class="right">LP20240506000018</text>
			</view>
			<view style="margin-bottom: 28rpx;">
				<text class="left">订单时间：</text>
				<text class="right">2024-05-04  16:00:06</text>
			</view>
			<view style="margin-bottom: 28rpx;">
				<text class="left">支付时间：</text>
				<text class="right">2024-05-05  16:00:06</text>
			</view>
			<view style="margin-bottom: 28rpx;">
				<text class="left">支付方式：</text>
				<text class="right">—</text>
			</view>
			<view style="margin-bottom: 28rpx;">
				<text class="left">支付状态：</text>
				<text class="right">已支付</text>
			</view>
			<view style="margin-bottom: 28rpx;">

				<text class="left">商品总额：</text>
				<text class="right">￥2309.00</text>
			</view>
			<view >
				<text class="left">实付金额：</text>
				<text class="right" style="color: #FF3119;">￥2309.00</text>
			</view>
		</view>
		<view class="tabbar">
			<view class="bottom_but"  @click="goEvaluate">评价晒单</view>
			<view class="bottom_but" style="color: #FFFFFF;background-color: #2063EB;border:0" @click="goCompletion">确认完成</view>
		</view>
		<view style="height: 148rpx;"></view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 展开收缩
				showCount:2,
				// 临时数据
				temporaryData:[{
					title:'服务完成',
					text:'服务完成拉，停放于取车区',
					time:'11-05  12:58',
					file:'',
					imgList:[],
					status:3,
					query:0,
					status:1
				},{
					title:'已评价',
					text:'已完成维修，等待评价',
					time:'11-05  12:58',
					imgList:[],
					status:3,
					query:0,
					file:'',
					status:2
				},{
					title:'作业后',
					text:'等待交车，点击查看爱车图片',
					time:'11-05  12:58',
					imgList:['https://picsum.photos/800/600','https://picsum.photos/800/600','https://picsum.photos/800/600','https://picsum.photos/800/600','https://picsum.photos/800/600','https://picsum.photos/800/600','https://picsum.photos/800/600','https://picsum.photos/800/600'],

					file:'',
					status:3,
					query:1,
				},{
					title:'终检',
					text:'完工检查、ADAS校准',
					time:'11-05  12:58',
					file:'',
					imgList:['https://picsum.photos/800/600','https://picsum.photos/800/600'],
					status:3,
					query:1,
					status:3
				},{
					title:'作业中',
					text:'拆卸、清理并安装玻璃',
					time:'11-05  12:58',
					file:'',
					imgList:['https://picsum.photos/800/600','https://picsum.photos/800/600'],
					status:3,
					query:1,
					status:3
				},{
					title:'作业前',
					text:'门店向您介绍服务内容，服务规范、使用的相关配件及玻璃产品',
					time:'11-05  12:58',
					file:'',
					imgList:['https://picsum.photos/800/600'],
					status:3,
					query:1,
					status:3
				},{
					title:'已进场',
					text:'穿着蓝色服装的工作人员正在飞奔而来，全面检测您的爱车',
					time:'11-05  12:58',
					file:'https://img.edows.cn/wx/topbg.png',
					fileName:'质检单',
					fileNo:'NO.1786197365957239102',
					imgList:[],
					status:3,
					query:0,
					status:3
				},{
					title:'已出单',
					text:'保单已审核通过，请尽快预约维修',
					time:'11-05  12:58',
					file:'',
					imgList:[],
					status:3,
					query:0,
					status:3
				}]
			}
		},
		methods: {
			goQuery(){

				uni.navigateTo({
					url:'/page_order/query/query',
				})
			},
			goEvaluate(){
				uni.navigateTo({
					url:'/page_order/orderEvaluate/orderEvaluate',
				})
			},
			goCompletion(){
				uni.navigateBack({
					delta:1,
				})
			}
		}
	}
</script>
<style>
	/* uni-page-head[uni-page-head-type=default]~uni-page-wrapper {
		background-color: #f6f6f6 !important;
	} */
	Page{
		background-color: #f6f6f6 !important;

	}
	page{
		background-color: #f6f6f6 !important;

	}
</style>
<style scoped lang="scss">
	.orderDetails{
		display: flex;
		flex-direction: column;
		padding: 40rpx 32rpx;
		box-sizing: border-box;

	}
	.text_orderStatus{
		font-family: Arial, Arial;
		font-weight: bold;
		font-size: 48rpx;
		color: #FFFFFF;
		margin: 40rpx 0 32rpx 32rpx;
		line-height: 46rpx;
		display: block;
	}
	.crad_details{
		// height: 458rpx;
		overflow:auto;
		margin-top: 32rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		padding:45rpx 30rpx 45rpx 19rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		margin-top: 90rpx;

	}
	.steps{
		display: flex;
		flex-direction: column;
		margin-bottom: 15rpx;
	}
	.steps_head{
		display: flex;
		width: 100%;
		align-items: center;
		.text{
			font-weight: 500;
			font-size: 32rpx;
			color: #333333;
			margin-left: 16rpx;
		}
		.time{
			margin-left: auto;
		}
		.query{
			width: 142rpx;
			height: 44rpx;
			background: #FFFFFF;
			border-radius: 22rpx 22rpx 22rpx 22rpx;
			border: 1rpx solid #2063EB;
			
			font-weight: 500;
			font-size: 24rpx;
			color: #2063EB;
			line-height: 44rpx;
			text-align: center;
			margin-left: 16rpx;
		}
	}
	.steps_content{
		display: flex;
		margin-top: 13rpx;
		min-height: 60rpx;
		.stepsLine_box{
			width: 38rpx;
			display: block;
		}
		.text{
		width: 95%;

			font-weight: 400;
			font-size: 24rpx;
			color: #999999;
			margin-left: 16rpx;

		}
		
	}
	.steps_bottom{
		display: flex;
		height: 103rpx;

		border-top: 1rpx solid #D4D4D4;
		border-bottom: 1rpx solid #D4D4D4;
		align-content: center;
		flex-wrap: wrap;
		.text{
			font-weight: 400;
			font-size: 28rpx;
			color: #333333;
			margin-left: 12rpx;
			line-height: 56rpx;
		}
	}
	.steps_left{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.steps{
		display: flex;
	}
	.stepsSuc{
		width: 38rpx;
		height: 38rpx;
	}
	.stepsNo{

		width: 38rpx;
		height: 38rpx;
		width: 16rpx;
		height: 16rpx;
		line-height: 16rpx;
		margin: 0 12rpx;
		background: #FFFFFF;
		border: 3rpx solid #B9B9B9;
		border-radius: 50rpx;

	}

	.stepsLine{
		display: block;
		width: 0rpx;
		height: 100%;
		border: 1rpx solid #D4D4D4;
		margin: 0 auto;
	}
	.grid-container {
		display: grid;
		grid-template-columns: repeat(5, 1fr); /* 创建五列，每列宽度相同 */
		grid-gap: 10px; /* 设置网格项之间的间距 */
		margin-left: 16rpx;
		margin-top: 12rpx;
		margin-bottom: 32rpx;
	}

	.grid-item image {
		border-radius: 8rpx;
		height: 104rpx;
		width: 104rpx;
		background: #F6F6F6;
		
	}
	.file{
		margin-left: 16rpx;
		margin-top: 12rpx;
		margin-bottom: 32rpx;
		width: 584rpx;
		height: 116rpx;
		background: #F6F6F6;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		padding: 22rpx 24rpx;
		box-sizing: border-box;
	}
	.stretch{
		font-weight: 400;
		font-size: 24rpx;
		color: #999999;
		margin: 33rpx auto 0 auto;
		text-align: center;
		display: flex;
		align-items: center;
	}
	.userInfo{
		height: 547rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		margin-top: 24rpx;
		padding: 32rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		.title{
			font-weight: 500;
			font-size: 34rpx;
			color: #000100;
			line-height: 38rpx;
		}
		.left{
			font-family: Source Han Sans CN, Source Han Sans CN;
			font-weight: 400;
			font-size: 28rpx;
			color: #666666;
		}
		.right{
			font-family: Source Han Sans CN, Source Han Sans CN;
			font-weight: 500;
			font-size: 28rpx;
			color: #333333;
		}
	}
	.shopList{
		margin-top: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		padding: 32rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		.count{
			font-size: 24rpx;
			color: #0E1D29;
			line-height: 40rpx;
		}
		.price{
			font-weight: 500;
			font-size: 32rpx;
			color: #0E1D29;
			line-height: 40rpx;
		}
		.shopName{
			font-weight: 500;
			font-size: 32rpx;
			color: #0E1D29;
			line-height: 40rpx;
		}
	}
	.orderInfo{
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		margin-top: 24rpx;
		padding: 32rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		.title{
			font-weight: 500;
			font-size: 34rpx;
			color: #000100;
			line-height: 38rpx;
		}
		.left{
			font-family: Source Han Sans CN, Source Han Sans CN;
			font-weight: 400;
			font-size: 28rpx;
			color: #666666;
		}
		.right{
			font-family: Source Han Sans CN, Source Han Sans CN;
			font-weight: 500;
			font-size: 28rpx;
			color: #333333;
		}
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
		justify-content: space-evenly
	}
	.bottom_but{
		width: 100%;
		width: 330rpx;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		border: 2rpx solid #666666;
	}
</style>
