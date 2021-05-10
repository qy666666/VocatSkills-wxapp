<template>
	<view>
		新闻中心
		<footer-bar :btns="btns" @sendClickEvent="getClickEvent"></footer-bar>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btns: [{
					id: 0,
					text: "在线客服"
				}, ]
			}
		},
		methods: {
			/**
			 * 获取点击在线客服
			 * @param {Object} e
			 */
			getClickEvent(e){
				uni.navigateTo({
					url:'../../../pagesCom/service/service'
				})
			}
		}
	}
</script>

<style>

</style>
