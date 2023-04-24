const meuSlide = document.querySelectorAll('.meuSlide');
const numero = document.querySelectorAll('.numero');
let slideAtual = 1;

// Função que mostra o slide atual
const mostrarSlide = (n) => {
  if (n > meuSlide.length) {
    slideAtual = 1;
  }
  if (n < 1) {
    slideAtual = meuSlide.length;
  }
  for (let i = 0; i < meuSlide.length; i++) {
    meuSlide[i].style.display = 'none';
  }
  for (let i = 0; i < numero.length; i++) {
    numero[i].textContent = slideAtual + ' / ' + meuSlide.length;
  }
  meuSlide[slideAtual - 1].style.display = 'block';
}

// Mostra o slide atual
mostrarSlide(slideAtual);

// Função que avança ou retrocede um slide
const maisSlide = (n) => {
  mostrarSlide(slideAtual += n);
}


