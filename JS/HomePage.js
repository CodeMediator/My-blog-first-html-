// JavaScript Document
comments=new Array();
commentsCount=0;
function writeAbout()
{
	var mainCon=document.getElementById("main container");
	mainCon.innerHTML="<h1 class='header'>About Creator</h1>\
	<p class='passage'>Khazeus</p>\
	<div style='text-align:center'>\
		<img src='backgrounds/kitten.jpg' width='50%'>\
	</div>\
	<table>\
	<tr>\
	<div style='text-align:center'>\
	<p class='passagewimg' style='word-wrap:break-word'><span>QQ:2414197012<br><img src='backgrounds/QQqrcode.jpg' width='200px'></span></p>\
	<p class='passagewimg' style='word-wrap:break-word'><span>Wechat:18017462799<br><img src='backgrounds/WeChatqrcode.png' width='200px'></span></p>\
	</div>\
	<div style='text-align:right'><br>\
	<a href='mailto:18017462799@163.com' style='position:relative;margin-right:5%; font-size:0.9em'>Click to mail:18017462799@163.com</a>\
	</div>\
	";
}
function addComment()
{
	var mainCon=document.getElementById("main container");
	comments[commentsCount]=document.getElementById("comment").value;
	if(comments[commentsCount].length>0){
		mainCon.innerHTML+="<br><p class='commentblock' style='animation-name:commentblock;animation-duration:2s;-moz-animation:commentblock 2s;-webkit-animation:commentblock 2s;-o-animation:commentblock 2s;'>"+comments[commentsCount].replace(/\n/g,"<br>")+"</p>";
		commentsCount+=1;
	}
}

/*homeReturn函数为之后返回基本Home样式做准备，由于没数据库因而其下“子函数”目前功能相同*/
function homeReturn()
{
	var mainCon=document.getElementById("main container");
	mainCon.innerHTML="<div style='text-align: center'>\
	<br>\
	<textarea rows='8' class='comment' id='comment' style='width: 85%;height: 20%;'></textarea><br>\
	<br>\
	<button onClick='addComment()' class='submitcomment'>Leave comments</button>\
	<br>\
	</div>"
}

function homeReturnComment()
{
	homeReturn();
	loadComment();
}

/*为接入数据库做准备，目前为空*/
function loadComment()
{
}

function information()
{
	var mainCon=document.getElementById("main container");
	mainCon.innerHTML="\
	<br>\
	<p class='information'><span style='font-size:2.0em;'>网页说明</span><br><br>\
		<span style='font-size:1.0em;line-height:50px;'>\
			这是一个使用HTML,CSS，JAVASCRIPT创建的一个个人博客，拥有以下功能：<br>\
			1.评论区（由于没有链接数据库，因而无法存储评论以供刷新后重新显示）<br>\
			2.博客列表（有留言区和点赞，留言区功能同评论区，点赞有反馈）<br>\
			3.关于（制作人与联系方式，移动上QQ与Wechat有二维码）<br>\
			4.简单注册登录界面（同样无数据库链接,但有反馈）<br><br>\
			此项目共两个html页面<br>\
			homepage包含评论区、简单注册界面、博客列表入口、关于入口<br>\
			blog lists包含博客条目，点击博客条目可显示博客内容，博客内容下方有评论和点赞功能<br>\
		</span>\
	</p>"
}

function login()
{
	var username=document.getElementById("usernameinput").value;
	var password=document.getElementById("passwordinput").value;
	alert("登录成功！"+"\n"+"您好！Hello！"+username);
	document.getElementById("usernameinput").value=null;
	document.getElementById("passwordinput").value=null;
}