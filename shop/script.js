function navigation_open() {
    document.getElementById('navi').style.cssText = 'transform: translate(0%); transition: 0.2s; z-index: 10000;';
}
function navigation_close() {
    document.getElementById('navi').style.cssText = 'transform: translate(-101%); transition: 0.2s; z-index: -1;';
}