<!-- 竞赛人员页面 -->
<template>
	<view>
		竞赛人员页面
		<footer-bar :btns="btns" @sendClickEvent="getClickEvent"></footer-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btns: [{
						id: 0,
						text: "赛事安排"
					},
				]
			}
		},
		methods: {
			/**
			 * 得到点击的信息
			 * @param {Object} e
			 */
			getClickEvent(e) {
				if (e.id == 0) {
					uni.navigateTo({
						url: '../arrange/arrange'
					})
				}
			}
		}
	}
</script>

<style>

</style>
