/*

const scrollProgressElement = document.querySelector('#scroll-progress');

function scrollProgress (){
    const totalHeightOfWebPage = document.body.scrollHeight;
    const currentDistanceFromTop = document.documentElement.scrollTop;


    const windowHeight = document.documentElement.clientHeight;

    const scrolledPercentage =
        (currentDistanceFromTop / (totalHeightOfWebPage -windowHeight)) * 100;

        scrollProgressElement.style.height = Math.round(scrolledPercentage) + '%';
}

*/

let progress = document.getElementById('scroll-progress');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
