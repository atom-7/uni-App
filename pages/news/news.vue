<template>
	<view>
		<uniNavBar :statusBar="true" class="nav-bar">
			<block slot="left">
				<view class="left_icon"><view class="iconfont icon-qiandao"></view></view>
			</block>
			<block>
				<view class="middle"><TabBar :tabBars="tabBars" @getTabIndex="changeTabIndex" :tabIndex="tabIndex"></TabBar></view>
			</block>
			<block slot="right">
				<view class="right_icon"><view class="iconfont icon-bianji1"></view></view>
			</block>
		</uniNavBar>
		<view class="content_list uni-flex">
			<view class="list_left">
				<view class="img uni-flex uni-center"><image src="../../static/demo/userpic/8.jpg" mode="widthFix"></image></view>
			</view>
			<view class="list_right">
				<view class="list_right_head uni-flex uni-jb">
					<view class="user uni-flex">
						<view class="name">三鱼先生</view>
						<view class="age uni-flex">
							<view class="iconfont icon-nan"></view>
							25
						</view>
					</view>
					<view class="user_option uni-flex uni-flex-center">
						<view class="follow" v-if="!listItem.isFollow">+ 关注</view>
						<view class="iconfont icon-guanbi"></view>
					</view>
				</view>
				<view class="list_right_title"></view>
				<view class="list_right_img">
					<view class="content">
						<view class="content_img" v-if="listItem.type === 'img'"><image lazy-load :src="listItem.cover_img" mode="aspectFill"></image></view>
						<view class="content_video" v-else>
							<image lazy-load :src="listItem.cover_img" mode="aspectFill"></image>
							<view class="iconfont icon-bofang"></view>
							<view class="play_count">{{ listItem.play_count }} 次播放 {{ listItem.time }}</view>
						</view>
					</view>
				</view>
				<view class="option uni-flex uni-jb">
					<view class="opt_left uni-flex uni-flex-center"><view class="like uni-flex">深圳 &nbsp;龙岗</view></view>
					<view class="opt_right uni-flex uni-flex-center">
						<view class="share uni-flex">
							<view class="iconfont icon-zhuanfa"></view>
							<view class="value">12</view>
						</view>
						<view class="comments uni-flex">
							<view class="iconfont icon-pinglun1"></view>
							<view class="value">23</view>
						</view>
						<view class="like uni-flex">
							<view class="iconfont icon-dianzan"></view>
							<view class="value">958</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import TabBar from '../../components/TabBar.vue';
export default {
	components: {
		uniNavBar,
		TabBar
	},
	data() {
		return {
			tabBars: [{ id: 0, classname: '关注' }, { id: 1, classname: '话题' }],
			tabIndex: 0,
			listItem: {
				type: 'video',
				cover_img: '../../static/demo/datapic/2.jpg',
				play_count: 22,
				time: '2:47',
				isFollow: false
			}
		};
	},
	methods: {
		changeTabIndex(i) {
			if (this.tabIndex == i) return;
			this.tabIndex = i;
		}
	}
};
</script>
<style lang="less" scoped>
.nav-bar {
	.left_icon {
		width: 100%;
		color: #fede33;
		.iconfont {
			font-size: 46rpx;
		}
	}
	.right_icon {
		text-align: right;
		padding-left: 64rpx;
		.iconfont {
			font-size: 46rpx;
		}
	}
}
.middle {
	margin-left: 45rpx;
}
.content_list {
	.list_left {
		flex: 0 0 15%;
		.img {
			justify-content: center;
			image {
				width: 90rpx;
				height: 90rpx;
				border-radius: 100%;
			}
		}
	}
	.list_right {
		flex: 1;
		.list_right_head {
			.user_option {
				.follow {
					font-size: 24rpx;
					background-color: #f4f4f4;
					padding: 2rpx 10rpx;
					margin-right: 20rpx;
				}
				.iconfont {
					color: #d5d5d5;
					font-size: 24rpx;
				}
			}
		}
	}
}

.content {
	.content_img,
	.content_video {
		height: 320rpx;
		border-radius: 16rpx;
		overflow: hidden;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.content_video {
		position: relative;
		.iconfont {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			font-size: 140rpx;
			color: #ffffff;
		}
		.play_count {
			position: absolute;
			bottom: 10rpx;
			right: 14rpx;
			padding: 4rpx 20rpx;
			background-color: rgba(0, 0, 0, 0.5);
			border-radius: 20rpx;
			color: #ffffff;
			font-size: 22rpx;
		}
	}
}
.option {
	margin-top: 30rpx;
	padding-left: 20rpx;
	color: #d5d5d5;
	.value {
		margin-left: 15rpx;
		display: flex;
		align-items: center;
	}
	> view > view {
		margin-right: 20rpx;
	}
}
</style>
