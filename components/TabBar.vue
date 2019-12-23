<template>
	<view>
		<view class="uni-tab-bar">
			<scroll-view scroll-x class="uni-swiper-tab" :show-scrollbar="false">
				<view class="swiper-tab-list tab_item" @click="handleIndex(index)" :class="tabIndex == index ? 'tab_active' : ''" v-for="(tab, index) in tabBars" :key="index">
					{{ tab.label }}
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		tabBars: {
			type:Array,
			default(){
				return []
			}
		},
		tabIndex:{
			type:Number,
			default:0
		}
		
	},
	data() {
		return {
		};
	},
	methods: {
		handleIndex(index) {
			if(index == this.tabIndex)return;
			this.$emit('getTabIndex', index);
		}
	}
};
</script>

<style lang="less" scoped>
.uni-swiper-tab {
	border-bottom: 1px solid #eeeeee;
}
.tab_active {
	color: #333333 !important;
	&::after {
		content: '';
		display: block;
		position: absolute;
		bottom: -2px;
		left: 17.5 * 2upx;
		border-radius: 10upx;
		width: 80upx;
		height: 10upx;
		background-color: #fede33;
	}
}
.tab_item {
	position: relative;
	color: #999;
	font-weight: 600;
}
.uni-swiper-tab {
	line-height: 70upx;
	height: 70upx;
}
</style>
