const app = document.querySelector('#App');

const template = document.createElement('template');
template.innerHTML = `<div>안녕하세요! Welcome cothis boilerPlate</div>`;
app?.appendChild(template.content);
