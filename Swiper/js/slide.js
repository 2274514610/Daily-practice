let wrap = document.getElementsByClassName('wrap')[0];
let container = document.getElementsByClassName('container')[0];
let left = document.getElementsByClassName('jt_left')[0];
let right = document.getElementsByClassName('jt_right')[0];
let dot = document.getElementsByTagName('span');

/* 封装往左右轮播一次的函数 */
let newLeft = -600;
function next() {
    if (newLeft == -3000) {
        newLeft = 0;
        wrap.style.left = newLeft + 'px';
    }
    newLeft -= 600;
    startMove(wrap, {
        "left": newLeft
    });
    index++;
    if(index === 5){
        index = 0;
    }
    setCurrentDot();
}

function prev() {
    if (newLeft == 0) {
        newLeft = -3000;
        wrap.style.left = newLeft + 'px';
    }
    newLeft += 600;
    startMove(wrap, {
        "left": newLeft
    });
    index--;
    if(index === -1){
        index = 4;
    }
    setCurrentDot();
}
/* 自动播放 */
let timer = null;
function autoPlay() {
    timer = setInterval(function () {
        next();
    }, 2000)
}
/* 绑定事件 */
container.addEventListener('mouseenter', function () {
    clearInterval(timer);
}, false)

container.addEventListener('mouseleave', function () {
    autoPlay();
}, false)

left.addEventListener('click', function () {
    prev();
})

right.addEventListener('click', function () {
    next();
})

//处理按钮
let index = 0;
let len = dot.length;
function setCurrentDot(){
    for (let m = 0; m < len; m++){
        dot[m].className = '';
    }
    dot[index].className = 'on';
}
// 点到哪个按钮时，该按钮有类为'on'的效果，并且跳转到视觉上的第几张图。
for (let s = 0; s < len; s++){
    function aa(s){
        dot[s].addEventListener('click',function(){
            newLeft = -600 * (s + 1);
            startMove(wrap,{"left":newLeft});
            index = s;
            setCurrentDot();
        },false)
    }
}
setCurrentDot();
autoPlay();