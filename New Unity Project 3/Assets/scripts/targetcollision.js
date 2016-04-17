#pragma strict
private var beenhit:boolean = false;// 标靶是否被击倒
private var targetroot:Animation;// 引用动画组件 方便播放动画
var hitsound:AudioClip;// 集中靶子时的声音
var resetsound:AudioClip;// 标靶起来时的声音
static var resettime:float = 3.0;// 标靶的重置时间

function Start () {
	targetroot = transform.parent.transform.parent.animation;
}
// 检测两个原型碰撞器的碰撞
function OnCollisionEnter(theobject:Collision){
	//print("theobject.gameObject.name = "+theobject.gameObject.name);
	// 如果标靶物体没有被击倒 并且 碰撞的物体时椰子
	if(beenhit==false && theobject.gameObject.name=="coconut"){
		// 播放被椰子击中的声音
		//audio.PlayOneShot(hitsound);
		
		// 启动协同程序 （相当于多线程）
		//StartCoroutine("targethit");
		targethit();
		gameObject.Find("Terrain").GetComponent(AudioSource).enabled = true;
	}
}

function targethit(){
	//targetroot.Play("Take 001");

	audio.PlayOneShot(hitsound);// 播放击中声音
	targetroot.Play("down");// 播放倒下动画
	beenhit=true;// 改变状态 为 倒下
	coconutwin.targets++;
	
	//print("coconutwin.targets = "+coconutwin.targets);
	// 等待3秒
	yield new WaitForSeconds(resettime);
	
	audio.PlayOneShot(resetsound);// 播放回弹声音
	targetroot.Play("up");// 播放起来动画
	beenhit=false;// 状态改变为起来
	coconutwin.targets--;
	//print("coconutwin.targets = "+coconutwin.targets);
	//print("给我起来");
}