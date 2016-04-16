#pragma strict

// 检测 两个 普通的碰撞器 的 碰撞
// 得为碰撞产生力
function OnTriggerEnter(col:Collider){
		
		gameObject.Find("wenzi").guiText.text=col.gameObject.name;
		
}