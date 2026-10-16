// Sexta etapa do pente-fino dos animes.
// Inclui somente itens confirmados dentro da raiz autorizada de animes e descendentes.
// Pastas com conteúdo estranho ou misturado continuam fora até revisão manual.

function addAnimeSeriesOnce(title, folder){
  if(!animeSeries.some(item=>item.title===title)) animeSeries.push({title,folder});
}
function addAnimeMovieOnce(title, year, drive){
  if(!animeMovies.some(item=>item.title===title)) animeMovies.push({title,year,drive});
}

// Filmes/OVAs avulsos encontrados no pente-fino de subpastas.
addAnimeMovieOnce('Aru Zombie Shoujo no Sainan','2018','1Ln-TKSZtQcgu9Av7kJlY_bVdEBnv8E2T');
addAnimeMovieOnce('The Empire of Corpses','2015','11YSkoKayjnknLmc3vR_E6jwPHWoAuI4c');
addAnimeMovieOnce('Macross: Do You Remember Love?','1984','1Bj53ou5RysJPZdRJ2MW96yU1reZSp7ud');

// Séries que existiam no Drive mas ainda não apareciam na interface principal.
addAnimeSeriesOnce('Sirius','1RqiLafYN3O4wHrMx-TxzyWz7cC8C0U4r');
addAnimeSeriesOnce('Kaifuku Jutsushi no Yarinaoshi','1Tb_jnl6yQaueoKW7zC79kvKAgQmraqD_');
addAnimeSeriesOnce('Dance in the Vampire Bund','1iPAxQ8kt-EqQQ8Fu9uihGtN5MnNKoxav');
addAnimeSeriesOnce('Jigokuraku','15DzDMaKz-jQfwSV20zGUW4s1VGlXRwbX');
addAnimeSeriesOnce('Vanitas no Karte','1Y01YaS0ljIfaM8kbvbwZadXY_NB9Euau');
addAnimeSeriesOnce('Hige wo Soru. Soshite Joshikousei wo Hirou.','1Yj9dEwTIWvCcqtgc93trCALykkWpYoTc');
addAnimeSeriesOnce('Tenkuu Shinpan','1SuwaNHrSDWxfkceN6rTjUX_WWtPU4rux');
addAnimeSeriesOnce('Tengoku Daimakyou','14-P-lsAqUTtvvXsPXpMRbUUTy9nT8ZRM');
addAnimeSeriesOnce('Takopii no Genzai','1qtKIbjt9oKUV1ApVK3JeacbPqb64ThbG');
addAnimeSeriesOnce('Munou na Nana','1xcF4IE6jO5xBZ4GCbkCwblVmGi3FqSai');
addAnimeSeriesOnce('Kono Yo no Hate de Koi wo Utau Shoujo YU-NO','1bWMRw7EG1Rz1DxiMqPQayoYuRxFb6dNq');
addAnimeSeriesOnce('Yugo the Negotiator','188OKb3b6mPoesuBcRrmxyZNWhQLQjKq7');
addAnimeSeriesOnce('Ah! My Goddess (OVA)','1tReEVH_GuI7L-jt7ZmZiw6Z5oSfaKpKY');
addAnimeSeriesOnce('Island','1nhv9Mtx3QbOCH63S4UDgcnfn5PIlGOwd');

animeDetails['Sirius']=[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['S01E01-The Revenant Howls in Darkness [6189E323].mkv','1MR46ZB0hdG99T53-iORxhLWAhzIHEMtW'],
  ['S01E02-Deprived Talent [1C971369].mkv','1NnGANRFzEOFLMVxo1xNpvmz1djMFnaJm'],
  ['S01E03-Indelible Memories [7F0E28F4].mkv','1hLzCXNP-0pHScfU8iIcKUkxOftkXubt0'],
  ['S01E04-Beginning of Trickery [132FE3AA].mkv','1c63K3HGo5FQ0OK6GlRpbl5_J5X2eLMiK'],
  ['S01E05-The Frankenstein [D50C03CA].mkv','1qjgr_9jzDrRYh99MDXNrgpDfUPDw_lVX'],
  ['S01E06-Mockingbird\'s Song [6AA2C128].mkv','16TgGHzL9vfx5X3ubIkRh-aSlKlALhOs0'],
  ['S01E07-True Confession [7E050C40].mkv','1s9wxI9pvXI0VEiDc6GpWGlYj-2Dj0-rd'],
  ['S01E08-The Sanctuary of Sirius [F2E7F320].mkv','1Q4cUFRgttX2A3MUYnoogj8wD0yH64zFr'],
  ['S01E09-Father\'s Shadow [2C761B40].mkv','19tRkT26IBFBEZ1A21zuO3KLsmVdSYGee'],
  ['S01E10-Memories of the Abyss [E0BBACC2].mkv','1QOhu8EWVxabE6E8npmLii7uWugKGzZ0s'],
  ['S01E11-Calling in Blood [314E2A0A].mkv','1LKIDyC6EuC6ClyZjDbP665-lhyyO5Cge'],
  ['S01E12-The Ark of Sirius [9063082F].mkv','1a5y0rrxU2KHqV23e3rJiYD6Q_qTV99cy']
 ]}
];

animeDetails['Kaifuku Jutsushi no Yarinaoshi']=[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['[SSA] Kaifuku Jutsushi no Yarinaoshi - 01 [Uncensored][1080p].mkv','1SVWd7Yoemz5hQ4FAZBh9O-MG7Lx-LVO3'],
  ['[SSA] Kaifuku Jutsushi no Yarinaoshi - 02 [Uncensored][1080p].mkv','1I-OnMNO3aMCOrkgaH56qsmWq0U4zCj3B'],
  ['[SSA] Kaifuku Jutsushi no Yarinaoshi - 03 [Uncensored][1080p].mkv','1hr-bh5rork014CMp4ITtMNWZllUPOOTg'],
  ['[SSA] Kaifuku Jutsushi no Yarinaoshi - 04 [Uncensored][1080p].mkv','1RjKN7gBZlLjv0FH-Y7aMGeP_cOkgrgeS'],
  ['[SSA] Kaifuku Jutsushi no Yarinaoshi - 05 [Uncensored][1080p].mkv','1ozwsWhDBe48S6rw1CDtv7dVI4YcU3P4y'],
  ['[SSA] Kaifuku Jutsushi no Yarinaoshi - 06 [Uncensored][1080p].mkv','1IyxYMHs54XGmOLyn4CPH4RlYGH7JyDug'],
  ['[SSA] Kaifuku Jutsushi no Yarinaoshi - 07 [Uncensored][1080p].mkv','1MK4k2Q5Mm2XHceSsyToCk4JpdN6zqi33'],
  ['[SSA] Kaifuku Jutsushi no Yarinaoshi - 08 [Uncensored][1080p].mkv','1gfT9slJXMiAXBXzQgE7XTPKgK2D4RrpZ'],
  ['[SSA] Kaifuku Jutsushi no Yarinaoshi - 09 [Uncensored][1080p].mkv','1GvsQESuTznvq8QWWXIvkJZnEOkPfPDJ9'],
  ['[SSA] Kaifuku Jutsushi no Yarinaoshi - 10 [Uncensored][1080p].mkv','1voiqcbyAShBg4IEJhfZ9FrxlsqB8mMUt'],
  ['[SSA] Kaifuku Jutsushi no Yarinaoshi - 11 [Uncensored][1080p].mkv','1mRectl4-faVifkFUtbeRStd4jXEDtN31'],
  ['[SSA] Kaifuku Jutsushi no Yarinaoshi - 12 [Uncensored][1080p].mkv','1oiDL6TetrBVom8KidZ94-d2h9Tv3sCwU']
 ]}
];

animeDetails['Dance in the Vampire Bund']=[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['[SFW-Chihiro]_Dance_in_the_Vampire_Bund_-_01_[1920x1080_Blu-ray_FLAC][E3D624E9].mkv','1D5DKRkQDvlY9C43oIEraU8z5oCqFgfS7'],
  ['[SFW-Chihiro]_Dance_in_the_Vampire_Bund_-_02_[1920x1080_Blu-ray_FLAC][C1FA0A09].mkv','1EkDflrw-CNt1Zls3i85fAW95cneTezdW'],
  ['[SFW-Chihiro]_Dance_in_the_Vampire_Bund_-_03_[1920x1080_Blu-ray_FLAC][79F93311].mkv','1AGnNFCPjEJypV2BRVNilaC8YxZg01-3R'],
  ['[SFW-Chihiro]_Dance_in_the_Vampire_Bund_-_04_[1920x1080_Blu-ray_FLAC][92F3B09E].mkv','1NgJpoLDgVCdqBVbBlFC4b2r8NxDiXBpQ'],
  ['[SFW-Chihiro]_Dance_in_the_Vampire_Bund_-_05_[1920x1080_Blu-ray_FLAC][34FDF593].mkv','18s2CeKScAL75dFqozuqA6FGHkQzD6msN'],
  ['[SFW-Chihiro]_Dance_in_the_Vampire_Bund_-_06_[1920x1080_Blu-ray_FLAC][3D2EB000].mkv','1jK0iHgqynL7YfHwuzE2fY-XEk-8QDLbP'],
  ['[SFW-Chihiro]_Dance_in_the_Vampire_Bund_-_07_[1920x1080_Blu-ray_FLAC][159164C5].mkv','1ikGlmc3HufJ9MYRWNMBjNnnlp7n1NBgm'],
  ['[SFW-Chihiro]_Dance_in_the_Vampire_Bund_-_08_[1920x1080_Blu-ray_FLAC][9123C860].mkv','134Jl7OPFQ9sA0HS_TTEVOFw7jLmcui-P'],
  ['[SFW-Chihiro]_Dance_in_the_Vampire_Bund_-_09_[1920x1080_Blu-ray_FLAC][124D5296].mkv','11Gzb3BEUSCqMe_trWlnbv2c4S_iYvaCk'],
  ['[SFW-Chihiro]_Dance_in_the_Vampire_Bund_-_10_[1920x1080_Blu-ray_FLAC][95E4597A].mkv','1ACJqXTQNRKk-wd2OfXsQY_SQElAvOhIC'],
  ['[SFW-Chihiro]_Dance_in_the_Vampire_Bund_-_11_[1920x1080_Blu-ray_FLAC][5001C9EC].mkv','1pt76iXOwj2oxN-aDZsjGFZqnBdqDB8Zh'],
  ['[SFW-Chihiro]_Dance_in_the_Vampire_Bund_-_12_[1920x1080_Blu-ray_FLAC][2F6DBC66].mkv','1tq2QSgup7lKTtjPKzarL0HFZ41pvKMgJ']
 ]}
];

animeDetails['Jigokuraku']=[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['[Judas] Jigokuraku - S01E01v2.mkv','17x-KGdCxeqZ8lB4W6LCidAaOwjLLhzEB'],
  ['[Judas] Jigokuraku - S01E02v2.mkv','1M4UvRyWTITe6LcW-QB6MX0qjiEDel2lJ'],
  ['[Judas] Jigokuraku - S01E03v2.mkv','13fGTEBrEqlqzk1Iamg4SnpCtLubH3OaK'],
  ['[Judas] Jigokuraku - S01E04v2.mkv','1K3HxhjnroKk6xYFIvWHtQev0TPAPn9aV'],
  ['[Judas] Jigokuraku - S01E05v2.mkv','10bLjCgPkPlASGPvePR_73Aq_JWvCilv-'],
  ['[Judas] Jigokuraku - S01E06v2.mkv','10uCPX8G3wDkyilOg7Il2Rrh1TZ_StObZ'],
  ['[Judas] Jigokuraku - S01E07v2.mkv','1cbhWuJQui-MBBJYDK2HKq-VYi_RYHMgq'],
  ['[Judas] Jigokuraku - S01E08v2.mkv','1Hi1CW_7DH5QRwDUCQ0NjqOAUu20txfB2'],
  ['[Judas] Jigokuraku - S01E09v2.mkv','142lUs_fqhp-qhq6QDalup5ncuRjXPUxu'],
  ['[Judas] Jigokuraku - S01E10v2.mkv','1HiRCMU0HkvqjYJGbNabxPMNhh5PQKVsO'],
  ['[Judas] Jigokuraku - S01E11v2.mkv','12sgKj-x8HbGAzbNbk4HcyMxYRajBmvBK'],
  ['[Judas] Jigokuraku - S01E12v2.mkv','1rN7D6BEMfEcpD8SNtWs_6EGsQ5GSm-7o'],
  ['[Judas] Jigokuraku - S01E13v2.mkv','1rVKWp9A1b8AzjU49iq8D54U-3wvcdKr5']
 ]}
];

animeDetails['Vanitas no Karte']=[
 {name:'Parte 1',kind:'episodes',episodes:[
  ['[DB]Vanitas no Karte_-_01_(Dual Audio_10bit_BD1080p_x265).mkv','1C5k88meJPxsYohE2u3fSbNw7WGy5aGj_'],
  ['[DB]Vanitas no Karte_-_02_(Dual Audio_10bit_BD1080p_x265).mkv','1Hm6ohHQzzg4S6TPtzgR-98wgkHwy5IDr'],
  ['[DB]Vanitas no Karte_-_03_(Dual Audio_10bit_BD1080p_x265).mkv','1Cd6ebEI422uqcHaJxfbnIIyMKWstDBs4'],
  ['[DB]Vanitas no Karte_-_04_(Dual Audio_10bit_BD1080p_x265).mkv','1_SNetJOJc3KI6ZwfUo4IoAz5lebJAhpT'],
  ['[DB]Vanitas no Karte_-_05_(Dual Audio_10bit_BD1080p_x265).mkv','1pZp1nGDjQazCYJai4A1av-Fh5Mfm6wYc'],
  ['[DB]Vanitas no Karte_-_06_(Dual Audio_10bit_BD1080p_x265).mkv','10P9S8i9WyGmlBYhj3oRyM6QsM0HEhxos'],
  ['[DB]Vanitas no Karte_-_07_(Dual Audio_10bit_BD1080p_x265).mkv','14Y2mXFvLmqGqbJs-RKdLggrijRL5RfQd'],
  ['[DB]Vanitas no Karte_-_08_(Dual Audio_10bit_BD1080p_x265).mkv','1euOlXDS7ZBMiYi6k49ZuH7pOPQX2rg1x'],
  ['[DB]Vanitas no Karte_-_09_(Dual Audio_10bit_BD1080p_x265).mkv','1Roa14WzkbKp9IQ7OOkBLYIw9OikUO0Ub'],
  ['[DB]Vanitas no Karte_-_10_(Dual Audio_10bit_BD1080p_x265).mkv','16YENG6Enlnub6Ge15N3sQyhceG-puTpU'],
  ['[DB]Vanitas no Karte_-_11_(Dual Audio_10bit_BD1080p_x265).mkv','1KBFMfIYBYdTqLBnXbWF0OaGnWgnEtyFI'],
  ['[DB]Vanitas no Karte_-_12_(Dual Audio_10bit_BD1080p_x265).mkv','1-PVPHocZOOUJ1M6OBr0vZATsRKY0KjcS']
 ]},
 {name:'Parte 2',kind:'episodes',episodes:[
  ['[DB]Vanitas no Karte Part 2_-_01_(Dual Audio_10bit_BD1080p_x265).mkv','14fAeN2wnqzLZhJOB4SVzgmtp2A-4kno3'],
  ['[DB]Vanitas no Karte Part 2_-_02_(Dual Audio_10bit_BD1080p_x265).mkv','1uLyGVIz930LWeKPVnopSGOFYZj145VRc'],
  ['[DB]Vanitas no Karte Part 2_-_03_(Dual Audio_10bit_BD1080p_x265).mkv','1YseZ-5-OINj0pd46nyOUHpp2QhNnHYCX'],
  ['[DB]Vanitas no Karte Part 2_-_04_(Dual Audio_10bit_BD1080p_x265).mkv','1yqp0-vHJcM3y2iTaIiTPXp5mldve-VPv'],
  ['[DB]Vanitas no Karte Part 2_-_05_(Dual Audio_10bit_BD1080p_x265).mkv','1ML_jlaz5JFi8JnBQ1Y1hokENdB6bCOf2'],
  ['[DB]Vanitas no Karte Part 2_-_06_(Dual Audio_10bit_BD1080p_x265).mkv','1G6l19gQMl-j-mEu2RSjDXRdr5uf7Cuvj'],
  ['[DB]Vanitas no Karte Part 2_-_07_(Dual Audio_10bit_BD1080p_x265).mkv','1stYMRpkaCSn8RkzwH9VP3cudP72VyUwK'],
  ['[DB]Vanitas no Karte Part 2_-_08_(Dual Audio_10bit_BD1080p_x265).mkv','1-uqBez2aEhpMD55jfKidUp7pxbDgcG4U'],
  ['[DB]Vanitas no Karte Part 2_-_09_(Dual Audio_10bit_BD1080p_x265).mkv','1zFtgZFmYXgnlu3UppOz09HuLoZsTVHun'],
  ['[DB]Vanitas no Karte Part 2_-_10_(Dual Audio_10bit_BD1080p_x265).mkv','1tSX1i7tnQJlOLjBEH4Z40_y1HsBTamnO'],
  ['[DB]Vanitas no Karte Part 2_-_11_(Dual Audio_10bit_BD1080p_x265).mkv','144qW8Ac28otQ4uPMuqiVvwBitR8T1sgC'],
  ['[DB]Vanitas no Karte Part 2_-_12_(Dual Audio_10bit_BD1080p_x265).mkv','15gLEcxlu3Ag4ALm1H1Ze2ZfUwnC3yxA1']
 ]}
];

animeDetails['Hige wo Soru. Soshite Joshikousei wo Hirou.']=[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['[AnimeFire.net] Hige wo Soru. Soshite Joshikousei wo Hirou. - Episódio 1 (SD).mp4','1L5PFu-8-RnwHjxNOX-fTtsHglTnHKirj'],
  ['[AnimeFire.net] Hige wo Soru. Soshite Joshikousei wo Hirou. - Episódio 2 (SD).mp4','15iNnPMxF31z6MzlVRl0knpHKZp1fWRTU'],
  ['[AnimeFire.net] Hige wo Soru. Soshite Joshikousei wo Hirou. - Episódio 3 (SD).mp4','17Aew2qCYt-htBLbIpbRI_UEiKc1Y7He_'],
  ['[AnimeFire.net] Hige wo Soru. Soshite Joshikousei wo Hirou. - Episódio 4 (SD).mp4','1o7o91CPDEfLpHrabb9QskRbmViH-yDP-'],
  ['[AnimeFire.net] Hige wo Soru. Soshite Joshikousei wo Hirou. - Episódio 5 (SD).mp4','1Ds015aZ2l0j1eGDBoC1vkkVLHhyEJ2Vy'],
  ['[AnimeFire.net] Hige wo Soru. Soshite Joshikousei wo Hirou. - Episódio 6 (SD).mp4','1d5QnpfFwy6T2ihWobUZBtCADJ_sNkFi0'],
  ['[AnimeFire.net] Hige wo Soru. Soshite Joshikousei wo Hirou. - Episódio 7 (SD).mp4','19Ar-L8clBKTJGOzMFNyBA2rI7M9iHh94'],
  ['[AnimeFire.net] Hige wo Soru. Soshite Joshikousei wo Hirou. - Episódio 8 (SD).mp4','1wg6DCgvhZwu4-6GIzaIN_iEZvV_gyEh_'],
  ['[AnimeFire.net] Hige wo Soru. Soshite Joshikousei wo Hirou. - Episódio 9 (SD).mp4','1OwfAoZ0DulakDNLVNGS6tbNnBE99GieW'],
  ['[AnimeFire.net] Hige wo Soru. Soshite Joshikousei wo Hirou. - Episódio 10 (SD).mp4','1rhO5yP3JlQ9X7wnDghE8U_t0MhmPCAyC'],
  ['[AnimeFire.net] Hige wo Soru. Soshite Joshikousei wo Hirou. - Episódio 11 (SD).mp4','1_VhzDpN4Hizbook_neGz7_mwq7yfxub5'],
  ['[AnimeFire.net] Hige wo Soru. Soshite Joshikousei wo Hirou. - Episódio 12 (SD).mp4','1v6fciBWXWkPcejhKGJ7hpKat0AjCBCB2'],
  ['[AnimeFire.net] Hige wo Soru. Soshite Joshikousei wo Hirou. - Episódio 13 (SD).mp4','11jRUfFMo1LX_FjE7N-Gx4Dm7VC5M43D2']
 ]}
];

animeDetails['Tenkuu Shinpan']=[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['Tenkuu Shinpan Episódio 1 - Animes Orion.mp4','1w2bb1luWJC3Zlby3R8RPqWJlcE_YRrGA'],
  ['Tenkuu Shinpan Episódio 2 - Animes Orion.mp4','16Idg1kSOXmOqM9wKnbhb2gl0rJPdkiXW'],
  ['Tenkuu Shinpan Episódio 3 - Animes Orion.mp4','1az2lJcRMKKeVezA1sCFQuibSBUHcH3et'],
  ['Tenkuu Shinpan Episódio 4 - Animes Orion.mp4','1tLL6ex88GVFmZVnWQExzm2ctLursApqM'],
  ['Tenkuu Shinpan Episódio 5 - Animes Orion.mp4','18MR6oFfgpjVYIpC6xCdmXNs8AffAe5v8'],
  ['Tenkuu Shinpan Episódio 6 - Animes Orion.mp4','17XR1GmRI2fR4sHYIjmA3hu1YvI2o-Soe'],
  ['Tenkuu Shinpan Episódio 7 - Animes Orion.mp4','1uBgw-4dAJVAIthv8T5_otmHaRs2SEqJC'],
  ['Tenkuu Shinpan Episódio 8 - Animes Orion.mp4','1sxk-7a6n91rqJ1-59WV2WsWutNVbRRp8'],
  ['Tenkuu Shinpan Episódio 9 - Animes Orion.mp4','1ALCCnEVYaWRQ4rgOqk2OEidXrSubIYuy'],
  ['Tenkuu Shinpan Episódio 10 - Animes Orion.mp4','1TUgzSvHSm4KNcWxRPPqhw3BnAbe36kPN'],
  ['Tenkuu Shinpan Episódio 11 - Animes Orion.mp4','1krpIM4H64FjD__-Dv8qPn_EOHsV9iIUC'],
  ['Tenkuu Shinpan Episódio 12 - Animes Orion.mp4','1Z1eL-ttJPVBOvVWxXA_r68rDLlYL-Qge']
 ]}
];

animeDetails['Tengoku Daimakyou']=[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['[AnimeFire.plus] Tengoku Daimakyou - Episódio 1 (SD).mp4','1BjuS7D71HqNqQDMrb04IpfxOphygCO9z'],
  ['[AnimeFire.plus] Tengoku Daimakyou - Episódio 2 (SD).mp4','1fetTvBTATFFoUdqrJU4wWoZ1zQCMdODD'],
  ['[AnimeFire.plus] Tengoku Daimakyou - Episódio 3 (SD).mp4','1yaWwsHSNBqRAKZGIE95fPsha4N6yAS2S'],
  ['[AnimeFire.plus] Tengoku Daimakyou - Episódio 4 (SD).mp4','1mdaqBvBiV3k7u4wiP2xwBnXjKFRwF5Pj'],
  ['[AnimeFire.plus] Tengoku Daimakyou - Episódio 5 (SD).mp4','15DaoBsvDA-jDS3dAO03n5Z9QS5oLj7Jy'],
  ['[AnimeFire.plus] Tengoku Daimakyou - Episódio 6 (SD).mp4','1P4MHneVMLLJeQJaDURO4YtdsPUU-IedL'],
  ['[AnimeFire.plus] Tengoku Daimakyou - Episódio 7 (SD).mp4','1u1lewKIAhFaXU2uyaMtkX4dCxMOx6M3K'],
  ['[AnimeFire.plus] Tengoku Daimakyou - Episódio 8 (SD).mp4','1_eFdWvmY5CpdpZlNx5LnE4eLt06LSdM1'],
  ['[AnimeFire.plus] Tengoku Daimakyou - Episódio 9 (SD).mp4','1Eb0LaTv7WLvw7kN6VbLZGqms7aEWO8XB'],
  ['[AnimeFire.plus] Tengoku Daimakyou - Episódio 10 (SD).mp4','1-K8R55Gvny7H048glclUcffpNmDqcaln'],
  ['[AnimeFire.plus] Tengoku Daimakyou - Episódio 11 (SD).mp4','1GCDZj0dzPVq6M2y0p9c-VAdozKWa5rqd'],
  ['[AnimeFire.plus] Tengoku Daimakyou - Episódio 12 (SD).mp4','1Ld76K4AhasiPT4YnTefQgbrRM8uE-F0Y']
 ]}
];

animeDetails['Takopii no Genzai']=[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['Assistir Takopii no Genzai - Episódio 1 - AnimeFire.mp4','1-H7GWs-DTVgqRrFJGsiAZ4AQ_YXxgiu6'],
  ['Assistir Takopii no Genzai - Episódio 2 - AnimeFire.mp4','1jPyb5Qtvz-jy1VCQjVUOMDeazjdEdQUP'],
  ['Assistir Takopii no Genzai - Episódio 3 - AnimeFire.mp4','10toWPLAsKPF-ImzdgHJ7xSynfXts1C5B'],
  ['Assistir Takopii no Genzai - Episódio 4 - AnimeFire.mp4','1PbXwjRiD6IYKS6roMnA1MPhE0_Ux2vvE'],
  ['Assistir Takopii no Genzai - Episódio 5 - AnimeFire.mp4','113MXwwMinqfL8wITVtt3uc1yXhHCOkKA'],
  ['Assistir Takopii no Genzai - Episódio 6 - AnimeFire.mp4','1T90gELw3xQg1WHrPzUmD1Ld0TGxpsr0n']
 ]}
];

animeDetails['Munou na Nana']=[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['[AnimeFire.plus] Munou na Nana - Episódio 1 (SD).mp4','1v07QB01HDTbe9rUczBSPYXOqtMR7_4k3'],
  ['[AnimeFire.plus] Munou na Nana - Episódio 2 (SD).mp4','1F15t_ULtFnRGq0tRzaNhwNqGVVF9JuTj'],
  ['Assistir Munou na Nana - Episódio 3 - AnimeFire.mp4','1nAB8Q4zY4HvxdZmasCnMZunu685m0YIO'],
  ['[AnimeFire.plus] Munou na Nana - Episódio 4 (SD).mp4','1btSUqdejW8DGJHtF9bjhhIlT5Z3sP_ip'],
  ['[AnimeFire.plus] Munou na Nana - Episódio 5 (SD).mp4','1FDsNibp7M5GzdhK-bQThjmYdFeXG3okR'],
  ['[AnimeFire.plus] Munou na Nana - Episódio 6 (SD).mp4','1ZAp-VUHAAvlp698OHkRUSKjRJI-8EET0'],
  ['Assistir Munou na Nana - Episódio 7 - AnimeFire.mp4','1GpMOANH6cnHIY5LCRadCVNdGGdIxTDM0'],
  ['[AnimeFire.plus] Munou na Nana - Episódio 8 (SD).mp4','116pNh__AlNB2R32kVJ1Hprvg53q2Tsam'],
  ['[AnimeFire.plus] Munou na Nana - Episódio 9 (SD).mp4','186r8_TTVn8iR-W7oCxKN2aoHOFa9Lc_f'],
  ['[AnimeFire.plus] Munou na Nana - Episódio 10 (SD).mp4','18-NFJSgWMshrTp9wJBQAwwydzHpOloh2'],
  ['[AnimeFire.plus] Munou na Nana - Episódio 11 (SD).mp4','1-zUOk1G-iNoCyhy-tBBmCLtH7ok113Mp'],
  ['[AnimeFire.plus] Munou na Nana - Episódio 12 (SD).mp4','1qv3FIRpgErR2s6-md6MpV1dnUnm361Zh']
 ]}
];

animeDetails['Kono Yo no Hate de Koi wo Utau Shoujo YU-NO']=[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-1.mp4','1ntQ74TDVYLsZVwdzbrz1Isi0yAwyHyOO'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-2.mp4','12X3iL0WV_cipqglUgY0ankihrVf08RXq'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-3.mp4','112sp_PT4DWEDHv-Yguy6gqKnVpoRn_Rp'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-4.mp4','1bbqBEEb-JFwGO7ynq_hW-eHF6rD-ypoO'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-5.mp4','1d0F7cXGVZcATgjIKNJaDtyHceiILVynl'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-6.mp4','1gpkOBUzNDmjzo6syn1kGwbFTNyPI8vDY'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-7.mp4','1NauD1BT27n4-rbgIt5ZNoRIpe1x23mXQ'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-8.mp4','1vRZ-6vpODeSjf8u27x_9zDt7_jM_ukAa'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-9.mp4','1IWfTX-5eimvupHuksGNSVDQW6MGdLHUQ'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-10.mp4','11q0tnBA3V-Ihg8Uu16pVcNJrrHAYSmw2'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-11.mp4','1rQuiDSXivoR4O1gMhhOSRZEzuZ0BqJMh'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-12.mp4','1g7mMso76hLRPIqndIW2ZZHvoXHAy7Kol'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-13.mp4','15s8XG-9fzRO98ipe4nwGJT7FNbGr0HA4'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-14.mp4','1ZYeENSE6tBHvjcUdotNUN5EvZ576D8q1'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-15.mp4','1lqVmdHTY6JWajfRHnNsWeC-x1dAfY2Zt'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-16.mp4','1yUg2JRU-ojo2HgLJkS422w3Q2NI5eZeU'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-17.mp4','1bv-n4QCUhpdPgwb3eiCbta-0fgJfCjPg'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-18.mp4','1QdAhu0U9I-PMvWQ-VYtx03jLGwNPLQYW'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-19.mp4','17jOxQrimXY1qUYbVUnDU1lXnaw3KWR0j'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-20.mp4','1WVhWOKOrHpSfyzNOB835apwB-N14eE0I'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-21.mp4','1bvuLEZ-mR5fd3yIgmw55X4SB9whxOxfC'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-22.mp4','1AEx2x6eF3EalCEpf56TS7_OjstyvypA0'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-23.mp4','1gDfUwSCU84wTlzDWBGzMsuTMuqlfTG87'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-24.mp4','107QoIJly486Zhgjt5DDqDKkO--Om51fz'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-25.mp4','1khEbCA3M_mBPkLe1DTsi1x3ddg4YiQ4R'],
  ['kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no-ep-26-final.mp4','1qhbJYChaL12_fzgi6A4BR3bsXljAyzCK']
 ]}
];

animeDetails['Yugo the Negotiator']=[
 {name:'Temporada 1',kind:'episodes',episodes:[
  ['yuugo-koushounin-ep-1.mp4','1x8jl4ftMX2lvuu4gxwu89XWVC9W3Wbe-'],
  ['yuugo-koushounin-ep-2.mp4','1aCjGZpTY57t9decf6WRz063nT4ZTvmhU'],
  ['yuugo-koushounin-ep-3.mp4','1SczbVBgs0qJRWL3n5iQkvZ1K4um7xBl1'],
  ['yuugo-koushounin-ep-4.mp4','1G0_OBSs7KixkXMqzRtD8OLmfiXN24fqV'],
  ['yuugo-koushounin-ep-5.mp4','1yFO_jivzap-I-wH1fbsG_z38WQ7JeOf8'],
  ['yuugo-koushounin-ep-6.mp4','1ous7vQmTDqH57mfVm6RmJkwKCpR5t1A7'],
  ['yuugo-koushounin-ep-7.mp4','1Uy4fEq7MZaongVdw00UBlSiz6szAGAjJ'],
  ['yuugo-koushounin-ep-9.mp4','1Q69KwrIv0hRQgEHHqAsYRhTNq19UrfDM'],
  ['yuugo-koushounin-ep-10.mp4','1zd7ClkqtY0OsA1PWsfm6m1IRba3beVVO'],
  ['yuugo-koushounin-ep-12.mp4','1rs_N-4t8UW3N1bXqIFI2wffHmzzIGF2n'],
  ['yuugo-koushounin-ep-13-final.mp4','1Dp1OoszLF6BFGvuwdkHQgQsQD-XwmMi3']
 ]}
];

animeDetails['Ah! My Goddess (OVA)']=[
 {name:'OVA',kind:'episodes',episodes:[
  ['01 - Ah! Megami-sama.avi','17WbJcx87gLoYPxsRQ6TsMy_xlaadcSyq'],
  ['02 - Ah! Megami-sama.avi','1Fx0BbhZlfM9ol2J3CGUQwJEodzrbb5Ll'],
  ['03 - Ah! Megami-sama.avi','1GtJxNmq6eD5WKbkkCigMtaygZHzfXASQ'],
  ['04 - Ah! Megami-sama.avi','1QGavVz07Jy4DVXC1rJ_ONQi1aGgRo3pL'],
  ['05 - Ah! Megami-sama.avi','1lYz-BcoliGRtig26zRv6RjKNnIOwh295']
 ]}
];

animeDetails['Darker than Black']=[
 {name:'Kuro no Keiyakusha — arquivos disponíveis',kind:'episodes',episodes:[
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 1 - A Estrela do Contrato Cai_Parte 1 (SD).mp4','1WKi64tzTGxl7SuZOjx62U2MGF8EHeSwu'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 2 - A Estrela do Contrato Cai_Parte 2 (SD).mp4','1C-KF3eLOwbPH5DbfKmvH5LzoKUKo32NO'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 3 - A Nova Estrela Reluz na Aurora_ Parte 1 (SD).mp4','1dxmr-KLMmb2_TCQ7Va6gXNJIRKJRnQJ7'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 4 - A Nova Estrela Reluz na Aurora_Parte 2 (SD).mp4','160DA9kDUBx4g72aWRkFePG_eVCJjygFe'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 5 - O Sonho Vermelho do Desastre Desaparece no Leste Europeu  Parte 1 (SD).mp4','15JmweA_bsuCLXWl106AQyg7TXComnmnZ'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 6 - O Sonho Vermelho do Desastre Desaparece no Leste Europeu  Parte 2 (SD).mp4','1RgfY_fACg6jNQy8nQKt46Cp8fcjzURxV'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 8 - A Gardênia Libera Seu Cheiro na Chuva de Maio_Parte 2 (SD).mp4','1laI-5CnOBNfM4xF0p8nuHcKl0v9gzFj1'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 9 - Vestido Branco Manchado Pelos Sonhos e Sangue da Garota_Parte 1 (SD).mp4','1soY_Dq3vMQoiVc_yJLDDsC3_sMB9-2Gc'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 10 - Vestido Branco Manchado Pelos Sonhos e Sangue da Garota_Parte 2 (SD).mp4','1hCC6juwlJ6jzinHQANcGCVoLVKIfNcvO'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 11 - Tempo de Recuperar o Que Foi Perdido Atrás do Portão_Parte 1 (SD).mp4','1N7DkYaFjX79zCGSiKCz-7ZfGOdykd04A'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 17 - Uma Canção de Amor É Cantada em Uma Pilha de Lixo_Parte 1 (SD).mp4','1z0vmAUGGat0u-T9qpMUyMskAjI48ktPx'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 18 - Uma Canção de Amor É Cantada em Uma Pilha de Lixo_Parte 2 (SD).mp4','1kRSDopNXMXex9DPmPNUbx5jPvcfm8pOU'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 20 - Um Sonho sóbrio de Vaidade_Parte 2 (SD).mp4','1aj9YxrH3uze5mlFV2Yb2FFX62cdGB7Sq'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 21 - A Cidade Purificada se Afoga em lágrimas_Parte 1 (SD).mp4','1Pz747I1FC9y5Jj-N0VmH9MgO4cYZ1tf6'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 22 - A Cidade Purificada se Afoga em lágrimas_Parte 2 (SD).mp4','1FKNHD0xCdmwuvSdg9TEIHylMILkxEJGo'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 23 - Deus Está no Paraíso (SD).mp4','1RaZ_b91KAzBXYEthA4NVFboqR1OFV33u'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 25 - O Sonho Sombrio do Shinigami Negro é uma Sombra mais Escura que o Preto_ (SD).mp4','10xm0yKzeTiYh1z8whrEcz8utzfKQN_DD'],
  ['[AnimeFire.plus] Darker than Black_ Kuro no Keiyakusha - Episódio 26 - Abaixo das Flores de Cereja Inteiramente Florescidas (SD).mp4','19zyrmNVSxkHCURDEW2k2i6CwwPr7Br2b']
 ]},
 {name:'Ryuusei no Gemini',kind:'episodes',episodes:[
  ['[AnimeFire.plus] Darker than Black_ Ryuusei no Gemini - Episódio 1 - O Gato Preto Não Sonha Com A Estrela.. (SD).mp4','1sLNNbP6u_Lfd4BZAaF_CC4wtP8NLOiKk'],
  ['[AnimeFire.plus] Darker than Black_ Ryuusei no Gemini - Episódio 2 - O Meteoro Caído_ (SD).mp4','1S5Hxwrs0OHQI6oUCRZ8a5pHatNjbjKw9'],
  ['[AnimeFire.plus] Darker than Black_ Ryuusei no Gemini - Episódio 3 - Desaparecimento No Campo De Neve.. (SD).mp4','1Kje793ri6Gt7n-VgVoDMJXfBKS8S63bL'],
  ['[AnimeFire.plus] Darker than Black_ Ryuusei no Gemini - Episódio 4 - A Arca Flutua No Lago_ (SD).mp4','16raemBYk_X__6w2pdlaN1TZEN66p5kYa'],
  ['[AnimeFire.plus] Darker than Black_ Ryuusei no Gemini - Episódio 5 - Fumaça De Pólvora à Deriva.mp4','1EzwXmvGnvNrFtGyNbvqQse1YrbAL4DHq'],
  ['[AnimeFire.plus] Darker than Black_ Ryuusei no Gemini - Episódio 6 - Uma Doce Fragrância.mp4','1ZUIr0Ts4JcRiOXXc5BANmPi5fLyZG7qP'],
  ['[AnimeFire.plus] Darker than Black_ Ryuusei no Gemini - Episódio 7 - O Boneco Canta Para A Neve Que Dança_ (SD).mp4','15IwzxOE8JFM-dot1LoAlSvqUcoKNvw_Q'],
  ['[AnimeFire.plus] Darker than Black_ Ryuusei no Gemini - Episódio 8 - Em Dias De Verão.mp4','15vS7H9Czbe2FEVwx6oyLdCv0Rz216mAd'],
  ['[AnimeFire.plus] Darker than Black_ Ryuusei no Gemini - Episódio 9 - Encontro Repentino Em Certo Dia.. (SD).mp4','1DiLguVPfIma6NvjeLStK2vk6JpcGiIqn'],
  ['[AnimeFire.plus] Darker than Black_ Ryuusei no Gemini - Episódio 10 - Seu Sorriso Na Esquina Das Mentiras.. (SD).mp4','1laG4p5zNSk4wFMIdwgdJq9G2hZiOc6jz'],
  ['[AnimeFire.plus] Darker than Black_ Ryuusei no Gemini - Episódio 11 - O Fundo Da Água Está Seco.mp4','18NdeI9__6cH_aRltt8fL-vRYYiTxY15n'],
  ['[AnimeFire.plus] Darker than Black_ Ryuusei no Gemini - Episódio 12 - A Arca Das Estrelas. (SD).mp4','1JGTij2DVIHKIghTO3A4Mn6UFAH6JAdoi']
 ]}
];

animeMovies.sort((a,b)=>a.title.localeCompare(b.title,'pt-BR'));
animeSeries.sort((a,b)=>a.title.localeCompare(b.title,'pt-BR'));
