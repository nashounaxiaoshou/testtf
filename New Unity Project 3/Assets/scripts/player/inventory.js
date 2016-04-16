#pragma strict

// 搜集电池的函数 

static var charge:int = 0;//手机电池的数量
var collectSound:AudioClip;// 收集到电池播放的声音
// 电池图片数组与引用变量
var textures:Texture2D[];
var powergui_bl:GUITexture;// 电池纹理
// 仪表盘主材质纹理数组与表盘
var main_texture:Texture2D[];
var chargemeter_bl:Renderer;// 仪表盘

function Start () {
	charge = 0;
}
// 拾取到电池会调用的函数
function cellpickup () {
	// 开始显示 powergui==hud
	if(!powergui_bl.enabled){
		powergui_bl.enabled=true;
	}
	//	AudioSource.PlayClipAtPoint 在一个位置播放一次声音
	AudioSource.PlayClipAtPoint(collectSound,transform.position);
	charge++;
	// 替换GUITexture的texture
	powergui_bl.texture=textures[charge];
	// 替换 Renderer下的material.mainTexture
	chargemeter_bl.material.mainTexture=main_texture[charge];
}