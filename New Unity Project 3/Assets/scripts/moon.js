#pragma strict


var cy:Transform;
var speed:int;

function Start () {
	//cy = gameObject.Find("First Person Controller").transform;
}

function Update () {
	// 第二种旋转 围绕一个位置旋转  Vector3.up:Y ,
	transform.RotateAround(cy.position,Vector3.up,speed*Time.deltaTime);
}