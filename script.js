// Toggle pour afficher/masquer les caractéristiques
const toggleBtn = document.getElementById('toggleBtn');
const caracteristiques = document.getElementById('caracteristiques');

toggleBtn.addEventListener('click', function() {
    caracteristiques.classList.toggle('hidden');
    
    // Changer le texte du bouton
    if (caracteristiques.classList.contains('hidden')) {
        toggleBtn.textContent = 'Voir les caractéristiques';
    } else {
        toggleBtn.textContent = 'Masquer les caractéristiques';
    }
});
