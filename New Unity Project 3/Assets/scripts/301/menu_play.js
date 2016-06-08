#pragma strict

var leveltoload:String;
// 一般情况下的纹理
var normaltexture:Texture2D;
//
var rollovertexture:Texture2D;
//
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
	Application.LoadLevel(leveltoload);
}