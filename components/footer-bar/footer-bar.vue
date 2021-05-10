<template>
	<view>
		<view class="footer bg-white">
			<view class="btn text-center flex align-center justify-center ha">
				<button v-for="(item,index) in btnList" :key="index" class="cu-btn bg-orange margin-lr-sm"
					@click="nav(item)">{{item.text}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "footer-bar",
		data() {
			return {
				btnList:[]
			};
		},
		created() {
			this.btnList = this.btns
		},
		props: {
			btns: {
				type: Array,
				required: true
			}
		},
		methods: {
			/**
			 * 发送点击信息
			 * @param {Object} e
			 */
			nav(e) {
				this.$emit('sendClickEvent',{
					...e
				})
			}
		}
	}
</script>

<style>
	.footer {
		position: fixed;
		height: 50px;
		bottom: 0;
		width: 750rpx;
	}

	.ha {
		height: 100%;
	}
</style>
