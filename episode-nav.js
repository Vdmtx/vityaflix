// Navegação interna de episódios sem expor pastas do Google Drive na interface.
let episodeQueue=[];
let episodeIndex=-1;

function playEpisodeSequence(series,season,episodes,index){
  episodeQueue=episodes.map(([title,id])=>({title,drive:id,year:'',category:`${series} • ${season}`}));
  episodeIndex=Math.max(0,Math.min(index,episodeQueue.length-1));
  openPlayer(episodeQueue[episodeIndex]);
  updateEpisodeNav();
}

function updateEpisodeNav(){
  const prev=document.querySelector('#prevEpisode');
  const next=document.querySelector('#nextEpisode');
  if(!prev||!next)return;
  const active=episodeQueue.length>0&&episodeIndex>=0;
  prev.hidden=!active; next.hidden=!active;
  prev.disabled=!active||episodeIndex<=0;
  next.disabled=!active||episodeIndex>=episodeQueue.length-1;
}

function moveEpisode(delta){
  const nextIndex=episodeIndex+delta;
  if(nextIndex<0||nextIndex>=episodeQueue.length)return;
  episodeIndex=nextIndex;
  openPlayer(episodeQueue[episodeIndex]);
  updateEpisodeNav();
}

document.querySelector('#prevEpisode')?.addEventListener('click',()=>moveEpisode(-1));
document.querySelector('#nextEpisode')?.addEventListener('click',()=>moveEpisode(1));

// Série > temporadas > episódios. Pastas sem episódios catalogados não abrem o Drive.
renderSeriesDetail=function(s){
  const details=seriesDetails[s.title]||[];
  seriesView.innerHTML=`<div class="series-detail-head"><button class="back-btn" id="backSeries">← Séries</button><div><span class="eyebrow">SÉRIE</span><h1>${s.title}</h1></div></div><div id="seasonBlocks"></div>`;
  document.querySelector('#backSeries').onclick=()=>renderSeriesList(searchBox.value);
  const holder=seriesView.querySelector('#seasonBlocks');
  if(!details.length){holder.innerHTML='<div class="empty">Episódios ainda não catalogados no Vityaflix.</div>';return;}
  details.forEach(season=>{
    const sec=document.createElement('section'); sec.className='season-block';
    const ready=season.kind==='episodes'&&Array.isArray(season.episodes)&&season.episodes.length;
    sec.innerHTML=`<div class="category-head"><h2>${season.name}</h2><span>${ready?season.episodes.length+' episódios':'aguardando catalogação'}</span></div><div class="movie-list"></div>`;
    const list=sec.querySelector('.movie-list');
    if(ready){
      season.episodes.forEach(([name,id],i)=>{
        const b=document.createElement('button'); b.className='movie-item';
        b.innerHTML=`<div><div class="movie-name">${name}</div><div class="movie-year">${s.title} • ${season.name}</div></div><div class="movie-play">▶ Assistir</div>`;
        b.onclick=()=>playEpisodeSequence(s.title,season.name,season.episodes,i);
        list.appendChild(b);
      });
    }else{
      list.innerHTML='<div class="empty" style="grid-column:1/-1">Esta temporada ainda não tem episódios individualizados no catálogo.</div>';
    }
    holder.appendChild(sec);
  });
};

// Anime > série > episódios. Sem links diretos para pastas.
renderAnimeDetail=function(a){
  animeView.innerHTML=`<div class="series-detail-head"><button class="back-btn" id="backAnime">← Animes</button><div><span class="eyebrow">ANIME</span><h1>${a.title}</h1></div></div><div id="animeEpisodeBlock"></div>`;
  animeView.querySelector('#backAnime').onclick=()=>renderAnimeHome(searchBox.value);
  const holder=animeView.querySelector('#animeEpisodeBlock');
  const special=animeDetails[a.title];
  if(!special||!special.length){holder.innerHTML='<div class="empty">Episódios ainda não catalogados no Vityaflix.</div>';return;}
  const sec=document.createElement('section'); sec.className='season-block';
  sec.innerHTML=`<div class="category-head"><h2>Temporada / Episódios</h2><span>${special.length} episódios</span></div><div class="movie-list"></div>`;
  special.forEach(([name,id],i)=>{
    const b=document.createElement('button'); b.className='movie-item';
    b.innerHTML=`<div><div class="movie-name">${name}</div><div class="movie-year">${a.title}</div></div><div class="movie-play">▶ Assistir</div>`;
    b.onclick=()=>playEpisodeSequence(a.title,'Anime',special,i);
    sec.querySelector('.movie-list').appendChild(b);
  });
  holder.appendChild(sec);
};

// Quando um filme comum é aberto, esconde controles de episódio.
const originalOpenPlayer=openPlayer;
openPlayer=function(movie){
  originalOpenPlayer(movie);
  if(!episodeQueue.some(e=>e.drive===movie?.drive)){
    episodeQueue=[]; episodeIndex=-1;
  }
  updateEpisodeNav();
};
