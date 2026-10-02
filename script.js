const target = new Date("2026-10-14T12:00:00+03:00").getTime();
const $ = id => document.getElementById(id);
function tick(){
  const d = Math.max(0,target-Date.now());
  const day=Math.floor(d/86400000), hr=Math.floor(d/3600000)%24, min=Math.floor(d/60000)%60, sec=Math.floor(d/1000)%60;
  $("days").textContent=String(day).padStart(2,"0");
  $("hours").textContent=String(hr).padStart(2,"0");
  $("minutes").textContent=String(min).padStart(2,"0");
  $("seconds").textContent=String(sec).padStart(2,"0");
}
tick(); setInterval(tick,1000);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
