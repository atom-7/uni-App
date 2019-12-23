<template>
	<view class="main">
		<view class="top_tabbar"><TabBar :tabBars="tabBars" :tabIndex="tabIndex" @getTabIndex="handleIndex"></TabBar></view>
		<view class="content">
			<swiper>
				<swiper-item v-for="(swiperItem,index) in swiperList" :key="index">
					<scroll-view scroll-y="true">
						<PostList v-for="(postItem,i) in swiperItem.list" :listItem="postItem" :key="i"></PostList>
						</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import TabBar from '../../components/TabBar.vue';
import PostList from '../../components/index/post-list.vue';
export default {
	components: {
		TabBar,
		PostList
	},
	data() {
		return {
			tabBars: [
				{ label: '关注', id: 'guanzhu' },
				{ label: '推荐', id: 'tuijian' },
				{ label: '体育', id: 'tiyu' },
				{ label: '热点', id: 'redian' },
				{ label: '财经', id: 'caijing' },
				{ label: '娱乐', id: 'yule' }
			],
			tabIndex: 0,
			swiperList:[
				{
					list: [
						{
							avatar: '../../static/bgimg/1.jpg',
							username: '张大仙',
							isFollow: false,
							title: '走出去,才发现你跟别人差的不是一点难点',
							type: 'img',
							cover_img: '../../static/demo/datapic/1.jpg',
							like: {
								status: true,
								number: 570
							},
					
							hate: {
								status: false,
								number: 2
							},
							comments: 54,
							share: 14
						},
						{
							avatar: '../../static/bgimg/1.jpg',
							username: '张老三',
							isFollow: false,
							title: '如何用手账改变你的一生',
							cover_img: '../../static/demo/datapic/1.jpg',
							type: 'video',
							play_count: '20w',
							time: '2:47',
							like: {
								status: false,
								number: 523
							},
					
							hate: {
								status: true,
								number: 45
							},
							comments: 522,
							share: 33
						}
					]
				},
				{
					list: [
						{
							avatar: '../../static/bgimg/1.jpg',
							username: '张大仙',
							isFollow: false,
							title: '走出去,才发现你跟别人差的不是一点难点',
							type: 'img',
							cover_img: '../../static/demo/datapic/1.jpg',
							like: {
								status: true,
								number: 570
							},
					
							hate: {
								status: false,
								number: 2
							},
							comments: 54,
							share: 14
						},
						{
							avatar: '../../static/bgimg/1.jpg',
							username: '张老三',
							isFollow: false,
							title: '如何用手账改变你的一生',
							cover_img: '../../static/demo/datapic/1.jpg',
							type: 'video',
							play_count: '20w',
							time: '2:47',
							like: {
								status: false,
								number: 523
							},
					
							hate: {
								status: true,
								number: 45
							},
							comments: 522,
							share: 33
						}
					]
				}
			]
		};
	},
	onLoad() {},
	methods: {
		handleIndex(index) {
			this.tabIndex = index;
			console.log(index);
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
.content {
	height: calc(100vh - 72rpx);
}
swiper {
	height: 100%;
}
</style>
