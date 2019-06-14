<!-- html部分 -->
<template>
	<div>
		<h1>企业信息</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			<el-input style='width: 200px;' v-model="value1" placeholder="请输入公司名称"></el-input>
			<el-input style='width: 200px;' v-model='value2' placeholder='请输入行业信息'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>增加</el-button>
		</div>
		<el-table :data="list">
			<el-table-column align='center' prop="compid" label="ID" width='170'></el-table-column>
			<el-table-column align='center' prop="compname" label="公司名称" width='170'></el-table-column>
			<el-table-column align='center' prop="contacts" label="联系人" width='170'></el-table-column>
			<el-table-column align='center' prop="comptel" label="联系电话" width='170'></el-table-column>
			<el-table-column align='center' prop="industry" label="行业" width='170'></el-table-column>
			<el-table-column align='center' prop="address" label="地址"></el-table-column>
			<el-table-column align='center' label="操作" width='170'>
				<template slot-scope="scope">
					<el-button size='small' type="text" @click='edit(scope.row)'>编辑</el-button>
					<el-button size='small' type="text" @click="del(scope.row.compid)">删除</el-button>
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
				value1:'',
				value2:'',
				list:[]
			};
		},
		methods:{
			add(){
				//路由跳转
				this.$router.push({path:'/CompAdd'});
			},
			del(compid){
				// 后端网址
				var url = this.baseUrl+"/baseCompany/delete"
				// 传递给后端的数据
				var data = {compid:compid};
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
				this.$router.push({name:'CompEdit',params:{row:row}});
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseCompany/search"
				// 传递给后端的数据
				var data = {compname:this.value1,industry:this.value2};
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
