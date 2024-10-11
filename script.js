document.addEventListener('DOMContentLoaded', () => {
  const puzzleContainer = document.getElementById('puzzle-container');
  const shuffleButton = document.getElementById('shuffle');
  let puzzlePieces = [];
  
  // Lista de imágenes y sus tamaños respectivos
  const images = [
    { src: 'imagenes/img1.jpg', width: 460, height: 477 },
    { src: 'imagenes/img2.jpg', width: 498, height: 443 },
    { src: 'imagenes/img3.jpg', width: 503, height: 447 },
    { src: 'imagenes/img4.jpg', width: 401, height: 397 },
    { src: 'imagenes/img5.jpg', width: 578, height: 482 },
    { src: 'imagenes/img6.jpg', width: 573, height: 396 }
  ];

  // Crear las piezas del rompecabezas
  function createPuzzle() {
    puzzlePieces = [];
    images.forEach((image) => {
      const piece = document.createElement('div');
      piece.classList.add('puzzle-piece');
      piece.style.width = `${image.width}px`;
      piece.style.height = `${image.height}px`;
      piece.style.backgroundImage = `url(${image.src})`;
      puzzlePieces.push(piece);
    });
    renderPuzzle();
  }

  // Mostrar las piezas en el contenedor
  function renderPuzzle() {
    puzzleContainer.innerHTML = '';
    puzzlePieces.forEach((piece, index) => {
      puzzleContainer.appendChild(piece);
      piece.addEventListener('click', () => movePiece(index));
    });
  }

  // Mezclar las piezas
  shuffleButton.addEventListener('click', shufflePuzzle);

  function shufflePuzzle() {
    puzzlePieces = puzzlePieces.sort(() => Math.random() - 0.5);
    renderPuzzle();
  }

  // Lógica para mover las piezas (sin espacio vacío en este caso)
  function movePiece(index) {
    const emptyIndex = puzzlePieces.indexOf(null); // Sin espacio vacío definido
    const validMoves = []; // Lógica para mover podría añadirse aquí si lo deseas

    // Sin movimientos en este ejemplo básico
  }

  createPuzzle();
});
