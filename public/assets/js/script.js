document.addEventListener('DOMContentLoaded', function() {
    alert('¡Bienvenido a la receta de Arroz con Pollo Peruano!');

    const checkboxes = document.querySelectorAll('.ingredients input[type="checkbox"]');
    const startTimerButton = document.getElementById('start-timer');
    const timerDisplay = document.getElementById('timer-display');
    const minutesInput = document.getElementById('minutes');

    let timer;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            if (allChecked) {
                alert('¡Todos los ingredientes están listos!');
            }
        });
    });

    startTimerButton.addEventListener('click', function() {
        clearInterval(timer); // Clear any existing timer
        const minutes = parseInt(minutesInput.value);
        if (isNaN(minutes) || minutes < 0) {
            alert('Por favor, ingresa un número válido de minutos.');
            return;
        }

        let timeRemaining = minutes * 60;
        timerDisplay.textContent = formatTime(timeRemaining);

        timer = setInterval(function() {
            timeRemaining--;
            timerDisplay.textContent = formatTime(timeRemaining);
            if (timeRemaining <= 0) {
                clearInterval(timer);
                alert('¡El tiempo ha terminado!');
            }
        }, 1000);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
});