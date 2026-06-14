// ul#categories içindeki tüm li.item öğelerini seçiyoruz
const categories = document.querySelectorAll('#categories .item');

// Toplam kategori sayısını yazdırıyoruz
console.log(`Number of categories: ${categories.length}`);

// Her bir kategori için döngü oluşturuyoruz
categories.forEach(category => {
  // Kategori başlığını (h2) buluyoruz
  const categoryName = category.querySelector('h2').textContent;
  // Kategori içindeki liste elemanlarını (li) buluyoruz
  const categoryElementsCount = category.querySelectorAll('ul li').length;
  
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsCount}`);
});