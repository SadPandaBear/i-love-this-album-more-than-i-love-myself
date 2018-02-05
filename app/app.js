const canvas = document.getElementById('drawer'),
  ctx = canvas.getContext('2d'),
  reader = new FileReader(),
  drakeIMG = new Image(), 
  albumIMG = new Image(),
  btnGenerate = document.getElementById('btnGenerate'),
  btnAlbum = document.getElementById('btnAlbum'),
  ALBUM_POSITION_GLOBAL_X = 620;
  ALBUM_POSITION_GLOBAL_Y = -120;
  ALBUM_POSITION_X = 300, 
  ALBUM_POSITION_Y = 260,
  ALBUM_SIZINGS = 180,
  ALBUM_ANGLE_DEGREES = 75;

const start = () =>  {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.drawImage(drakeIMG, 0, 0);
};

drakeIMG.src = "app/assets/main-image.jpg";
drakeIMG.onload = start;
  
const rotateAndPlaceImage = (image, angle) => {
  reader.onload = event => {
    albumIMG.src = reader.result;
    ctx.translate(ALBUM_POSITION_GLOBAL_X, ALBUM_POSITION_GLOBAL_Y);
    ctx.rotate(angle * Math.PI / 180);
    ctx.drawImage(image, ALBUM_POSITION_X, ALBUM_POSITION_Y, ALBUM_SIZINGS, ALBUM_SIZINGS);
    ctx.restore();
  };
};

btnGenerate.addEventListener('click', () => {
  reader.readAsDataURL(btnAlbum.files[0]);    
  start();
  rotateAndPlaceImage(albumIMG, ALBUM_ANGLE_DEGREES);
});
