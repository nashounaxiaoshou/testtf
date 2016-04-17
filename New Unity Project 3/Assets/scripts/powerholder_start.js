#pragma strict

// static var abc:float;
// 分数变量
var fenshux_bl:GUIText;

function OnMouseDown(){
	// 标靶的重置时间改为3.0
	targetcollision.resettime=3.0;
	// 分数清0
	coconutwin.defen=0;
	// 如果分数没有显示，那就显示
	if(!fenshux_bl.enabled){
		fenshux_bl.enabled=true;
	}
}