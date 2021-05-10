<!-- 竞赛安排模块 -->
<template>
	<view>
		赛事安排模块
		<footer-bar :btns="btns" @sendClickEvent="getClickEvent"></footer-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btns: [{
						id: 0,
						text: "场地布局图"
					},
					{
						id: 1,
						text: "我的赛事"
					}
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
						url: './sitelayoutc/sitelayoutc'
					})
				}else if(e.id == 1){
					uni.navigateTo({
						url:'./myEent/myEent'
					})
				}
			
			}
		}
	}
</script>

<style>

</style>
