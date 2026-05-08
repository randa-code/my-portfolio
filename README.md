<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Randa | Portfolio</title>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:system-ui, Arial;
  scroll-behavior:smooth;
}

body{
  background:#050814;
  color:white;
  overflow-x:hidden;
}

/* 🌌 BACKGROUND GLOW */
.bg{
  position:fixed;
  inset:0;
  z-index:-3;
  background:
    radial-gradient(circle at 15% 20%, rgba(56,189,248,0.25), transparent 45%),
    radial-gradient(circle at 80% 30%, rgba(99,102,241,0.25), transparent 45%),
    radial-gradient(circle at 50% 80%, rgba(29,78,216,0.25), transparent 50%);
  filter: blur(95px);
  animation: float 16s ease-in-out infinite alternate;
}

@keyframes float{
  0%{transform:scale(1) translate(0,0);}
  100%{transform:scale(1.25) translate(60px,-40px);}
}

/* particles */
#particles{
  position:fixed;
  inset:0;
  z-index:-2;
}

/* soft overlay */
.overlay{
  position:fixed;
  inset:0;
  background:radial-gradient(circle at top, rgba(56,189,248,0.10), transparent 60%);
  z-index:-1;
}

/* NAV */
nav{
  position:sticky;
  top:0;
  display:flex;
  justify-content:center;
  gap:30px;
  padding:16px;
  background:rgba(10,15,30,0.6);
  backdrop-filter:blur(16px);
  border-bottom:1px solid rgba(255,255,255,0.08);
  z-index:100;
}

nav a{
  color:#cbd5e1;
  text-decoration:none;
  font-size:14px;
  transition:0.3s;
}

nav a:hover{
  color:#38bdf8;
}

/* HERO */
header{
  text-align:center;
  padding:140px 20px 60px;
  animation: fadeIn 1s ease;
}

header h1{
  font-size:85px;
  color:#38bdf8;
  text-shadow:0 0 25px rgba(56,189,248,0.6);
  letter-spacing:2px;
}

header p{
  color:#94a3b8;
  margin-top:12px;
  font-size:18px;
}

/* SECTIONS */
section{
  max-width:1100px;
  margin:auto;
  padding:120px 20px;
  opacity:0;
  transform:translateY(40px);
  transition:1s;
}

section.show{
  opacity:1;
  transform:translateY(0);
}

h2{
  font-size:36px;
  margin-bottom:25px;
  border-right:4px solid #38bdf8;
  padding-right:10px;
}

/* PROJECTS */
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:22px;
}

.card{
  background:rgba(15,23,42,0.6);
  border:1px solid rgba(255,255,255,0.08);
  padding:18px;
  border-radius:18px;
  transition:0.4s;
  backdrop-filter:blur(12px);
}

.card:hover{
  transform:translateY(-12px);
  border-color:#38bdf8;
  box-shadow:0 20px 50px rgba(56,189,248,0.15);
}

.card img{
  width:100%;
  height:160px;
  object-fit:cover;
  border-radius:12px;
  margin-bottom:10px;
}

/* SKILLS */
.skill{ margin:15px 0; }

.bar{
  height:10px;
  background:#1f2937;
  border-radius:20px;
  overflow:hidden;
}

.fill{
  height:100%;
  background:linear-gradient(90deg,#38bdf8,#6366f1);
  width:0;
  animation:load 2s forwards;
}

@keyframes load{
  to{width:var(--w);}
}

/* CONTACT */
.icons{
  display:flex;
  justify-content:center;
  gap:25px;
  margin-top:20px;
}

.icon{
  width:60px;
  height:60px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:rgba(255,255,255,0.05);
  border-radius:14px;
  transition:0.3s;
}

.icon:hover{
  transform:scale(1.2);
  background:#38bdf8;
}

/* FOOTER */
footer{
  text-align:center;
  padding:40px;
  color:#94a3b8;
}

/* fade animation */
@keyframes fadeIn{
  from{opacity:0; transform:translateY(-20px);}
  to{opacity:1; transform:translateY(0);}
}
</style>
</head>

<body>

<!-- BACKGROUNDS -->
<div class="bg"></div>
<canvas id="particles"></canvas>
<div class="overlay"></div>

<!-- NAV -->
<nav>
<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#skills">Skills</a>
<a href="#contact">Contact</a>
</nav>

<!-- HERO -->
<header>
<h1>Randa</h1>
<p>Software Engineer | Web Developer | UI Engineer</p>
</header>

<!-- ABOUT -->
<section id="about">
<h2>About Me</h2>
<p>
Randa Rayani — Computer Science graduate specializing in Software Engineering.
I build scalable, modern, and high-performance web applications with clean UI/UX design.
</p>
</section>

<!-- PROJECTS -->
<section id="projects">
<h2>Projects</h2>

<div class="grid">

  <a href="tasks.html" style="text-decoration:none;color:inherit;">
<div class="card">
<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800">
<h3>Task Manager</h3>
<p>Productivity system application</p>
</div>
</a>


<a href="login.html" style="text-decoration:none;color:inherit;">
<div class="card">
<img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800">
<h3>Auth System</h3>
<p>Secure authentication system</p>
</div>
</a>

<a href="store.html" style="text-decoration:none;color:inherit;">
<div class="card">
<img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800">
<h3>E-Commerce</h3>
<p>Modern online store UI</p>
</div>
</a>

</div>
</section>

<!-- SKILLS -->
<section id="skills">
<h2>Skills</h2>

<div class="skill"><p>HTML</p><div class="bar"><div class="fill" style="--w:97%"></div></div></div>
<div class="skill"><p>CSS</p><div class="bar"><div class="fill" style="--w:94%"></div></div></div>
<div class="skill"><p>JavaScript</p><div class="bar"><div class="fill" style="--w:88%"></div></div></div>
<div class="skill"><p>GitHub</p><div class="bar"><div class="fill" style="--w:90%"></div></div></div>

</section>

<!-- CONTACT -->
<section id="contact">
<h2>Contact</h2>

<div class="icons">

<a class="icon" href="mailto:randaraiani1423@email.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="26">
</a>

<a class="icon" href="https://www.linkedin.com/in/randa-raiany-b797332b7?utm_source=share_via&utm_content=profile&utm_medium=member_ios.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="26">
</a>

<a class="icon" href="https://github.com/randa-code" target="_blank"">
<img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" width="26">
</a>

</div>
</section>

<footer>
© 2026 Randa Portfolio — All Rights Reserved
</footer>

<script>

/* particles */
const c=document.getElementById("particles");
const ctx=c.getContext("2d");

c.width=window.innerWidth;
c.height=window.innerHeight;

let p=Array.from({length:90},()=>({
x:Math.random()*c.width,
y:Math.random()*c.height,
r:Math.random()*2,
dx:(Math.random()-0.5)*0.6,
dy:(Math.random()-0.5)*0.6
}));

function draw(){
ctx.clearRect(0,0,c.width,c.height);
ctx.fillStyle="#38bdf8";

p.forEach(i=>{
ctx.beginPath();
ctx.arc(i.x,i.y,i.r,0,Math.PI*2);
ctx.fill();

i.x+=i.dx;
i.y+=i.dy;

if(i.x<0||i.x>c.width) i.dx*=-1;
if(i.y<0||i.y>c.height) i.dy*=-1;
});

requestAnimationFrame(draw);
}
draw();

/* reveal sections */
const obs=new IntersectionObserver(e=>{
e.forEach(x=>{
if(x.isIntersecting) x.target.classList.add("show");
});
});

document.querySelectorAll("section").forEach(s=>obs.observe(s));

</script>

</body>
</html>
