// ==UserScript==
// @name         达函数
// @namespace    https://b23.tv/22UnV4z
// @version      0.2
// @description  调用网页函数
// @author       慕若
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

document.body.innerHTML = document.body.innerHTML.replace(/北京星立方科技发展股份有限公司 版权所有/g, '新年快乐！学业有成，').replace(/4.17.0.195-220325/g, '2024修改版https://b23.tv/22UnV4z')
container.appendChild(input)
container.appendChild(input);
container.appendChild(button);
document.body.appendChild(container);
var elements = document.getElementsByClassName('text_lb');
for (var i = 0; i < elements.length; i++) {
    var onclickValue = elements[i].getAttribute('onclick');
    if (onclickValue && onclickValue.indexOf('viewTest') !== -1) {
        var sourceCode = elements[i].outerHTML;
        var numericPart = sourceCode.replace(/\D/g, '');
        var ignoredYears = ['20222023', '20232024', '20242025'];
        numericPart = numericPart.replace(new RegExp(ignoredYears.join('|'), 'g'), '');
        var containerElement = document.createElement('div');
        containerElement.innerHTML = sourceCode;
        var links = containerElement.querySelectorAll('a');
        links.forEach(function(link) {
            link.style.display = 'inline-block';
        });
        var numericElement = document.createElement('pre');
        numericElement.textContent = numericPart;
containerElement.appendChild(numericElement);
        containerElement.style.whiteSpace = 'nowrap';
elements[i].parentNode.replaceChild(containerElement, elements[i]);
    }
}
})();
