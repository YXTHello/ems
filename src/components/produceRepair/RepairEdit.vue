<!-- html部分 -->
<template>
	<div>
		<h1>维修记录编辑页面</h1>
		<el-row style='margin-bottom: 20px;'>
			<el-col :span="12">
				<el-select v-model='devid' style='width:45%' placeholder="请选择">
					<el-option v-for='obj in devArr' :key="obj.devid" :label='obj.devname' :value='obj.devid'></el-option>
				</el-select>
			</el-col>
			<el-col :span="12"><el-input style='width:45%' v-model='cause' placeholder='请输入维修原因'></el-input></el-col>
		</el-row>
		<el-row style='margin-bottom: 20px;'>
			<el-col :span="12"><el-input style='width:45%' v-model='cost' placeholder='请输入维修费用'></el-input></el-col>
			<el-col :span="12"><el-date-picker style='width:45%' v-model='repairdate' value-format='yyyy-MM-dd' placeholder='请输入维修日期'></el-date-picker></el-col>
		</el-row>
		<el-row>
			<el-col :span="24"><el-button @click='onclick'>确认</el-button><el-button @click='cancel'>返回</el-button></el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				repairid:'',
				cause:'',
				devid:'',
				cost:'',
				repairdate:'',
				devArr:[]
			};
		},
		methods:{
			onclick(){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/update"
				// 传递给后端的数据
				var data = {repairid:this.repairid,cause:this.cause,devid:this.devid,cost:this.cost,repairdate:this.repairdate};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/RepairList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseDevice/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.devArr = res.data;
			})
			//接收路由传递的数据
			var repairid = this.$route.params.row;
			// 后端网址
			var url = this.baseUrl+"/produceRepair/load"
			// 传递给后端的数据
			var data = {repairid:repairid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.repairid = obj.repairid;
				this.cause = obj.cause;
				this.devid = obj.devid;
				this.cost = obj.cost;
				this.repairdate = obj.repairdate;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
