<!-- html部分 -->
<template>
	<div>
		<h1>设备信息</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			<el-input style='width: 200px;' v-model="devname" placeholder="请输入设备名称"></el-input>
			<el-input style='width: 200px;' v-model="devuser" placeholder="请输入责任人"></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>增加</el-button>
		</div>
		<el-table :data="list" style="width: 1190px;">
			<el-table-column align='center' prop="devid" label="设备ID" width='170'></el-table-column>
			<el-table-column align='center' prop="devname" label="设备名称" width='170'></el-table-column>
			<el-table-column align='center' prop="baseDevtype.typename" label="设备类别" width='170'></el-table-column>
			<el-table-column align='center' prop="devdate" label="投入时间" width='170'></el-table-column>
			<el-table-column align='center' prop="devuser" label="责任人" width='170'></el-table-column>
			<el-table-column align='center' prop="baseCompany.compname" label="所属企业" width='170'></el-table-column>
			<el-table-column align='center' label="操作" width='170'>
				<template slot-scope="scope">
					<el-button size='small' type="text" @click='edit(scope.row)'>编辑</el-button>
					<el-button size='small' type="text" @click="del(scope.row.devid)">删除</el-button>
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
				devname:'',
				devuser:'',
				list:[]
			};
		},
		methods:{
			add(){
				//路由跳转
				this.$router.push({path:'/DeviceAdd'});
			},
			del(devid){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/delete"
				// 传递给后端的数据
				var data = {devid:devid};
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
				this.$router.push({name:'DeviceEdit',params:{row:row.devid}});
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/search"
				// 传递给后端的数据
				var data = {devname:this.devname,devuser:this.devuser};
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
