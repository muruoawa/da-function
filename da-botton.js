// ==UserScript==
// @name         达睿思按钮
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-start
// @match        http*://test.k12media.cn:8000/tqweb/demo/MainAction.a?loginDispatcher*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const button = document.createElement('button');
button.className = 'text_lb';
button.textContent = '测试测试';
button.style.fontSize = '16px'; // 调整字体大小
button.style.color = 'red'; // 设置字体颜色

button.onclick = function() {
    viewTest('/tqweb/report/NewStudentReport.a?showStudentScoreReport', 73067);
};

// 将按钮添加到页面最上面
document.body.prepend(button);
})();
