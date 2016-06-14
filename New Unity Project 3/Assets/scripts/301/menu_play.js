#pragma strict

var leveltoload:String;
// 一般情况下的纹理
var normaltexture:Texture2D;
// 鼠标指向时显示的纹理
var rollovertexture:Texture2D;
// 引用音屏文件
var beep:AudioClip;
//	鼠标悬浮时执行的方法
function OnMouseEnter(){
	guiTexture.texture = rollovertexture;
}
// 鼠标离开时执行的方法
function OnMouseExit(){
	guiTexture.texture = normaltexture;
}
// 鼠标按下时执行的方法
function OnMouseDown(){
	// 播放音效
	audio.PlayOneShot(beep);
	yield new WaitForSeconds(0.35);
	// 载入场景
	Application.LoadLevel(leveltoload);
}