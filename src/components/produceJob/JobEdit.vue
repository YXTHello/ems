<!-- html部分 -->
<template>
	<div>
		<h1>作业信息编辑页面</h1>
		<el-row style='margin-bottom: 20px;'>
			<el-col :span="12">
				<el-select v-model='devid' style='width:45%' placeholder="请选择">
					<el-option v-for='obj in devArr' :key="obj.devid" :label='obj.devname' :value='obj.devid'></el-option>
				</el-select>
			</el-col>
			<el-col :span="12"><el-date-picker type="datetime" style='width:45%' v-model='starttime' value-format='yyyy-MM-dd HH:mm:ss' placeholder='请输入开始作业时间'></el-date-picker></el-col>
		</el-row>
		<el-row style='margin-bottom: 20px;'>
			<el-col :span="12"><el-date-picker type="datetime" style='width:45%' v-model='completetime' value-format='yyyy-MM-dd HH:mm:ss' placeholder='请输入结束作业时间'></el-date-picker></el-col>
			<el-col :span="12"><el-input style='width:45%' v-model='duration' placeholder='请输入运行时长'></el-input></el-col>
		</el-row>
		<el-row style='margin-bottom: 20px;'>
			<el-col :span="12"><el-input style='width:45%' v-model='amount' placeholder='请输入作业量'></el-input></el-col>
			<el-col :span="12"><el-input style='width:45%' v-model='reportid' placeholder='请输入报岗id'></el-input></el-col>
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
				jobid:'',
				starttime:'',
				devid:'',
				completetime:'',
				duration:'',
				amount:'',
				reportid:'',
				devArr:[]
			};
		},
		methods:{
			onclick(){
				// 后端网址
				var url = this.baseUrl+"/produceJob/update"
				// 传递给后端的数据
				var data = {jobid:this.jobid,devid:this.devid,starttime:this.starttime,completetime:this.completetime,duration:this.duration,amount:this.amount,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/JobList'});
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
			var jobid = this.$route.params.row;
			// 后端网址
			var url = this.baseUrl+"/produceJob/load"
			// 传递给后端的数据
			var data = {jobid:jobid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.jobid = obj.jobid;
				this.starttime = obj.starttime;
				this.devid = obj.devid;
				this.completetime = obj.completetime;
				this.duration = obj.duration;
				this.amount = obj.amount;
				this.reportid = obj.reportid;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
