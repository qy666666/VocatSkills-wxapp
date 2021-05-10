<template>
	<!-- module-list组件 -->
	<view class="moduleList  flex flex-wrap padding-bottom-lg radius margin-top-xs bg-white">
		<view class="item text-center margin-top" v-for="(item,index) in dataList" :key="item.id" style="width: 25%;"
			@click="bindClick(item)">
			<view class="icon  text-red">
				<image :src="item.icon"></image>
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
						icon: "../../static/imgs/first.png",
						text: "赛事日程",
					},
					{
						id: 1,
						icon: "../../static/imgs/second.png",
						text: "赛事安排",
					},
					{
						id: 2,
						icon: "../../static/imgs/third.png",
						text: "赛事手册",
					},
					{
						id: 3,
						icon: "../../static/imgs/forth.png",
						text: "技术文件",
					},
					{
						id: 4,
						icon: "../../static/imgs/fifth.png",
						text: "赛事一码通",
					},
					{
						id: 5,
						icon: "../../static/imgs/sixth.png",
						text: "竞赛人员",
					},
					{
						id: 6,
						icon: "../../static/imgs/seventh.png",
						text: "场地布局",
					},
					{
						id: 7,
						icon: "../../static/imgs/eighth.png",
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
			}
		}
	}
</script>

<style>
	image {
		width: 60px;
		height: 60px;
	}
</style>
