document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-glow');
    document.body.appendChild(cursor);
  
    const trailCount = 20;
    const trails = [];
  
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.classList.add('cursor-trail');
      document.body.appendChild(trail);
      trails.push(trail);
    }
  
    let mouseX = 0;
    let mouseY = 0;
  
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  
    function updateCursor() {
      cursor.style.left = `${mouseX - 15}px`;
      cursor.style.top = `${mouseY - 15}px`;
  
      trails.forEach((trail, index) => {
        const ratio = (trailCount - index) / trailCount;
        const x = mouseX - 2.5 + (Math.random() - 0.5) * 2;
        const y = mouseY - 2.5 + (Math.random() - 0.5) * 2;
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trail.style.opacity = ratio * 0.5;
        trail.style.transform = `scale(${ratio})`;
      });
  
      requestAnimationFrame(updateCursor);
    }
  
    updateCursor();
  
    document.addEventListener('mousedown', () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
    });
  
    document.addEventListener('mouseup', () => {
      cursor.style.width = '30px';
      cursor.style.height = '30px';
    });
  });
  // курсор конец 
  
document.addEventListener('DOMContentLoaded', function() {
  let favoriteCount = 0;
  let cartCount = 0;

  // Функции обновления счетчиков
  function updateFavoriteCount() {
      const favoriteCountElement = document.querySelector('.favorite-icon .favorite-count');
      favoriteCountElement.textContent = favoriteCount;
      favoriteCountElement.style.display = favoriteCount > 0 ? 'flex' : 'none';
  }

  function updateCartCount(quantity = 1) {
      cartCount += quantity;
      const cartCountElement = document.querySelector('.cart-icon .cart-count');
      cartCountElement.textContent = cartCount;
      cartCountElement.style.display = cartCount > 0 ? 'flex' : 'none';
  }

  // Обработка добавления в избранное
  document.querySelectorAll('.favorite-btn').forEach(button => {
      button.addEventListener('click', function() {
          this.classList.toggle('active');
          favoriteCount += this.classList.contains('active') ? 1 : -1;
          updateFavoriteCount();
      });
  });

  // Обработка добавления в корзину (для кнопок вне overlay)
  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
          updateCartCount();
      });
  });

  // Инициализация счетчиков
  updateFavoriteCount();
  updateCartCount(0);

  // Обработка кнопки "See More"
  const seeMoreBtn = document.querySelector('.see-more');
  if (seeMoreBtn) {
      seeMoreBtn.addEventListener('click', function() {
          console.log('Loading more dishes...');
          // Здесь код для загрузки дополнительных блюд
      });
  }

  // Анимация колеса меню
  const menuItems = document.querySelectorAll('.menu-item');
  const wheelImage = document.querySelector('.wheel-image');
  let currentAngle = 0;

  menuItems.forEach((item, index) => {
      item.addEventListener('click', () => {
          rotateWheel(index);
          setActiveItem(item);
      });
  });

  function rotateWheel(index) {
      const anglePerItem = 360 / menuItems.length;
      const targetAngle = -index * anglePerItem;
      const rotation = targetAngle - currentAngle;
      currentAngle = targetAngle;
      wheelImage.style.transition = 'transform 0.5s ease-out';
      wheelImage.style.transform = `rotate(${currentAngle}deg)`;
  }

  function setActiveItem(activeItem) {
      menuItems.forEach(item => item.classList.remove('active'));
      activeItem.classList.add('active');
  }

  // Overlay Card функциональность
  const overlayCard = document.getElementById('overlayCard');
  const closeBtn = overlayCard.querySelector('.close-btn');
  const productCards = document.querySelectorAll('.product-card');
  const quantityEl = overlayCard.querySelector('.quantity');
  const minusBtn = overlayCard.querySelector('.minus');
  const plusBtn = overlayCard.querySelector('.plus');
  const addToCartBtn = overlayCard.querySelector('.add-to-cart-overlay');
  let currentQuantity = 1;
  let currentPrice = 0;

  function updateOverlayPrice() {
      const priceEl = overlayCard.querySelector('.overlay-price');
      const totalPrice = currentPrice * currentQuantity;
      priceEl.textContent = `€${totalPrice.toFixed(2)}`;
  }

  productCards.forEach(card => {
      const description = card.querySelector('p');
      description.addEventListener('click', () => {
          const image = card.querySelector('.product-image img').src;
          const title = card.querySelector('h3').textContent;
          const price = card.querySelector('.price').textContent;
          const detailedDesc = card.querySelector('.hidden-description').textContent;

          overlayCard.querySelector('.overlay-image').src = image;
          overlayCard.querySelector('.overlay-title').textContent = title;
          overlayCard.querySelector('.overlay-description').textContent = detailedDesc;
          
          currentPrice = parseFloat(price.replace('€', ''));
          currentQuantity = 1;
          quantityEl.textContent = currentQuantity;
          updateOverlayPrice();

          overlayCard.classList.add('active');
      });
  });

  minusBtn.addEventListener('click', () => {
      if (currentQuantity > 1) {
          currentQuantity--;
          quantityEl.textContent = currentQuantity;
          updateOverlayPrice();
      }
  });

  plusBtn.addEventListener('click', () => {
      currentQuantity++;
      quantityEl.textContent = currentQuantity;
      updateOverlayPrice();
  });

  addToCartBtn.addEventListener('click', () => {
      updateCartCount(currentQuantity);
      overlayCard.classList.remove('active');
  });

  closeBtn.addEventListener('click', () => {
      overlayCard.classList.remove('active');
  });

  overlayCard.addEventListener('click', (e) => {
      if (e.target === overlayCard) {
          overlayCard.classList.remove('active');
      }
  });

  // Определение Safari
  function isSafari() {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  if (isSafari()) {
      document.documentElement.classList.add('safari');
  }
});
