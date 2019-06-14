<!-- html部分 -->
<template>
	<div>
		<h1>流程信息</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			<el-input style='width: 200px;' v-model="flowname" placeholder="请输入流程名称"></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>增加</el-button>
		</div>
		<el-table :data="list" style="width: 1190px;">
			<el-table-column align='center' prop="flowid" label="流程ID" width='170'></el-table-column>
			<el-table-column align='center' prop="flowname" label="流程名称" width='170'></el-table-column>
			<el-table-column align='center' prop="dljname" label="斗轮机" width='170'></el-table-column>
			<el-table-column align='center' prop="zcjname" label="装船机" width='170'></el-table-column>
			<el-table-column align='center' prop="pdjname" label="皮带机" width='170'></el-table-column>
			<el-table-column align='center' prop="compname" label="所属企业" width='170'></el-table-column>
			<el-table-column align='center' label="操作" width='170'>
				<template slot-scope="scope">
					<el-button size='small' type="text" @click='edit(scope.row)'>编辑</el-button>
					<el-button size='small' type="text" @click="del(scope.row.flowid)">删除</el-button>
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
				flowname:'',
				list:[]
			};
		},
		methods:{
			add(){
				//路由跳转
				this.$router.push({path:'/FlowAdd'});
			},
			del(flowid){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/delete"
				// 传递给后端的数据
				var data = {flowid:flowid};
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
				this.$router.push({name:'FlowEdit',params:{row:row.flowid}});
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/search"
				// 传递给后端的数据
				var data = {flowname:this.flowname};
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
