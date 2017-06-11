function writenew() {
	var InputMain = CKEDITOR.instances.editor1.getData();
    var tt = document.getElementById("InputTitle").value;
    var nowdate = new Date();
    var FullYear = nowdate.getFullYear();
    var Month = nowdate.getMonth();
    var day = nowdate.getDate();
    
    if(tt.length==0) {
    	alert("제목을 입력하세요.");
    }
    else if(InputMain.length == 0) {
    	//InputMain= "<br>";
    	var param = 
    {   
    	Title : document.getElementById("InputTitle").value ,
    	aMain: InputMain ,
    	adate : FullYear+"."+Month+"."+day
    };

    $.ajax({
    	url : "https://spurs-note.firebaseio.com/새.json",
    	method : "POST",
    	data : JSON.stringify(param),
    	success : function(data) {
    		
    	}
    });
    }
    else {
    var param = 
    {   
    	Title : document.getElementById("InputTitle").value ,
    	aMain: InputMain ,
    	adate : FullYear+"."+Month+"."+day
    };

    $.ajax({
    	url : "https://spurs-note.firebaseio.com/새.json",
    	method : "POST",
    	data : JSON.stringify(param),
    	success : function(data) {
    		
    	}
    });
}
}

function post() {
        $.ajax({
            url : "https://spurs-note.firebaseio.com/새.json",
            method : "GET",
            success : function(data) {
            box(data);
            }
            });
        }

function printObj(obj) {
	var ret ="";
	if($.type(obj)=="string"){
		ret= obj;
	}
	else {
		for(var property in obj) {
			ret += printObj(obj[property]);
		}
	}
	return "<p>"+ret+"</p>"+"|";
}

function box(data) {
	var arr = printObj(data).split("|");
	for(var i=(arr.length-2)/4-1; i >-1; i--) {
		Rbox(arr[4*i],arr[4*i+1],arr[4*i+2]);
	}
}

function Rbox(p1, p2, p3) {
	var box = document.createElement("div");
	var boxtitle = document.createElement("div");
	var titlep = document.createElement("div");
	var date = document.createElement("div");
	var mainp = document.createElement("div");
	var boxmain = document.createElement("div");
	var line = document.createElement("div");
	var cont = document.getElementById("cont");
	cont.appendChild(box);
	box.appendChild(boxtitle);
	boxtitle.appendChild(titlep);
	boxtitle.appendChild(date);
	box.appendChild(line);
	box.appendChild(boxmain);
	boxmain.appendChild(mainp);
	box.setAttribute("class","box");
	boxtitle.setAttribute("class","box-title");
	boxmain.setAttribute("class","box-main");
	date.setAttribute("class","date");
	line.setAttribute("class","Line");
	titlep.setAttribute("class", "titlep");
	mainp.setAttribute("class", "mainp");
	titlep.innerHTML = p1;
	mainp.innerHTML = p2;
	date.innerHTML=p3;
	

}

function responsiveWeb() {
	var width = window.innerWidth;
    var logo=document.getElementById("logo");
	if(width < 601){
    logo.innerHTML="<h1><a href="+"main.html"+">Spurs Note</a></h1>"
    
	}else {
	logo.innerHTML="<div id="+"app"+"><a href="+"main.html"+"><img id="+"tot"+"></a></div>";
	var tot=document.getElementById("tot");
	var app =document.getElementById("app");
	tot.setAttribute("src","tot.jpg");
	

}
}