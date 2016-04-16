#pragma strict

var doorlight_bl:Light;
var wenzi_bl:GUIText;
var door_bl:AudioSource;

function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag=="Player"){
		if(inventory.charge==4){
			if(gameObject.Find("powergui")){
				Destroy(GameObject.Find("powergui"));
				
			}
			wenzi_bl.enabled=false;
			doorlight_bl.color = Color.green;
			transform.FindChild("door").SendMessage("doorcheck");
		}else{
			wenzi_bl.text = "这扇门需要你收集足够的能量源物体才能启动！";
			door_bl.audio.Play();
			if(!wenzi_bl.enabled){
				wenzi_bl.enabled=true;
			}
		} 
	}
}