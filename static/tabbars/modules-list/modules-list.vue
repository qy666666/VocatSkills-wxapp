<template>
	<!-- module-list组件 -->
	<view class="moduleList  flex flex-wrap padding-bottom-lg radius margin-top-xs">
		<view class="item text-center margin-top" v-for="(item,index) in dataList" :key="item.id" style="width: 25%;"
			@click="bindClick(item)">
			<view class="icon   text-red">
				<text :class="item.icon" style="font-size: 65rpx;"></text>
			</view>
			<view class="text text-df">
				<text>{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [{
						id: 0,
						icon: "cuIcon-activity",
						text: "赛事日程",
					},
					{
						id: 1,
						icon: "iconfont icon-newspaper",
						text: "赛事安排",
					},
					{
						id: 2,
						icon: "iconfont icon-65yingjishouce",
						text: "赛事手册",
					},
					{
						id: 3,
						icon: "iconfont icon-wenben",
						text: "技术文件",
					},
					{
						id: 4,
						icon: "iconfont icon-erweima",
						text: "赛事一码通",
					},
					{
						id: 5,
						icon: "iconfont icon-jiguanshiyezhanghuchuli",
						text: "竞赛人员",
					},
					{
						id: 6,
						icon: "iconfont icon-map-site-full",
						text: "场地布局",
					},
					{
						id: 7,
						icon: "iconfont icon-kefu",
						text: "智能客服",
					}
				]
			}
		},
		methods: {
			/**
			 * 当前点击
			 * @param {Object} item
			 */
			bindClick(item) {
				this.$emit('curClickEvent', {
					id: item.id
				})
				// uni.showToast({
				// 	title: '这是个提示',
				// 	icon: 'none',
				// 	duration: 2000
				// })
			}
		}
	}
</script>

<style>

</style>
