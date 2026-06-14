const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  // Sayfanın yeniden yüklenmesini engelliyoruz
  event.preventDefault();
  
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();
  
  // Alanlardan biri bile boşsa uyarı veriyoruz
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }
  
  // Verileri bir nesnede topluyoruz
  const formData = {
    email: email,
    password: password
  };
  
  console.log(formData);
  
  // Formu temizliyoruz
  event.currentTarget.reset();
});
