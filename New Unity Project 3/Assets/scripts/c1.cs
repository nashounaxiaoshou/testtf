using UnityEngine;
using System.Collections;

public class c1 : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
//	private float ff1 = 0.9f;
	public float speed = 5.0f;
//	string s = "我是字符串类型";
//	bool b = true;
	public Vector3 v;
	// Update is called once per frame
	void Update () {
		v = new Vector3 (0, 0, speed);
	}
}
