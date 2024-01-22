// ==UserScript==
// @name         输入
// @namespace    w
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-start
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const button = document.createElement('button');
button.className = 'text_lb';
button.textContent = '原神，启动！';
button.style.fontSize = '16px';
button.style.color = 'pink';
button.style.position = 'fixed'; // 设置为固定定位
button.style.top = '0'; // 将按钮置于页面顶部
button.style.left = '50%'; // 将按钮水平居中
button.style.transform = 'translateX(-50%)'; // 通过 transform 调整水平位置
button.style.zIndex = '9999'; // 设置 z-index 来确保按钮在顶层

button.onclick = function() {
    const input = prompt('请输入要执行的内容：');
    if (input !== null) {
        eval(input);
    }
};

document.body.appendChild(button);


})();