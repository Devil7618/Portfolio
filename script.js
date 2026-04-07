/* ---------------- Page Switch ---------------- */
let pages = document.querySelectorAll('.page');
let current = 0;
pages[current].classList.add('active');

/* 🔊 Sound */
const clickSound = document.getElementById('clickSound');

/* Next Buttons */
document.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    clickSound.play();
    carBypassAnimation(() => {
      pages[current].classList.remove('active');
      current++;
      if(current >= pages.length) current = pages.length-1;
      pages[current].classList.add('active');
    });
  });
});

/* Back Buttons */
document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    clickSound.play();
    carBypassAnimation(() => {
      pages[current].classList.remove('active');
      current--;
      if(current < 0) current = 0;
      pages[current].classList.add('active');
    });
  });
});

/* ---------------- Car Bypass Animation ---------------- */
function carBypassAnimation(callback){
  const car = document.createElement('div');
  car.className = 'car-transition';
  car.innerHTML = '<img src="car.png" style="width:100%;">';
  document.body.appendChild(car);

  setTimeout(() => { car.classList.add('active'); }, 50);

  setTimeout(() => {
    car.remove();
    if(callback) callback();
  }, 1300);
}

/* ---------------- Typing Effect 🔥 ---------------- */
const typing = document.querySelector('.typing');
if(typing){
  let text = typing.innerText;
  typing.innerText = "";
  let i = 0;

  function type(){
    if(i < text.length){
      typing.innerText += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();
}

/* ---------------- Smooth Cursor ---------------- */
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

/* ---------------- Parallax Glow Effect ---------------- */
document.addEventListener('mousemove', (e)=>{
  let x = (e.clientX / window.innerWidth - 0.5) * 20;
  let y = (e.clientY / window.innerHeight - 0.5) * 20;

  document.querySelectorAll('.page.active').forEach(el=>{
    el.style.transform = `scale(1) rotateX(${y}deg) rotateY(${x}deg)`;
  });
});

/* ---------------- Hobby Animations ---------------- */
let hobbyAnim = document.getElementById('hobby-animation');

/* Free Fire Bullet */
document.getElementById('freefire').addEventListener('click', ()=> {
  hobbyAnim.innerHTML='';
  for(let i=0;i<12;i++){
    let bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.top=(Math.random()*80+10)+'%';
    bullet.style.right='0px';
    bullet.style.animation=`bulletAnim ${Math.random()*1+0.3}s linear forwards`;
    hobbyAnim.appendChild(bullet);
  }
});

/* Minecraft Creeper Explosion */
document.getElementById('minecraft').addEventListener('click', ()=> {
  hobbyAnim.innerHTML='';

  let creeper = document.createElement('div');
  creeper.style.width='50px';
  creeper.style.height='50px';
  creeper.style.background='lime';
  creeper.style.position='absolute';
  creeper.style.top='50%';
  creeper.style.left='50%';
  creeper.style.transform='translate(-50%,-50%)';
  hobbyAnim.appendChild(creeper);

  for(let i=0;i<25;i++){
    let part = document.createElement('div');
    part.classList.add('explode-part');
    part.style.top='50%';
    part.style.left='50%';
    part.style.setProperty('--x', Math.random()*2-1);
    part.style.setProperty('--y', Math.random()*2-1);
    part.style.animation=`explode ${Math.random()*0.6+0.4}s ease-out forwards`;
    hobbyAnim.appendChild(part);
  }

  setTimeout(()=>{hobbyAnim.innerHTML='';},1500);
});

/* WebDev Glow */
document.getElementById('webdev').addEventListener('click', ()=> {
  hobbyAnim.innerHTML='';
  let glow = document.createElement('div');
  glow.innerHTML='💻⚡';
  glow.style.fontSize='80px';
  glow.style.position='absolute';
  glow.style.top='50%';
  glow.style.left='50%';
  glow.style.transform='translate(-50%,-50%)';
  hobbyAnim.appendChild(glow);
  setTimeout(()=>{glow.remove();},1500);
});

/* Editing Glow */
document.getElementById('editing').addEventListener('click', ()=> {
  hobbyAnim.innerHTML='';
  let edit = document.createElement('div');
  edit.innerHTML='✂️🔥';
  edit.style.fontSize='80px';
  edit.style.position='absolute';
  edit.style.top='50%';
  edit.style.left='50%';
  edit.style.transform='translate(-50%,-50%)';
  hobbyAnim.appendChild(edit);
  setTimeout(()=>{edit.remove();},1500);
});

/* ---------------- Glow Pulse Effect ---------------- */
setInterval(()=>{
  document.querySelectorAll('.glow-name, .glow-thanks').forEach(el=>{
    el.style.filter = `brightness(${1 + Math.random()*0.5})`;
  });
},500);
/* ---------------- Image Click Fullscreen ---------------- */

// create viewer
const viewer = document.createElement('div');
viewer.id = 'image-viewer';
viewer.innerHTML = '<img src="">';
document.body.appendChild(viewer);

const viewerImg = viewer.querySelector('img');

// click on gallery images
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    viewer.classList.add('active');
    viewerImg.src = img.src;
  });
});

// close on click anywhere
viewer.addEventListener('click', () => {
  viewer.classList.remove('active');
});
