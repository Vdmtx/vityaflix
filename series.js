const seriesLibrary=[
{title:'Profundezas',year:'2026',folder:'1QrEgu3xPllt8phE7jAHPdX0YWlndZB4i'},
{title:'Silo',folder:'19NQRzaASro4aIsnlLtI9emtX9GmB9Lt3'},
{title:'Travelers',folder:'1tPkNxJqIclk6_AsiE9EcL5f2dENercYG'},
{title:'DARK',folder:'1FnhJqnQ6-5hYMHauol_uRcDjk10Fg4uq'},
{title:'Alien: Earth',folder:'1VimFQQKDsGPgCZ2N9yHwhqaeT13DcLgN'},
{title:'Black Summer',folder:'1QZ2juW7kmoOXfbqRIh2hpzGDitoQS16H'},
{title:'Kingdom',year:'2019',folder:'1cWP5Rg4s1Oaz2oXuYrr_MNHYeUnjLAA4'},
{title:'Terminator Zero',folder:'1-ZuWlFkAohSZg8E7FxWigpUhASzW9vLe'},
{title:'X-Men Evolution',folder:'1DdivG_xb5X5dOinUGAOPNotgl_nTXwjr'},
{title:'X-Men',folder:'xmen-group'},
{title:'Love, Death & Robots',folder:'16L-zZjGLMDcbuyoB4jVtN3hUHQTc4hqH'},
{title:'X-Men ’97',folder:'1gkiR8xH_-t4-NMSIY9dO9riy2Omm3jvX'},
{title:'O Eternauta',year:'2025',folder:'13eksVEijCoI2dsyxrGPLpnrsrSe8THTb'},
{title:'O Problema dos 3 Corpos — versão chinesa',folder:'1qu45xALogqEH2kMUjaHYgHPcdGYYP2rg'},
{title:'Emergência Radioativa: Césio 137',folder:'1PuFBnHAw9eXmAML4pWbThT1HhH5YKhFx'},
{title:'Altered Carbon',folder:'1hiDfjNkhF5nSfsrwx6iUBaCgEQbvnDsT'},
{title:'Pluribus',folder:'1AUdy_TMIGArudFHhBMEwnVk0AKTw-ArJ'}
].sort((a,b)=>a.title.localeCompare(b.title,'pt-BR'));

const seriesDetails={
'DARK':[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['Episódio 01 — Secrets','1t7pmagMfe42paT4H5JiFKydEsj85Jn5x'],
  ['Episódio 02 — Lies','1-H1TlKXw0FmKshJEg2g5aCwhr2uo_9pg'],
  ['Episódio 03 — Past and Present','1USqMmvOotG2Tv0pyFqp_Trvmmv5cZwPm'],
  ['Episódio 04 — Double Lives','1Fsp-HNxP3gQx09UUHL0JTb8BnM_jLcPn'],
  ['Episódio 05 — Truths','1pubu88b0YrJB94MJczl1R6_kN2a1JLfj'],
  ['Episódio 06 — Sic Mundus Creatus Est','1krHg_JP5v5ytxC1C-Ijs_BWGAclEUNPS'],
  ['Episódio 07 — Crossroads','1uxr1lWkCkscRnFRqVLLd179sUea9rwSm'],
  ['Episódio 08 — As You Sow, So You Shall Reap','1c4mqyCTadBK_Fq_fArZc_XVyBU8wkFF6'],
  ['Episódio 09 — Everything Is Now','1mHnmjOyvsgUnG0uPxBaFQ59Qip0ZxsOt'],
  ['Episódio 10 — Alpha and Omega','1nBSRi1CycUJHNMnGFp9AzxoZDt4L_dum']
 ]},
 {name:'Temporada 2',kind:'folder',id:'1uZO-TmEpdBY6iNBTtJx5BUEVtKYdYzo6'},
 {name:'Temporada 3',kind:'folder',id:'1CcnJjWbzuiqfXkIHZWVRMGZLJK_GhR0d'}
],
'Black Summer':[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['Episódio 01','10Rg4l-S0OVSnDaXSYkRthun-W5sRJvH1'],['Episódio 02','1mbxfvLibKdL4y_3XmUD_TVmgaK_Wl7CC'],['Episódio 03','1RFcS00tGlLqUaDy2wYEctYsPufZpBKEY'],['Episódio 04','1zv5V1HoFJ-rEarKumhPnNzt-jdaHv1Hx'],['Episódio 05','1iOm_ILItj_HJ2FfF6Ln9nxTr7-mPLiyE'],['Episódio 06','1n1_p9_saeTzoFeHr7CEcd31X9nEyiqzN'],['Episódio 07','1PesVy9iAnT148QlduW1YEZCAHPGsjJ7q'],['Episódio 08','1m5HGtKq8mroaLsWvWdZIKvvjM-O6R6ee']
 ]},
 {name:'Temporada 2',kind:'folder',id:'1lGRya2YGT6Nf9bbdOI3QqvhJmJE7nfdy'}
],
'X-Men':[
 {name:'Volume 01',kind:'folder',id:'1YaAEuj91tepabZjG4jlf_yJds1W2Rkgz'},
 {name:'Volume 02',kind:'folder',id:'1Ls7UI90r4dRc1bwjqVsG0FoDbwXW5V_x'},
 {name:'Volume 03',kind:'folder',id:'1J6sb0rRaQEUmGvgHIXz9Krb0vDThI9h6'},
 {name:'Volume 04',kind:'folder',id:'1mBjn6aDiYyimtHlbLa7SCAeFDqQoHaKJ'}
]
};

const seriesView=document.querySelector('#seriesView');
const movieCatalog=document.querySelector('#catalog');
const hero=document.querySelector('.hero');
const searchBox=document.querySelector('#search');
let seriesMode=false;

function folderUrl(id){return `https://drive.google.com/drive/folders/${id}`}
function episodeMovie(title,id,series,season){return {title,drive:id,year:'',category:`${series} • ${season}`}}
function showMoviesView(){seriesMode=false;seriesView.hidden=true;movieCatalog.hidden=false;hero.hidden=false;searchBox.placeholder='Buscar filmes...'}
function showSeriesView(){seriesMode=true;hero.hidden=true;movieCatalog.hidden=true;seriesView.hidden=false;searchBox.value='';searchBox.placeholder='Buscar séries...';renderSeriesList()}
function renderSeriesList(query=''){
 const q=query.trim().toLocaleLowerCase('pt-BR');
 const list=seriesLibrary.filter(s=>!q||s.title.toLocaleLowerCase('pt-BR').includes(q));
 seriesView.innerHTML=`<div class="library-title"><div><span class="eyebrow">BIBLIOTECA</span><h1>Séries</h1></div><span>${list.length} séries</span></div><div class="series-grid"></div>`;
 const grid=seriesView.querySelector('.series-grid');
 list.forEach(s=>{const b=document.createElement('button');b.className='series-card';b.innerHTML=`<div><strong>${s.title}</strong><small>${s.year||'Série'}</small></div><span>Ver temporadas ›</span>`;b.onclick=()=>renderSeriesDetail(s);grid.appendChild(b)});
}
function renderSeriesDetail(s){
 const details=seriesDetails[s.title]||[{name:'Episódios',kind:'folder',id:s.folder}];
 seriesView.innerHTML=`<div class="series-detail-head"><button class="back-btn" id="backSeries">← Séries</button><div><span class="eyebrow">SÉRIE</span><h1>${s.title}</h1></div></div><div id="seasonBlocks"></div>`;
 document.querySelector('#backSeries').onclick=()=>renderSeriesList(searchBox.value);
 const holder=seriesView.querySelector('#seasonBlocks');
 details.forEach(season=>{
   const sec=document.createElement('section');sec.className='season-block';
   sec.innerHTML=`<div class="category-head"><h2>${season.name}</h2><span>${season.kind==='episodes'?season.episodes.length+' episódios':'pasta da temporada'}</span></div><div class="movie-list"></div>`;
   const list=sec.querySelector('.movie-list');
   if(season.kind==='episodes') season.episodes.forEach(([name,id])=>{const b=document.createElement('button');b.className='movie-item';b.innerHTML=`<div><div class="movie-name">${name}</div><div class="movie-year">${s.title}</div></div><div class="movie-play">▶ Assistir</div>`;b.onclick=()=>openPlayer(episodeMovie(name,id,s.title,season.name));list.appendChild(b)});
   else {const b=document.createElement('button');b.className='movie-item';b.innerHTML=`<div><div class="movie-name">Abrir ${season.name}</div><div class="movie-year">Google Drive</div></div><div class="movie-play">Abrir ›</div>`;b.onclick=()=>window.open(folderUrl(season.id),'_blank','noopener');list.appendChild(b)}
   holder.appendChild(sec);
 });
}

document.querySelectorAll('.nav-item').forEach(btn=>{
 btn.addEventListener('click',()=>{
   if(btn.dataset.action==='series') showSeriesView();
   if(['home','movies','categories'].includes(btn.dataset.action)) showMoviesView();
 });
});
searchBox.addEventListener('input',e=>{if(seriesMode){e.stopImmediatePropagation();renderSeriesList(e.target.value)}},true);
