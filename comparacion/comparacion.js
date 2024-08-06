document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.image-comparison-slider').forEach(sliderContainer => {
      const slider = sliderContainer.querySelector('.slider');
      const revealImage = sliderContainer.querySelector('.reveal');
      
      let isDragging = false;
  
      const updateImageComparison = (event) => {
        const rect = sliderContainer.getBoundingClientRect();
        const x = Math.min(Math.max(0, event.clientX - rect.left), rect.width);
        const percentage = (x / rect.width) * 100;
        revealImage.style.clipPath = `inset(0 0 0 ${100 - percentage}%)`;
        slider.style.left = `${percentage}%`;
      };
  
      slider.addEventListener('mousedown', (event) => {
        isDragging = true;
        updateImageComparison(event);
      });
  
      window.addEventListener('mousemove', (event) => {
        if (isDragging) {
          updateImageComparison(event);
        }
      });
  
      window.addEventListener('mouseup', () => {
        isDragging = false;
      });
    });
  });