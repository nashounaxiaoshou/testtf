#pragma strict

// 渲染器
var cms:Renderer[];
// 碰撞函数
function OnControllerColliderHit(hit:ControllerColliderHit){
	print("发生了碰撞");
	// 碰撞的是圆柱体
	if(hit.gameObject.name=="Cylinder"){
		/*
		for(var co:Renderer in cms){
			co.material.color = Color.red;
		}
		*/
		changeColor(Color.red);
	}
	// 碰撞的是球体
	if(hit.gameObject.name=="Sphere"){
		/*
		for(var co:Renderer in cms){
			co.material.color = Color.green;
		}
		*/
		changeColor(Color.green);
	} 
	// 碰撞的是立方体
	if(hit.gameObject.name=="Cube"){
		/*
		for(var co:Renderer in cms){
			co.material.color = Color.blue;
		}	
		*/
		changeColor(Color.blue);
	}
	// 碰撞的胶囊体
	if(hit.gameObject.name=="Capsule"){
		/*for(var co:Renderer in cms){
			co.material.color = Color.yellow;
		}*/
		changeColor(Color.yellow);
	}
} 

function changeColor(color:Color){
	for(var co:Renderer in cms){
			co.material.color = color;
	}
}