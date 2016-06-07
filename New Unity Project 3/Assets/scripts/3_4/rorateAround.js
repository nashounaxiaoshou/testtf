#pragma strict

var cy:Transform;

function Start () {
	cy = gameObject.Find("First Person Controller").transform;
}

function Update () {
	transform.RotateAround(cy.position,Vector3.up,100*Time.deltaTime);
}