// Segunda etapa do pente-fino das séries.
// Preserva os nomes originais dos arquivos e remove somente duplicatas comprovadas.

// DARK: mantém a temporada 1 já catalogada e substitui as temporadas 2 e 3 por episódios reais.
if(seriesDetails['DARK']){
  seriesDetails['DARK']=seriesDetails['DARK'].filter(s=>s.name!=='Temporada 2'&&s.name!=='Temporada 3');
  seriesDetails['DARK'].push(
    {name:'Temporada 2',kind:'episodes',episodes:[
      ['Dark - S02E01 - Anfange und Enden.mkv','10_eM_msz39hmbKycM5qoEKgUTgdP0l9D'],
      ['Dark - S02E02 - Dunkle Materie.mkv','1hgkHqBlQd8Ib1ZhWcq0RknlR62x70Q6C'],
      ['Dark - S02E03 - Gespenster.mkv','12eybeAzxQT6An617DFkF82sqEYIsf0Js'],
      ['Dark - S02E04 - Die Reisenden.mkv','1p95cw6pkHg7rG__X0uAcUtRKUNIYkSaj'],
      ['Dark - S02E05 - Vom Suchen und Finden.mkv','1PHefL1N7olH97GsHiH7x1Xe4WNcU4lKd'],
      ['Dark - S02E06 - Ein unendlicher Kreis.mkv','12_K98Mzt3A3Z7ox2piYfMRHQG6fyxURc'],
      ['Dark - S02E07 - Der weiße Teufel.mkv','1KhqzrJW1L1VGJ6bQMqtSHrmy6tgvxT0l'],
      ['Dark - S02E08 - Enden und Anfange.mkv','1BkzLZmiNBpYm5-PD2y9Oi_O1swP_2HNf']
    ]},
    {name:'Temporada 3',kind:'episodes',episodes:[
      ['Dark - S03E01 - Deja-vu.mkv','1751YuWicopYASnqziEu3XDReSkTk-2t4'],
      ['Dark - S03E02 - The Survivors.mkv','17t1Syluozxl-kVJX06K93gFEfCPfzAs3'],
      ['Dark - S03E03 - Adam and Eva.mkv','1ERjupqrsYsMX-WjfAPehV1B9lBg0cs-f'],
      ['Dark - S03E04 - The Origin.mkv','1t0ag4Zt6Zrgt2Fe2KDvWM0eipy9mrrr1'],
      ['Dark - S03E05 - Life and Death.mkv','1iMfOho81CtEtUEav7VNURYq5Tw_St3JT'],
      ['Dark - S03E06 - Light and Shadow.mkv','1dtBgjgh3tPkzjhCRBvgiuCl8FqMS-0T4'],
      ['Dark - S03E07 - Between the Time.mkv','18ZUMDdrccwIHk1yQysSJmIBmpaNqjbKM'],
      ['Dark - S03E08 - The Paradise.mkv','1rRMo3NW1CiuNp9jcjBrX4i0_CZOSYHxX']
    ]}
  );
}

// Black Summer: mantém a temporada 1 já catalogada e expande a temporada 2.
if(seriesDetails['Black Summer']){
  seriesDetails['Black Summer']=seriesDetails['Black Summer'].filter(s=>s.name!=='Temporada 2');
  seriesDetails['Black Summer'].push({name:'Temporada 2',kind:'episodes',episodes:[
    ['Black_Summer_S02E01_1080p.WEB-DL.DUBLADO.5.1.COMANDO.TO.mkv','1Lr0rlo-RJ5c4PNStH6zMfevYm4zSbyFA'],
    ['Black_Summer_S02E02_1080p.WEB-DL.DUBLADO.5.1.COMANDO.TO.mkv','1f2DKdCaU2v3GniorXI-YBVc_hYRrUczS'],
    ['Black_Summer_S02E03_1080p.WEB-DL.DUBLADO.5.1.COMANDO.TO.mkv','15Vq1QBg_sRJMXARQrNshn4CajX-Tdai3'],
    ['Black_Summer_S02E04_1080p.WEB-DL.DUBLADO.5.1.COMANDO.TO.mkv','1i5xkegJaeYP7RXRqWtuIVES8DJvm01Ja'],
    ['Black_Summer_S02E05_1080p.WEB-DL.DUBLADO.5.1.COMANDO.TO.mkv','1uEaU7pfJcBA_Cv9aJEKUCwp-6Xkp78jb'],
    ['Black_Summer_S02E06_1080p.WEB-DL.DUBLADO.5.1.COMANDO.TO.mkv','1AOj94nzwjMk6DZS5Hn9-OSAgA2hcilFu'],
    ['Black_Summer_S02E07_1080p.WEB-DL.DUBLADO.5.1.COMANDO.TO.mkv','1oeEU0nsXY0djlmGTaurv88eUAn_-bEnJ'],
    ['Black_Summer_S02E08_1080p.WEB-DL.DUBLADO.5.1.COMANDO.TO.mkv','1MSGHRGEXoX3mm4O6PrCzkFTQC4-eSVQS']
  ]});
}

// Silo: 10 episódios reais. E08 existia duas vezes com mesmo nome/tamanho; fica a primeira cópia encontrada.
seriesDetails['Silo']=[{name:'Temporada 1',kind:'episodes',episodes:[
  ['Silo.S01E01.1080p.WEB-DL.mkv.mp4','1UVkPsChP0oWhYmY7l1vOkWPjnGhYmA8g'],
  ['Silo.S01E02.1080p.WEB-DL.mkv.mp4','14QAOrjHuyS3NZOib1HoWj84hxdwitvxY'],
  ['Silo.S01E03.1080p.WEB-DL.DUAL.5.1.mkv','1ZiaPzHNiib2Xp5wbdqJFJIlYxOFYwY8t'],
  ['Silo.S01E04.1080p.WEB-DL.DUAL.mkv','1ubzDJUy7fee_0eGbuFy0iWZAL5XeNFKq'],
  ['Silo.S01E05.1080p.WEB.DUAL.mkv','1pR85jiGWIjFkyTBBVTaktWujQLV8kizz'],
  ['Silo.S01E06.1080p.WEB-DL.DUAL.mkv','1b1EB18QoVVPHQkoCNNfqPPgALeueQNy0'],
  ['Silo.S01E07.1080p.WEB-DL.DUAL.5.1.mkv','1uXpQllsfiA_cI7JUaFTe81JFO2g4et2o'],
  ['Silo.S01E08.1080p.WEB-DL.DUAL.mkv','1H1-q4Rx2sjWh7e6ek8ggGirzH8xBJIT_'],
  ['Silo.S01E09.1080p.WEB-DL.DUAL.mkv','14Lfa3uwzVEHi6_2lqNw78AOdm4gNk-yJ'],
  ['Silo.S01E10.1080p.WEB-DL.DUAL.5.1.mkv','14xly9azcK8hwNixRvitG05MJGxSUvFtk']
]}];
