#pragma strict

var myguiskin:GUISkin;
private var winrect:Rect;

function Start(){
	winrect = Rect(500,140,350,510);
}

function OnGUI(){
	//	绑定 skin 文件
	GUI.skin = myguiskin;
	winrect = GUI.Window(1,winrect,domywindow,"");
}

function domywindow(winid:int){
	//	使用垂直布局
	GUILayout.BeginVertical();
	// 控件间隔大小
	GUILayout.Space(8);
	// 按钮文字 应用 mybuttonskin的样式
	GUILayout.Button("","mybuttonskin");
	// 结束垂直布局
	GUILayout.EndVertical();
	
	GUI.DragWindow(Rect(0,0,1000,1000));
}