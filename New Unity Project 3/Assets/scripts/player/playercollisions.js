﻿#pragma strict

	private var doorisopen:boolean = false;//设定门的开关状态
	private var doortimer:float = 0.0;//	门已经开了多长时间
	private var currentdoor:GameObject;// 当前门

	var door_open_time:float=3.0;// 门打开多久关闭
	var door_open_sound:AudioClip;
	var door_shut_sound:AudioClip;	

//function Update(){
//	if(doorisopen){//如果门是开着的
//		doortimer+= Time.deltaTime;
//		
//		if(doortimer>door_open_time){
//			//shutdoor(currentdoor);
//			door(false,door_shut_sound,"doorshut",currentdoor);
//			doortimer = 0;
//		}
//	} 
//}

// 角色控制器和其他碰撞器发生碰撞的函数
function OnControllerColliderHit(hit:ControllerColliderHit){
	
	if(hit.gameObject.tag=="playerDoor" && doorisopen==false){
		currentdoor = hit.gameObject;
		//opendoor(currentdoor);	
		
		door(true,door_open_sound,"dooropen",currentdoor);
	}
	
}

function opendoor(door:GameObject){
	doorisopen=true; 
	
	door.audio.PlayOneShot(door_open_sound);
	door.transform.parent.animation.Play("dooropen"); 
}

function shutdoor(door:GameObject){
	doorisopen=false; 
	
	door.audio.PlayOneShot(door_shut_sound);
	// 还有3个命令：audio.Play()  audio.Stop()  audio.Pause()
	// 按住shift键可以调整碰撞器大小（小绿点）
	door.transform.parent.animation.Play("doorshut");
	
	
}

function door(doorcheck:boolean,a_clip:AudioClip,anim_name:String,thisdoor:GameObject){
	doorisopen = doorcheck;
	thisdoor.audio.PlayOneShot(a_clip);
	thisdoor.transform.parent.animation.Play(anim_name);
}