var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000, // تأخير بين الشرائح بواحدة كل 5 ثوانٍ
        disableOnInteraction: false, // يجعل التلقائي يعمل بعد التفاعل مع المستخدم
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 1000, // سرعة الانتقال بين الشرائح بواحدة كل ثانية
    effect: "fade", // تأثير التلاشي عند التبديل بين الشرائح
});



document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      let timeout;
  
      dropdown.addEventListener('mouseenter', function() {
        const menu = this.querySelector('.dropdown-menu');
        clearTimeout(timeout); // Clear any previous timeout
        menu.style.display = 'block';
        setTimeout(() => {
          menu.style.opacity = '1';
          menu.style.transform = 'translateY(0)';
        }, 0);
      });
  
      dropdown.addEventListener('mouseleave', function() {
        const menu = this.querySelector('.dropdown-menu');
        timeout = setTimeout(() => {
          menu.style.opacity = '0';
          menu.style.transform = 'translateY(-10px)';
          setTimeout(() => {
            menu.style.display = 'none';
          }, 300);
        }, 300); // Delay hiding menu
      });
  
      // Keep menu open when hovering over it
      dropdown.querySelector('.dropdown-menu').addEventListener('mouseenter', function() {
        clearTimeout(timeout);
      });
  
      // Close menu when leaving menu area
      dropdown.querySelector('.dropdown-menu').addEventListener('mouseleave', function() {
        const menu = this;
        timeout = setTimeout(() => {
          menu.style.opacity = '0';
          menu.style.transform = 'translateY(-10px)';
          setTimeout(() => {
            menu.style.display = 'none';
          }, 300);
        }, 300); // Delay hiding menu
      });
    });
  });



// احتفظ بمرجع لعنصر النافبار
const navbar = document.querySelector('.navbar5');

// عيّن دالة لتحديث خصائص النافبار بناءً على اتجاه التمرير
function toggleNavbarSticky() {
  if (window.scrollY > 80) { // التمرير لأسفل بمقدار أكبر من 80 بكسل
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

// استمع إلى حدث التمرير وتنفيذ الدالة toggleNavbarSticky
window.addEventListener('scroll', toggleNavbarSticky);




const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

let index = 0;
let isMoving = false;

function updateCarousel() {
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(${-index * items[0].clientWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (isMoving) return;
  isMoving = true;
  index++;
  updateCarousel();
  if (index >= items.length / 2) {
    setTimeout(() => {
      carousel.style.transition = 'none';
      index = 0;
      updateCarousel();
      isMoving = false;
    }, 500);
  } else {
    setTimeout(() => isMoving = false, 500);
  }
});

prevBtn.addEventListener('click', () => {
  if (isMoving) return;
  isMoving = true;
  index--;
  updateCarousel();
  if (index < 0) {
    setTimeout(() => {
      carousel.style.transition = 'none';
      index = items.length / 2 - 1;
      updateCarousel();
      isMoving = false;
    }, 500);
  } else {
    setTimeout(() => isMoving = false, 500);
  }
});







function filterProducts(category) {
    let products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
}

function addToCart(button) {
    button.innerHTML = "Added";
    button.disabled = true;
    button.style.backgroundColor = "#ffcc00"; // Change color to green when added
    button.style.cursor = "not-allowed";
    button.style.transform = "scale(1)";
    button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
}






const image = document.getElementById( 'productImg' );
const btn = document.getElementsByClassName( 'btn' );

btn[0].addEventListener( 'click', function(){
    image.src = './assest/images/get-image.png';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );
btn[1].addEventListener( 'click', function(){
    image.src = './assest/images/get-image2.png';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );
btn[2].addEventListener( 'click', function(){
    image.src = './img/3.png';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );





document.addEventListener('DOMContentLoaded', () => {
  function updateCountdown() {
      const countdownDate = new Date("Jul 10, 2024 00:00:00").getTime();
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
      document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
      document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
      document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

      if (distance < 0) {
          clearInterval(interval);
          document.getElementById("countdown-timer").innerHTML = "EXPIRED";
      }
  }

  const interval = setInterval(updateCountdown, 1000);
});




let counter = 2;
const main = document.querySelector('.main');
const products = document.querySelectorAll('.product');
const imgWrapper = document.querySelector('.imgWrapper');

function moveImgs(){
  switch(counter){
    case 1:
      imgWrapper.style.top = "80%";
      break;
    case 2: 
      imgWrapper.style.top = "0";
      break;
    case 3:
      imgWrapper.style.top = "-80%";
      break;
  }
}

function nextProduct(){
  const index = counter-1;
  moveImgs();
  products[index-1].classList.remove('show');
  products[index-1].classList.add('hide');
  products[index].classList.remove('hide');
  products[index].classList.add('show');
}
function prevProduct(){
  const index = counter-1;
  moveImgs();
  products[index+1].classList.remove('show');
  products[index+1].classList.add('hide');
  products[index].classList.remove('hide');
  products[index].classList.add('show');
 
}


main.addEventListener('click', function(e){
  if(e.target.className.indexOf("pre") > -1 && counter > 1){
    counter--;
    prevProduct();
    return;
  };
  if(e.target.className.indexOf("next") > -1 && counter < 3){
    counter++;
    nextProduct();
    return;
  };
  
})












