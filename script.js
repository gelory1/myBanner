//获取span元素以及imgDiv元素
let $imgDiv = $("#imgs");
let $allButton = $("#buttons > span");
//遍历按钮，当点击时，imgDiv左移并且给当前点击的button元素增加red类。
for(let i=0;i<$allButton.length;i++){
    $($allButton[i]).on('click',function(x){
        let index=$(x.target).index()
        let p = -200*index;
        n=index;
        $imgDiv.css({transform:'translateX('+ p +'px)'});
        setColor($allButton.eq(n));
    })
}
//给系统加定时器，每秒自动点击一次。
let n =0;
let l =$allButton.length;
$allButton.eq(n%l).trigger('click');
var timeId = timeSetInterval();
//鼠标移入，停止定时器，移出时，重新开一个定时器。注意变量n为全局变量。
$imgDiv.on('mouseenter',function(){
    clearInterval(timeId);
})
$imgDiv.on('mouseout',function(){
    timeId = timeSetInterval();})
function setColor($x){
    $x
     .addClass('red')
     .siblings('.red').removeClass('red');
}
function timeSetInterval(){
    return setInterval(function(){
            n+=1;
            $allButton.eq(n%l).trigger('click');
        },1000)
}