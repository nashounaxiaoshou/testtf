#pragma strict

var coconut_bl:Rigidbody;//椰子
var throwsound:AudioClip;// 开火音效
//var coconutshy_bl:Collider;// 碰撞器 小房

static var canthrow:boolean = false;// 是否可以发射椰子

//var newobject:Transform;// 椰子

function Update () {
	
	// Fire1 左Ctrl 和 鼠标左键 有效
	if(Input.GetButtonDown("Fire1") && canthrow){
		audio.PlayOneShot(throwsound);
	
		//var n:Transform = Instantiate(newobject,transform.position,transform.rotation);
		// 方向装换
		//var fwd:Vector3 = transform.TransformDirection(Vector3.forward);
		// 给物体加力
		//n.rigidbody.AddForce(fwd*1500);
		
		var newcoconut:Rigidbody = Instantiate(coconut_bl,transform.position,transform.rotation);
		// 给物体速度
		newcoconut.velocity = transform.forward*30;
		newcoconut.name = "coconut";
		
		// 忽视碰撞 true:不碰撞 false:碰撞
	//	Physics.IgnoreCollision(coconutshy_bl.collider,newcoconut.collider,true);
		// transform.root:脚本附在的物体的总父级
		//	ransform.parent:脚本附在的物体的父级
		Physics.IgnoreCollision(transform.root.collider,newcoconut.collider,true);
	}
}