(() => {
  const canvas = document.getElementById('drawer'),
    ctx = canvas.getContext('2d'),
    ALBUM_POSITION_GLOBAL_X = 620;
    ALBUM_POSITION_GLOBAL_Y = -120;
    ALBUM_POSITION_X = 300, 
    ALBUM_POSITION_Y = 260,
    ALBUM_SIZINGS = 180,
    ALBUM_ANGLE_DEGREES = 75;
    
  const drakeIMG = new Image();

  drakeIMG.src = "app/assets/main-image.jpg";
  drakeIMG.addEventListener('load', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(drakeIMG, 0, 0);
    ctx.save();
  });

  const btnAlbum = document.getElementById('btnAlbum');

  btnAlbum.addEventListener('change', e => {
    if(e.target.files.length) {
      readFile(e.target.files[0])
        .then(drawAlbum);
    }
  });

  const readFile = file => new Promise(resolve => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      resolve(reader.result);
    });

    reader.readAsDataURL(file);
  });

  const drawAlbum = img => {
    const albumIMG = new Image();
    albumIMG.addEventListener('load', () => {
      ctx.translate(ALBUM_POSITION_GLOBAL_X, ALBUM_POSITION_GLOBAL_Y);
      ctx.rotate(ALBUM_ANGLE_DEGREES * Math.PI / 180);
      ctx.drawImage(albumIMG, ALBUM_POSITION_X, ALBUM_POSITION_Y, ALBUM_SIZINGS, ALBUM_SIZINGS);
      ctx.restore();
    });
    albumIMG.src = img;
  };
})();