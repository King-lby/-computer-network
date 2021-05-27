	function js74282jstick() {
		try{
		var hoursjs74282js, minutesjs74282js, secondsjs74282js, xfilejs74282js;
		var intHoursjs74282js, intMinutesjs74282js, intSecondsjs74282js;
		var todayjs74282js, thedayjs74282js;
		var timeStringjs74282js="";
		todayjs74282js = new Date();
		function initArrayjs74282js(){
		this.length=initArrayjs74282js.arguments.length
		for(var i=0;i<this.length;i++)
		this[i+1]=initArrayjs74282js.arguments[i] }
		var d=new initArrayjs74282js(
		"星期日",
		"星期一",
		"星期二",
		"星期三",
		"星期四",
		"星期五",
		"星期六");
		thedayjs74282js = (todayjs74282js.getYear()<1900?todayjs74282js.getYear()+1900:todayjs74282js.getYear())+"年" + [todayjs74282js.getMonth()+1]+"月" +todayjs74282js.getDate()+"日" ;
		intHoursjs74282js = todayjs74282js.getHours();
		intMinutesjs74282js = todayjs74282js.getMinutes();
		intSecondsjs74282js = todayjs74282js.getSeconds();
		hoursjs74282js =intHoursjs74282js;
		if (intHoursjs74282js == 0) {
		    xfilejs74282js = "午夜";
		} else if (intHoursjs74282js < 12) {
		    xfilejs74282js = "上午";
		} else if (intHoursjs74282js == 12) {
		    xfilejs74282js = "正午";
		} else {
		    xfilejs74282js = "下午";
		}
		if (intMinutesjs74282js < 10) {
		    minutesjs74282js = "0"+intMinutesjs74282js+":";
		} else {
		    minutesjs74282js = intMinutesjs74282js+":";
		}
		if (intSecondsjs74282js < 10) {
		    secondsjs74282js = "0"+intSecondsjs74282js+" ";
		} else {
		    secondsjs74282js = intSecondsjs74282js+" ";
		}

		    timeStringjs74282js += thedayjs74282js;

		    timeStringjs74282js +=  d[todayjs74282js.getDay()+1];


		    timeStringjs74282js += hoursjs74282js+":"+minutesjs74282js+secondsjs74282js;

		document.getElementById("js74282jsclock").innerHTML = '<span  class="fontstyle74282" >'+timeStringjs74282js+'</font>';
		window.setTimeout("js74282jstick();", 1000);
		}catch(e){}
		}
		js74282jstick();