// console.log("run count.js");
var interval=null;
var sum=3;	//数据总量
var title_json=['标题1','标题2','标题3']		//json数组
var content_json=['内容1','内容2','内容3']	//json数组
const Counter=timing_che();

function timing_che(){		//轮询函数原型
	var num=0;
	return function (){
		num++;
		if (num>sum) num=1;
		console.log(num);
		var img=document.getElementById('img_timing');
		var title=document.getElementById('tit_timing');
		var content=document.getElementById('con_timing');
		img.src="./images/"+num+".jpg";
		title.text=title_json[num-1];
		console.log(title.text);
		content.text =content_json[num-1]
		console.log(content.text);
	}
}


//功能按钮控制
function startCount(){
	interval=setInterval(Counter,2000);
		}
function stopCount() {
	clearInterval(interval);
	interval = null;
}