// ==UserScript==
// @name         达睿思考试id
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-start
// @match        http*://test.k12media.cn:8000/tqweb/demo/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const container = document.createElement('div');
container.style.display = 'flex';
container.style.alignItems = 'flex-start'; 
container.style.justifyContent = 'center';
container.style.position = 'fixed';
container.style.top = '0';
container.style.width = '100%'; 
const input = document.createElement('input');
input.type = 'text';
input.placeholder = '输入考试id'; 
const button = document.createElement('button');
button.className = 'text_lb';
button.textContent = '启动！';
button.style.fontSize = '16px'; 
button.style.color = 'red'; 
button.onclick = function() {
    viewTest('/tqweb/report/NewStudentReport.a?showStudentScoreReport', input.value);
};

var imageElement = document.querySelector('img[src="/tqweb/images/bottom_logo.png"]');
if (imageElement) {
  imageElement.src = "https://ys.mihoyo.com/main/_nuxt/img/logo.38d3f3b.png";
}

document.body.innerHTML = document.body.innerHTML.replace(/北京星立方科技发展股份有限公司 版权所有/g, '新年快乐！学业有成，')
container.appendChild(input);
container.appendChild(button);
document.body.appendChild(container);
})();
