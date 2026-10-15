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

const animeMovies=[
{title:'Outlanders',year:'1986',drive:'1p2U--nvkxwI7AlnxaqIs2V-_MBMvm0Z4'},
{title:'Genius Party Beyond',year:'2008',drive:'1u_U_n-r59jnmDLun7tNysPYtHOXf5oMx'},
{title:'Memories',year:'1995',drive:'1-iVlGaUyf0M7kj6a_Ak2h3Edufuq2vkC'},
{title:'A Wind Named Amnesia',year:'1990',drive:'1k9JwLLKJilplBb2fqgxgaF9-VVhofPzY'},
{title:'Black Magic M-66',year:'1987',drive:'1R_uqSXLa709FsudY4-Gx8vrO87Win-Gp'},
{title:'Shin Megami Tensei: Tokyo Revelation',year:'1995',drive:'1qqN_qjlYXslCF36zCdnpTqtmxx3_FR8T'},
{title:'Digital Devil Story',year:'',drive:'1Qcnx6qIN9IlZZYHnuaP6AIklHf5KLjQ1'},
{title:'Paprika',year:'2006',drive:'1tScZNtPwCJo7lx_8L3wnzqvHMxUd2czv'},
{title:'Patlabor 2: The Movie',year:'1993',drive:'1xMyUAQrwP5DaQaSLnVJMlI7g8MZghswT'},
{title:'Shoujo Tsubaki',year:'',drive:'1UcHyHfgIwa0ed8MLymNwQjB50qUxQ2MS'},
{title:'Kite: Director’s Cut',year:'',drive:'1oZ6yt50BMvRI5svR3Bf0LepeAzGCWsM4'},
{title:'Perfect Blue',year:'1997',drive:'1E-4yh-yI5B9i1XfgFvmmn5GJgtQivAPD'},
{title:'Wicked City',year:'1987',drive:'1adJsLsg3QsTpbzVVXq2C5z-TLHCnFfVW'}
].sort((a,b)=>a.title.localeCompare(b.title,'pt-BR'));

const animeSeries=[
{title:'Cross Ange',folder:'12eb2WailY_XpTqvM4TfPOBEhvEF2VpMh'},
{title:'School Days',folder:'1AXJUgp4iQAvZP7fOZ7mjmjIkyfROnyEZ'},
{title:'Freezing',folder:'1dHSvT8K5Gye_bDQvHRakBNE0HNLjdx6V'},
{title:'Castlevania',folder:'1Qt6J4_Uy2oUUAdnaj3w6opuMQcbJfVbB'},
{title:'Blood+',folder:'1hviWemtPwHsbi2dTUcOAeA8EC6ZTtYAJ'},
{title:'Blood-C',folder:'15jD3KpCVkINbQ8tbKTdonPp0xF8fvHFB'},
{title:'Mahou Shoujo ni Akogarete',folder:'1kvXdX2mPVw1L-enF7inKNVyknQsc3TGS'},
{title:'Mahou Shoujo Ore',folder:'1cq10K9z9Fsg7AMTCbDP7fOWJg9Pq9MH2'},
{title:'Uzumaki',folder:'1ZgjUhe2fsR-o17Jpl-j-6eru7bca4qDA'},
{title:'Zillion',folder:'1LXp7UrXEufEQTzXf7PBTMtpvNwXeLqcw'},
{title:'Boogiepop and Others',folder:'1FvNDj0yvKYoNXcMuJD0sw8pGQVpAr_EI'},
{title:'Boogiepop Phantom',folder:'1_e6yjPkeZrrGAcM1nl0Ej0YH6iv75t3I'},
{title:'Macross Plus',folder:'1jydmqtfvQWoUcH3QlqE56SZKWCtc0jSu'},
{title:'Texhnolyze',folder:'16gSqmwkfL2V9l6YWloS9lT9SdM6cTEVp'},
{title:'Vivy: Fluorite Eye’s Song',folder:'1N0sbuNlesqgW7FiwxLxU4z2xipz1Czw4'},
{title:'Shiki',folder:'1X69xg0INbD4AHdianuBZRZB5L5z21HzR'},
{title:'Blue Gender',folder:'1S1cQI---Wj9UbA2yy0jOWvGXQOIjsgyf'},
{title:'Angel Cop',folder:'14bfh4hh7Bukbix4nXK1NC1dB8sRkNmt4'},
{title:'Tokyo Ghoul',folder:'1SjgiGk2FkmG54xLPcmEKoUOHpjVU2SIz'},
{title:'Jigoku Shoujo',folder:'1lpm5F4LLBPN5rpb8bqz9UHlk2LJgcLKl'},
{title:'Death Note',folder:'1zBU5r8ZnLY2hMSTHL3c52T57DP6TRf6g'},
{title:'Steins;Gate',folder:'1053bweaMVm4RaO1jC34wGxhNaEMgVUgp'},
{title:'Kuzu no Honkai',folder:'1E-UpDJDhFspcVPciayGu7whnUzz3I00r'},
{title:'Higurashi no Naku Koro ni',folder:'143uvLmm2EChKF0o7GXRtN95t7KMCOsGX'},
{title:'Claymore',folder:'1gNdr1tJozLY5G9bsWCmfpjZtfK6sbmWs'},
{title:'Summertime Render',folder:'1Ia1fGkBy7WyNfs1psrDa97zPBxkkOc-F'},
{title:'Mirai Nikki',folder:'1g-BtVNY2G0Lkr_1H3CtgzSK8jptlLAdK'},
{title:'Citrus',folder:'18Y__wv_ydmRLaFGd7SOd99d-awe0dmYd'},
{title:'Japan Sinks',folder:'1_t8XxSK6EM73uRY5C3AMjRrbJsltilSs'},
{title:'Junji Ito Maniac',folder:'1CuN_8x0GfL6m3ALEdl_GE7FVa9aCu6JD'},
{title:'Kiseiju',folder:'10yYphzr07YXQuHYF_8nMhIBd3mB1iqeG'},
{title:'KonoSuba',folder:'1ZBtLqurojc58ohyjwAx50--rjcXUvXzu'},
{title:'Madoka Magica',folder:'1qag3hgttodQQyxUojE3g6xc_Jq86dhEv'},
{title:'Elfen Lied',folder:'1j8JuAvJDfbnceug3Tl_nfVMYYxw7jw3y'},
{title:'Babylon',folder:'1RcYQiMeQSJ5Hdw4QQpkZPNZsY79mJP_q'},
{title:'Berserk',folder:'1ymO10IyHINueohHQED9NPD9s8oVG2uZH'},
{title:'Darker than Black',folder:'1t0OaGuEkv_kOT4d02xECLVbcimvFCsuo'},
{title:'Goblin Slayer',folder:'1D4gjnyO2uAM1qcX8xNSqhW99SMm9sxr7'},
{title:'Hellsing Ultimate',folder:'16WYeLjvXmDifVOpzhM4lv4stMNMxnCPJ'},
{title:'Inuyashiki',folder:'1Y8BW2Mq1EmRt6yH0J99nIprojtsMQRPa'},
{title:'Monster',folder:'1MoOWLnnkWMBptXeEo-bCrYuWN_aUZcfp'}
].sort((a,b)=>a.title.localeCompare(b.title,'pt-BR'));

const animeDetails={
'Gakkou no Yuurei':[
 ['Episódio 01','1PEbIUfEPulPERTTDTetDUo1chfEv985E'],
 ['Episódio 02','1-mHEiddIpNFtXM1JfCTa6q0x3vFzQTbD'],
 ['Episódio 03','1-XtrceDdVowJnXAJIvbRgqvt80F_hCAL'],
 ['Episódio 04','1XQHg_QWeAlAoUKlqf6_Z2_4ch8l6oAnq'],
 ['Episódio 05','1y5HgExYPbJe5v6jMDHEgBoEpm9i8jq6T'],
 ['Episódio 06','1p8RvenRUiwj37G9bK1Xq4LCWrJFkb16X']
]};
animeSeries.push({title:'Gakkou no Yuurei',special:true});
animeSeries.sort((a,b)=>a.title.localeCompare(b.title,'pt-BR'));

const seriesDetails={
'DARK':[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['Episódio 01 — Secrets','1t7pmagMfe42paT4H5JiFKydEsj85Jn5x'],['Episódio 02 — Lies','1-H1TlKXw0FmKshJEg2g5aCwhr2uo_9pg'],['Episódio 03 — Past and Present','1USqMmvOotG2Tv0pyFqp_Trvmmv5cZwPm'],['Episódio 04 — Double Lives','1Fsp-HNxP3gQx09UUHL0JTb8BnM_jLcPn'],['Episódio 05 — Truths','1pubu88b0YrJB94MJczl1R6_kN2a1JLfj'],['Episódio 06 — Sic Mundus Creatus Est','1krHg_JP5v5ytxC1C-Ijs_BWGAclEUNPS'],['Episódio 07 — Crossroads','1uxr1lWkCkscRnFRqVLLd179sUea9rwSm'],['Episódio 08 — As You Sow, So You Shall Reap','1c4mqyCTadBK_Fq_fArZc_XVyBU8wkFF6'],['Episódio 09 — Everything Is Now','1mHnmjOyvsgUnG0uPxBaFQ59Qip0ZxsOt'],['Episódio 10 — Alpha and Omega','1nBSRi1CycUJHNMnGFp9AzxoZDt4L_dum']
 ]},
 {name:'Temporada 2',kind:'folder',id:'1uZO-TmEpdBY6iNBTtJx5BUEVtKYdYzo6'},
 {name:'Temporada 3',kind:'folder',id:'1CcnJjWbzuiqfXkIHZWVRMGZLJK_GhR0d'}
],
'Black Summer':[
 {name:'Temporada 1',kind:'episodes',episodes:[['Episódio 01','10Rg4l-S0OVSnDaXSYkRthun-W5sRJvH1'],['Episódio 02','1mbxfvLibKdL4y_3XmUD_TVmgaK_Wl7CC'],['Episódio 03','1RFcS00tGlLqUaDy2wYEctYsPufZpBKEY'],['Episódio 04','1zv5V1HoFJ-rEarKumhPnNzt-jdaHv1Hx'],['Episódio 05','1iOm_ILItj_HJ2FfF6Ln9nxTr7-mPLiyE'],['Episódio 06','1n1_p9_saeTzoFeHr7CEcd31X9nEyiqzN'],['Episódio 07','1PesVy9iAnT148QlduW1YEZCAHPGsjJ7q'],['Episódio 08','1m5HGtKq8mroaLsWvWdZIKvvjM-O6R6ee']]},
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
const animeView=document.querySelector('#animeView');
const movieCatalog=document.querySelector('#catalog');
const hero=document.querySelector('.hero');
const searchBox=document.querySelector('#search');
let mediaMode='movies';

function folderUrl(id){return `https://drive.google.com/drive/folders/${id}`}
function episodeMovie(title,id,series,season){return {title,drive:id,year:'',category:`${series} • ${season}`}}
function setActive(action){document.querySelectorAll('.nav-item').forEach(x=>x.classList.toggle('active',x.dataset.action===action))}
function showMoviesView(){mediaMode='movies';seriesView.hidden=true;animeView.hidden=true;movieCatalog.hidden=false;hero.hidden=false;searchBox.placeholder='Buscar filmes...';setActive('movies')}
function showSeriesView(){mediaMode='series';hero.hidden=true;movieCatalog.hidden=true;animeView.hidden=true;seriesView.hidden=false;searchBox.value='';searchBox.placeholder='Buscar séries...';setActive('series');renderSeriesList()}
function showAnimeView(){mediaMode='anime';hero.hidden=true;movieCatalog.hidden=true;seriesView.hidden=true;animeView.hidden=false;searchBox.value='';searchBox.placeholder='Buscar animes...';setActive('anime');renderAnimeHome()}

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

function renderAnimeHome(query=''){
 const q=query.trim().toLocaleLowerCase('pt-BR');
 const films=animeMovies.filter(a=>!q||a.title.toLocaleLowerCase('pt-BR').includes(q));
 const shows=animeSeries.filter(a=>!q||a.title.toLocaleLowerCase('pt-BR').includes(q));
 animeView.innerHTML=`<div class="library-title"><div><span class="eyebrow">BIBLIOTECA</span><h1>Animes</h1></div><span>${films.length+shows.length} títulos</span></div><section class="category"><div class="category-head"><h2>Filmes / OVAs</h2><span>${films.length} títulos</span></div><div class="movie-list" id="animeFilms"></div></section><section class="category"><div class="category-head"><h2>Séries</h2><span>${shows.length} séries</span></div><div class="series-grid" id="animeShows"></div></section>`;
 const filmList=animeView.querySelector('#animeFilms');
 films.forEach(a=>{const b=document.createElement('button');b.className='movie-item';b.innerHTML=`<div><div class="movie-name">${a.title}</div><div class="movie-year">${a.year||'Anime'}</div></div><div class="movie-play">▶ Assistir</div>`;b.onclick=()=>openPlayer({title:a.title,year:a.year,category:'Anime • Filme / OVA',drive:a.drive});filmList.appendChild(b)});
 const showGrid=animeView.querySelector('#animeShows');
 shows.forEach(a=>{const b=document.createElement('button');b.className='series-card';b.innerHTML=`<div><strong>${a.title}</strong><small>Série de anime</small></div><span>Ver episódios ›</span>`;b.onclick=()=>renderAnimeDetail(a);showGrid.appendChild(b)});
}
function renderAnimeDetail(a){
 animeView.innerHTML=`<div class="series-detail-head"><button class="back-btn" id="backAnime">← Animes</button><div><span class="eyebrow">ANIME</span><h1>${a.title}</h1></div></div><div id="animeEpisodeBlock"></div>`;
 animeView.querySelector('#backAnime').onclick=()=>renderAnimeHome(searchBox.value);
 const holder=animeView.querySelector('#animeEpisodeBlock');
 const special=animeDetails[a.title];
 if(special){
   const sec=document.createElement('section');sec.className='season-block';sec.innerHTML=`<div class="category-head"><h2>Episódios</h2><span>${special.length} episódios</span></div><div class="movie-list"></div>`;
   special.forEach(([name,id])=>{const b=document.createElement('button');b.className='movie-item';b.innerHTML=`<div><div class="movie-name">${name}</div><div class="movie-year">${a.title}</div></div><div class="movie-play">▶ Assistir</div>`;b.onclick=()=>openPlayer(episodeMovie(name,id,a.title,'Anime'));sec.querySelector('.movie-list').appendChild(b)});holder.appendChild(sec);
 }else{
   holder.innerHTML=`<section class="season-block"><div class="category-head"><h2>Episódios / Temporadas</h2><span>Google Drive</span></div><div class="movie-list"><button class="movie-item" id="openAnimeFolder"><div><div class="movie-name">Abrir pasta da série</div><div class="movie-year">Google Drive</div></div><div class="movie-play">Abrir ›</div></button></div></section>`;
   animeView.querySelector('#openAnimeFolder').onclick=()=>window.open(folderUrl(a.folder),'_blank','noopener');
 }
}

document.querySelectorAll('.nav-item').forEach(btn=>{
 btn.addEventListener('click',()=>{
   const action=btn.dataset.action;
   if(action==='series') showSeriesView();
   else if(action==='anime') showAnimeView();
   else if(['home','movies','categories'].includes(action)){showMoviesView();if(action==='home')setActive('home');if(action==='categories')setActive('categories')}
 });
});
searchBox.addEventListener('input',e=>{
 if(mediaMode==='series'){e.stopImmediatePropagation();renderSeriesList(e.target.value)}
 if(mediaMode==='anime'){e.stopImmediatePropagation();renderAnimeHome(e.target.value)}
},true);
