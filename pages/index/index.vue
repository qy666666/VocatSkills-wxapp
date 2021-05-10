<!-- 首页 -->
<template>
	<view class="index">
		<status-bar></status-bar>
		<image src="../../static/imgs/bg.png" mode=""></image>
		<view class="notice text-xxl" @click="navMsg">
			<text class="cuIcon-noticefill text-orange "></text>
			<text class="text-orange text-sm" v-if="num > 0">+{{num}}</text>
		</view>
		<news-item @sendClickNews="getClickNews"></news-item>
		<modules-list @curClickEvent="getClickEvent"></modules-list>
		<view class="content margin-top" style="height: 200rpx;background-color: #FFFFFF;" @click="navMsg">
			消息中心
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 2, //表示选中的模块
			}
		},
		onLoad() {

		},
		created() {
			// wx.hideShareMenu()
		},
		methods: {
			/**
			 * 获取点击事件
			 * @param {Object} e
			 */
			getClickEvent(e) {
				console.log(e)
				const navList = ["../../pagesCom/schedule/schedule", "../../pagesCom/arrange/arrange",
					"../../pagesCom/manual/manual", "../../pagesCom/technical/technical",
					"../../pagesCom/qrcode/qrcode",
					"../../pagesCom/personnel/personnel", "../../pagesCom/sitelayout/sitelayout",
					"../../pagesCom/service/service"
				]
				let navUrl = navList[parseInt(e.id)];
				uni.navigateTo({
					url: navUrl
				})
			},
			/**
			 * 获取点击了新闻模块
			 * @param {Object} e
			 */
			getClickNews(e) {
				console.log(e)
				if (e.msg === "clickNews") {
					uni.navigateTo({
						url: './newsCenter/newsCenter'
					})
				}
			},
			/**
			 * 跳转到消息模块
			 */
			navMsg() {
				uni.navigateTo({
					url: './msgCenter/msgCenter'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	image {
		width: 750rpx;
		height: 180px;
	}

	.notice {
		position: absolute;
		top: var(--status-bar-height);
		left: 20rpx;
	}
</style>
