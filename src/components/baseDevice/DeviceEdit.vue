<!-- html部分 -->
<template>
	<div>
		<h1>设备信息编辑页面</h1>
		<el-row style='margin-bottom: 20px;'>
		    <el-col :span="12"><el-input style='width:45%' v-model='devname' placeholder='请输入设备名称'></el-input></el-col>
		    <el-col :span="12">
			    <el-select v-model='typeid' style='width:45%' placeholder="请选择">
				    <el-option v-for='obj in typeArr' :key="obj.typeid" :label='obj.typename' :value='obj.typeid'></el-option>
			    </el-select>
		    </el-col>
		</el-row>
		<el-row style='margin-bottom: 20px;'>
		    <el-col :span="12"><el-date-picker style='width:45%' v-model='devdate' value-format='yyyy-MM-dd' placeholder='请输入投入时间'></el-date-picker></el-col>
		    <el-col :span="12"><el-input style='width:45%' v-model='devuser' placeholder='请输入责任人'></el-input></el-col>
		</el-row>
		<el-row style='margin-bottom: 20px;'>
			<el-col :span="12">
				<el-select v-model='compid' style='width:45%' placeholder="请选择">
					<el-option v-for='obj in compArr' :key="obj.compid" :label='obj.compname' :value='obj.compid'></el-option>
				</el-select>
			</el-col>
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
				devid:'',
				devname:'',
				typeid:'',
				devdate:'',
				devuser:'',
				compid:'',
				typeArr:[],
				compArr:[]
			};
		},
		methods:{
			onclick(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/update"
				// 传递给后端的数据
				var data = {devid:this.devid,devname:this.devname,typeid:this.typeid,devdate:this.devdate,devuser:this.devuser,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/DeviceList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseCompany/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.compArr = res.data;
			})
			// 后端网址
			var url = this.baseUrl+"/baseDevtype/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.typeArr = res.data;
			})
			//接收路由传递的数据
			var devid = this.$route.params.row;
			// 后端网址
			var url = this.baseUrl+"/baseDevice/load";
			// 传递给后端的数据
			var data = {devid:devid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var row = res.data;
				this.devid = row.devid;
				this.devname = row.devname;
				this.typeid = row.typeid;
				this.devdate = row.devdate;
				this.devuser = row.devuser;
				this.compid = row.compid;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
