#pragma strict

function Start () {

}
var hit:RaycastHit;
function Update () {
	// 投射光线
	if(Physics.Raycast(transform.position,transform.forward,hit,10)){
	
		gameObject.Find("wenzi").guiText.text=hit.collider.gameObject.name;
	}
}