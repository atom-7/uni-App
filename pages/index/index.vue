<template>
	<view class="main"> 
		<view class="top_tabbar"><TabBar :tabBars="tabBars" :tabIndex="tabIndex" @getTabIndex="handleIndex" :scrollLeft="scrollLeft"></TabBar></view>
		<view class="content">
			<swiper @change="getSwiperIndex" :current="tabIndex">
				<swiper-item v-for="(swiperItem, index) in swiperList" :key="index">
					<scroll-view :show-scrollbar="false" @scrolltolower="reachBottom(index)" scroll-y="true">
					
						<template v-if="swiperItem&&swiperItem.list.length>0">
							<PostList v-for="(postItem, i) in swiperItem.list" :listItem="postItem" :key="i"></PostList>
							<LoadMore :loadStatus="swiperItem.isLoading"></LoadMore>
						</template>
						<template v-else> 
							<noData class="no_data"></noData>
						</template>
					</scroll-view> 
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import Mock from 'mockjs';
import TabBar from '../../components/TabBar.vue';
import PostList from '../../components/index/post-list.vue';
import mock from '../../common/mock/index.js';
import { axios } from '../../common/request/axios.js';
import LoadMore from '../../components/common/loadMore.vue';
import noData from '../../components/common/nothing.vue';
export default {
	components: {
		TabBar,
		PostList,
		LoadMore,
		noData 
	},
	data() {
		return {
			tabBars: [
				{ id: '', classname: '' } // 为了防止不报错
			],
			tabIndex: 0,
			swiperList: [
				{
					list:[]
				}
			],
			scrollLeft: 0
		};
	},
	onNavigationBarSearchInputClicked: () => {
		uni.navigateTo({
			url:'../search/search'
		})
	},
	onNavigationBarButtonTap(e) {
		if(e.index==1){// 点击的是取消情况下
			uni.navigateTo({
				url:'../publish/publish'
			})
		}
	},
	onLoad() {
		this.$axios({
			url: 'getHomeData',
			method: 'get'
		}).then(res => {
			let { data } = res.data;
			this.swiperList = data;
		});
		this.getTabData();
	},
	methods: {
		handleIndex(index) {
			if(this.swiperList[index]&&this.swiperList[index].list.length>0){
			this.tabIndex = index;
			}else{
				uni.showToast({
					 title: `没有更多`,
					 icon:'none',
					 duration:1500
				})
			}
		},
		getSwiperIndex({ detail }) {
			let index = detail.current;
			if (+index > 4) {
				this.scrollLeft = (index - 4) * 100;
			} else {
				this.scrollLeft = this.scrollLeft - 100;
			}
			this.tabIndex = index;
		},
		async getTabData() {
			this.$axios({
				url: '/api/v1/postclass',
				method: 'get'
			}).then(res => {
				let { data } = res.data;
				this.tabBars = data.list;
				console.log(data.list);
			});
		},
		reachBottom(index) {
			if (!this.swiperList[index].isLoading === '加载更多...') return;
			this.swiperList[index].isLoading = '加载中';
			if (this.swiperList[index].list.length > 15) {
				this.swiperList[index].isLoading = '没有更多数据了';
				return;
			}
			setTimeout(() => {
				this.$axios({
					url: 'getHomeData',
					method: 'get'
				}).then(res => {
					this.swiperList[index].isLoading = '加载更多...';
					let { data } = res.data;
					this.swiperList[index].list = [...this.swiperList[index].list, ...data[index].list];
				});
			}, 1000);
		}
	}
};
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
	display: none;
	width: 0 !important;
	height: 0 !important;
	-webkit-appearance: none;
	background: transparent;
}

swiper {
	height: calc(100vh - 260rpx);
	overflow: hidden;
}
scroll-view {
	height: 100%;
	overflow: hidden;
}
.no_data{
	margin-top: calc(50vh - 400rpx);
}
</style>
