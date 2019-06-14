<template>
	<view class="content">
		<view class="button">
			<button @click="fn()">数据采集</button>
		</view>
		<view>
			今天同步了
		</view>
		<view>
			同步记录
		</view>
		<view>
			<uni-badge  text="2" type="success"></uni-badge>
		</view>
	</view>
</template>

<script>
	import uniBadge from "@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue"
	export default {
		components: {uniBadge},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
