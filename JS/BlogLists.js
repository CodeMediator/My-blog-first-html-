// JavaScript Document
var times=0;
function writeBlogList()
{
	var mainCon=document.getElementById("main container");
	mainCon.innerHTML="<br>\
	<div class='bloglistblock'><span style='font-size:2.0em;'>School</span>\
	<br><br>\
	<a onClick='writeBlog(1)'><p class='bloglistsubblock'>2017软件学院迎新晚会</p></a>\
	</div>\
	<div class='bloglistblock'><span style='font-size:2.0em;'>Courses</span>\
	<br><br>\
	<a onClick='writeBlog(2)'><p class='bloglistsubblock'>计算机基础概论</p></a>\
	</div>\
	"
}

function writeBlog(kind)
{
	var mainCon=document.getElementById("main container");
	mainCon.innerHTML="<br>\
	<div class='blogblock'><span style='font-size:2.0em;' id='title'></span>\
	<br><br>\
	<span style='font-size:0.8em;'>博主:KHA</span><br><br>\
	<span style='font-size:1.0em;' id='content'></span>\
	</div><br>\
	<a onClick='like()'><div style='text-align:center;margin-right:100px;font-size:0.7em;' class='likebutton' id='likebutton'>点赞</div></a><br>\
	"
	mainCon.innerHTML+="<div style='text-align: center'>\
	<br>\
	<textarea rows='5' class='comment' id='comment' style='width: 85%;height: 20%;'></textarea><br>\
	<br>\
	<button onClick='addComment()' class='submitcomment'>Leave comments</button>\
	<br>\
	</div>"
	if(kind==1){
		var title=document.getElementById("title");
		title.innerHTML="2017软院迎新晚会";
		var content=document.getElementById("content");
		content.innerHTML+="2017软院迎新晚会在11月10日举行，表演很精彩。作为团学联宣传部的一员，中午就来到了129礼堂进行舞台布置，我负责的是侧屏，我还有两个搭档，互相监督。晚会中的节目ppt与微信墙互动都是由我们三人负责的。哦对，忘了说了，整个晚会最最最刺激的抽奖环节也是由我们三人操控网页抽奖机来完成的。<br><br>总的来说，晚会很精彩，能参与其中更是一种享受。"
	}
	else if(kind==2){
		var title=document.getElementById("title");
		title.innerHTML="课程：计算机科学概论";
		var content=document.getElementById("content");
		content.innerHTML+="计算机科学概论是我在大一上学期上的一门专业课，在课上我对计算机的基础结构与相关概念有了比较全面的了解，让我对软件工程甚至是计算机行业有了一定的了解，但是因为是基础概论，所以这门课只是一门入门课，概念较多而具体的实现并没有进行讨论。这门课程的作业包含几个项目，此网页便是其中的一个项目，在编写这个网页的时候我学会了许多基本的前端设计工具，受益匪浅。总的来说，我非常喜欢这门课，感觉这门课教会了很多东西。<br><br>"+"<img src='backgrounds/Computer Basic.jpg' width='200px'>"
	}
}

function like()
{
	var like=document.getElementById("likebutton");
	if(times==0){
		like.innerHTML+="<br>+1";
		times=times+1;
	}
}