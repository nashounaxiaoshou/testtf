#pragma strict


	

function OnMouseDown(){
	var m:float;
	m = sum(100.12,23.54);
	gameObject.Find("weizi").GetComponent(GUIText).text = "java 累加结果是:"+m;
}

function sum(a:float,b:float):float{
	var s:float = 0;
	s = a + b; 
	return s;
}