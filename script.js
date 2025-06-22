// Filtrer posts par catégorie
const categories = document.querySelectorAll('.category');
const posts = document.querySelectorAll('.post');

categories.forEach(btn => {
  btn.addEventListener('click', () => {
    categories.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.getAttribute('data-cat');

    posts.forEach(post => {
      if(cat === 'all' || post.getAttribute('data-category') === cat) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
});

// Afficher le post en grand au clic
posts.forEach(post => {
  post.addEventListener('click', () => {
    alert(`Post : ${post.querySelector('h2').textContent}\n\n${post.querySelector('p').textContent}`);
  });
});
