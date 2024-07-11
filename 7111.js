// ==UserScript==
// @name         达加马专用
// @namespace    https://b23.tv/22UnV4z
// @version      7.11.1
// @description  登录后点击上方按钮
// @author       慕若
// @run-at       document-start
// @match        http*://test.k12media.cn:8000/tqweb/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    const button = document.createElement('button');
button.className = 'text_lb';
button.textContent = '启动！';
button.style.fontSize = '16px'; // 调整字体大小
button.style.color = 'red'; // 设置字体颜色
button.onclick = function() {
    viewTest('/tqweb/report/NewStudentReport.a?doShowStudentReport',91010);
}
// 将按钮添加到页面最上面
document.body.prepend(button);
})();
