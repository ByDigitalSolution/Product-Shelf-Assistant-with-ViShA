document.addEventListener('DOMContentLoaded', () => {
    // Tint Selection Logic
    const tints = document.querySelectorAll('.tint');
    
    tints.forEach(tint => {
        tint.addEventListener('click', () => {
            // Remove active class from others
            tints.forEach(t => t.classList.remove('active'));
            // Add to current
            tint.classList.add('active');
            
            // Add a subtle "click" effect
            tint.style.transform = "scale(0.8)";
            setTimeout(() => tint.style.transform = "scale(1)", 100);
        });
    });

    // Reserve Button Interaction
    const reserveBtn = document.querySelector('.btn-primary');
    reserveBtn.addEventListener('click', () => {
        reserveBtn.innerText = "RESERVING...";
        
        // Simulate a network delay
        setTimeout(() => {
            reserveBtn.innerText = "CONFIRMED ✅";
            reserveBtn.style.background = "#39ff14"; // Success Green
            reserveBtn.style.boxShadow = "0 0 20px #39ff14";
        }, 1500);
    });
});
