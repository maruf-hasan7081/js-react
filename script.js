const slides = document.querySelectorAll(".slideshow_element");
let current = 0;

// প্রথম স্লাইড দেখাও
slides[current].classList.add("active");

setInterval(() => {
  // আগেরটা hide করো
  slides[current].classList.remove("active");

  // পরের slide এ যাও
  current = (current + 1) % slides.length;

  // নতুনটা দেখাও
  slides[current].classList.add("active");
}, 2000); // প্রতি 2 সেকেন্ডে slide পরিবর্তন
