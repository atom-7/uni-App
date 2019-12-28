<template>
	<view>
		
		<uniNavBar left-icon="back" right-text="发布" @clickLeft="ClickLeft" @clickRight="clickRight">
			<view class="title uni-flex " @click="handleChangeVisible">
				{{ visible }}
				<view class="iconfont icon-xialazhankai"></view>
			</view>
		</uniNavBar>
		
		<view class="input"><textarea v-model="text" placeholder="说一句话吧~" /></view>
		<uploadImg :imageList="imageList" @changeImageList="changeImageList"></uploadImg>
		<uni-popup  ref="popup" :maskClick="true" :animation="true" @hidePopup="hidePopup" type="center">
			<view class="tip_wrapper">
				<view class="img">
					<image src="../../static/common/addinput.png" mode="widthFix"></image>
				</view>
				<view class="content">
					<view>1. 涉及黄色,政治,广告及骚扰信息</view>
					<view>2. 涉及人身攻击</view>
					<view>3. 留联系方式,透露他人隐私</view>
					<view class="">
						一经核实将被封禁,情节严重者永久封禁
					</view>
				</view>
				<view class="btn uni-flex" @click="hidePopup">
					朕知道了
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import uploadImg from '@/components/upload-img/upload-img.vue';
import uniPopup from '../../components/uni-popup/uni-popup.vue';
export default {
	components: { uniNavBar, uploadImg, uniPopup },
	data() {
		return {
			visible: '所有人可见',
			text: '',
			imageList: [],
			showTip: true
		};
	},
	onLoad() {
		this.text = uni.getStorageSync("userInputContent");
		uni.removeStorageSync('userInputContent');
	},
	onShow() {
		
	},
	mounted() {
		this.$refs.popup.open();
	}
	,
	methods: {
		hidePopup(){
			this.$refs.popup.close();
		},
		handleChangeVisible() {
			uni.showActionSheet({
				itemList: ['所有人可见', '仅自己可见'],
				success: res => {
					switch (res.tapIndex) {
						case 0:
							this.visible = '所有人可见';
							break;
						case 1:
							this.visible = '仅自己可见';
							break;
					}
				}
			});
		},
		ClickLeft() {
			if(this.text.trim().length>0){
				uni.showModal({
				    title: '提示',
				    content: '是否保存',
				    success:  (res)=>{
				        if (res.confirm) {
							console.log(this.text);
				           uni.setStorageSync('userInputContent',this.text);
				        } else if (res.cancel) {
				            console.log('用户点击取消');
							uni.navigateBack({
								url: '../index/index'
							});
				        }
				    }
				});
			}else{
				uni.navigateBack({
					url: '../index/index'
				});
			}
			
		},
		clickRight() {},
		changeImageList(arr) {
			this.imageList = arr;
		}
	}
};
</script>

<style lang="less" scoped>
.title {
	width: 100%;
	justify-content: center;

	.iconfont {
		padding: 0 4px;
		line-height: 1.5;
		font-size: 36rpx;
	}
}
.input {
	width: 100%;
	height: 350rpx;
	textarea {
		padding-top: 20rpx;
		width: 95%;
		height: 100%;
		margin: 0 auto;
	}
}
.tip_wrapper{
	background-color: #FFFFFF;
	color: #333333;
	width:640rpx;
	height: 600rpx;
	padding: 30rpx;
	border-radius: 15rpx;
	.img{
		display: flex;
		justify-content: center;
		align-items: center;
		image{
			width: 50%;
		}
	}
	.content{
		margin-top: 30rpx;
		font-weight: 550;
		font-size: 36rpx;
		letter-spacing: 2.5px;
	}
	.btn{
		margin-top: 30rpx;
		background-color:#ffe22d ;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100rpx;
		border-radius: 15rpx;
		font-weight: 550;
		font-size: 40rpx;
	}
}
</style>
