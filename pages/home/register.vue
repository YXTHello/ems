<template>
	<view class="content">
		<view>
			<input type="text" placeholder="请输入姓名" v-model="cname" />
			<input type="text" placeholder="请输入用户名" v-model="username" />
			<view>
				<input type="password" placeholder="请输入密码" v-model="password" />
			</view>
			<input type="text" placeholder="请输入电话" v-model="telno" />
			<input type="text" placeholder="请输入邮箱" v-model="email" />
			<radio-group @change="fn">
				<label class="radio"><radio value="男" checked="true" />男</label>
				<label class="radio"><radio value="女" />女</label>
			</radio-group>
			<picker @click="fn2" :value="index" :range="arr" range-key="compname">
				<view class="uni-input">{{arr[index].compname}}</view>
			</picker>
			<button @click="register">注册</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				password:'',
				cname:'',
				telno:'',
				email:'',
				sex:'男',
				flag:'password',
				arr:[{compname:""}],
				index:0
			}
		},
		mounted() {
			uni.request({
				
				url: this.url+"baseCompany/search", //仅为示例，并非真实接口地址。
				data: {
				},
				header: {
					'custom-header': 'hello' //自定义请求头信息
				},
				success: (res) => {
					this.arr = res.data;
				}
			});
		},
		methods:{
			fn(obj){
				this.sex=obj.detail.value;
			},
			fn2(e){
				this.index=e.terget.value;
			},
			register(){
				uni.request({
					url:this.url+"baseUser/insert",
					data:{
						username:this.username,
						password:this.password,
						cname:this.cname,
						telno:this.telno,
						email:this.email,
						sex:this.sex
					},
					header:{
						'custom-header': 'hello'
					},
					success:(res)=>{
						uni.showToast({
							title:'注册成功',
							duration:2000
						});
					}
				});
			}
		}
	}
</script>

<style>
	@import url("../../static/css/login.css");
</style>