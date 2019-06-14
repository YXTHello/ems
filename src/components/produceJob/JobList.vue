<!-- html部分 -->
<template>
	<div>
		<h1>作业信息</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			<el-input style='width: 200px;' v-model="amount" placeholder="请输入作业量"></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>增加</el-button>
		</div>
		<el-table :data="list">
			<el-table-column align='center' prop="jobid" label="作业信息ID" width='150'></el-table-column>
			<el-table-column align='center' prop="devid" label="设备名称" width='150'></el-table-column>
			<el-table-column align='center' prop="starttime" label="开始作业时间" width='187'></el-table-column>
			<el-table-column align='center' prop="completetime" label="结束作业时间" width='187'></el-table-column>
			<el-table-column align='center' prop="duration" label="运行时长" width='150'></el-table-column>
			<el-table-column align='center' prop="amount" label="作业量" width='150'></el-table-column>
			<el-table-column align='center' prop="reportid" label="报岗id" width='150'></el-table-column>
			<el-table-column align='center' label="操作" width='170'>
				<template slot-scope="scope">
					<el-button size='small' type="text" @click='edit(scope.row)'>编辑</el-button>
					<el-button size='small' type="text" @click="del(scope.row.jobid)">删除</el-button>
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
				amount:'',
				list:[]
			};
		},
		methods:{
			add(){
				//路由跳转
				this.$router.push({path:'/JobAdd'});
			},
			del(jobid){
				// 后端网址
				var url = this.baseUrl+"/produceJob/delete"
				// 传递给后端的数据
				var data = {jobid:jobid};
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
				this.$router.push({name:'JobEdit',params:{row:row.jobid}});
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/produceJob/search"
				// 传递给后端的数据
				var data = {amount:this.amount};
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
