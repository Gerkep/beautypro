if(screen.width<1200){
  const startAnimation = (entries, observer) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("active", entry.isIntersecting);
      });
    };
    
    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: '120px', threshold: 1 }; 
    
    const elements = document.querySelectorAll('.stage-container, .treatments-container, .testimonials-block, .container, .transformation, .opinion-container');
    elements.forEach(el => {
      observer.observe(el, options);
    });
}