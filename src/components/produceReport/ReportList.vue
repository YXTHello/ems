<!-- html部分 -->
<template>
	<div>
		<h1>报岗</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			<el-input style='width: 200px;' v-model="reportuser" placeholder="请输入报岗人"></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>增加</el-button>
		</div>
		<el-table :data="list">
			<el-table-column align='center' prop="reportid" label="报岗ID" width='83'></el-table-column>
			<el-table-column align='center' prop="shipname" label="船队名称" width='100'></el-table-column>
			<el-table-column align='center' prop="capacity" label="装载量(吨)" width='100'></el-table-column>
			<el-table-column align='center' prop="planjobtime" label="预计到港时间" width='180'></el-table-column>
			<el-table-column align='center' prop="startjobtime" label="实际到港时间" width='180'></el-table-column>
			<el-table-column align='center' prop="completetime" label="完成时间" width='180'></el-table-column>
			<el-table-column align='center' prop="flowid" label="流程" width='83'></el-table-column>
			<el-table-column align='center' prop="reportuser" label="报岗人" width='100'></el-table-column>
			<el-table-column align='center' prop="compname" label="所属企业" width='120'></el-table-column>
			<el-table-column align='center' label="操作" width='170'>
				<template slot-scope="scope">
					<el-button size='small' type="text" @click='edit(scope.row)'>编辑</el-button>
					<el-button size='small' type="text" @click="del(scope.row.reportid)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				reportuser:'',
				list:[]
			};
		},
		methods:{
			add(){
				//路由跳转
				this.$router.push({path:'/ReportAdd'});
			},
			del(reportid){
				// 后端网址
				var url = this.baseUrl+"/produceReport/delete"
				// 传递给后端的数据
				var data = {reportid:reportid};
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
				this.$router.push({name:'ReportEdit',params:{row:row.reportid}});
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/search"
				// 传递给后端的数据
				var data = {reportuser:this.reportuser};
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
