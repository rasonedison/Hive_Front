import { LOAD_DATA, ADD_DATA, ERROR_MSG } from './ActionType'
 
function errorMsg(msg){
	return { msg, type:ERROR_MSG }
}

export function addData(data,env){
	data.lastUpdateEnv = env
	//console.log(data)
	return { type:ADD_DATA, payload:data}
}


export function loadData(userinfo){
	return { type:LOAD_DATA, payload:userinfo}
}

export function loadDataSyn(data){
	console.log("loadDataSyn");
	let appData = {
		prd:[
			{id:"32480",name:"app1",ec2:10,url:"http://",createDate:"2018-01-01",publicDate:"2018-01-01",offLineDate:"2018-01-01",status:0},
			{id:"32481",name:"app2",ec2:10,url:"http://",createDate:"2018-01-01",publicDate:"2018-01-01",offLineDate:"2018-01-01",status:0}
			],
		test:[{id:"32482",name:"app3",ec2:10,url:"http://",createDate:"2018-01-01",publicDate:"2018-01-01",offLineDate:"2018-01-01",status:0}],
		dev:[{id:"32483",name:"app4",ec2:10,url:"http://",createDate:"2018-01-01",publicDate:"2018-01-01",offLineDate:"2018-01-01",status:0}],
	}
	return dispatch=>{
			dispatch(loadData(appData))
		// axios.post('/user/update',data)
		// 	.then(res=>{
		// 		if (res.status==200&&res.data.code===0) {
		// 			dispatch(LOAD_DATA(res.data.data))
		// 		}else{
		// 			dispatch(errorMsg(res.data.msg))
		// 		}
		// 	})
	}
}

export function addDataSyn(data,env){
	console.log("addDataSyn")
		return dispatch=>{
			dispatch(addData(data,env))
	}
}
