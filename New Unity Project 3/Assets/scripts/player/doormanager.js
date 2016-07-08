#pragma strict

	private var doorisopen:boolean = false;//设定门的开关状态
	private var doortimer:float = 0.0;//	门已经开了多长时间 

	var door_open_time:float=3.0;// 门打开多久关闭
	var door_open_sound:AudioClip;// 开门声
	var door_shut_sound:AudioClip;// 关门声
	var wenzi_bl:GUIText;// 显示的文字
	var wenzi_time:float=0.0;// 文字已经显示的时间	

static var WindowSwitch:boolean = false;//如果 这个变量为假 那么关闭这个窗口
// var mySkin:GUISkin;		(距离屏幕左边的距离，距离屏幕右边的距离，窗口的宽度，窗口的高度)
private var windowRect = Rect(300,280,240,200);

function Update(){
	if(doorisopen){//如果门是开着的
		doortimer+= Time.deltaTime;
		
		if(doortimer>door_open_time){ 
			door(false,door_shut_sound,"doorshut");
			doortimer = 0;
		}
	} 
	// 计时关闭文字显示
	if(wenzi_bl.enabled){
		wenzi_time+=Time.deltaTime;
		if(wenzi_time>8.0){
			wenzi_bl.enabled=false;
			wenzi_time = 0;
		}
	}
	// 退出游戏
	if(Input.GetKeyDown(KeyCode.Escape)){
		// 当按下 键盘上的 Ecs 键时执行
		WindowSwitch = !WindowSwitch;
		
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
// 退出
function OnGUI(){
	if(WindowSwitch==true){
		// 						(0:序号窗口标号不可重复，windowRect:窗口的位置和大小,WindowContain:窗口中要显示的内容,窗口标题)
		windowRect = GUI.Window(0,windowRect,WindowContain,"测试窗口");
	}
}
function WindowContain(windowID:int){
	// 绘制按钮，按钮相对窗口的位置，窗口的大小，窗口文字
	if(GUI.Button(Rect(70,70,100,20),"关闭音乐")){
		//print("关闭音乐"); Terrain:岛屿
		gameObject.Find("Terrain").GetComponent(AudioSource).enabled= false;
	}
	if(GUI.Button(Rect(70,100,100,20),"播放音乐")){
		//print("播放音乐");
		gameObject.Find("Terrain").GetComponent(AudioSource).enabled = true;
	}
	if(GUI.Button(Rect(70,130,100,20),"关闭窗口")){
		WindowSwitch = false;
	}
	if(GUI.Button(Rect(70,160,100,20),"退出游戏")){
		Application.Quit();
	}
	// 拖动窗口，起点位置，屏幕有效范围
	GUI.DragWindow(new Rect(0,0,1000,1000));
}