<template>
	<view class="loading">{{ loadStatus }}</view>
</template>

<script>
	export default {
		props:{
			loadStatus:String
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.loading {
	color: #d5d5d5;
	text-align: center;
	padding: 20rpx;
}
</style>
