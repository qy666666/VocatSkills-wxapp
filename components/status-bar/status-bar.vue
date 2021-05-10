<!-- 顶部状态栏 -->
<!-- 使用自定义导航栏的界面使用 -->
<template>
	<view class="status_bar" :style="{ height: statusBarHeight + 'px' }"></view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight //获取系统状态栏高度
	export default {
		name: "status-bar",
		data() {
			return {
				statusBarHeight: statusBarHeight
			};
		}
	}
</script>

<style>
	.status_bar {
		/* height: var(--status-bar-height); */
		width: 100%;
		background-color: #FD7B03;
	}
</style>
