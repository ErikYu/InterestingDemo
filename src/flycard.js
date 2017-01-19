//增加window.onload
function addLoadEvent(func) {
	var oldonload=window.onload;
	if(typeof oldonload !== "function"){
		window.onload=func();
	} else{
		window.onload=function () {
			oldonload();
			func();
        };
	}
}

//获取x-y内的一个随机数
function getRandomNum(x,y){
	return Math.floor(Math.random()*(y-x+1)+x);
}
//获取随机花色
function getRandomColor(){
	var arr=["hearts", "spades", "clubs", "diamonds"];
	return arr[getRandomNum(0,3)];
}
//获取card的class
function getCard() {
	return 'rank'+getRandomNum(1, 13)+" "+getRandomColor();
}
//动画函数
function gooo() {
	var elem=document.getElementById('sampleCard');
	var path=document.getElementById('samplePath');
	var card=getCard();

	elem.className = "card "+card;
	elem.style='';
    setTimeout(function () {
		elem.className="card throw "+card;
		path.style.transform='rotate('+getRandomNum(-30,30)+'deg)';
		elem.style.transform='translateY('+getRandomNum(-20,20)+'px) scale(2) rotate('+getRandomNum(-25,25)+'deg)';
    }, 10);
}
function load() {
    var btn=document.getElementById("button");
    btn.onclick=gooo;
}

addLoadEvent(load());