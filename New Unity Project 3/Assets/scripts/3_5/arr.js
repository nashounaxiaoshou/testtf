#pragma strict

var wenzi_bl:GUIText;//文字变量
// 申请一个数据，并给这个数组赋值
var arr = new Array(9,12,65,58);
// 申请一个动态数组
var barr = new Array();

function Start () {
	// 给数组放入 字符串
	barr.push("push1");
	barr.push("push2");
	//	Sort 用来排序 根据 数值 或者 字母 排序  由小到大
	//arr.Sort();
	//	Reverse 用来排序 根据 数值 或者 字母 排序 由大到小 效果与Sort相反
	arr.Reverse();
	//	join用来将数值转成字符串用“,”连接
	wenzi_bl.text = arr.join(",")+" 'arr长度:"+arr.length+" >>" +barr + " arr长度:"+ barr.length;
}
