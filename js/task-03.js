const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
  // Girilen değerin sağındaki ve solundaki boşlukları siliyoruz
  const trimmedValue = event.currentTarget.value.trim();
  
  // Eğer input boşsa 'Anonymous' yazdır, değilse girilen değeri yazdır
  nameOutput.textContent = trimmedValue !== '' ? trimmedValue : 'Anonymous';
});