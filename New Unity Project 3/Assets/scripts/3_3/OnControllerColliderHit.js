#pragma strict

// 角色控制器专用碰撞函数
function OnControllerColliderHit(hit:ControllerColliderHit){
	if(hit.gameObject.name!="Plane"){
		gameObject.Find("wenzi").guiText.text=hit.gameObject.name;
	}
}