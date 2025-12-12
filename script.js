function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
  }



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 3000 },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1, spaceBetween: 30, loop: true,
      autoplay: { delay: 3000 },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      breakpoints: { 768:{slidesPerView:2}, 1024:{slidesPerView:3} }
    });

    const images=["Images/Man (2).png","Images/Women.png","Images/Laptop.png"];
    let index=0;
    const img=document.getElementById("changingImage");
    setInterval(()=>{ index=(index+1)%images.length; img.style.opacity=0; setTimeout(()=>{ img.src=images[index]; img.style.opacity=1; },400); },3000);

window.onload = () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 40; 

  counters.forEach(counter => {
    const target = parseInt(counter.innerText.replace("+", ""));
    let count = 0;

    const updateCount = () => {
      if (count < target) {
        count++;
        counter.innerText = count + "+";
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCount();
  });
};


document.addEventListener("DOMContentLoaded", () => {

  const services = document.querySelectorAll(".service");

  services.forEach(service => {
    service.style.opacity = 0;
    service.style.transform = "translateY(80px)";
    service.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    const texts = service.querySelectorAll(".content h2, .content p, .content button");
    const images = service.querySelectorAll(".img");

    texts.forEach(el => {
      el.style.opacity = 0;
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    images.forEach(img => {
      img.style.opacity = 0;
      img.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    });
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const service = entry.target;
        service.style.opacity = 1;
        service.style.transform = "translateY(0)";

        const isRight = service.classList.contains("service-right");

        const texts = service.querySelectorAll(".content h2, .content p, .content button");
        texts.forEach((el, i) => {
          el.style.transform = `translateX(${isRight ? "40px" : "-40px"})`;

          setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateX(0)";
          }, 150 + i * 120);
        });

        const backImg = service.querySelector(".img.back");
        const frontImg = service.querySelector(".img.front");

        if (backImg) {
          backImg.style.transform = "translateX(-40px) scale(0.95)";
          setTimeout(() => {
            backImg.style.opacity = 1;
            backImg.style.transform = "translateX(0) scale(1)";
          }, 250);
        }

        if (frontImg) {
          frontImg.style.transform = "translateX(40px) scale(0.95)";
          setTimeout(() => {
            frontImg.style.opacity = 1;
            frontImg.style.transform = "translateX(0) scale(1)";
          }, 400);
        }

        observer.unobserve(service);
      });
    },
    { threshold: 0.3 }
  );

  services.forEach(service => observer.observe(service));
});

//slide

// window.onload = () => {
//     const cards = document.querySelectorAll(".feature-card");

//     cards.forEach((card, i) => {
//         setTimeout(() => {
//             card.classList.add("show");
//         }, i * 300);
//     });
// };

window.onload = () => {
    const cards = document.querySelectorAll(".feature-card");

    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add("show");
        }, i * 300);
    });
};
