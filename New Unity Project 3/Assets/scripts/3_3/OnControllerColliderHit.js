#pragma strict

// OnControllerColliderHit(hit:ControllerColliderHit) 角色控制器专用函数
function OnControllerColliderHit(hit:ControllerColliderHit){
	if(hit.gameObject.name!="Plane"){
		// 显示碰撞物体的名字
		gameObject.Find("wenzi").guiText.text = hit.gameObject.name;
	}
}