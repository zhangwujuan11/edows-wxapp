<template>
	<view class="content">
		<view class="cacrul" v-if="hascar">
			<view class="cacrli">
				<view class="cacrlicon">
					<image src="../../static/car1.jpg" mode=""></image>
					<view>
						闽AWX888
						<text>默认爱车</text>
						<view class="chejai">1HGCM82633A123456</view> 
					</view>
				</view>
				<view class="cacrlibtn">
					<view>
						<u-button  @click="showModal" :plain="true" text="删除" size="small" shape="circle"></u-button>
					</view>
					<view>
						<u-button :plain="true" text="修改" size="small" shape="circle"></u-button>
					</view>
					<view>
						<u-button   @click="showModalmor" :plain="true" text="设为默认" size="small" shape="circle"></u-button>
					</view>
				</view>
			</view>
			<view class="cacrli">
				<view class="cacrlicon">
					<image src="../../static/car1.jpg" mode=""></image>
					<view>
						闽AWX888
						<text>默认爱车</text>
						<view class="chejai">1HGCM82633A123456</view> 
					</view>
				</view>
				<view class="cacrlibtn">
					<view>
						<u-button  @click="showModal" :plain="true" text="删除" size="small" shape="circle"></u-button>
					</view>
					<view>
						<u-button :plain="true" text="修改" size="small" shape="circle"></u-button>
					</view>
					<view>
						<u-button   @click="showModalmor" :plain="true" text="设为默认" size="small" shape="circle"></u-button>
					</view>
				</view>
			</view>
			<view class="cacrli">
				<view class="cacrlicon">
					<image src="../../static/car1.jpg" mode=""></image>
					<view>
						闽AWX888
						<text>默认爱车</text>
						<view class="chejai">1HGCM82633A123456</view> 
					</view>
				</view>
				<view class="cacrlibtn">
					<view>
						<u-button  @click="showModal" :plain="true" text="删除" size="small" shape="circle"></u-button>
					</view>
					<view>
						<u-button :plain="true" text="修改" size="small" shape="circle"></u-button>
					</view>
					<view>
						<u-button   @click="showModalmor" :plain="true" text="设为默认" size="small" shape="circle"></u-button>
					</view>
				</view>
			</view>
		</view>
		<view class="nocarli" v-if="!hascar">
			<image src="https://img.edows.cn/wx/nocar.png" mode=""></image>
			<text>添加车辆信息，以便我们更好的为您服务</text>
		</view>
		<view class="addbtncon"> 
			<u-button type="primary" @click="addcarpage('new')" text="添加车辆"></u-button>
		</view>
		
		<!-- 删除模态框 -->
		<u-modal :show="show"  ref="uModal" :showConfirmButton="false">
			<view class="showcomodal">
				<view class="u-modaltitle">
					<text>
						温馨提示
					</text>
					<u-icon @click="show=false" name="close"></u-icon>
				</view>
				<view class="u-modalcon">
					<u-icon name="info-circle-fill" color="#FFB600" size="40"></u-icon>
					<text>
						是否确认删除该车辆信息？
					</text>
				</view>
				<view style="display: flex;justify-content: space-around;">
					<view class="btnc">
						<u-button type="primary" text="确定"  @click="show=false"></u-button>
					</view>
					<view class="btnc">
						<u-button @click="show=false" text="取消" ></u-button>
					</view>
				</view>
			</view>
		</u-modal>
		
		
		<!--设置默认模态框 -->
		<u-modal :show="showmor"  :showConfirmButton="false">
			<view class="showcomodal">
				<view class="u-modaltitle">
					<text>
						温馨提示
					</text>
					<u-icon @click="showmor=false" name="close"></u-icon>
				</view>
				<view class="u-modalcon">
					<u-icon name="info-circle-fill" color="#FFB600" size="40"></u-icon>
					<text>
						是否设置 <text style="color: #2063EB;">闽AWX888</text>为默认车辆
					</text>
				</view>
				<view style="display: flex;justify-content: space-around;">
					<view class="btnc">
						<u-button type="primary" text="确定"  @click="showmor=false"></u-button>
					</view>
					<view class="btnc">
						<u-button @click="showmor=false" text="取消"></u-button>
					</view>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hascar:true,
				show:false,//删除模态框
				showmor:false,//默认模态框
			}
		},
		methods: {
			// 删除模态框展示
			showModal() {
				this.show = true;
			},
			// 默认模态框展示
			showModalmor() {
				this.showmor = true;
			},
			addcarpage(e){
				uni.navigateTo({
				  url: "/page_index/car/car?data=" + e,
				});
			}
		}
	}
</script>

<style scoped>
	.content{
		background-color: #F1F1F1;
		min-height: 100vh;
	}
	.cacrul{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.cacrul .cacrli{
		background-color: white;
		border-radius: 20rpx;
		padding: 40rpx 32rpx;
		width: 686rpx;
		margin-top: 24rpx;
	}
	.cacrlicon{
		display: flex;
		align-items: center;
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 500;
		font-size: 32rpx;
		color: #0E1D29;
		line-height: 50rpx;
	}
	.cacrlicon image{
		width: 146rpx;
		height: 146rpx;
		border-radius: 20rpx;
	}
	.cacrlicon text{
		padding: 5rpx 8rpx;
		color:#C13B3B;
		background-color: #FBDFDA;
		font-size: 20rpx;
		border-radius: 3rpx;
		margin-left: 12rpx;
	}
	.chejai{
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 400;
		font-size: 24rpx;
		color: #0E1D29;
		line-height: 50rpx;
	}
	.cacrlibtn{
		display: flex;
		justify-content: flex-end;
	}
	.cacrlibtn view{
		padding: 8rpx 15rpx;
	}
	.addbtncon{
		width: 100%;
		display: flex;
		justify-content: center;
		background-color: white;
		padding: 30rpx 32rpx;
		position: fixed;
		bottom: 0px;
		box-shadow: 0rpx -6rpx 12rpx 1rpx rgba(0,0,0,0.1);
	}
	.nocarli{
		background-color: white;
		height:calc(100vh - 140rpx) ;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: #999999;
		font-size: 28rpx;
	}
	.nocarli image{
		width: 610rpx;
		height: 300rpx;
		margin-bottom: 48rpx;
	}
	.showcomodal{
		width: 100%;
		padding: 28rpx 40rpx;
	}
	/deep/.u-modal__content{
		padding: 0 !important;
	}
	.u-modaltitle{
		display: flex;
		justify-content: space-between;
	}
	.u-modaltitle text{
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 500;
		font-size: 32rpx;
		color: #333333;
	}
	.u-modalcon{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.u-modalcon text{
		margin-top: 24rpx;
		margin-bottom: 80rpx;
	}
	.btnc{
		width: 260rpx;
	}
	/deep/.u-button--plain.u-button--info{
		border: 1px solid #707070;
		box-shadow: none;
	}
</style>
