<!-- html部分 -->
<template>
	<div>
		<h1>故障记录</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			<el-input style='width: 200px;' v-model="faulttime" placeholder="请输入故障时间(分钟)"></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>增加</el-button>
		</div>
		<el-table :data="list" style="width: 830px;">
			<el-table-column align='center' prop="faultId" label="故障ID" width='70'></el-table-column>
			<el-table-column align='center' prop="devname" label="设备名称" width='150'></el-table-column>
			<el-table-column align='center' prop="cause" label="故障原因" width='150'></el-table-column>
			<el-table-column align='center' prop="faultuser" label="报告人" width='120'></el-table-column>
			<el-table-column align='center' prop="faulttime" label="故障时间(分钟)" width='170'></el-table-column>
			<el-table-column align='center' label="操作" width='170'>
				<template slot-scope="scope">
					<el-button size='small' type="text" @click='edit(scope.row)'>编辑</el-button>
					<el-button size='small' type="text" @click="del(scope.row.faultId)">删除</el-button>
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
				faulttime:'',
				list:[]
			};
		},
		methods:{
			add(){
				//路由跳转
				this.$router.push({path:'/FaultAdd'});
			},
			del(faultId){
				// 后端网址
				var url = this.baseUrl+"/produceFault/delete"
				// 传递给后端的数据
				var data = {faultId:faultId};
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
				this.$router.push({name:'FaultEdit',params:{row:row.faultId}});
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/produceFault/search"
				// 传递给后端的数据
				var data = {faulttime:this.faulttime};
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
