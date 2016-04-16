#pragma strict


function Update () {
	transform.Rotate(0,200*Time.deltaTime,0,Space.Self);
}

function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag=="Player"){
		// 控制主角爬坡能力
		// 销毁物体
		col.gameObject.SendMessage("cellpickup");
		Destroy(gameObject);
	}
}