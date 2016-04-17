#pragma strict

	private var doorisopen:boolean = false;//设定门的开关状态
	private var doortimer:float = 0.0;//	门已经开了多长时间 

	var door_open_time:float=3.0;// 门打开多久关闭
	var door_open_sound:AudioClip;// 开门声
	var door_shut_sound:AudioClip;// 关门声
	var wenzi_bl:GUIText;// 显示的文字
	var wenzi_time:float=0.0;// 文字已经显示的时间	

function Update(){
	if(doorisopen){//如果门是开着的
		doortimer+= Time.deltaTime;
		
		if(doortimer>door_open_time){ 
			door(false,door_shut_sound,"doorshut");
			doortimer = 0;
		}
	} 
	if(wenzi_bl.enabled){
		wenzi_time+=Time.deltaTime;
		if(wenzi_time>8.0){
			wenzi_bl.enabled=false;
			wenzi_time = 0;
		}
	}
}  

function doorcheck(){
	if(!doorisopen){// 如果门是关着的
	
		door(true,door_open_sound,"dooropen");
	}
}

function door(doorcheck:boolean,a_clip:AudioClip,anim_name:String){
	//print("door(doorcheck:boolean,a_clip:AudioClip,anim_name:String)");
	doorisopen = doorcheck;
	audio.PlayOneShot(a_clip);
	transform.parent.animation.Play(anim_name);
}