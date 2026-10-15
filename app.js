const catalog = [
  {category:"Adicionados recentemente",title:"V/H/S Mixtape",year:"2026",drive:"1YOucWEw4nDkuvnSmNpbMo0U_0qLccguu"},
  {category:"Adicionados recentemente",title:"Navio Fantasma",year:"2002",drive:"1H6BLld7VEgZ0qYn1Z5RA4VkIiIfsyzsg"},
  {category:"Adicionados recentemente",title:"Onslaught",year:"2026",drive:"15OKcQqpFHU5WkN09Snj1Rgg7b6p0REw-"},
  {category:"Ficção científica",title:"Transcendence: A Revolução",year:"2014",drive:""},
  {category:"Ficção científica",title:"Prometheus",year:"2012",drive:"115yctfDkTpyuMOa6WvFiKPWuOhfh17an"},
  {category:"Ficção científica",title:"O Dia Depois de Amanhã",year:"2004",drive:"1-KcyTeeWINtsdNoanKCklzPtenQjR2w0"},
  {category:"Ação e suspense",title:"Um Dia de Fúria",year:"1993",drive:"1z6F3DEIpuB75BcK1a5jPBOcDnjUp-wMb"},
  {category:"Ação e suspense",title:"No Limite do Amanhã",year:"2014",drive:"1aXOvvPR17YMMyBAOzbbgwa-7KuweT_MK"},
  {category:"Ação e suspense",title:"Equilibrium",year:"2002",drive:"1_XABfGd_nQ36IcOveiP640_0d3DXoKl_"},
  {category:"Ação e suspense",title:"Oldboy",year:"2003",drive:"13125P2bPZ7J8TiZ3swY8Bwfjb411GA3K"},
  {category:"Terror",title:"REC",year:"2007",drive:"1GhPGZE8QrOpeHPazyINdKO1yyI8wgKrN"},
  {category:"Terror",title:"Hellraiser",year:"2022",drive:"1kFD3ZIejy2uji6ndk_vsNixqSqVnVCNk"},
  {category:"Terror",title:"A Hora do Vampiro",year:"2024",drive:"16kyaGywcUrZ_cay4CcLn-rm3U3iCoPjr"},
  {category:"Terror",title:"Os Garotos Perdidos",year:"1987",drive:"1Bqm3KrAX8VHE8bXUF3q4Xl6EjGBZ94CP"},
  {category:"Reflexivo",title:"Idiocracia",year:"2006",drive:"1g0_RyRj_Nr44niuXl-mc_I8vCSN5gdVu"},
  {category:"Reflexivo",title:"O Show de Truman",year:"1998",drive:"1HSW04G3-v_wTyqyePxjKzPMBzO3N4j_b"},
  {category:"Reflexivo",title:"Dia de Treinamento",year:"2001",drive:"1VPGj38H7wTv_-VqrHxjaSVFpADvugZFH"},
  {category:"Reflexivo",title:"Beleza Americana",year:"1999",drive:"1B53UvU5nZf0uLSI7QmYc9a8pVsqrQ3jw"}
];

const palette=[["#071a2b","#235d91","#1687d1"],["#07111e","#1d4773","#2a78b3"],["#0a1828","#34546d","#4b97c9"],["#07131f","#263f68","#276aa0"],["#061522","#153d5d","#327db5"],["#091526","#214569","#358fc4"]];
const catalogEl=document.querySelector('#catalog');
const search=document.querySelector('#search');
const toast=document.querySelector('#toast');

function showToast(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
function openDrive(id){if(!id){showToast('Este título ainda precisa ter o arquivo associado.');return}window.open(`https://drive.google.com/file/d/${id}/view`,'_blank','noopener')}
function render(query=''){
  const q=query.trim().toLocaleLowerCase('pt-BR');
  const filtered=catalog.filter(m=>!q||`${m.title} ${m.year} ${m.category}`.toLocaleLowerCase('pt-BR').includes(q));
  catalogEl.innerHTML='';
  if(!filtered.length){catalogEl.innerHTML='<div class="empty">Nenhum filme encontrado.</div>';return}
  [...new Set(filtered.map(m=>m.category))].forEach((cat,ci)=>{
    const items=filtered.filter(m=>m.category===cat);
    const section=document.createElement('div');section.className='row';
    section.innerHTML=`<div class="row-title"><h2>${cat}</h2><span>${items.length} títulos</span></div><div class="cards"></div>`;
    const cards=section.querySelector('.cards');
    items.forEach((m,i)=>{
      const [c1,c2,c3]=palette[(i+ci)%palette.length];
      const card=document.createElement('button');card.className='card';
      card.innerHTML=`<div class="card-bg" style="--c1:${c1};--c2:${c2};--c3:${c3};--px:${55+(i%4)*10}%"><div class="card-orb"></div></div><div class="card-info"><div class="card-title">${m.title}</div><div class="card-year">${m.year}</div></div>`;
      card.addEventListener('click',()=>openDrive(m.drive));cards.appendChild(card);
    });
    catalogEl.appendChild(section);
  });
}
search.addEventListener('input',e=>render(e.target.value));
const featured=catalog.find(m=>m.title==='Transcendence: A Revolução');
document.querySelector('#playFeatured').addEventListener('click',()=>openDrive(featured?.drive));
document.querySelector('#moreInfo').addEventListener('click',()=>showToast('Tela de detalhes entra na próxima etapa.'));
document.querySelectorAll('.nav-item').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const a=btn.dataset.action;if(a==='home')window.scrollTo({top:0,behavior:'smooth'});if(a==='movies'){search.value='';render('')}if(a==='categories')catalogEl.scrollIntoView({behavior:'smooth'});if(a==='favorites')showToast('Minha lista entra na próxima etapa.');if(a==='explore')showToast('Explorar entra na próxima etapa.')}));
render();