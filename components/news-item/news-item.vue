<!-- 新闻模块 -->
<template>
	<view class="news-item flex radius bg-white padding-lr-sm padding-tb-xs" @click="bindClick">
		<view class="flex-sub text-xxl padding-lr-xs">
			<view class="text-black text-bold">
				赛事
			</view>
			<view class="text-red text-bold ">
				头条
			</view>
		</view>
		<view class=" text-red flex-sub padding-left-xs flex flex-wrap align-center">
			<view class="padding-top-xs">
				公告
			</view>
			<view class="padding-bottom-xs">
				制度
			</view>
		</view>
		<view class="flex-fifth text-sm padding-left-xs flex flex-wrap align-center">
			<view class="text-cut padding-top-sm " style="width: 470rpx">
				关于推荐2020年全国职业院校技能大赛全国职业院校技能大赛
			</view>
			<view class="text-cut padding-bottom-sm" style="width: 470rpx">
				关于推荐2020年全国职业院校技能大赛全国职业院校技能大赛
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "news-item",
		data() {
			return {

			};
		},
		created() {

		},
		methods: {
			/**
			 * 模块被点击
			 */
			bindClick() {
				this.$emit('sendClickNews',{
					msg:'clickNews'
				})
			}
		}
	}
</script>

<style lang="scss">
</style>
