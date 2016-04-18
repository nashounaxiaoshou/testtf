#pragma strict
// 用来存放打到的标靶数
static var targets:int = 0;
// 是否胜利
static var havewon:boolean=false;
// 胜利的声音
var winsound:AudioClip;
// 电池预制物体
var cellprefab:GameObject;
// 用来记录分数
static var defen:int = 0;
// 用来显示游戏信息
var fenshu_bl:GUIText;

var tree_down:float=0;

function Update () {
	// 如果有三个倒下了 并且当前胜利状态为 false
	//if(targets==3 && havewon==false){
	if(defen>=1000 && havewon==false){
		
		// 重置击倒数量
		//targets=0;
		
		// 播放胜利
		audio.PlayOneShot(winsound);
		// 找到电池
		var wincell:GameObject = transform.FindChild("powerCell").gameObject;
		// 移动电池 Translate:移动函数
		wincell.transform.Translate(-1,0,0);
		// 创建预制电池，并且放到指定的位置和旋转方向
		Instantiate(cellprefab,wincell.transform.position,wincell.transform.rotation);
		// 销毁原来的电池
		Destroy(wincell);
		// 状态改为胜利
		havewon = true;
		
		//if(fenshu_bl.enabled==false){
		//	fenshu_bl.enabled=true;
		//}
	}
	//if(fenshu_bl.enabled==true){
		// 如果3个都是倒下状态
		if(targets==3){
			// 记录倒下的时间
			tree_down+=Time.deltaTime; 
			// 如果倒下的时间大于 0.2
			if(tree_down>0.2){
				// 标靶重置的时间减少
				targetcollision.resettime-=0.1;
				// 得分加
				defen+=100;
				
				// 重置倒下的时间
				tree_down=0;
				/*
				if(defen>=1000){
					// 播放胜利
					audio.PlayOneShot(winsound);
					// 找到电池
					var wincell:GameObject = transform.FindChild("powerCell").gameObject;
					// 移动电池 Translate:移动函数
					wincell.transform.Translate(-1,0,0);
					// 创建预制电池，并且放到指定的位置和旋转方向
					Instantiate(cellprefab,wincell.transform.position,wincell.transform.rotation);
					// 销毁原来的电池
					Destroy(wincell);
					// 状态改为胜利
					havewon = true;
				}*/
				fenshu_bl.text = "得分:"+defen;
			}
		//}
	}
	//fenshu_bl.text = "得分:"+defen;
}