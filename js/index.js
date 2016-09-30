//我的银泰 start

var wdyt=$(".wdyt")[0];
var wdytSpan=$(".wdyt-span")[0];
wdyt.onmouseover=function(){
	wdyt.style.height="214px";
	animate(wdytSpan,{backgroundPosition:-175 -128},0);
	wdytSpan.style.transition=" all 1s linear";
}
wdyt.onmouseout=function(){
	wdyt.style.height="34px";
}
//我的银泰 end


// 搜索框 start
var ssk=$(".ssk-right1")[0];
ssk.onclick=function  () {
	ssk.value="";
	// body...
}
// 搜索框 end

// banner start
var bimg=$(".bimg");
var btn=$(".btn");
var bannerbox=$(".bannerbox")[0];
var bbigbx=$(".bbigbx");
//自动轮播
var num=0;
function  change1(){
	num++;
	if (num>3) {
		num=0
	};
	for (var i = 0; i < bimg.length; i++) {
		animate(bimg[i],{opacity:0},500);
		btn[i].style.background=" #211616";
		animate(bbigbx[i],{opacity:0},500);
	};
	animate(bimg[num],{opacity:1},500);
	animate(bbigbx[num],{opacity:1},500);
	
	btn[num].style.background="#e5004f";
};
var t1=setInterval(change1,2000)
// banner end

//鼠标滑入左右按钮出现、滑出消失
var left1=$(".left1")[0];
var right1=$(".right1")[0];
var banner=$(".banner-tp")[0];
banner.onmouseover=function(){
	clearInterval(t1);
	left1.style.display="block";
	right1.style.display="block";
}
banner.onmouseout=function(){
	left1.style.display="none";
	right1.style.display="none";
	t1=setInterval(change1,2000)
}

//鼠标滑入小按钮
for (var i = 0; i < btn.length; i++) {
	btn[i].aa=i;
	btn[i].onmouseover=function(){
		for (var j = 0; j < btn.length; j++) {
			animate(bimg[j],{opacity:0},500);
			btn[j].style.background="#211616";
	        animate(bbigbx[j],{opacity:0},500);
		};
	    animate(bimg[this.aa],{opacity:1},500);
	    btn[this.aa].style.background="#e5004f";
	    animate(bbigbx[this.aa],{opacity:1},500);
	    num=this.aa;
   }
};
//鼠标点击左右按钮
right1.onclick=function (){
	change1();
}
left1.onclick=function(){
	num--;
	if (num<=-1) {
		num=bimg.length-1;
	};
	for (var i = 0; i < bimg.length; i++) {
		animate(bimg[i],{opacity:0},500);
	    btn[i].style.background="#211616";
	    animate(bbigbx[i],{opacity:0},500);
	};
	 animate(bimg[num],{opacity:1},500);
	 btn[num].style.background="#e5004f";
	 animate(bbigbx[num],{opacity:1},500);
}

//边框
var xian=$(".xian");
var tops=$(".tops");
var lefts=$(".lefts");
var rights=$(".rights");
var bottoms=$(".bottoms");
for (var i = 0; i < xian.length; i++) {
	xian[i].index=i;
	xian[i].onmouseover=function(){
        var ow=this.offsetWidth;
        var oh=this.offsetHeight;
        animate(tops[this.index],{width:ow},600);
        animate(lefts[this.index],{height:oh},600);
        animate(rights[this.index],{height:oh},600);
        animate(bottoms[this.index],{width:ow},600);
	}
	xian[i].onmouseout=function(){
        var ow=this.offsetWidth;
        var oh=this.offsetHeight;
        animate(tops[this.index],{width:0},600);
        animate(lefts[this.index],{height:0},600);
        animate(rights[this.index],{height:0},600);
        animate(bottoms[this.index],{width:0},600);
	}
};

//baner-right
var bannerRight=$(".banner-right")[0];
bannerRight.onmouseover=function(){
	animate(bannerRight,{left:980},500);
}
bannerRight.onmouseout=function(){
	animate(bannerRight,{left:990},500);
}

//banner下面 start
var bannerxli=$(".bannerx1li");
var bannerxq=$(".bannerx2");
var bspan=$(".bspan");
for (var i = 0; i < bannerxli.length; i++) {
	bannerxli[i].aa=i;
	bannerxli[i].onmouseover=function(){
		for (var j = 0; j < bannerxli
			.length; j++) {
			 bspan[j].style.display="none";	
		     bannerxli[j].style.borderColor="#333333";
		     bannerxli[j].style.fontWeight="normal";
		     bannerxq[j].style.display="none";
		};
	    bspan[this.aa].style.display="block";	
		bannerxli[this.aa].style.borderColor="#e70050";
		bannerxli[this.aa].style.fontWeight="bold";
		bannerxq[this.aa].style.display="block";
	}
};

//banner下面 end


//银泰百货 start
var ytbhli=$(".ytbhli");
var ytbhz=$(".ytbhz");
var b1span=$(".b1span");
for (var i = 0; i < ytbhli.length; i++) {
	ytbhli[i].aa=i;
	ytbhli[i].onmouseover=function(){
		for (var j = 0; j < ytbhli
			.length; j++) {
			 b1span[j].style.display="none";	
		     ytbhli[j].style.borderColor="#333333";
		     ytbhli[j].style.fontWeight="normal";
		     ytbhz[j].style.display="none";
		};
	    b1span[this.aa].style.display="block";	
		ytbhli[this.aa].style.borderColor="#e70050";
		ytbhli[this.aa].style.fontWeight="bold";
		ytbhz[this.aa].style.display="block";
	}
};
//银泰百货 end


//侧导航 start

var cnavbox=$(".cnavbox")[0];
var floor=$(".floor");
var floorbox=$(".floorbox");
var cnavbox1=$(".cnavbox1")[0];
var floorf=$(".floorf");
// alert(floorbox[0].offsetTop)
var now=0;
document.documentElement.scrollTop=1;
var obj=document.documentElement.scrollTop?document.documentElement:document.body;
window.onscroll=function(){
	if(obj.scrollTop>=665){
		cnavbox.style.display="block";
		cnavbox1.style.display="block";
		for (var i = 0; i < floor.length-1; i++) {
    	    if (floorbox[i].offsetTop<=obj.scrollTop+80) {
    		    for (var j = 0; j < floorf.length-1; j++) {
    			floorf[j].style.opacity=0;
    		};
    		floorf[i].style.opacity=1;
    		// now=i;
    	}
    	else{
    		floorf[i].style.opacity=0;
    	}	
    };
	}else{
		cnavbox.style.display="none";
		cnavbox1.style.display="none";
	}
}

var now=0;
for (var i = 0; i < floor.length-1; i++) {
	floorf[i].index=i;
	floorf[i].onclick=function(){
	    now=this.index;
		obj.scrollTop=floorbox[this.index].offsetTop-80;
		floorf[this.index].style.opacity=1;
	 };
	 floorf[i].onmouseover=function(){
		for (var j = 0; j < floorf.length-1; j++) {
			if (j!=now) {;
			floorf[j].style.opacity=0;}
		};
 		floorf[this.index].style.opacity=1;
 	}
}
//侧导航 end

//banner start

var bannerl1=$(".banner-l-1");
var bannerl=$(".bannerl");
for (var i = 0; i < bannerl1.length; i++) {
	bannerl1[i].aa=i;
	bannerl1[i].onmouseover=function(){	
		bannerl[this.aa].style.display="block";
	}
	for (var j = 0; j <bannerl.length; j++) {
		bannerl[j].bb=j;
		bannerl[j].onmouseover=function(){
			bannerl[this.bb].style.display="block";
	    }
	};
	bannerl1[i].onmouseout=function(){	
		bannerl[this.aa].style.display="none";
	}
};
//banner end

// 时尚名品小品牌 start

var ssm1p=$(".ssm1p")[0];
var sspmbo1x=$(".sspmbo1x");
var ssp5m=$(".sspm-5")[0];
var ssp6m=$(".sspm-6")[0];
var now=0;
var next=0;
for (var i = 1; i < sspmbo1x.length; i++) {
	sspmbo1x[i].style.left="159px";
};
ssp5m.onclick=function(){
	next++;
	if(next>=sspmbo1x.length){
		next=0;
	}
	animate(sspmbo1x[now],{left:-159},500);
	sspmbo1x[next].style.left="159px";
	animate(sspmbo1x[next],{left:0},500);
	now=next;
}
ssp6m.onclick=function(){
	next--;
	if(next<=-1){
		next=sspmbo1x.length-1;
	}
	animate(sspmbo1x[now],{left:159},500);
	sspmbo1x[next].style.left="-159px";
	animate(sspmbo1x[next],{left:0},500);
	now=next;
}
// 时尚名品小品牌 end

//时尚名品 小banner start
var ssmpleft=$(".ssmpleft");
var ssmpright=$(".ssmpright");
var ssmpbanner=$(".ssmp-b-22");
var btnl=$(".btnl");
var btnr=$(".btnr");
for (var i=0;i<ssmpleft.length;i++){
	ssmpleft[i].index=i;
	ssmpleft[i].onclick=function(){
			animate(ssmpbanner[this.index],{left:-390},600);
		btnl[this.index].style.backgroundPosition="0 0";
		btnr[this.index].style.backgroundPosition="0 -13px";
		}
	ssmpright[i].aa=i;
	ssmpright[i].onclick=function(){
		animate(ssmpbanner[this.aa],{left:-0},600);
		btnl[this.aa].style.backgroundPosition="0 -13px";
		btnr[this.aa].style.backgroundPosition="0 0";
	}
}

//时尚名品 小banner end
