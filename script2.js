//初始化 
let $imgs = $('#imgs > img');
let fistcopy = $imgs.eq(0).clone(true)[0];
let lastcopy = $imgs.eq($imgs.length-1).clone(true)[0];
$('#imgs').prepend($(lastcopy)).append($(fistcopy)).css({transform:'translateX(-200px)'});

//增加鼠标点击事件

$buttons = $('#buttonWrap > button')
let current=0;
$buttons.on('click',function(e){
    index =$(e.currentTarget).index();
    timeStep(index);
})

//加上定时器自动播放
let index;
var timer = setInterval(function(){
    if(index>$imgs.length-1||index===undefined){
        index=0;
    }
    timeStep(index);
    index+=1;
},1000)
$imgs.on('mouseenter',function(){
    window.clearInterval(timer);
})
$imgs.on('mouseleave',function(){
    timer = setInterval(function(){
        if(index>$imgs.length-1||index===undefined){
            index=0;
        }
        timeStep(index);
        index+=1;
    },1000)
})

//监听用户是否从轮播页面切换到其他页面
document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        window.clearInterval(timer);
    }else{
        timer = setInterval(function(){
            if(index>$imgs.length-1||index===undefined){
                index=0;
            }
            timeStep(index);
            index+=1;
        },1000)
    }
});

//函数
function timeStep(index){
    if(current === $buttons.length-1 && index===0){
        jump(current+2,index+1);    
    }else if(current === 0 && index===$buttons.length-1){
        jump(current,index+1);    
    }else{ 
        trans(index+1);  
    }
    current = index;
}
function trans(n){
    $('#imgs').css({transform:`translateX(-${(n)*200}px)`});
    $(`#buttonWrap > button`).removeClass('active');
    if(n===$buttons.length+1){
        n=1;
    }else if(n===0){
        n=$buttons.length;
    }
    $(`#buttonWrap > button:nth(${n-1})`).addClass('active');
}
function jump(a,b){
    trans(a);
    $('#imgs').one('transitionend',function(e){
        $('#imgs').hide().css({transform:`translateX(-${(b)*200}px)`}).offset();
        $('#imgs').show();
    })
}