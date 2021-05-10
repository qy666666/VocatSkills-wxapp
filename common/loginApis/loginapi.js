import Vue from 'vue'
let vm = new Vue()
import storageEx from '../storage.js' //缓存模块
import {
	JSEncrypt
} from 'jsencrypt' //rsa加密模块
//执行登录操作，成功返回login:ok，失败返回失败信息
async function doLogin(submitData, type) {
	// let d = await getPublicKey()
	// let publicKey = d["PublicKey"]
	// let timeStamp = d["TimeStamp"]
	// let submitDataJson = JSON.parse(submitData)
	// let user = submitDataJson.user.trim()
	// let psw = submitDataJson.pwd.trim()
	// let jse = new JSEncrypt
	// jse.setPublicKey(publicKey)
	// let rsapsw = jse.encrypt(psw)
	storageEx.clearExpire()
	return new Promise((resolve, reject) => {
		//测试数据
		storageEx.setStorageExpire('STOKEN', 'STOKEN')
		storageEx.setStorageExpire('YUserName', 'YUserName')
		storageEx.setStorageExpire('YLoginId', 'YLoginId')
		storageEx.setStorageExpire('YRole', 'YRole')
		storageEx.setStorageExpire('YUType', 'YUType')
		storageEx.setStorageExpire('YUserUnitId', 'YUserUnitId')
		storageEx.setStorageExpire('YUserGrade', 'YUserGrade')
		//dispatch异步调用this，操作actions中的方法
		vm.$store.dispatch('setInfo')
		// checkUser('ONLINEMARK')
		resolve('login:ok')
		// uni.request({
		// 	url: vm.$baseURL + '/user/loginVerify/login',
		// 	method:'POST',
		// 	header:{
		// 		'Content-Type': vm.$contentType
		// 	},
		// 	data:{
		// 		user: user,
		// 		passWord: rsapsw,
		// 		TimeStamp: timeStamp,
		// 		type: type
		// 	},
		// 	success: (res) => {
		// 		// console.log(res)
		// 		if(res.data.errcode == 1){
		// 			storageEx.setStorageExpire('STOKEN', res.header['X-SESSION-TOKEN'])
		// 			storageEx.setStorageExpire('YUserName', decodeURI(res.header['YUserName']))
		// 			storageEx.setStorageExpire('YLoginId', res.header['YLoginId'])
		// 			storageEx.setStorageExpire('YRole', res.header['YRole'])
		// 			storageEx.setStorageExpire('YUType', res.header['YUType'])
		// 			storageEx.setStorageExpire('YUserUnitId', res.header['YUserUnitId'])
		// 			storageEx.setStorageExpire('YUserGrade', res.header['YUserGrade'])
		// 			//dispatch异步调用this，操作actions中的方法
		// 			vm.$store.dispatch('setInfo')
		// 			checkUser('ONLINEMARK')
		// 			resolve('login:ok')
		// 		}else{
		// 			reject(res.data.msg)
		// 		}
		// 	},
		// 	fail: (err) => {
		// 		console.log(err)
		// 		reject('请求失败，请检查网络')
		// 	}
		// })

	})
}
//服务器检查登录状态，退出传入GOEXIT，标记在线传入ONLINEMARK
async function checkUser(puser) {
	return new Promise((resolve, reject) => {
		console.log(puser)
		resolve('ONLINEMARK')
		// uni.request({
		// 	url: vm.$baseURL + '/user/loginVerify/checkUser?puser=' + puser,
		// 	method: 'POST',
		// 	header: {
		// 		'X-SESSION-TOKEN': storageEx.getStorageExpire('STOKEN'),
		// 		'Content-Type': vm.$contentType
		// 	},
		// 	dataType: 'text',
		// 	success: (res) => {
		// 		console.log(res)
		// 		if (puser == 'GOEXIT') {
		// 			storageEx.clearExpire()
		// 			resolve('logout:ok')
		// 		} else if (puser == 'ONLINEMARK') {
		// 			// setTimeout(()=>{
		// 			// 	checkUser('ONLINEMARK', 180000)
		// 			// })
		// 			resolve('ONLINEMARK')
		// 		}
		// 	},
		// 	fail: (err) => {
		// 		console.log(err)
		// 		reject(err)
		// 	}
		// })
	})
}
//执行登出操作,登出成功返回true，否则返回false
async function doLogout() {
	return new Promise((resolve, reject) => {
		//模拟退出，清除数据
		storageEx.clearExpire()
		vm.$store.commit('slogout')
		vm.$store.commit('clearInfo')
		resolve(true)
		// try {
		// 	checkUser('GOEXIT').then(res => {
		// 		//commit同步操作this，调用mutations中的方法
		// 		vm.$store.commit('slogout') //修改vuex
		// 		vm.$store.commit('clearInfo')
		// 		resolve(true)
		// 	}).then(err => {
		// 		reject(false)
		// 	})
		// } catch (e) {
		// 	//TODO handle the exception
		// 	console.log(e)
		// 	reject(false)
		// }
	})
}
//获取验证码
async function loadValiCode() {
	return new Promise((resolve, reject) => {
		uni.request({
			url: vm.$baseURL + '/user/loginVerify/getValidCode',
			responseType: 'arraybuffer',
			success: (res) => {
				// console.log(res)
				if (res.statusCode == 200) {
					storageEx.setStorageExpire('STOKEN', res.header['X-SESSION-TOKEN'])
					resolve(res.data)
				} else {
					reject(res)
				}
			},
			fail: (err) => {
				// console.log(err)
				reject(err)
			}
		})
	})
}
//检验验证码正确性
async function getVerCodeFlag(val) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: vm.$baseURL + '/user/loginVerify/cVilidCode',
			method: 'POST',
			data: {
				ImgCode: val.trim()
			},
			header: {
				'X-SESSION-TOKEN': storageEx.getStorageExpire('STOKEN'),
				'Content-Type': vm.$contentType
			},
			success: (res) => {
				resolve(res.data.valid)
			},
			fail: (err) => {
				console.log(err)
				reject(false)
			}
		})
	})
}
//获取登录公钥
async function getPublicKey() {
	return new Promise((resolve, reject) => {
		uni.request({
			url: vm.$baseURL + '/user/loginVerify/public_key',
			method: 'POST',
			success: (res) => {
				console.log(res)
				if (res.statusCode == 200) {
					resolve(res.data)
				}
			},
			fail: (err) => {
				console.log(err)
				reject(err)
			}
		})
	})
}

const loginapi = {
	doLogin: doLogin,
	doLogout: doLogout,
	loadValiCode: loadValiCode,
	getVerCodeFlag: getVerCodeFlag,
	getPublicKey: getPublicKey
}

module.exports = loginapi
