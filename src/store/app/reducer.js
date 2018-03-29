
import axios from 'axios'
import { LOAD_DATA, ADD_DATA, ERROR_MSG } from './ActionType'

const initState={
	"prd":[],
	"test":[],
	"dev":[],
	"lastUpdateEnv":"",
	"setting":{
		"ec2_max" :{
			"prd_ec2_max" :50,
			"test_ec2_max" :15,
			"dev_ec2_max" :15
			}	
		}
	}

// reducer
export function app(state=initState, action){
	switch(action.type){
		case LOAD_DATA:
			return loadData(state,action)
		case ADD_DATA:
			return addData(state,action);
		case ERROR_MSG:
			return {...state, isAuth:false, msg:action.msg}
		default:
			return state
	}
} 

function loadData (state,action) {
	return {...state, ...action.payload}
}

function addData (state,action) {
	let newState = state[action.payload.lastUpdateEnv].push(action.payload)
	return {...state, ...newState}	
}






