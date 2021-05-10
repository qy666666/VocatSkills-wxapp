//主页加载信息api
import Vue from 'vue'
let vm = new Vue()
import storageEx from '../storage.js'//缓存模块

//获取用户的角色,sType--'UserRole&UserID='+YLoginId
async function GetOptions(sType){
	return new Promise((resolve, reject)=>{
		uni.request({
			url: vm.$baseURL + '/info/GetOptions?gType=' + sType,
			header:{
				'X-SESSION-TOKEN': vm.$store.state.STOKEN,
				'Content-Type': "application/x-www-form-urlencoded",
			},
			success: (res) => {
				// console.log(res)
				resolve(res.data)
			},
			fail: (err) => {
				console.log(err)
				reject('err')
			}
		})
	})
}
//加载服务
async function loadService(){
	return new Promise((resolve, reject)=>{
		uni.request({
			url: vm.$baseURL + '/user/userVerify/getService',
			method:'POST',
			dataType:'json',
			header:{
				'Content-Type': vm.$contentType,
				'X-SESSION-TOKEN': vm.$store.state.STOKEN
			},
			success: (res) => {
				// console.log(res)
				if(res.statusCode == 200){
					resolve(res.data)
				}else{
					reject(res)
				}
			},
			fail: (err) => {
				console.log(err)
				reject(err)
			}
		})
	})
}

let indexapi = {
	GetOptions: GetOptions,
	loadService: loadService
}

module.exports = indexapi