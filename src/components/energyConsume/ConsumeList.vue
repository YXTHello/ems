<!-- html部分 -->
<template>
	<div>
		<h1>能耗信息</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			<el-input style='width: 200px;' v-model="electric" placeholder="请输入电耗"></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>增加</el-button>
		</div>
		<el-table :data="list" style="width: 980px;">
			<el-table-column align='center' prop="consumeid" label="能耗ID" width='70'></el-table-column>
			<el-table-column align='center' prop="devid" label="设备ID" width='150'></el-table-column>
			<el-table-column align='center' prop="electric" label="电耗" width='150'></el-table-column>
			<el-table-column align='center' prop="water" label="水耗" width='120'></el-table-column>
			<el-table-column align='center' prop="oil" label="油耗" width='170'></el-table-column>
			<el-table-column align='center' prop="reportid" label="报岗ID" width='170'></el-table-column>
			<el-table-column align='center' label="操作">
				<template slot-scope="scope">
					<el-button size='small' type="text" @click='edit(scope.row)'>编辑</el-button>
					<el-button size='small' type="text" @click="del(scope.row.consumeid)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				electric:'',
				list:[]
			};
		},
		methods:{
			add(){
				//路由跳转
				this.$router.push({path:'/ConsumeAdd'});
			},
			del(faultId){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/delete"
				// 传递给后端的数据
				var data = {consumeid:consumeid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("删除成功");
					this.search();
				})
			},
			edit(row){
				//路由跳转
				this.$router.push({name:'ConsumeEdit',params:{row:row.consumeid}});
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/search"
				// 传递给后端的数据
				var data = {electric:this.electric};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				})
			}
		},
		mounted:function(){
			this.search();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
