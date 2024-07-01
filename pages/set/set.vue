<template>
	<view class="container">
		<view class="wxCode">
			<image src="https://img.edows.cn/wx/yddc.png" ></image>
			<text>易到大咖商城</text>
		</view>

		<!-- <view class="list-cell">
			<text class="cell-tit">检查更新</text>
			<text class="cell-tip">当前版本 1.0.3</text>
			<text class="cell-more yticon icon-you"></text>
		</view> -->
		<view class="list-cell" @click="navTo('/pages/help/register')" >
			<text class="cell-tit">用户注册协议</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell" @click="navTo('/pages/help/help')" >
			<text class="cell-tit">用户服务协议</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell" @click="navTo('/pages/help/policy')">
			<text class="cell-tit">隐私政策</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell log-out-btn" @click="toLogout">
			<text class="cell-tit">退出登录</text>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {  
	    mapMutations  
	} from 'vuex';
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			...mapState(['hasLogin', 'userInfo'])
		},
		onLoad() {
			let returnUrl = getCurrentPages()[0].route;
			console.log('当前路由：', returnUrl);
			if (!this.hasLogin) {
				uni.reLaunch({
					url: '/pages/wxAuth/wxAuth?returnUrl=' + returnUrl
				})
			}
		},
		methods:{
			...mapMutations(['logout']),

			navTo(url){
				//this.$api.msg(`跳转到${url}`);
				uni.navigateTo({
					url
				})
			},
			//退出登录
			toLogout(){
				uni.showModal({
				    content: '确定要退出登录么',
				    success: (e)=>{
				    	if(e.confirm){
				    		this.logout();
				    		setTimeout(()=>{
				    			uni.navigateBack();
				    		}, 200)
				    	}
				    }
				});
			}

		}
	}
</script>

<style lang='scss'>
	page{
		background: $page-color-base;
	}
	.wxCode{
		display: flex;
		align-items: center;
		flex-direction: column;
		padding:100upx 0;
		image{
			width: 160upx;
			height: 160upx;
			margin-bottom:20upx;
		}
	}
	.list-cell{
		display:flex;
		align-items:baseline;
		padding: 20upx $page-row-spacing;
		line-height:60upx;
		position:relative;
		background: #fff;
		justify-content: center;
		&.log-out-btn{
			margin-top: 40upx;
			.cell-tit{
				color: $font-color-blue;
				text-align: center;
				margin-right: 0;
			}
		}
		&.cell-hover{
			background:#fafafa;
		}
		&.b-b:after{
			left: 30upx;
		}
		&.m-t{
			margin-top: 16upx; 
		}
		.cell-more{
			align-self: baseline;
			font-size:$font-lg;
			color:$font-color-light;
			margin-left:10upx;
		}
		.cell-tit{
			flex: 1;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			margin-right:10upx;
		}
		.cell-tip{
			font-size: $font-base;
			color: $font-color-light;
		}
		switch{
			transform: translateX(16upx) scale(.84);
		}
	}
</style>
