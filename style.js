<script>
  const boxes = document.querySelectorAll('.box');
  const popups = document.querySelectorAll('.popup');

  // Toggle box expansion
  boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
      // Expand the clicked box
      box.classList.toggle('expanded');

      // Show corresponding popup
      const popup = document.querySelector(`#popup${index + 1}`);
      popups.forEach(p => p.classList.remove('active')); // Hide all popups
      popup.classList.add('active');
    });
  });

  // Add event listeners for color and size options
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const color = e.target.getAttribute('data-color');
      const expandedBox = document.querySelector('.box.expanded');
      if (expandedBox) {
        expandedBox.style.backgroundColor = color;
      }
    });
  });

  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const size = e.target.getAttribute('data-size');
      const expandedBox = document.querySelector('.box.expanded');
      if (expandedBox) {
        if (size === 'small') {
          expandedBox.style.width = '150px';
          expandedBox.style.height = '100px';
        } else if (size === 'medium') {
          expandedBox.style.width = '200px';
          expandedBox.style.height = '130px';
        } else if (size === 'large') {
          expandedBox.style.width = '250px';
          expandedBox.style.height = '150px';
        }
      }
    });
  });
</script>
