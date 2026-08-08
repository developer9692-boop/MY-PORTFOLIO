/* ---------- Typewriter ---------- */
const roles = ["Problem Solver", "Code Explorer", "AI Explorer", "Web Builder"];
const twEl = document.getElementById('typewriter');
let roleIdx = 0, charIdx = 0, deleting = false;

function typeLoop(){
  const current = roles[roleIdx];
  if(!deleting){
    charIdx++;
    twEl.textContent = current.slice(0, charIdx);
    if(charIdx === current.length){
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIdx--;
    twEl.textContent = current.slice(0, charIdx);
    if(charIdx === 0){
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 90);
}
typeLoop();

/* ---------- Floating tech badges ---------- */
const badges = [
  {label:'⚛', color:'#61dafb'},
  {label:'5', color:'#e34f26'},
  {label:'3', color:'#264de4'},
  {label:'JS', color:'#f0db4f'},
  {label:'🐍', color:'#3776ab'},
  {label:'⬢', color:'#68a063'},
  {label:'◭', color:'#f05032'}
];
const orbitField = document.getElementById('orbitField');
const positions = [
  {top:'6%', left:'46%'}, {top:'18%', left:'80%'}, {top:'42%', left:'6%'},
  {top:'58%', left:'88%'}, {top:'78%', left:'20%'}, {top:'85%', left:'62%'},
  {top:'32%', left:'92%'}
];
badges.forEach((b, i) => {
  const el = document.createElement('div');
  el.className = 'tech-badge';
  el.textContent = b.label;
  el.style.color = b.color;
  el.style.borderColor = b.color + '55';
  const pos = positions[i % positions.length];
  el.style.top = pos.top;
  el.style.left = pos.left;
  el.style.animationDuration = (3 + Math.random()*2).toFixed(1) + 's';
  el.style.animationDelay = (Math.random()*2).toFixed(1) + 's';
  orbitField.appendChild(el);
});

/* ---------- Projects ---------- */
const projects = [
  {name:'E-Commerce Platform', desc:'A complete e-commerce platform with shopping cart, payment, and admin dashboard features.', tags:['React','Node.js','Stripe'], glyph:'🛒', bg:'linear-gradient(135deg,#3a0d12,#150507)'},
  {name:'Portfolio Website', desc:'An interactive portfolio website with animations and responsive design to showcase work.', tags:['HTML5','CSS3','JavaScript'], glyph:'💼', bg:'linear-gradient(135deg,#1c2b4a,#0c1220)'},
  {name:'Task Management App', desc:'A task management application with drag-and-drop and real-time collaboration features.', tags:['React','Firebase','DnD'], glyph:'✅', bg:'linear-gradient(135deg,#122a2a,#081414)'},
  {name:'Weather Dashboard', desc:'An interactive weather dashboard with location-based forecasts, weather maps, and historical data visualization.', tags:['JavaScript','Chart.js','OpenWeather API'], glyph:'⛅', bg:'linear-gradient(135deg,#16244a,#0a1226)'},
  {name:'Social Media Dashboard', desc:'A comprehensive social media management dashboard with analytics, scheduling, and multi-platform integration.', tags:['React','D3.js','Express.js'], glyph:'📊', bg:'linear-gradient(135deg,#3a1030,#160510)'},
  {name:'Blog Platform', desc:'A full-featured blog platform with CMS capabilities, user management, and SEO optimization features.', tags:['Next.js','Prisma','PostgreSQL'], glyph:'📝', bg:'linear-gradient(135deg,#2a1414,#120606)'}
];

const grid = document.getElementById('projectGrid');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <div class="project-thumb" style="background:${p.bg}">${p.glyph}</div>
    <div class="project-body">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="tag-row">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="card-actions">
        <a href="#">Live Demo</a>
        <a href="#">GitHub</a>
      </div>
    </div>`;
  grid.appendChild(card);
});

/* ---------- Nav active link on scroll ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if(window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* ---------- Mobile menu ---------- */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
});
navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinksEl.classList.remove('open'));
});

/* ---------- Contact form (front-end only) ---------- */
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const btn = this.querySelector('button');
  const original = btn.textContent;
  btn.textContent = 'MESSAGE SENT ✓';
  this.reset();
  setTimeout(() => btn.textContent = original, 2200);
});

/* ---------- Download CV placeholder ---------- */
document.getElementById('downloadCv').addEventListener('click', function(e){
  e.preventDefault();
  alert('Add your CV file link here to enable downloads.');
});

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
