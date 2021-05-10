<!-- 赛事一码通模块 -->
<template>
	<view>
		赛事一码通模块
		<tki-qrcode v-if="ifShow" cid="qrcode2" ref="qrcode2" val="第二个二维码" :size="size" :onval="onval"
			:loadMake="loadMake" :usingComponents="true" @result="qrR" />
	</view>
</template>

<script>
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	export default {
		data() {
			return {
				ifShow: true,
				val: '二维码', // 要生成的二维码值
				size: 200, // 二维码大小
				unit: 'upx', // 单位
				background: '#b4e9e2', // 背景色
				foreground: '#309286', // 前景色
				pdground: '#32dbc6', // 角标色
				icon: '', // 二维码图标
				iconsize: 40, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: false, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '' // 二维码生成后的图片地址或base64
			}
		},
		components: {
			tkiQrcode
		},
		methods: {
			qrR(e) {
				console.log(e)
			}
		}
	}
</script>

<style>

</style>
