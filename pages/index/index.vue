<template>
  <view class="app-index">
		<view class="bannercerbg" style="background: url('https://img.edows.cn/wx/topbg.png') no-repeat;background-size: 100% 89%;">
			  <view class="serch">
				 <view class="select" @click="morecity">
				    <view class="uni-input" style="margin-right: 10rpx;">{{city}} </view>
					<u-icon name="arrow-down-fill" color="#fff" size="10"></u-icon>
				 </view>
				 <view class="secboxx">
				<u--input
					@confirm="goshopserch"
					 suffixIconStyle="color:#417CF5;font-size:50rpx;"
					 placeholder="请输入门店名称"
					 suffixIcon="search"
					 border="surround"
					 shape="circle"
					 v-model="shopName"
				  ></u--input>
				 </view>
			  </view>
		</view>
		<view class="panel addcars" @click="addcar">
		  <view class="content">
			  <!-- 无车 -->
			  <view style="height: 100%;" v-if="nocars">
				  <image class="addcarpuls" src="../../static/index/addcarpuls.png" mode=""></image>
			  </view>
			 <view  v-if="nocars">
				 <view class="nocarshowtip">添加爱车 享专属服务 <image src="../../static/index/lefticon.png" mode=""></image></view>
				 <text class="ts">玻璃更换服务  我们更专业</text>
			 </view>
			 
			 <!-- 有车 -->
			 <view v-if="!nocars" style="padding-left: 32rpx;">
				<view style="color: #333333;font-size: 24rpx;">奥迪Q8</view>
				<view class="nocarshowtip" style="margin: 8rpx 0;">闽AXW888 <image src="../../static/index/lefticon.png" mode=""></image></view>
				<view style="color: #999999;font-size: 20rpx;">2023款2.0T手自一体  45TFSI豪华动感型</view>
			 </view>
			 <image style="height:120%;width: 286rpx;" src="https://img.edows.cn/wx/nocarshow.png" mode=""></image>
		  </view>
		</view>
		<view style="display: flex;width: 100%;justify-content: center;flex-direction: column;align-items: center;">
			<view class="stagebox">
				<view class="tit">
				  <view class="text">常用服务</view>
				</view>
				<view class="itemul">
					<view class="item" @click="goreList()" >
					   <view class="l1">
					     <image class="icon" src="../../static/index/yuyue.png" mode=""></image>
					   </view>
					   <view class="l2">预约服务</view>
					 </view>
					 <view class="item" @click="scanCode">
					    <view class="l1">
					      <image class="icon" src="../../static/index/saoma.png" mode=""></image>
					    </view>
					    <view class="l2">扫码识别</view>
					  </view>
					  <view class="item" @click="gopage()">
					     <view class="l1">
					       <image class="icon" src="../../static/index/mendian.png" mode=""></image>
					     </view>
					     <view class="l2">门店</view>
						 </u-link>
					   </view>
					   <view class="item" @click="goMessage()">
					      <view class="l1">
					        <image class="icon" src="../../static/index/xiaoxi.png" mode=""></image>
					      </view>
					      <view class="l2">消息中心</view>
					    </view>
						<view class="item" @click="gocomplain()">
						   <view class="l1">
						     <image class="icon" src="../../static/index/tousu.png" mode=""></image>
						   </view>
						   <view class="l2">投诉建议</view>
						 </view>
						 <view class="item"></view>
						 <view class="item"></view>
						 <view class="item"></view>
				</view>
			</view>
			
			<view class="stagebox addressbox">
				<view class="tit">
				  <view class="text">
					  附近门店
					  <view class="showmore" @click="gopage()">
						  <text>查看更多</text>
						  <image src="../../static/index/lefticon.png" mode=""></image>
					  </view>
				  </view>
				</view>
				<view class="itemul" @click="goshopdetail()">
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
			</view>
		</view>
		
     
     <!-- <view class="panel">
        <view class="tit">
          <view class="text">门店服务</view>
        </view>
        <view class="content">
         <view class="item" >
            <view class="l1">
              <image class="icon" src="../../static/car1.jpg" mode=""></image>
            </view>
            <view class="l2">门店认证</view>
          </view>
        </view>
      </view>
      <view v-if="noteList && noteList.length > 0" class="information" @click="gostorepage(17)">
        <view class="line"></view>
        <view class="t1">333</view>
        <view class="t2">555</view>
      </view>
    </view>
    <view class="authority_mask" v-if="showMask">
      <view class="box">
        <view>相机权限使用说明：</view>
        <view>用于拍摄照片、扫码、上传图片等场景</view>
      </view>
    </view> -->
	 
  </view>
</template>

<script>
import { web } from "@/Api/config.js";
import bmap from '@/libs/bmap-wx.min.js'
  export default {
    data() {
      return {
		  city:'',
		  nocars:false,
		shopName:"",
        value: 0,
        index: 0,
        duration: [],
        token: "",
        datecode: "",
        viewList: [],
        orderData: {},
        noteList: [],
        vinCodeValue: "",
        messageNum: null,
        showMask: false,
		shoplist:[]
      };
    },
	onLoad(){
		// 获取当前定位
		var that = this;
		var BMap = new bmap.BMapWX({
			ak: 'LA26lnRd6tMIlCFP3Ce3H6otX5g5Gd0e'
		});
		var fail = function(data) {
			console.log(data)
		};
		var success = function(data) {
			let CityName = data.originalData.result.addressComponent.city
			that.city = CityName.slice(0, -1);
			uni.setStorage({
				key: 'City_Name',
				data: CityName
			})
		}
		BMap.regeocoding({
			fail: fail,
			success: success,
		});
	},
    methods: {
		// 城市选择
		morecity(){
			uni.navigateTo({
			  url: "/page_index/choosecity/choosecity",
			});
		},
		// 扫码识别
		scanCode(){
			uni.navigateTo({
			  url: "/page_index/mycream/mycream",
			});
		},
		// 门店搜索
		goshopserch(){
			uni.navigateTo({
			  url: "/page_index/shopserchdata/shopserchdata?search=1",
			});
		},
		// 门店
		gopage(){
			uni.navigateTo({
			  url: "/page_index/shoplist/shoplist",
			});
		},
		// 门店详情
		goshopdetail(){
			uni.navigateTo({
			  url: "/page_index/shopdetail/shopdetail",
			});
		},
		// 预约服务列表
		goreList(){
			uni.navigateTo({
			  url: "/page_index/reservationList/reservationList",
			});
		},
		// 消息中心
		goMessage(){
			uni.navigateTo({
			  url: "/page_index/message/message",
			});
		},
		gocomplain(){
			uni.navigateTo({
			  url: "/page_index/complain/complain",
			});
		},
      bindPickerChange: function(e) {
        this.index = e.detail.value;
        if (e.detail.value == 1) {
          this.gostorepage(16);
          this.$nextTick(() => {
            this.index = 0;
          });
        }else if(e.detail.value == 2){
          this.gostorepage(19);
          this.$nextTick(() => {
            this.index = 0;
          });
        }
      },
      gostorepage(e) {
        uni.navigateTo({
          url: "/pages/storepage/storepage?id=" + e,
        });
      },
      getDatecode() {
        datecode({
          token: this.token,
        }).then((res) => {
          if (res.code == 200) {
            this.datecode = res.data;
          }
        });
      },
      getBannerList() {
        bannerList({
          token: this.token,
        }).then((res) => {
          if (res.code == 200) {
            this.viewList = res.data;
          }
        });
      },
      getOrderData() {
        orderData(this.token).then((res) => {
          if (res.code == 200) {
            this.orderData = res.data;
          }
        });
      },
      getNotesList() {
        notesList({
          token: this.token,
        }).then((res) => {
          if (res.code == 200) {
            this.noteList = res.data.records;
          }
        });
      },
    chooseImage() {
      uni.chooseImage({
        count: 1, // 图片数量
        sizeType: ["compressed"], // 指定选择的图片类型，可以选择原图和压缩图，这里设置为压缩图
        sourceType: ['album',"camera"], // 指定选择图片的来源，这里设置为相机
        success: (res) => {
          uni.getImageInfo({
            src: res.tempFilePaths[0],
            success: (path) => {
              pathToBase64(path.path).then((base64) => {
                this.queryVinCode(base64);
              });
            },
          });
        },
      });
    },
      queryVinCode(val) {
        let params = {
          base64Data: val,
          bizType: "1",
          token: this.token,
        };
        vinCode(params).then((res) => {
        this.vinCodeValue = JSON.parse(res.data.words_result)[0].words;
        this.collect();
      });

      },
      collect() {
        if (this.vinCodeValue == "") {
          uni.showToast({
            title: "请输入VIN码",
            icon: "none",
            duration: 1500,
          });
        } else {
          uni.navigateTo({
            url: `/pages/storepage/storepage?id=15&vinCodeValue=${this.vinCodeValue}`,
          });
        }
      },
      toUpperCase() {
        this.vinCodeValue = this.vinCodeValue.toUpperCase();
      },
      getMessageNum(){
        messageNum({token:this.token}).then((res)=>{
          if(res.code == 200){
            this.messageNum = res.data;
          }
        })
      },
      getCertificate() {
        var config = {};
        config.token = uni.getStorageSync("userInfo").token;
        uni
          .request({
            method: "post",
            timeout: 10000,
            url:
              web.renew +
                "member/updateCertificate?token=" +
                uni.getStorageSync("userInfo").token || "",
            dataType: "json",
            header: config,
          })
          .then((response) => {
            let [error, res] = response;
            if (res.data.code == 200) {
              if (res.data.data) {
                uni.showToast({
                  title: "证书已过期",
                  icon: "none",
                  duration: 3500,
                });
              }
            }
          });
      },
	  addcar(){
		  uni.navigateTo({
		    url: "/page_index/carlist/carlist",
		  });
	  }
    }
  }
</script>

<style lang="scss" scoped>
  .app-index {
    height: calc(100vh);
    overflow-y: auto;
    padding-bottom: 50rpx;
	background-color: #F6F6F6;
  }
  .app-index .bannercerbg {
    background-size: 100% auto;
    height: 290rpx;
  }
  .app-index  .serch{
	  height: 70rpx;
	  display: flex;
	  align-items: center;
	  justify-content: space-around;
  }
  .secboxx{
	  width: 575rpx;
  }
   /deep/.u-input{
    height: 66rpx;
    font-size: 24rpx;
    border-radius: 33rpx 33rpx 33rpx 33rpx;
	background-color: #ECF3FE;
  }

  .app-index .info {
    padding-top: 70rpx;
    text-align: center;
    height: 40rpx;
    font-size: 28rpx;
    font-weight: 400;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .app-index .select {
    font-size: 32rpx;
	color: white;
	display: flex;
	align-items: center;
  }
  .app-index .panel {
    width: 100%;
	display: flex;
	justify-content: center;
  }
  .panel .content {
	display: flex;
	justify-content: space-around;
	width: 686rpx;
	height: 170rpx;
	background: #ffffff;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
	padding: 28rpx 0;
	align-items: center;
  }
	  
  .addcars{
	  margin-top: -197rpx;
  }
  .addcarpuls{
	  width: 40rpx;
	  height: 34rpx;
	  margin-left:32rpx;
	  margin-right:14rpx;
	  margin-top: 23rpx;
  }
  .nocarshowtip{
	  font-family: Source Han Sans CN, Source Han Sans CN;
	  font-weight: bold;
	  font-size: 32rpx;
	  color: #000000;
	  line-height: 38rpx;
	  text-align: left;
	  font-style: normal;
	  text-transform: none;
	  display: flex;
	  width: 320rpx;
	  align-items: center;
  }
  .nocarshowtip image{
	  width: 12rpx;
	  height: 20rpx;
	  margin-left: 11rpx;
  }
  .ts{
	  font-family: Source Han Sans CN, Source Han Sans CN;
	  font-weight: 400;
	  font-size: 20rpx;
	  color: #999999;
	  line-height: 38rpx;
	  text-align: left;
	  font-style: normal;
	  text-transform: none;
  }
  .itemul{
	  margin-top: 32rpx;
	  width: 686rpx;
	  background: white;
	  border-radius: 20rpx;
	  display: flex;
	  justify-content: space-around;
	  flex-wrap: wrap;
	  padding-top: 36rpx;
  }
  .stagebox {
	  margin-top: 32rpx;
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
</style>