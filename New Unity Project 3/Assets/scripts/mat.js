#pragma strict

// 开始进入碰撞区域
function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag=="Player"){
		coconut_thrower.canthrow = true;
	}
}
// 离开碰撞区域
function OnTriggerExit(col:Collider){
	if(col.gameObject.tag=="Player"){
		coconut_thrower.canthrow = false;
	}
}