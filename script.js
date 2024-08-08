document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const loadMoreBtn = document.getElementById('load-more');
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.querySelector('.lightbox-content');
  const closeBtn = document.querySelector('.close');
  let images = [
    { src: 'n1.jpeg', category: 'nature' },
    { src: 'a1.jpeg', category: 'animals' },
    { src: 'p1.jpeg', category: 'people' },
    { src: 'c1.jpeg', category: 'cars' },
    { src: 'b1.jpeg', category: 'bikes' },
    { src: 'a2.jpeg', category: 'animals' },
    { src: 'n2.jpeg', category: 'nature' },
    { src: 'p2.jpeg', category: 'people' },
    { src: 'n3.jpeg', category: 'nature' },
    { src: 'n4.jpeg', category: 'nature' },
    { src: 'a3.jpeg', category: 'animals' },
    { src: 'p3.jpeg', category: 'people' },
    { src: 'c2.jpeg', category: 'cars' },
    { src: 'c3.jpeg', category: 'cars' },
    { src: 'c4.jpeg', category: 'cars' },
    { src: 'b3.jpeg', category: 'bikes' },
    { src: 'b4.jpeg', category: 'bikes' },
    { src: 'n5.jpeg', category: 'nature' },
    { src: 'n6.jpeg', category: 'nature' },
    { src: 'n7.jpeg', category: 'nature' },
    { src: 'n8.jpeg', category: 'nature' },
    { src: 'n9.jpeg', category: 'nature' },
    { src: 'a4.jpeg', category: 'animals' },
    { src: 'a5.jpeg', category: 'animals' },
    { src: 'a7.jpeg', category: 'animals' },
    { src: 'a8.jpeg', category: 'animals' },
    { src: 'a9.jpeg', category: 'animals' },
    { src: 'a10.jpeg', category: 'animals' },
    { src: 'a11.jpeg', category: 'animals' },
    { src: 'p4.jpeg', category: 'people' },
    { src: 'p5.jpeg', category: 'people' },
    { src: 'p6.jpeg', category: 'people' },
    { src: 'p7.jpeg', category: 'people' },
    { src: 'c5.jpeg', category: 'cars' },
    { src: 'c6.jpeg', category: 'cars' },
    { src: 'c7.jpeg', category: 'cars' },
    { src: 'b5.jpeg', category: 'bikes' },
    { src: 'b6.jpeg', category: 'bikes' },
    { src: 'b7.jpeg', category: 'bikes' },
    { src: 'b8.jpeg', category: 'bikes' },

  ];
  let visibleImages = 10;

  function displayImages(imagesToDisplay) {
    gallery.innerHTML = '';
    imagesToDisplay.forEach(img => {
      const imgElement = document.createElement('img');
      imgElement.src = img.src;
      imgElement.alt = img.category;
      imgElement.dataset.category = img.category;
      imgElement.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxContent.src = img.src;
      });
      gallery.appendChild(imgElement);
    });
  }

  function filterImages(category) {
    if (category === 'all') {
      loadMoreBtn.style.display = 'block';
      displayImages(images.slice(0, visibleImages));
    } else {
      loadMoreBtn.style.display = 'none';
      const filteredImages = images.filter(img => img.category === category);
      displayImages(filteredImages.slice(0, visibleImages));
    }
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;
      filterImages(category);
    });
  });

  loadMoreBtn.addEventListener('click', () => {
    visibleImages += 5;
    displayImages(images.slice(0, visibleImages));
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Initial display
  displayImages(images.slice(0, visibleImages));
});
