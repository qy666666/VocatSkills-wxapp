<!-- 竞赛日程模块 -->
<template>
	<view class="sechedule">
		<view class="content">
			内容区域
		</view>
		<footer-bar :btns="btns" @sendClickEvent="getClickEvent"></footer-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btns:[
					{
						id:0,
						text:"开幕式/闭幕式"
					}
				]
			}
		},
		methods: {
			/**
			 * 得到点击的信息
			 * @param {Object} e
			 */
			getClickEvent(e){
				if(e.id == 0){
					uni.navigateTo({
						url:'./ceremony/ceremony'
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		margin-bottom: 50px;
	}
	.footer {
		position: fixed;
		height: 50px;
		bottom: 0;
		width: 750rpx;
	}
	.ha{
		height: 100%;
	}
</style>
