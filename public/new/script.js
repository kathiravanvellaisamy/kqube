(()=>{const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
try{const t=localStorage.getItem('kq-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.dataset.theme=t}catch(e){}
$('#theme').onclick=()=>{const d=document.documentElement,t=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=t;try{localStorage.setItem('kq-theme',t)}catch(e){}};
addEventListener('load',()=>setTimeout(()=>$('#loader').classList.add('done'),rm?0:500));
const pr=$('#progress');addEventListener('scroll',()=>{pr.style.width=scrollY/(document.documentElement.scrollHeight-innerHeight)*100+'%'},{passive:true});
const b=$('.burger');b.onclick=()=>{const o=$('#nav').classList.toggle('open');b.setAttribute('aria-expanded',o)};
$('#rib button').onclick=()=>$('#rib').classList.add('off');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('vis');io.unobserve(e.target);
 const n=$('[data-n]',e.target)||(e.target.dataset.n?e.target:null);if(n)count(n)}),{threshold:.15});
$$('.rv,.ba,.stat').forEach(e=>io.observe(e));
function count(el){const T=+el.dataset.n;let s=null;const f=t=>{s??=t;const p=Math.min((t-s)/1400,1);el.textContent=Math.round(T*p);p<1&&requestAnimationFrame(f)};rm?el.textContent=T:requestAnimationFrame(f)}
function filt(box,btns,q){const run=()=>{const a=$('.on',btns.parentNode)?.dataset.f||'all',t=(q?.value||'').toLowerCase();$$('.proj',box).forEach(p=>p.classList.toggle('hide',!((a==='all'||p.dataset.c===a)&&p.textContent.toLowerCase().includes(t))))};
 $$('button',btns).forEach(x=>x.onclick=()=>{$$('button',btns).forEach(y=>y.classList.remove('on'));x.classList.add('on');run()});q&&q.addEventListener('input',run)}
const pg=$('#pg'),bg=$('#bg');pg&&filt(pg,$('.filters'));bg&&filt(bg,$('.filters'),$('#q'));
$$('[data-form]').forEach(f=>f.onsubmit=e=>{e.preventDefault();const m=$('.ok',f)||f.appendChild(Object.assign(document.createElement('p'),{className:'ok'}));m.textContent='Thanks! We will reply within one business day.';f.reset()});
const c=$('#cube');if(c){let x=-20,y=30,d=false,px,py;c.style.animation='none';c.style.transform=`rotateX(${x}deg) rotateY(${y}deg)`;
 const up=()=>c.style.transform=`rotateX(${x}deg) rotateY(${y}deg)`;
 c.parentNode.addEventListener('pointerdown',e=>{d=true;px=e.clientX;py=e.clientY});addEventListener('pointerup',()=>d=false);
 addEventListener('pointermove',e=>{if(!d)return;y+=(e.clientX-px)*.6;x-=(e.clientY-py)*.6;px=e.clientX;py=e.clientY;up()});
 if(!rm)(function a(){if(!d){y+=.3;up()}requestAnimationFrame(a)})()}
const cv=$('#pts');if(cv&&!rm){const g=cv.getContext('2d');let W,H;const r=()=>{W=cv.width=innerWidth;H=cv.height=innerHeight};r();addEventListener('resize',r);
 const P=Array.from({length:matchMedia('(max-width:700px)').matches?25:50},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}));
 (function t(){g.clearRect(0,0,W,H);g.fillStyle='#38BDF8';g.strokeStyle='rgba(56,189,248,.25)';P.forEach((p,i)=>{p.x=(p.x+p.vx+W)%W;p.y=(p.y+p.vy+H)%H;g.fillRect(p.x,p.y,2.5,2.5);for(let j=i+1;j<P.length;j++){const q=P[j];if(Math.hypot(p.x-q.x,p.y-q.y)<110){g.beginPath();g.moveTo(p.x,p.y);g.lineTo(q.x,q.y);g.stroke()}}});requestAnimationFrame(t)})()}
})();
