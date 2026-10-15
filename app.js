const catalog=[
{category:'Adicionados recentemente',title:'V/H/S Mixtape',year:'2026',drive:'1YOucWEw4nDkuvnSmNpbMo0U_0qLccguu'},
{category:'Adicionados recentemente',title:'Navio Fantasma',year:'2002',drive:'1H6BLld7VEgZ0qYn1Z5RA4VkIiIfsyzsg'},
{category:'Adicionados recentemente',title:'Onslaught',year:'2026',drive:'15OKcQqpFHU5WkN09Snj1Rgg7b6p0REw-'},
{category:'Ficção científica',title:'Prometheus',year:'2012',drive:'115yctfDkTpyuMOa6WvFiKPWuOhfh17an'},
{category:'Ficção científica',title:'O Dia Depois de Amanhã',year:'2004',drive:'1-KcyTeeWINtsdNoanKCklzPtenQjR2w0'},
{category:'Ação e suspense',title:'Um Dia de Fúria',year:'1993',drive:'1z6F3DEIpuB75BcK1a5jPBOcDnjUp-wMb'},
{category:'Ação e suspense',title:'No Limite do Amanhã',year:'2014',drive:'1aXOvvPR17YMMyBAOzbbgwa-7KuweT_MK'},
{category:'Ação e suspense',title:'Equilibrium',year:'2002',drive:'1_XABfGd_nQ36IcOveiP640_0d3DXoKl_'},
{category:'Ação e suspense',title:'Oldboy',year:'2003',drive:'13125P2bPZ7J8TiZ3swY8Bwfjb411GA3K'},
{category:'Terror',title:'REC',year:'2007',drive:'1GhPGZE8QrOpeHPazyINdKO1yyI8wgKrN'},
{category:'Terror',title:'Hellraiser',year:'2022',drive:'1kFD3ZIejy2uji6ndk_vsNixqSqVnVCNk'},
{category:'Terror',title:'A Hora do Vampiro',year:'2024',drive:'16kyaGywcUrZ_cay4CcLn-rm3U3iCoPjr'},
{category:'Terror',title:'Os Garotos Perdidos',year:'1987',drive:'1Bqm3KrAX8VHE8bXUF3q4Xl6EjGBZ94CP'},
{category:'Reflexivo',title:'Idiocracia',year:'2006',drive:'1g0_RyRj_Nr44niuXl-mc_I8vCSN5gdVu'},
{category:'Reflexivo',title:'O Show de Truman',year:'1998',drive:'1HSW04G3-v_wTyqyePxjKzPMBzO3N4j_b'},
{category:'Reflexivo',title:'Dia de Treinamento',year:'2001',drive:'1VPGj38H7wTv_-VqrHxjaSVFpADvugZFH'},
{category:'Reflexivo',title:'Beleza Americana',year:'1999',drive:'1B53UvU5nZf0uLSI7QmYc9a8pVsqrQ3jw'}
];

const catalogEl=document.querySelector('#catalog');
const search=document.querySelector('#search');
const toast=document.querySelector('#toast');
const modal=document.querySelector('#playerModal');
const iframe=document.querySelector('#drivePlayer');
const playerTitle=document.querySelector('#playerTitle');
const playerMeta=document.querySelector('#playerMeta');
const fallback=document.querySelector('#openDriveFallback');
let currentMovie=null;

function showToast(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
function driveView(id){return `https://drive.google.com/file/d/${id}/view`}
function drivePreview(id){return `https://drive.google.com/file/d/${id}/preview`}
function openExternal(movie){if(!movie?.drive){showToast('Arquivo ainda não associado.');return}window.open(driveView(movie.drive),'_blank','noopener')}
function openPlayer(movie){
  if(!movie?.drive){showToast('Arquivo ainda não associado.');return}
  currentMovie=movie;
  playerTitle.textContent=movie.title;
  playerMeta.textContent=`${movie.year} • ${movie.category}`;
  iframe.src=drivePreview(movie.drive);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closePlayer(){iframe.src='about:blank';modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';currentMovie=null}
function render(query=''){
  const q=query.trim().toLocaleLowerCase('pt-BR');
  const filtered=catalog.filter(m=>!q||`${m.title} ${m.year} ${m.category}`.toLocaleLowerCase('pt-BR').includes(q));
  catalogEl.innerHTML='';
  if(!filtered.length){catalogEl.innerHTML='<div class="empty">Nenhum filme encontrado.</div>';return}
  [...new Set(filtered.map(m=>m.category))].forEach(cat=>{
    const items=filtered.filter(m=>m.category===cat).sort((a,b)=>a.title.localeCompare(b.title,'pt-BR'));
    const section=document.createElement('section');section.className='category';
    section.innerHTML=`<div class="category-head"><h2>${cat}</h2><span>${items.length} títulos</span></div><div class="movie-list"></div>`;
    const list=section.querySelector('.movie-list');
    items.forEach(m=>{
      const btn=document.createElement('button');btn.className='movie-item';
      btn.innerHTML=`<div><div class="movie-name">${m.title}</div><div class="movie-year">${m.year}</div></div><div class="movie-play">▶ Assistir</div>`;
      btn.addEventListener('click',()=>openPlayer(m));
      list.appendChild(btn);
    });
    catalogEl.appendChild(section);
  });
}

search.addEventListener('input',e=>render(e.target.value));
document.querySelector('#closePlayer').addEventListener('click',closePlayer);
modal.addEventListener('click',e=>{if(e.target===modal)closePlayer()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closePlayer()});
fallback.addEventListener('click',()=>openExternal(currentMovie));

const featured=catalog.find(m=>m.title==='Prometheus');
document.querySelector('#playFeatured').addEventListener('click',()=>openPlayer(featured));
document.querySelector('#openFeatured').addEventListener('click',()=>openExternal(featured));

document.querySelectorAll('.nav-item').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
  const a=btn.dataset.action;
  if(a==='home')window.scrollTo({top:0,behavior:'smooth'});
  if(a==='movies'){search.value='';render('');catalogEl.scrollIntoView({behavior:'smooth'})}
  if(a==='categories')catalogEl.scrollIntoView({behavior:'smooth'});
}));
render();