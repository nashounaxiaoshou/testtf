#pragma strict
//	文字变量
var wenzi_bl:GUIText;
var ss:String = "请输入:";
function OnGUI(){
	// 	创建一个可以输入30个字符长度的输入框
	ss = GUI.TextField(Rect(300,200,200,20),ss,30);
	//	创建一个按钮，    按钮的文字 						按钮的高			按钮的宽
	if(GUILayout.Button("while计算1+3+5...+99=？",GUILayout.Height(40),GUILayout.Width(210))){
		var s:int = 0;
		var i:int = 1;
		// while循环
		while(i<99){
			s=s+i;
			i=i+2;
		}
		wenzi_bl.text = "while计算 1+3+5...+99="+s;
	}
	//	创建一个按钮，    按钮的文字 						按钮的高			按钮的宽
	if(GUILayout.Button("Do_while计算1+3+5...+99=？",GUILayout.Height(40),GUILayout.Width(210))){
		var s1:int = 0;
		var i1:int = 1;
		// do while循环
		do{
			s1=s1+i1;
			i1=i1+2;
		}while(i1<99);
		wenzi_bl.text = "Do_while计算 1+3+5...+99="+s1;
	}
	//	创建一个按钮，    按钮的文字 						按钮的高			按钮的宽
	if(GUILayout.Button("for计算1+3+5...+99=？",GUILayout.Height(40),GUILayout.Width(210))){
		var s2:int = 0;
		for(var i2:int=1;i2<99;i2=i2+2){
			s2 = s2+i2;
		}
		wenzi_bl.text = "for 计算 1+3+5...+99="+s2;
	}
	//	创建一个按钮，    按钮的文字 						按钮的高			按钮的宽
	if(GUILayout.Button("for in 计算1+3+5...+99=？",GUILayout.Height(40),GUILayout.Width(210))){
		var s3:int = 0;
		var arr = new Array();
		
		for(var i3:int=1;i3<99;i3=i3+2){
			arr.push(i3);
		}
		for(var i4:int in arr){
			s3 = s3 + i4;
		}
		wenzi_bl.text = "for in 计算 1+3+5...+99="+s3;
	}
	//	创建一个按钮，    按钮的文字 						按钮的高			按钮的宽
	if(GUILayout.Button("fswitch案例语句",GUILayout.Height(40),GUILayout.Width(210))){
		switch(ss){
			case "tom":// 如果输入框的文字的 tom
				wenzi_bl.text = "你输入的是："+ss;
				break;
			case "jack":// 如果输入框的文字的 jack
				wenzi_bl.text = "你输入的是："+ss;
				break;
			case "ok--byebye":// 如果输入框的文字的 ok--byebye
				wenzi_bl.text = "你输入的是："+ss;
				break;
			default:// 如果输入框的文字 在以上找不到
				wenzi_bl.text = "都不同,你输入的是："+ss;
				break;
		}
		
	}
}