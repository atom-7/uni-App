<template>
	<view class="wrapper animated slideInLeft fast"> 
		<!-- <view class="item" v-for="(item, index) in list" :key="index"> -->
			<view class="head_info uni-flex uni-jb uni-flex-center">
				<view class="left uni-flex uni-flex-center ">
					<view class="img"><image lazy-load :src="listItem.avatar" mode="widthFix"></image></view>
					<view class="name">{{ listItem.username }}</view>
				</view>
				<view class="right uni-flex uni-flex-center">
					<view class="follow" v-if="!listItem.isFollow" @click="addFollow">+ 关注</view>
					<view class="iconfont icon-guanbi"></view>
				</view>
			</view>
			<view class="title">
				<view class="value">{{ listItem.title }}</view>
			</view>
			<view class="content">
				<view class="content_img" v-if="listItem.type === 'img'"><image lazy-load :src="listItem.cover_img" mode="aspectFill"></image></view>
				<view class="content_video" v-else>
					<image lazy-load :src="listItem.cover_img" mode="aspectFill"></image>
					<view class="iconfont icon-bofang"></view>
					<view class="play_count">{{ listItem.play_count }} 次播放 {{ listItem.time }}</view>
				</view>
			</view>
			<view class="option uni-flex uni-jb">
				<view class="opt_left uni-flex uni-flex-center">
					<view class="like uni-flex">
						<view class="iconfont icon-icon_xiaolian-mian" :class="listItem.like.status ? 'active' : ''"></view>
						<view class="value">{{ listItem.like.number }}</view>
					</view>
					<view class="hate uni-flex">
						<view class="iconfont icon-kulian" :class="listItem.hate.status ? 'active' : ''"></view>
						<view class="value">{{ listItem.hate.number }}</view>
					</view>
				</view>
				<view class="opt_right uni-flex uni-flex-center">
					<view class="comments uni-flex">
						<view class="iconfont icon-pinglun1"></view>
						<view class="value">{{ listItem.comments }}</view>
					</view>
					<view class="share uni-flex">
						<view class="iconfont icon-zhuanfa"></view>
						<view class="value">{{ listItem.share }}</view>
					</view>
				</view>
			</view>
		<!-- </view> -->
	</view>
</template>

<script>
export default {
	props:{
		listItem:{
			type:Object,
			default:{}
		}
	},
	data() {
		return {
			
		};
	},
	methods:{
		addFollow(){
			// this.$emit('changeFollow',!this.listItem.isFollow);
		}
	}
};
</script>

<style lang="less" scoped>
view {
	box-sizing: border-box;
}
image {
	width: 100%;
}
.wrapper {
	padding: 0 26rpx;
	// padding-top: 20rpx;
	padding-top: 20rpx;
	border-bottom: 1px solid #f2f2f2;
	padding-bottom: 30rpx;
	
	.img {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 20rpx;
	}
	.name {
		color: #a9a9a9;
	}
	.head_info {
		.right {
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
	.title {
		color: #333;
		margin: 15rpx 0;
		margin-top: 25rpx;
		.value {
			font-size: 28rpx;
			font-weight: 600;
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
}
.active {
	color: red;
}
</style>
