<template>
	<view class="confirmReserv">
		<view class="carInfo" >
			<view style="display: flex;flex-direction: column;margin-top: 20rpx;">
				<u--text text="奥迪Q8" size="24rpx" color="#333333" lineHeight="38rpx"></u--text>
				<u--text text="闽AXW888" size="32rpx" color="#000000" :bold="true" 
				suffixIcon="arrow-right"
				iconStyle="widht:12rpx;height:20rpx;font-size:22rpx;font-weight:800;margin-left:10rpx"
				></u--text>
				<u--text text="2023款2.0T手自一体  45TFSI豪华动感型" size="20rpx" margin="0rpx 0 0 0" color="#999999"></u--text>
			</view>
			<image style="width: 286rpx;height: 124rpx;display: block;margin: 23rpx 0;margin-left: auto;" src="https://img.edows.cn/wx/confimCar.png"  ></image>
			<!-- <u--image style="margin: 23rpx 0;margin-left: auto;" src="../../static/confimCar.png" width="286rpx" height="124rpx" ></u--image> -->
		</view>
		<view class="infoForm">
			<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
			<u--form
			labelPosition="left"
			ref="uForm"
			:rules="rules"
			:model="form"
			>
		<!-- 	<u-form-item prop="contact" borderBottom>
				<span class="form_lable form_lable_required">联系人</span>
				<u--input align="right" placeholder="请输入联系人" input-align="right" fontSize="32rpx" v-model="form.contact"></u--input>
			</u-form-item> -->
				<u-form-item prop="shopName" borderBottom @click="()=>shopOpen = true" >	
					<span class="form_lable form_lable_required">服务门店</span>
					<view class="form_readText " :style="!form.shopName?'color:rgb(192, 196, 204)':''">{{form.shopName || '请选择服务门店'}}</view>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item prop="time" borderBottom @click="()=>timeOpen = true" >
					<span class="form_lable form_lable_required">预约时间</span>
					<view class="form_readText" :style="!form.time?'color:rgb(192, 196, 204)':''">{{form.time || '请选择到店服务时间'}}</view>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item prop="item" borderBottom @click="()=>itemOpen = true" >
					<span class="form_lable form_lable_required">预约项目</span>
					<view class="form_readText":style="!form.item?'color:rgb(192, 196, 204)':''" >{{form.item || '请选择服务内容' }}</view>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item prop="contact" borderBottom>
					<span class="form_lable form_lable_required">联系人</span>
					<u--input align="right" placeholder="请输入联系人" input-align="right" fontSize="32rpx" v-model="form.contact"></u--input>
				</u-form-item>
				<u-form-item prop="phone" borderBottom>
					<span class="form_lable form_lable_required">手机号</span>
					<u--input align="right" placeholder="请输入手机号" input-align="right" fontSize="32rpx" v-model="form.phone"></u--input>
				</u-form-item>
				<u-form-item prop="msg" borderBottom>
					<span class="form_lable">预约备注</span>
					<u--input align="right" placeholder="请输入预约备注" input-align="right" fontSize="32rpx" v-model="form.msg"></u--input>
				</u-form-item>
			</u--form>
		</view>
		<u-picker :show="shopOpen" title="服务门店" :columns="shopColumns" keyName="label" @confirm="confirmShop" @cancel="()=>shopOpen = false"></u-picker>
		<!-- <u-picker :show="timeOpen" :columns="timeColumns" keyName="label" @confirm="confirmTime" @cancel="()=>timeOpen = false"></u-picker> -->
		<u-picker :show="itemOpen" title="预约项目" :columns="itemColumns" keyName="label" @confirm="confirmItem" @cancel="()=>itemOpen = false"></u-picker>

		<u-popup :show="timeOpen" :round="10" mode="bottom" @close="()=>timeOpen=false" closeable>
			<view class="reservTime">
		        <text style="color:color: #333333;font-size: 36rpx;line-height: 38rpx;font-weight: bold;">预约时间</text>
		        <text style="color: #333333;font-size: 32rpx;line-height: 32rpx;text-align: left;margin-top: 20rpx;">已选择到店时间
					<text style="font-weight: bold;margin-left: 20rpx;font-size: 34rpx;">05-05 18:00</text>
				</text>
				<u-scroll-list>
				   <view v-for="(e, i) of weekDates" class="item" :key="i" @click="activeDayIndex = i">
					    <view style="width: 100rpx;display: flex;flex-direction: column;" :class="i == activeDayIndex ? 'active' : ''">
							<text>{{e.dayOfWeek}}</text>
							<text>{{e.formattedDate}}</text>
					    </view>
						<view  :class="i == activeDayIndex ? 'active_bottom' : ''"></view>
				   </view>
				</u-scroll-list>
				<view class="grid-container">
					<view :class="index == activeTimeIndex ? 'grid-item_active grid-item' : 'grid-item'" v-for="item,index in Workingtime" :key="item.id" @click="activeTimeIndex = index">
						{{item.content}}
					</view>
				</view>
				<view style="margin-top: 40rpx;">
					<text style="color: #999999;font-size: 24rpx;line-height: 43rpx;">温馨提示：若您过时到店，则需根据门店实际情况现场排队</text>
				</view>
				<view class="but" @click="form.time = Workingtime[activeTimeIndex].content;timeOpen=false">
					确定
				</view>
			</view>
		</u-popup>

		<view class="tabbar">
			<view class="" style="align-items: center;">
				<u--text text='暂无参考价格' size="24rpx"></u--text>
				<u--text text='以实际门店为准' size="24rpx"></u--text>
			</view>
			<view class="bottom_but" @click="Booknow">立即预约</view>
		</view>
		<view style="height: 148rpx;width: 100%;background-color: pink;"></view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sindicator:false,
				form:{
					contact:null,
					shopName:null,
					time:null,
					item:null,
					phone:null,
					msg:null
				},
				//选择器开关 门店
				shopOpen:false,
				//选择器开关 时间
				timeOpen:false,
				//选择器开关 项目
				itemOpen:false,
				
				// 门店列表
				shopColumns:[
					[{
						label: '易道大咖工场店(福州高新区某某路店)',
						id: 2021
					},{
						label: '易道大咖工场店(福州高新区某某路店)',
						id: 804
					}]
				],
				
				// 时间列表
				timeColumns:[
					[{
						label: '维修玻璃',
						id: 2021
					},{
						label: '更换玻璃',
						id: 8041
					},{
						label: '玻璃贴膜',
						id: 8042
					},{
						label: '玻璃美容',
						id: 8043
					}]
				],
				
				// 预约项目列表
				itemColumns:[
					[{
						label: '维修玻璃',
						id: 2021
					},{
						label: '更换玻璃',
						id: 8041
					},{
						label: '玻璃贴膜',
						id: 8042
					},{
						label: '玻璃美容',
						id: 8043
					}]
				],
				activeDayIndex:0,
				activeTimeIndex:0,
				// 上班时间
				Workingtime:[
					{ id: 1, content: '09:00' },
					{ id: 2, content: '10:00' },
					{ id: 3, content: '11:00' },
					{ id: 4, content: '12:00' },
					{ id: 5, content: '14:00' },
					{ id: 6, content: '15:00' },
					{ id: 7, content: '16:00' },
					{ id: 8, content: '17:00' },
					{ id: 9, content: '18:00' },
					{ id: 10, content: '19:00' },
					{ id: 11, content: '20:00' },
					{ id: 12, content: '21:00' },
				],
				// 校验规则
				rules:{
					'contact':{
						type: 'string',
						required:true,
						message:'该项为必填项',
						trigger: ['change','blur'],
					},
					'shopName':{
						type:'string',required:true,message:'该项为必填项',trigger:['change','blur']
					},
					'time':{
						type:'string',required:true,message:'该项为必填项',trigger:['change','blur']
					},
					'item':{
						type:'string',required:true,message:'该项为必填项',trigger:['change','blur']
					},
					'contact':{
						type:'string',required:true,message:'该项为必填项',trigger:['change','blur']
					},
					'phone':{
						type:'string',required:true,message:'该项为必填项',trigger:['change','blur']
					},
					'msg':{
						// type:'string',required:fa,message:'该项为必填项',trigger:['change',blur]
					}
				},

			}
		},
		computed: {
			weekDates() {
				const today = new Date();
				const week = [];
				
				for (let i = 0; i < 7; i++) {
					const date = new Date(today);
					date.setDate(today.getDate() + i);
					const month = String(date.getMonth() + 1).padStart(2, '0');
					const day = String(date.getDate()).padStart(2, '0');
					const formattedDate = `${month}-${day}`;
					
					// const formattedDate = `${date.getMonth() + 1}-${date.getDate()}`.padStart(2, '0');
					const dayOfWeek = date.toLocaleDateString('zh-CN', { weekday: 'long' });
					const dateString = date.toLocaleDateString('zh-CN', {
						        year: 'numeric',
						          month: '2-digit',
						          day: '2-digit',
					});
					const isToday = date.toDateString() === today.toDateString();
					week.push({
					  date:dateString,
					  dayOfWeek: isToday ? '今天' : dayOfWeek,
					  formattedDate: formattedDate,
					});
				}
				
				return week;
			},
		},

		onReady() {
			let that = this
			//onReady 为uni-app支持的生命周期之一
			console.log('onrear',that.rules);
		    this.$refs.uForm.setRules(that.rules)
		},

		onLoad(options) {
			this.form.contact = options.contact
			this.form.shopName = options.shopName
			this.form.time = options.time
			this.form.item = options.item
			this.form.phone = options.phone
			this.form.msg = options.msg
		},
		methods: {
			// 下拉选择
			confirmShop(e){
				if(e.value.lenght < 0) return;
				this.form.shopName = e.value[0].label
				this.shopOpen = false
				console.log(e.value);
			},
			confirmTime(e){
				if(e.value.lenght < 0) return;
				this.form.time = e.value[0].label
				this.timeOpen = false
				console.log(e);
			},
			confirmItem(e){
				if(e.value.lenght < 0) return;
				this.form.item = e.value[0].label
				this.itemOpen = false
				console.log(e);
			},
			// 立即预约
			Booknow(){
				this.$refs.uForm.validate().then(res => {
					// 返回的res.data 已经进行JSON.parse
					uni.navigateTo({
						url:'/page_index/reserveDetails/reserveDetails'
					})
				}).catch(err => {
				})

				// this.$refs.uForm.validate(v=>{
				// 	console.log('v',v);
				// })
				// this.$refs.uForm.validateField('userInfo.contact')
	
			}
		}
	}
</script>

<style scoped lang="scss">
	.confirmReserv{
		padding: 0 32rpx;
		background: #F1F1F1;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}
	.carInfo{
		display: flex;
		height: 170rpx;
		width: 100%;
		margin-top: 24rpx;
		padding: 0 0 0 32rpx;
		box-sizing: border-box;
		background-image: linear-gradient(to right, #FFFFFF, #E7EFFC);
	}
	.u-text[data-v-50004b49] {
		flex:none
	}
	.infoForm{
		width: 100%;
		/* height: 100%; */
		margin-top: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		padding: 0 32rpx ;
		box-sizing: border-box;
		overflow: scroll;
		
	}
	.form_lable{
		width: 200rpx;
		height: 46rpx;
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 400;
		font-size: 32rpx;
		color: #666666;
		line-height: 50rpx;
		text-align: left;
		font-style: normal;
		text-transform: none;
		/* margin: 37rpx 0 ; */
		display: flex;
		align-items: center; /* 垂直居中 */
	}
	.form_lable_required::before{
		content: "*";
		color: red;
		margin-right: 5px; /* 可选：添加一些间距 */
	}

	.form_readText{
		margin-left: auto;
		width:350rpx;
		text-align: right;
		font-size:32rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		/* font-weight: 400; */
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
		align-items: center;
	}
	.bottom_but{
		width: 456rpx;
		height: 88rpx;
		margin-left: 62rpx;
		line-height: 88rpx;
		text-align: center;
		color: #FFFFFF;
		background: #2063EB;
		border-radius: 16rpx 16rpx 16rpx 16rpx;
	}
	.reservTime{
		width: 100%;
		// height: 750rpx;
		padding: 32rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		
		.item{
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			margin-top: 32rpx;
			margin-right: 56rpx;
			
			.active{
				color: #3272F4;
			}
		}
		.active_bottom{
			width: 68rpx;
			height: 6rpx;
			background: linear-gradient( 268deg, rgba(97,149,255,0) 0%, #1B62F2 100%);
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			margin: 0 auto;
		}
		.grid-container {
			display: grid;
			grid-template-columns: repeat(4, 1fr); /* 创建四个等宽的列 */
			gap: 8px; /* 设置列之间的间距 */
			grid-column-gap: 8rpx; /* 设置列之间的水平间距 */
		    grid-row-gap: 32rpx; /* 设置行之间的垂直间距 */
			margin-top: 40rpx;
		}
		.grid-item {
		  /* 每个网格项的样式 */
		  padding: 34rpx 45rpx;
		  box-sizing: border-box;		
		  text-align: center;
		  width: 163rpx;
		  height: 108rpx;
		  background: #F2F2F2;
		  background: #FFFFFF;
		  border-radius: 10rpx 10rpx 10rpx 10rpx;
		  border: 2rpx solid #E5E5E5;
		  
		  font-family: Source Han Sans CN, Source Han Sans CN;
		  font-weight: 500;
		  font-size: 28rpx;
		  color: #333333;
		  line-height: 38rpx;
		  text-align: left;
		  font-style: normal;
		  text-transform: none;
		}
		.grid-item_active{
			background: linear-gradient( 270deg, #6195FF 0%, #1B62F2 100%);
			border-radius: 10rpx 10rpx 10rpx 10rpx;
		}
		.but{
			width: 100%;
			height: 88rpx;
			line-height: 88rpx;
			background: #2063EB;
			border-radius: 44rpx 44rpx 44rpx 44rpx;
			font-family: SourceHanSansCN-Regular, SourceHanSansCN-Regular;
			font-weight: normal;
			font-size: 28rpx;
			color: #FFFFFF;
			text-align: center;
			margin-top: 56rpx;
		}
	}
	::v-deep .u-scroll-list__indicator {
	
	    display: none !important;
	
	}

	::v-deep .u-form-item__body__right__content__slot{
		flex-direction: row !important;
	}
	::v-deep .u-input.data-v-113bc24f {
		padding: 0 9rpx !important;
	}

</style>

