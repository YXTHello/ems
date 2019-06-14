<template>
	<view class="content">
		<view class="yuan">
			<view class="tian">29<label>天</label></view>
			<view>安全用电</view>
			<view>/</view>
			<view class="tiao">10<label>条</label></view>
			<view>异常告警</view>
		</view>
		<view class="jing">
			<view class="xian">~</view>
			<view>告警统计</view>
			<view class="tu"><image src="../../static/imgs/yw1.png"></image></view>
		</view>
		<uni-list>
			<uni-list-item title="流程fm1" @click='fn("流程fm1")'
			 show-extra-icon="false" 
			 :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}" show-badge="true" badge-text="130.5">
			 </uni-list-item>
			 <uni-list-item title="流程fm2" @click='fn("流程fm2")'
			  show-extra-icon="false" 
			  :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}" show-badge="true" badge-text="1230.6">
			  </uni-list-item>
			  <uni-list-item title="流程fm3" @click='fn("流程fm3")'
			   show-extra-icon="false" 
			   :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}" show-badge="true" badge-text="801.6">
			   </uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@dcloudio/uni-ui/lib/uni-list/uni-list.vue'
	import uniListItem from '@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue'
	export default {
		components:{uniList,uniListItem},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			fn(flowname2a){
				uni.naviazgzaateTo({
					url:"../charts/chart02?flowname="+flowname
				})
			}
		}
	}
</script>

<style>
	@import url("../../static/css/index.css");
</style>
