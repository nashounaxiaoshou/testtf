#pragma strict

// 检测 两个 普通的碰撞器 的 碰撞
// 得为碰撞产生力
function OnCollisitionEnter(collision:Collision){

		gameObject.Find("wenzi").guiText.text=collision.gameObject.name;



}