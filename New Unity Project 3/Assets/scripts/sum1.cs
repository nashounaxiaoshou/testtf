using UnityEngine;
using System.Collections;

public class sum1 : MonoBehaviour {
	void OnMouseDown(){
		float m = sum (120.3f, 231.54f);
		GUIText txt = GameObject.Find ("weizi").GetComponent<GUIText>() as GUIText;
		txt.text = "C# 累加结果是:"+m;
	}
	float sum(float a,float b){
		float s = a + b;
		return s;
	}
}
