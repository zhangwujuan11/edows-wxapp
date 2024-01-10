<template>
	<view>
		<view>
			<view>
				<view class="header">
					<image src="/static/yddc.png"></image>
					<text>易道大咖商城</text>
				</view>
				<!-- <view class='content'>
					<view>申请获取以下权限</view>
					<text>获得你的公开信息(昵称，头像、地区等)</text>
				</view>

				<button class='bottom' type='primary'  lang="zh_CN" @click="wxGetUserInfo">
					授权登录
				</button> -->
			</view>

		</view>
		<view class="maskFull" v-show="isCanUse">
			<view class="winChoose">
				<text class="win-tit">选择身份登录</text>
				<view class="win-cotent">
					<view class="win-cell-list" @click="toAuthLogin('person')">
						<view>
							<image src="/static/missing-face.png"></image>
						</view>
						<view>
							<text class="cell-user">我是个人用户</text>
							<text class="cell-tit">个人用户直接登录</text>
						</view>
						<view>
							<text class="cell-more yticon icon-you"></text>
						</view>
					</view>
					<view class="win-cell-list" @click="toAuthLogin('shop')">
						<view>
							<image src="/static/missing-face.png"></image>
						</view>
						<view>
							<text class="cell-user">我是门店用户</text>
							<text class="cell-tit">门店用户账号登录</text>
						</view>
						<view>
							<text class="cell-more yticon icon-you"></text>
						</view>
					</view>
				</view>
			</view>
		</view>

	<view class="privacy" v-if="showPrivacy">
        <view class="content">
            <view class="title">隐私保护指引</view>
            <view class="des">
                在使用当前小程序服务之前，请仔细阅读<text class="link" @tap="openPrivacyContract">{{ privacyContractName }}</text>。如你同意{{
                    privacyContractName }}，请点击“同意”开始使用。
            </view>
            <view class="btns">
                <button class="item reject" @tap="exitMiniProgram">拒绝</button>
                <button id="agree-btn" class="item agree" open-type="agreePrivacyAuthorization"
                    @agreeprivacyauthorization="handleAgreePrivacyAuthorization" @iscuse="iscuse">同意</button>
            </view>
        </view>
    </view>
	</view>
</template>

<script>
	// import PrivacyPop from '@/components/PrivacyPop.vue';
	import {
		web
	} from "../../Api/config.js"
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		// components:{
		// 		PrivacyPop
		// 	},
		data() {
			return {
				userName:'',
				avatarUrl:'',
				privacyContractName: '《隐私保护引导》',
				showPrivacy: true,
				
				returnUrl : '',
				SessionKey: '',
				isShowMask: false,
				openId: '',
				nickName: null,
				avatarUrl: null,
				encryptedData: "",
				iv: '',
				isCanUse: false //默认为true
			}
		},
		async onLoad(option) { //默认加载
			this.returnUrl = option.returnUrl ?  '/' + option.returnUrl : '/pages/index/index';
			this.openId = uni.getStorageSync('openId') ? uni.getStorageSync('openId') : '',
			this.authLogin();
			this.checkPrivacySetting();
			// console.log("isCanUse：", uni.getStorageSync('isCanUse'))
			// this.isCanUse = uni.getStorageSync('isCanUse')
		},
		methods: {
			checkPrivacySetting(){
					uni.getPrivacySetting({
					      success: res => {
							// console.log("同意了",res)
							this.showPrivacy = true
							// needAuthorization是否需要用户授权隐私协议
					        // 返回结果为: res = { needAuthorization: true/false, privacyContractName: '《xxx隐私保护指引》' }
					        if (res.needAuthorization) {
					          // 需要弹出隐私协议
					            this.showPrivacy = true
					        } else {
								 // 用户已经同意过隐私协议，所以不需要再弹出隐私协议，也能调用已声明过的隐私接口
								this.showPrivacy = false
								this.isCanUse=true
					        }
					      },
					      fail: () => {},
					      complete: () => {}
					})
					
				},
				// 打开隐私协议
			    openPrivacyContract() {
			        uni.openPrivacyContract({
			            fail: () => {
			                uni.showToast({
			                    title: '遇到错误',
			                    icon: 'error'
			                })
			            }
			        })
			    },
			    // 拒绝隐私协议
			    exitMiniProgram() {
					console.log("拒绝隐私协议")
					const that = this;
			        // 直接退出小程序
			        // wx.exitMiniProgram()
					uni.showModal({
						// 如果拒绝,我们将无法获取您的信息, 包括手机号、位置信息、相册等该小程序十分重要的功能,您确定要拒绝吗?
						content: '您确定要拒绝吗?',
						success: res => {
							if (res.confirm) {
								that.showPrivacy = false;
								uni.exitMiniProgram({
									success: () => {
										console.log('退出小程序成功');
									}
								});
							}
						}
					});
			    },
			    // 同意隐私协议
			    handleAgreePrivacyAuthorization() {
			        var that = this;
					wx.requirePrivacyAuthorize({
					    success: () => {
					        // 用户同意授权
							that.isCanUse=true
							uni.getUserProfile({
							   desc: '用于完善信息资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
							   success: ress => {
								 // let user=res.userInfo
							   console.log('授权聚集了',ress)
							   },
							   fail: (error) => {
								   console.log(error)
							   }
							})
							
							
							that.showPrivacy = false;
					    },
					    fail: () => {}, // 用户拒绝授权
					    complete: () => {}
					})
			    },
			
			
			
			
			
			
			
			
			
			
			
			
			
			...mapMutations(['login']),
			// wxGetUserInfo() {
				// uni.getUserInfo({
				// 	provider: 'weixin',
				// 	success: async function(infoRes) {
				// 		console.log('用户信息：', infoRes)
				// 		let nickName = infoRes.userInfo.nickName; //昵称
				// 		let avatarUrl = infoRes.userInfo.avatarUrl; //头像
				// 		let encryptedData = infoRes.encryptedData;
				// 		let iv = infoRes.iv;
				// 		//uni.setStorageSync('userInfo', infoRes.userInfo);
				// 		//_this.$api.msg(nickName);
				// 		try {
				// 			uni.setStorageSync('isCanUse', true); //记录是否第一次授权  false:表示不是第一次授权
				// 			_this.isCanUse = uni.getStorageSync('isCanUse')
				// 			//_this.$api.msg(nickName);
				// 			//_this.updateUserInfo();
				// 			var params = {
				// 				"encryptedData": encryptedData,
				// 				"iv": iv,
				// 				"openId": _this.openId
				// 			}
				// 			let resInfo = await _this.$axios(_this.$baseUrl.xcxDoAuth, params);
				// 			console.log("resInfo：", resInfo)
				// 		} catch (e) {}
				// 	},
				// 	fail(res) {}
				// });
			// },

			//登录
			authLogin() {
				let _this = this;
				// uni.showLoading({
				// 	title: '登录中...'
				// });

				// 1.wx获取登录用户code
				uni.login({
					provider: 'weixin',
					success: async function(loginRes) {
						let code = loginRes.code;
						//_this.$api.msg(code);
						var params = {
							code: code,
						}
						let resDate = await _this.$axios(_this.$baseUrl.getXcxAuth, params);
						// console.log("resDate：",resDate)
						_this.openId = resDate.data.data;
						uni.setStorageSync('openId', resDate.data.data);
						// if (_this.isCanUse) {
							//非第一次授权获取用户信息
							uni.getUserInfo({
								provider: 'weixin',
								success: async function(infoRes) {
									//获取用户信息后向调用信息更新方法
									let nickName = infoRes.userInfo.nickName; //昵称
									let avatarUrl = infoRes.userInfo.avatarUrl; //头像
									let encryptedData = infoRes.encryptedData;
									let iv = infoRes.iv;
									uni.setStorageSync('userInfo', infoRes.userInfo);
									//_this.$api.msg(nickName);
									console.log('用户信息2：', infoRes)
									//_this.updateUserInfo(); //调用更新信息方法
									var params = {
										"encryptedData": encryptedData,
										"iv": iv,
										"openId": _this.openId
									}
									console.log("params：", params);
									let resInfo = await _this.$axios(_this.$baseUrl.xcxDoAuth, params);
									console.log("resInfo：", resInfo)
								}
							});
						// }

					},
				});
			},
			navBack() {
				uni.navigateBack();
			},
			async toAuthLogin(loginType) {
				//var _this = this;
				//_this.$api.msg(loginType)
				if (loginType == 'person') {
					const params = {
						"loginType": 0,
						"openId": this.openId,
						"password": "",
						"redirectUrl": "",
						"userName": ""
					}
					//console.log("params：", params);
					const result = await this.$axios(this.$baseUrl.mallMemberLogin, params);
					
					if(result.data.code === 200){
						//var rusult = res.data.data;
						this.login(result.data.data);
						uni.reLaunch({
							url: this.returnUrl
						})
					}
						
					
				}
				if (loginType == 'shop') {
					uni.navigateTo({
						url: '/pages/public/login?loginType=1&opeinId=' + this.openId + '&returnUrl=' + this.returnUrl
					})
				}
			}

		}
		
	}
</script>

<style lang='scss'>
	.header {
		margin: 90upx 0 90upx 50upx;
		border-bottom: 1px solid #ccc;
		text-align: center;
		width: 650upx;
		height: 300upx;

		image {
			width: 200upx;
			height: 200upx;
		}

		text {
			display: block;
			margin-top: 10upx
		}

	}



	.content {
		text-align: center;

		text {
			display: block;
			color: #9d9d9d;
			margin-top: 40upx;
		}
	}


	.bottom {
		border-radius: 10upx;
		margin: 100upx 50upx 0 50upx;
		font-size: 35upx;
		height: 90upx;
		line-height: 90upx;
		background: #09bb07;
	}

	.maskFull {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
		background: rgba(0, 0, 0, .6);
		z-index: 1
	}

	.winChoose {
		position: absolute;
		background: #fff;
		width: 570upx;
		height: 500upx;
		left: 50%;
		top: 50%;
		margin: -285upx 0 0 -288upx;
		border-radius: 10upx;
		padding: 38upx;

		.win-tit {
			display: block;
			height: 70upx;
			text-align: center;
		}

		.win-cell-list {
			background: #f8f8f8;
			display: flex;
			align-items: center;
			border-radius: 10upx;
			justify-content: space-between;
			padding: 26upx;
			margin-top: 26upx;

			view {
				display: flex;
				flex-direction: column;

				.cell-user {
					font-size: 30upx;
					margin-bottom: 10upx;
				}

				.cell-tit {
					font-size: 22upx
				}
			}

			image {
				width: 94upx;
				height: 94upx
			}
		}
	}
	.privacy {
	     position: fixed;
	     top: 0;
	     right: 0;
	     bottom: 0;
	     left: 0;
	     background: rgba(0, 0, 0, .5);
	     z-index: 9999999;
	     display: flex;
	     align-items: center;
	     justify-content: center;
	 }
	 
	 .content {
	     width: 632rpx;
	     padding: 48rpx;
	     box-sizing: border-box;
	     background: #fff;
	     border-radius: 16rpx;
	 }
	 
	 .content .title {
	     text-align: center;
	     color: #333;
	     font-weight: bold;
	     font-size: 32rpx;
	 }
	 
	 .content .des {
	     font-size: 26rpx;
	     color: #666;
	     margin-top: 40rpx;
	     text-align: justify;
	     line-height: 1.6;
	 }
	 
	 .content .des .link {
	     color: #07c160;
	     text-decoration: underline;
	 }
	 
	 .btns {
	     margin-top: 48rpx;
	     display: flex;
	 }
	 
	 .btns .item {
	     justify-content: space-between;
	     width: 244rpx;
	     height: 80rpx;
	     display: flex;
	     align-items: center;
	     justify-content: center;
	     border-radius: 16rpx;
	     box-sizing: border-box;
	     border: none;
	 }
	 
	 .btns .reject {
	     background: #f4f4f5;
	     color: #909399;
	 }
	 
	 .btns .agree {
	     background: #07c160;
	     color: #fff;
	 }
</style>
