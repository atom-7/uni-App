<template>
	<view class="content">
		
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area animated bounceInLeft">
			
			<text class="title" @click="log">{{ title }}</text>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello....'
		};
	},
	onLoad() {
		// console.log(q);
	},
	onShow(){
		setTimeout(()=>{
			
		this.title = '页面show了'
		},1000)
	},
	onHide(){
		this.title = '页面隐藏'
	},
	methods: {
		log(){
			console.log(111)
			this.title = '你已经点击了';
		}
		
	}
};
</script>

<style lang="less" scoped>
.text-area{
	
}
.content {
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	view{
		width: 100%;
	}
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
