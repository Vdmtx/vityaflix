// Remove somente duplicatas, preservando sempre a primeira entrada original.
(function(){
  const norm=v=>String(v??'').trim().toLocaleLowerCase('pt-BR');

  function dedupeInPlace(arr,keyFn){
    if(!Array.isArray(arr)) return;
    const seen=new Set();
    const kept=[];
    for(const item of arr){
      const key=keyFn(item);
      if(seen.has(key)) continue;
      seen.add(key);
      kept.push(item);
    }
    arr.splice(0,arr.length,...kept);
  }

  // Listas principais: mantém a primeira ocorrência exatamente como foi cadastrada.
  if(typeof seriesLibrary!=='undefined'){
    dedupeInPlace(seriesLibrary,s=>norm(s?.title));
  }
  if(typeof animeSeries!=='undefined'){
    dedupeInPlace(animeSeries,s=>norm(s?.title));
  }
  if(typeof animeMovies!=='undefined'){
    dedupeInPlace(animeMovies,m=>`${norm(m?.title)}|${norm(m?.year)}`);
  }

  // Episódios de anime em formato simples: mesmo rótulo de episódio = duplicata.
  if(typeof animeDetails!=='undefined' && animeDetails){
    Object.values(animeDetails).forEach(details=>{
      if(Array.isArray(details) && details.every(x=>Array.isArray(x))){
        dedupeInPlace(details,ep=>norm(ep?.[0]));
      } else if(Array.isArray(details)){
        dedupeInPlace(details,season=>norm(season?.name));
        details.forEach(season=>{
          if(Array.isArray(season?.episodes)){
            dedupeInPlace(season.episodes,ep=>norm(ep?.[0]));
          }
        });
      }
    });
  }

  // Séries: mesma temporada fica uma vez; dentro dela, o primeiro episódio original é preservado.
  if(typeof seriesDetails!=='undefined' && seriesDetails){
    Object.values(seriesDetails).forEach(seasons=>{
      if(!Array.isArray(seasons)) return;
      dedupeInPlace(seasons,season=>norm(season?.name));
      seasons.forEach(season=>{
        if(Array.isArray(season?.episodes)){
          dedupeInPlace(season.episodes,ep=>norm(ep?.[0]));
        }
      });
    });
  }
})();
