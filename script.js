// Data de referência: 5 de outubro de 2024
const startDate = new Date('2024-10-05T00:00:00');

// Elementos do DOM
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Função para atualizar o contador
function updateCounter() {
    const now = new Date();
    const timeDifference = now - startDate;
    
    // Se a data atual for anterior à data de referência, mostra zeros
    if (timeDifference < 0) {
        daysElement.textContent = '0';
        hoursElement.textContent = '0';
        minutesElement.textContent = '0';
        secondsElement.textContent = '0';
        return;
    }
    
    // Cálculo do tempo decorrido
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    // Atualiza os elementos na página com animação
    animateValue(daysElement, parseInt(daysElement.textContent), days);
    animateValue(hoursElement, parseInt(hoursElement.textContent), hours);
    animateValue(minutesElement, parseInt(minutesElement.textContent), minutes);
    secondsElement.textContent = seconds; // Segundos mudam muito rápido, sem animação
}

// Função para animar a mudança de valores
function animateValue(element, start, end) {
    if (start === end) return;
    
    // Apenas anima se a diferença for significativa
    if (Math.abs(start - end) > 1) {
        const duration = 500; // duração da animação em ms
        const startTime = performance.now();
        
        function updateAnimation(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const value = Math.floor(start + (end - start) * progress);
            
            element.textContent = value;
            
            if (progress < 1) {
                requestAnimationFrame(updateAnimation);
            } else {
                element.textContent = end;
            }
        }
        
        requestAnimationFrame(updateAnimation);
    } else {
        element.textContent = end;
    }
}

// Adiciona efeitos visuais quando o mouse passa sobre os blocos de tempo
document.querySelectorAll('.time-block').forEach(block => {
    block.addEventListener('mouseover', () => {
        block.style.transform = 'translateY(-5px) scale(1.05)';
        block.style.boxShadow = '0 8px 16px rgba(226, 92, 103, 0.4)';
    });
    
    block.addEventListener('mouseout', () => {
        block.style.transform = '';
        block.style.boxShadow = '';
    });
});

// Efeito de coração pulsante
const hearts = document.querySelectorAll('.hearts span');
hearts.forEach((heart, index) => {
    heart.style.animationDelay = `${index * 0.3}s`;
});

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);
updateCounter(); // Executa imediatamente ao carregar a página

// Adiciona efeito de parallax na imagem quando a página é rolada
window.addEventListener('scroll', () => {
    const photoContainer = document.querySelector('.photo-container');
    const scrollPosition = window.scrollY;
    
    if (photoContainer) {
        const offset = scrollPosition * 0.3;
        photoContainer.style.transform = `translateY(${offset}px)`;
    }
});

