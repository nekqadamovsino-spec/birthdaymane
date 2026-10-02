// Вставьте URL опубликованного Google Apps Script Web App, чтобы ответы гостей уходили в Google Таблицу.
const RSVP_ENDPOINT = "";

const eventDate = new Date('2026-10-14T12:00:00+03:00'); // время можно поменять здесь
function tick(){const x=eventDate-new Date(); if(x<=0)return; document.querySelector('#d').textContent=Math.floor(x/86400000);document.querySelector('#h').textContent=Math.floor(x/3600000)%24;document.querySelector('#m').textContent=Math.floor(x/60000)%60}tick();setInterval(tick,30000);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const form=document.querySelector('#rsvpForm'), status=document.querySelector('#status');
form.addEventListener('submit',async e=>{e.preventDefault();const data=Object.fromEntries(new FormData(form));data.event='Крещение и День рождения Манэ — 14.10.2026';data.sentAt=new Date().toISOString();if(!RSVP_ENDPOINT){localStorage.setItem('mane-rsvp',JSON.stringify(data));status.textContent='Спасибо! Ваш ответ подтверждён на этом устройстве. Для сбора ответов в таблицу подключите Apps Script.';form.reset();return}try{status.textContent='Отправляем…';await fetch(RSVP_ENDPOINT,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(data)});status.textContent='Спасибо! Ваш ответ получен.';form.reset()}catch(err){status.textContent='Не удалось отправить. Попробуйте ещё раз.'}});
