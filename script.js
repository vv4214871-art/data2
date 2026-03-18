function revealFinal() {
    const phase2 = document.getElementById('phase-2');
    const interaction = document.querySelector('.interaction-area');

    // Hide the question and button smoothly
    interaction.style.opacity = '0';
    setTimeout(() => {
        interaction.style.display = 'none';
        
        // Show Phase 2
        phase2.classList.remove('hidden');
        phase2.classList.add('visible');
        
        // Scroll to the new message
        phase2.scrollIntoView({ behavior: 'smooth' });
    }, 500);
}

// Subtle entry animation
window.onload = () => {
    document.getElementById('phase-1').style.opacity = '1';
};
