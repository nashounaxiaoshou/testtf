#pragma strict

function Start () {

}

function Update () {
	// 旋转物体
	transform.Rotate(0,100*Time.deltaTime,0);
}