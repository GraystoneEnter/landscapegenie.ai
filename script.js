let colors = ['red', 'green', 'blue'];
let i = 0;
setInterval(() => {
  document.getElementById('hello').style.color = colors[i];
  i = (i + 1) % colors.length;
}, 1000);
