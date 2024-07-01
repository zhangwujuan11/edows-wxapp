<template>
  <view class="custom-scan">
	  <view class="tipsbox">
			<view class="tips">
				  <view>请对准VIN码扫描</view>
				  <view>车架号位于前挡风玻璃/汽车铭牌/行驶证</view>
			</view>
	  </view>
	 
    <!-- 扫码区域 -->
    <camera
      mode="scanCode"
      frame-size="large"
      class="scan-view"
      @scancode="scancode"
    >
      <view class="scan-container-box">
        <view class="scan-wrap">
          <view class="scan-line"></view>
        </view>
      </view>
      <view class="scan-container-main">
        <slot></slot>
      </view>
	  <view class="autoser">
	  	自动识别中...
	  </view>
	  <view class="serbox">
	  	<u--input
			class="serinpu"
			placeholder="输入VIN码"
			prefixIcon="edit-pen-fill"
			prefixIconStyle="font-size: 22px;color: #fff;"
		></u--input>
		<view style="width: 110rpx;margin-right: 10rpx;">
			<u-button type="primary" text="搜索" ></u-button>
		</view>
	  </view>
    </camera>
  </view>
</template>

<script>
// const innerAudioContext = wx.createInnerAudioContext(); // 提示音
// innerAudioContext.src = "https://qdstorage.okii.com/retail-app/common/beep.mp3";

export default {
  data() {
    return {
      isTf: false,
    };
  },
  methods: {
    // 扫码
    scancode(event) {
      if (this.isTf) return;
      this.isTf = true;
      setTimeout(() => {
        // 3秒扫描一次
        this.isTf = false;
        return;
      }, 3000); 
      wx.vibrateShort(); // 触发手机振动
      // innerAudioContext.play(); // 提示音
      const { result } = event.detail; // 获取校验扫描结果
      console.log("result", result);
      wx.showToast({ title: `扫描结果：${result}`, icon: "none" });
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-scan {
  width: 100vw;
  height: 100vh;
  .scan-view {
    width: 100%;
    height:100%;
	
  }
  .scan-container-box {
    width: 100vw;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
    background-clip: padding-box;

    .scan-wrap {
      position: relative;
      width: 470rpx;
      height: 470rpx;
	  background: url(https://img.edows.cn/wx/saoma.png) no-repeat;
	  background-size: 100% 100%;
	  top: 180rpx;
      .scan-line {
        position: absolute;
        width: 100%;
        height: 1rpx;
        background-color: #7C9EF0;
        box-shadow: 0px -0px 10px 1px #7C9EF0;
        top: 0;
        left: 0;
        animation: scan 2s infinite linear;
      }
    }
  }

  @keyframes scan {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    80% {
      opacity: 1;
      box-shadow: 0px -0px 10px 1px #7C9EF0;
    }
    100% {
      transform: translateY(20vh);
      opacity: 0;
    }
  }
}
.tipsbox{
	width: 100%;
	display: flex;
	justify-content: center;
}
.tips{
	position: fixed;
	top: 0;
	border-bottom-left-radius: 16rpx;
	border-bottom-right-radius: 16rpx;
	color: white;
	text-align: center;
	background-color: rgba(0,0,0,0.8);
	z-index: 99;
	font-size: 26rpx;
	padding: 22rpx 45rpx;
}
.serbox{
	position: fixed;
	width: 100%;
	height:177rpx;
	bottom: 0;
	background-color: rgba(0,0,0,0.8);
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.serinpu{
	color: white;
	height: 86rpx;
}
/deep/.u-input__content{
	width:556rpx;
	border-radius: 16rpx !important;
	height: 86rpx !important;
	background-color: #1A1D21 !important;
}
/deep/.u-input__content__field-wrapper__field{
	color: white !important;
}
.autoser{
	color: white;
	width: 282rpx;
	height: 78rpx;
	line-height: 78rpx;
	text-align: center;
	background: rgba(255,255,255,0.4);
	border-radius: 16rpx 16rpx 16rpx 16rpx;
	position: fixed;
	bottom: 320rpx;
	left: calc(50% - 141rpx);
}
</style>

