#pragma strict
// 准心纹理变量
var Crosshair_bl:GUITexture;
// 文字变量
var wenzi_bl:GUIText;
// 得分
var defen_bl:GUIText;
// 开始进入碰撞区域
function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag=="Player"){
		coconut_thrower.canthrow = true;
		Crosshair_bl.enabled = true;
		if(coconutwin.havewon==false){
			wenzi_bl.enabled=true;
			wenzi_bl.text="\n\n\n提示信息:\n\n1.鼠标点击发射椰子!\n\n2.同一时段内打倒三个标靶获胜!\n\n3.空格键跳跃获取电池.\n\n4.点击电源盒可以重新开始游戏";
		}
		defen_bl.enabled=true;
	}
}
// 离开碰撞区域
function OnTriggerExit(col:Collider){
	if(col.gameObject.tag=="Player"){
		coconut_thrower.canthrow = false;
		Crosshair_bl.enabled = false;
		defen_bl.enabled=false;
	}
}