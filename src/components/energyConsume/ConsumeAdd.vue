<!-- html部分 -->
<template>
	<div>
		<h1>能耗信息添加页面</h1>
		<el-row style='margin-bottom: 20px;'>
			<el-col :span="12"><el-input style='width:45%' v-model='electric' placeholder='请输入电耗'></el-input></el-col>
			<el-col :span="12"><el-input style='width:45%' v-model='water' placeholder='请输入水耗'></el-input></el-col>
		</el-row>
		<el-row style='margin-bottom: 20px;'>
			<el-col :span="12"><el-input style='width:45%' v-model='oil' placeholder='请输入油耗'></el-input></el-col>
			<el-col :span="12"><el-input style='width:45%' v-model='reportid' placeholder='请输入报岗id'></el-input></el-col>
		</el-row>
		<el-row>
			<el-col :span="24"><el-button @click='save'>添加</el-button><el-button @click='cancel'>返回</el-button></el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				electric:'',
				water:'',
				oil:'',
				reportid:'',
				ConsumeArr:[]
			};
		},
		methods:{
			save(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/insert"
				// 传递给后端的数据
				var data = {electric:this.electric,water:this.water,oil:this.oil,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/ConsumeList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/energyConsume/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.userArr = res.data;
			});
			// 后端网址
			var url = this.baseUrl+"/baseDevtype/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.userArr = res.data;
			});
			// 后端网址
			var url = this.baseUrl+"/produceReport/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.userArr = res.data;
			});
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
