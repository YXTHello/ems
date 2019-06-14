<!-- html部分 -->
<template>
	<div>
		<span>请选择年份：</span> <el-date-picker v-model="year"  type="year"
			placeholder="请选择年份" value-format='yyyy'>
		  </el-date-picker>
		  <el-button @click='search()'>查询</el-button>
		<center>
		<h1>流程作业量对比图</h1>
		<ve-radar :data="chartData"></ve-radar>
		<h1>设备类别作业量对比图</h1>
		<ve-funnel :data="chartData2"></ve-funnel>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				chartData: {
					
				},
				chartData2:{
					
				}
			};
		},
		methods:{
			search(){
				
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
