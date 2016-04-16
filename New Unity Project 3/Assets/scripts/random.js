#pragma strict

var t:float = 0;
function Start () {

}

function Update () {
	t+= Time.deltaTime;
	
	if(t>0&&t<=2){
		
	}else if(t>2&&t<=5){
	
	}else if(t>7){
		t=0;
	}
}