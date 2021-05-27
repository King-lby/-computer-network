	var id;
	var n=0;
 	function banner() {

 		id=setInterval(show,2000);
 	}
 	function show() {
 		// 获取图片个数
 		n++;
 		var imgs=document.getElementById('banner').getElementsByTagName('img');
 		var lis=document.getElementById('banner').getElementsByTagName('li');
 	
 	// alert(imgs.length);
 		// 隐藏所有图片
 		for(var i=0;i<imgs.length;i++)
 			{imgs[i].className="hide";
 			 lis[i].className="two";
			}
 		var index=n%imgs.length;
 		imgs[index].className="show";
 		lis[index].className="one";
 	}
 	function stop() {
 		clearInterval(id);
 	}
 	