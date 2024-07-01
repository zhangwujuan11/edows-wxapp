<template>
	<view class="concant">
		<view class="noinfo">
			<image src="https://img.edows.cn/wx/logologin.png" mode=""></image>
			<view class="hollow">
				<text style="font-size: 48rpx;">你好，</text>
				<view>
					欢迎登录<text style="color: #3272F4;"> ⌈易道大咖⌋</text>
				</view>
			</view>
		</view>
		<view class="formbox">
			<u--form labelPosition="left" :model="model1"  ref="uForm">
				<u-form-item prop="userInfo.name" ref="item1">
					<image src="../../static/phonenum.png" mode=""></image>
					<u--input v-model="model1.userInfo.name" border="none" placeholder="请输入手机号"></u--input>
				</u-form-item>
				<u-form-item prop="userInfo.name" ref="item1">
					<image src="../../static/yanzhegn.png" mode=""></image>
					<!-- #ifndef APP-NVUE -->
					<u-input placeholder="请输入验证码">
					<!-- #endif -->
						<!-- #ifdef APP-NVUE -->
						<u--input placeholder="请输入验证码">
						<!-- #endif -->
							<template slot="suffix">
								<u-code ref="uCode" @change="codeChange" seconds="20" changeText="X秒重新获取"></u-code>
								<view @tap="getCode">{{tips}}</view>
							</template>
					<!-- #ifndef APP-NVUE -->
					</u-input>
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
					</u--input>
					<!-- #endif -->
				</u-form-item>
				<u-button type="primary" :disabled="checkboxValue" text="登录 " shape="circle"></u-button>
			</u--form>
		</view>
		<view class="tackwx">
			<view class="tackwxtip">
				<text> 第三方登录 </text>
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<button  open-type="getPhoneNumber"  
			@getphonenumber="getPhoneNumber">
				<!-- <image src="../../static/temp/share_wechat.png"></image> -->
				<u-icon name="weixin-circle-fill" color="#23E52D" size="45"></u-icon>
			</button>
			<!-- #endif -->			
			
			<view class="ifagree">
				 <u-checkbox-group >
					<u-checkbox v-model="checkboxValue" shape="circle" @change="agreecheck()"	></u-checkbox> 
				 </u-checkbox-group>
					同意
					<text @click="handleUserAgrement">用户服务协议</text>
					和
					<text @click="handlePrivacy">隐私协议</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips: '',
				value: '',
				checkboxValue:true,
				authorizationshow:false
			}
		},
		methods: {
			// 微信手机号授权登录
			getPhoneNumber(e) {
			    console.log(e.detail.code) // 动态令牌
			    let that = this;
			//     uni.request({
			//         url: 'https://******/api/mini_getuserphone.php',
			//         data: {
			//             phonecode: e.detail.code
			//         },
			//         method: 'POST',
			//         header: {
			//             'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
			//         },
			//         success: (res) = >{
			//             console.log(res.data.data) if (res.data.code == 100) {
			//                 uni.showToast({
			//                     title: res.data.msg,
			//                     icon: 'none'
			//                 });
			
			//             } else if (res.data.code == 200) {
			//                 //返回数据接收成功
			//                 uni.showToast({
			//                     title: res.data.msg,
			//                     icon: 'none'
			//                 });
			//                 var errcode = res.data.data['errcode'];
			//                 if (errcode == 0) {
			//                     //登陆成功
			//                     var openids = res.data.data['phone_info']['phoneNumber'];
			//                     //注册事件
			//                     // 跳转事件
			//                     uni.setStorageSync('openid', openids);
			//                     //注册判断携带unionid
			//                     const unionid = uni.getStorageSync('unionid');
			
			//                     that.mini_userphoneregidst(openids, unionid);
			//                     setTimeout(function() {
			//                         // 调用全局MQTT连接函数，进行MQTT连接
			//                         getApp().check_account_mqtt_connect();
			//                         uni.switchTab({
			//                             url: '/pages/index/index'
			//                         });
			//                     },
			//                     1200);
			
			//                 } else {
			//                     uni.showToast({
			//                         title: res.data.data['errmsg'],
			//                         icon: 'none'
			//                     });
			//                 }
			
			//             }
			//         }
			//     })
			
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			change(e) {
				console.log('change', e);
			},
			radioChange(){},
			// 隐私政策
			handlePrivacy() {
			  const PrivacyURL = 'https://test.ayingtech.com/pc/ys.html'
			  uni.navigateTo({
			  	url:'/pages/Agreement/Agreement?title=隐私政策&url='+PrivacyURL
			  })
			},
			// 用户协议
			handleUserAgrement() {
					const PrivacyURL = 'https://test.ayingtech.com/pc/user.html'
					uni.navigateTo({
						url:'/pages/Agreement/Agreement?title=用户协议&url='+PrivacyURL
					})
			},
			agreecheck(){
				this.checkboxValue=!this.checkboxValue
			}
		},
	}
</script>

<style scoped>
	.concant {
		width: 100%;
		height: 100vh;
		background-color: white;
		display: flex;
		flex-direction: column;
	}

	.noinfo {
		display: flex;
		align-items: center;
		margin-top: 49rpx;
		margin-left: 13rpx;
	}

	.noinfo image {
		width: 180rpx;
		height: 180rpx;
	}

	.noinfo .hollow {
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 500;
		font-size: 40rpx;
		color: #333333;
		line-height: 53rpx;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.formbox {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 105rpx;
	}

	.formbox image {
		width: 50rpx;
		height: 50rpx;
	}

	/deep/.formbox .u-form {
		width: 670rpx !important;
	}

	/deep/.u-form-item {
		height: 100rpx;
		background: #F8F8F8;
		border-radius: 48rpx 48rpx 48rpx 48rpx;
		position: relative;
		margin-bottom: 40rpx;
		display: flex;
		justify-content: center;
	}

	/deep/.u-form-item image {
		position: absolute;
		left: 36rpx;
		top: 28rpx;
	}

	/deep/.u-input__content__field-wrapper__field {
		padding-left: 102rpx !important;
	}

	/deep/.u-input__content__subfix-icon {
		border-left: 1px solid #BFBFBF !important;
		padding-left: 24rpx;
	}
	.tackwx{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: 28rpx;
		padding-bottom: 64rpx;
		position: fixed;
		bottom: 0;
	}
	.tackwx button{
		width: 80rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		margin-top: 44rpx;
		margin-bottom: 64rpx;
		border: none !important;
		background-color: transparent;
		outline: none;
		box-shadow: none;
		padding: 0;
		overflow: auto;
	}
	/* .tackwx button image{
		width: 80rpx;
		height: 80rpx;
	} */
	.ifagree{
		display: flex;
		align-items: center;
	}
	.tackwxtip{
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 400;
		font-size: 28rpx;
		color: #999999;
		border-top: 1px solid #999999;
		width: 670rpx;
		text-align: center;
		position: relative;
	}
	.tackwxtip text{
		background-color: white;
		position: absolute;
		top: -20rpx;
		left: 243rpx;
		padding: 0 24rpx;
	}
	.ifagree text{
		color: #3272F4;
	}
</style>