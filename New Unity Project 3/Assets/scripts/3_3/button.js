#pragma strict

var obj:GameObject;
var myskin:GUISkin;

function Start () {

}

function Update () {

}
// 绘制GUI
function OnGUI(){
	GUI.skin = myskin;
	if(GUILayout.Button("Add_Component",GUILayout.Height(40),GUILayout.Width(110))){
		// 添加脚本
		obj.AddComponent("xuanzhuan");
	}
	if(GUILayout.Button("Del_Component",GUILayout.Height(40),GUILayout.Width(110))){
		//	移除脚本
		var Script:Object = obj.GetComponent("xuanzhuan");
		Destroy(Script);
	}
}