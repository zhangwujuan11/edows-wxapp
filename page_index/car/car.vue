<template>
	<view class="contant">
		<view class="yidaotips">
			<image src="../../static/dunpai.png" mode=""></image>
			易道大咖会严格保护您的个人信息，仅用户适配商品和服务
		</view>
		
		<view class="con">
			<view class="enm">
				<text>*</text>
				输入车牌
				
				<view class="fo">
					千万易道用户的选择
				</view>
			</view>
			<view class="carNum">
				<view class="inpu" :class="keynowid == 0?'acticv':''">
				  <input v-model="carnum[0]" @focus="showkey(0)" @input="loadNode">
				</view>
				<view class="inpu" :class="keynowid == 1?'acticv':''">
					<input v-model="carnum[1]" @focus="showkey(1)" @input="loadNode">
				</view>•
				<view class="inpu" :class="keynowid == 2?'acticv':''">
					<input v-model="carnum[2]" @focus="showkey(2)">
				</view>
				<view class="inpu" :class="keynowid ==  3?'acticv':''">
					<input v-model="carnum[3]" @focus="showkey(3)">
				</view>
				<view class="inpu" :class="keynowid == 4?'acticv':''">
					<input v-model="carnum[4]" @focus="showkey(4)">
				</view>
				<view class="inpu" :class="keynowid == 5?'acticv':''">
					<input v-model="carnum[5]" @focus="showkey(5)">
				</view>
				<view class="inpu" :class="keynowid == 6?'acticv':''">
					<input v-model="carnum[6]" @focus="showkey(6)">
				</view>
				<view class="inpu newpower"  :class="keynowid == 7?'acticv':''" >
					<input v-model="carnum[7]" @focus="showkey(7)">
				</view>
			</view>
		</view>
		<view class="con">
			<view class="enm" style="display: flex;justify-content: space-between;border-bottom: 1px solid #E9E9E9;padding-bottom: 40rpx;">
				VIN码
				<view class="fot">
					 <u--input
					    placeholder="请输入车辆VIN码"
					    v-model="vin"
					    inputAlign="right"
					  ></u--input>
					<image src="@/static/saoicon.png" mode="" @click="gocarems"></image>
				</view>
			</view>
				<view style="margin-bottom: 28rpx;">
					行驶证照片
				</view>
				<u-upload
					:fileList="fileList3"
					@afterRead="afterRead"
					@delete="deletePic"
					name="3"
					multiple
					:maxCount="10"
					:previewFullImage="true"
				></u-upload>
		</view>
		
		<u-keyboard 
		:overlay="false" 
		:maxCount="1"
		mode="car" 
		@confirm="show=false"
		@cancel="show=false"
		@change="valChange" 
		@backspace="backspace" 
		:show="show"></u-keyboard>
		<view class="bottbtn">
			<u-button type="primary" text="立即保存" disabled></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '闽',
				carnum:['闽'],
				show: false,
				keynowid:1,
				fileList3: [{
							url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						}],
						vin:''
			}
		},
		onLoad(option) {
			if(option.data == 'new'){
				this.show=true
			}else{
				this.show=false
			}
		},
		methods: {
			valChange(val) {
				if(this.keynowid>=0 && this.keynowid<=8){
					this.value += val;
					this.$set(this.carnum,this.keynowid,val)
					this.keynowid+=1
					if(this.carnum.length >= 8 && !this.carnum.includes('')){
						this.show=false
					}
				}else if(this.keynowid==8){
					this.keynowid = 8
				}
				
			},
			// 退格键被点击
			backspace() {
				if(this.keynowid>0 && this.keynowid<=8){
					this.$set(this.carnum,this.keynowid,'')
					this.keynowid-=1
				}else if(this.keynowid==0){
					this.$set(this.carnum,0,'')
					this.keynowid = 0
				}
			},
			showkey(i){
				this.keynowid=i
				this.show=true
			},
			// 扫码
			gocarems(){
				uni.navigateTo({
				  url: "/pages/mycream/mycream?addcar=addcar",
				});
			},
			
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
		}
	}
</script>

<style scoped>
	.contant{
		background-color: #F1F1F1;
		height: 100vh;
		padding-top:25rpx ;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.yidaotips{
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 400;
		font-size: 24rpx;
		color: #999999;
		width: 100%;
		display: flex;
		/* margin: 25rpx 0; */
	}
	.yidaotips image{
		width: 30rpx;
		height: 30rpx;
		margin-left: 32rpx;
		margin-right: 8rpx;
	}
	.carNum{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.carNum .inpu{
		width: 64rpx;
		height: 100rpx;
		background-color: #F8F8F8;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
	}
	.carNum .inpu input{
		width: 64rpx;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
	}
	.con{
		background-color: white;
		border-radius: 20rpx;
		padding: 40rpx 25rpx;
		margin-top: 32rpx;
		width: 686rpx;
	}
	.enm{
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 500;
		font-size: 32rpx;
		color: #0E1D29;
		line-height: 50rpx;
		display: flex;
		margin-bottom: 32rpx;
		align-items: center;
	}
	.enm text{
		color: #EF151A;
	}
	.enm .fo{
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 400;
		font-size: 24rpx;
		color: #999999;
		border-left: 1px solid #C5C5C5;
		margin-left: 13rpx;
		padding-left: 13rpx;
		height: 32rpx;
		line-height: 32rpx;
	}
	.enm .fot{
		font-family: Source Han Sans CN, Source Han Sans CN;
		font-weight: 400;
		font-size: 32rpx;
		color: #999999;
		height: 32rpx;
		line-height: 32rpx;
		display: flex;
		align-items: center;
	}
	.enm .fot image{
		width: 40rpx;
		height: 40rpx;
		margin-left: 12rpx;
	}
	.acticv{
	    box-shadow: 0px 0px 5px 0px rgba(64, 159, 255,0.25);
	    border:1px solid #409EFF;
		border-radius: 20rpx;
	}
	.newpower{
		background-color: #D9FEED !important;
	}
	/deep/.newpower .acticv{
		 border:1px solid #1EB56D !important;
	}
	.bottbtn{
		width: 100%;
		background-color: white;
		position: fixed;
		bottom: 0;
		left: 0;
		box-shadow: 0rpx -6rpx 12rpx 1rpx rgba(0,0,0,0.1);
		padding: 30rpx 32rpx;
	}
</style>
