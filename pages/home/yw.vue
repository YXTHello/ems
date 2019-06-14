<template>
	<view class="content">
		<view>
			 <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#4cd964"></uni-segmented-control>
		<view class="content">
		    <view v-show="current === 0">
				<synchro></synchro>
			</view>
		    <view v-show="current === 1">
		        <phones></phones>
		    </view>
		    <view v-show="current === 2">
				故障记录
		    </view>
		</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from "@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue"
	import synchro from "../yw/synchro.vue"
	import phones from "../yw/phones.vue"
	export default {
		 components: {uniSegmentedControl,synchro},
		data() {
			return {
				items: ['数据采集','通讯录','故障记录'],
				current: 0
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
