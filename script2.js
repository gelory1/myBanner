//初始化
let n;
start();
setInterval(function(){
    $(`.imgs img:nth-child(${xxx(n)})`).addClass('leave').removeClass('current')
    .one('transitionend',function(x){
        $(x.currentTarget).addClass('enter').removeClass('leave');
    })
    $(`.imgs img:nth-child(${xxx(n+1)})`).addClass('current').removeClass('enter');
    n+=1;
},1000)

function xxx(n){
    if(n>4){
        n=n%4;
        if(n===0){
            n=4;
        }
    }
    return n
}
function start(){
    n=1;
    $('.imgs img:nth-child(1)').addClass('current');
    $('.imgs img:nth-child(2)').addClass('enter');
    $('.imgs img:nth-child(3)').addClass('enter');
    $('.imgs img:nth-child(4)').addClass('enter'); 
}