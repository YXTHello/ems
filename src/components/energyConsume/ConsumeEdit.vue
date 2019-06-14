<!-- html部分 -->
<template>
	<div>
		<h1>能耗信息编辑页面</h1>
		<el-row style='margin-bottom: 20px;'>
			<el-col :span="12"><el-input style='width:45%' v-model='electric' placeholder='请输入电耗'></el-input></el-col>
			<el-col :span="12"><el-input style='width:45%' v-model='water' placeholder='请输入水耗'></el-input></el-col>
		</el-row>
		<el-row style='margin-bottom: 20px;'>
			<el-col :span="12"><el-input style='width:45%' v-model='oil' placeholder='请输入油耗'></el-input></el-col>
			<el-col :span="12"><el-input style='width:45%' v-model='reportid' placeholder='请输入报岗id'></el-input></el-col>
		</el-row>
		<el-row>
			<el-col :span="24"><el-button @click='onclick'>确定</el-button><el-button @click='cancel'>返回</el-button></el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				consumeid:'',
				devid:'',
				electric:'',
				water:'',
				oil:'',
				reportid:'',
				ConsumeArr:[]
			};
		},
		methods:{
			onclick(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/update"
				// 传递给后端的数据
				var data = {consumeid:this.consumeid,devid:this.devid,electric:this.electric,water:this.water,oil:this.oil,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/ConsumeList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
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
			//接收路由传递的数据
			var consumeid = this.$route.params.row;
			// 后端网址
			var url = this.baseUrl+"/energyConsume/load"
			// 传递给后端的数据
			var data = {consumeid:consumeid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.consumeid = obj.consumeid;
				this.devid = obj.devid;
				this.electric = obj.electric;
				this.water = obj.water;
				this.oil = obj.oil;
				this.reportid = obj.reportid;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
