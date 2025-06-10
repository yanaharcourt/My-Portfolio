// Tab switching functionality
document.querySelectorAll('.sidebar-tabs button').forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        // Remove active class from all buttons and tabs
        document.querySelectorAll('.sidebar-tabs button').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));

        // Add active class to clicked button and corresponding tab
        button.classList.add('active');
        document.querySelector(`.tab-content[data-tab="${tabName}"]`).classList.add('active');
    });
});

/*------------------------------------------------------------------
# Card animation
------------------------------------------------------------------*/
// Interactive card flipping functionality for multiple sections
document.querySelectorAll('.image-stack').forEach(stack => {
    let currentCard = 0;
    const cards = stack.querySelectorAll('.image-card');
    const dots = stack.querySelectorAll('.dot');
    const nextButton = stack.querySelector('.next-button');
    const prevButton = stack.querySelector('.prev-button');

    function showCard(index) {
        cards[currentCard].classList.remove('active');
        dots[currentCard].classList.remove('active');

        currentCard = index;

        cards[currentCard].classList.add('active');
        dots[currentCard].classList.add('active');
    }

    function nextCard() {
        const nextIndex = (currentCard + 1) % cards.length;
        showCard(nextIndex);
    }

    function prevCard() {
        const prevIndex = (currentCard - 1 + cards.length) % cards.length;
        showCard(prevIndex);
    }

    if (nextButton) nextButton.addEventListener('click', nextCard);
    if (prevButton) prevButton.addEventListener('click', prevCard);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showCard(index));
    });

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (index !== currentCard) {
                showCard(index);
            }
        });
    });
});
/*------------------------------------------------------------------
# Explore section navigation
------------------------------------------------------------------*/
// Tab switching functionality
document.querySelectorAll('.sidebar-tabs button').forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        // Remove active class from all buttons and tabs
        document.querySelectorAll('.sidebar-tabs button').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));

        // Add active class to clicked button and corresponding tab
        button.classList.add('active');
        document.querySelector(`.tab-content[data-tab="${tabName}"]`).classList.add('active');
    });
});

// Interactive card flipping functionality for multiple sections
document.querySelectorAll('.image-stack').forEach(stack => {
    let currentCard = 0;
    const cards = stack.querySelectorAll('.image-card');
    const dots = stack.querySelectorAll('.dot');
    const nextButton = stack.querySelector('.next-button');
    const prevButton = stack.querySelector('.prev-button');

    function showCard(index) {
        cards[currentCard].classList.remove('active');
        dots[currentCard].classList.remove('active');

        currentCard = index;

        cards[currentCard].classList.add('active');
        dots[currentCard].classList.add('active');
    }

    function nextCard() {
        const nextIndex = (currentCard + 1) % cards.length;
        showCard(nextIndex);
    }

    function prevCard() {
        const prevIndex = (currentCard - 1 + cards.length) % cards.length;
        showCard(prevIndex);
    }

    if (nextButton) nextButton.addEventListener('click', nextCard);
    if (prevButton) prevButton.addEventListener('click', prevCard);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showCard(index));
    });

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (index !== currentCard) {
                showCard(index);
            }
        });
    });
});

// Explore section navigation
document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const galleryImages = document.querySelector('#galleryImages');
    const slideIndicator = document.querySelector('.slide-indicator');
    const locationTitle = document.querySelector('.location-title');
    const locationDescription = document.querySelector('.location-description');
    const yearOverlay = document.querySelector('#yearOverlay');

    let currentSlide = 0;
    const totalSlides = 4;

    const slideData = [
        {
            title: 'Sé de Braga',
            description: 'O Sé de Braga é um dos monumentos mais importantes da cidade, fundado no século XI e considerado um exemplo significativo de arquitetura românica em Portugal. Ao longo dos séculos, o edifício sofreu várias modificações, principalmente no estilo gótico e barroco. Hoje, é um símbolo da fé e da história de Braga.',
            number: '01',
            year: '1070'
        },
        {
            title: 'Mosteiro de São Martinho de Tibães',
            description: 'O Mosteiro de São Martinho de Tibães, fundado no século XI, é considerado a Casa Mãe da Congregação Beneditina Portuguesa. Este majestoso complexo monástico, com sua impressionante arquitetura barroca e jardins históricos, representa um dos mais importantes patrimônios religiosos e culturais do norte de Portugal.',
            number: '02',
            year: '1060'
        },
        {
            title: 'Arco da Porta Nova',
            description: 'O Arco da Porta Nova é um dos símbolos mais emblemáticos de Braga, construído no século XVIII. Este monumento neoclássico marca a entrada principal para o centro histórico da cidade e representa a grandiosidade arquitetônica da época, sendo um ponto de referência fundamental no coração de Braga.',
            number: '03',
            year: '1772'
        },
        {
            title: 'Palácio dos Biscainhos',
            description: 'O Palácio dos Biscainhos, do século XVI, é um magnífico exemplo da arquitetura senhorial portuguesa. Atualmente funciona como museu, preservando móveis, azulejos e jardins históricos que retratam o modo de vida da nobreza bracarense. Seus jardins barrocos são considerados entre os mais belos do país.',
            number: '04',
            year: '1525'
        }
    ];

    function updateSlide(index) {
        // Update active image wrapper
        const imageWrappers = document.querySelectorAll('.image-wrapper');
        imageWrappers.forEach(wrapper => wrapper.classList.remove('active'));
        imageWrappers[index].classList.add('active');

        // Move gallery
        const translateX = -(index * 430);
        if (galleryImages) {
            galleryImages.style.transform = `translateX(${translateX}px)`;
        }

        // Update text content
        const data = slideData[index];
        if (locationTitle) locationTitle.textContent = data.title;
        if (locationDescription) locationDescription.textContent = data.description;
        if (slideIndicator) slideIndicator.textContent = data.number;
        if (yearOverlay) yearOverlay.textContent = data.year;

        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        updateSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide(prev);
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }
});
/*------------------------------------------------------------------
# Counter Animation for Education Section
------------------------------------------------------------------*/
function animateCounter(element, target, suffix = '', duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            // Format number with dots for thousands
            const currentValue = Math.floor(start);
            let formattedValue;

            if (currentValue >= 1000) {
                formattedValue = currentValue.toLocaleString('pt-PT');
            } else {
                formattedValue = currentValue.toString();
            }

            element.textContent = formattedValue + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            // Final value formatting
            let finalValue;
            if (target >= 1000) {
                finalValue = target.toLocaleString('pt-PT');
            } else {
                finalValue = target.toString();
            }
            element.textContent = finalValue + suffix;
        }
    }

    updateCounter();
}

function isElementInViewport(element, offset = 200) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    return rect.top <= (windowHeight - offset);
}

// Initialize counter animation when stats section comes into view
document.addEventListener('DOMContentLoaded', function () {
    const statsSection = document.querySelector('.educacao-stats');
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    let hasAnimated = false;

    function checkStatsVisibility() {
        if (!hasAnimated && statsSection && isElementInViewport(statsSection, 200)) {
            hasAnimated = true;

            statNumbers.forEach(element => {
                const target = parseInt(element.getAttribute('data-target'));
                const suffix = element.getAttribute('data-suffix') || '';

                // Add a slight delay for each counter to create a staggered effect
                const index = Array.from(statNumbers).indexOf(element);
                setTimeout(() => {
                    animateCounter(element, target, suffix, 2000);
                }, index * 200);
            });
        }
    }

    // Check on scroll
    window.addEventListener('scroll', checkStatsVisibility);

    // Check on page load in case section is already visible
    checkStatsVisibility();
});
/*------------------------------------------------------------------
        # Animated Counters for Stats
        ------------------------------------------------------------------*/
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += step;
                if (current > target) current = target;

                counter.textContent = Math.floor(current) + suffix;
                counter.classList.add('counting');

                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
                counter.classList.remove('counting');
            }
        };

        updateCounter();
    });
}

// Intersection Observer for triggering counter animation
const observeCounters = () => {
    const statsElements = document.querySelectorAll('.saude-stats');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Small delay to make it feel more natural
                setTimeout(() => {
                    animateCounters();
                }, 200);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    statsElements.forEach(element => {
        observer.observe(element);
    });
};

// Initialize counter observation when DOM is loaded
document.addEventListener('DOMContentLoaded', observeCounters);

// Button click handlers
document.addEventListener('DOMContentLoaded', function () {
    // Saiba Mais buttons
    const saudeButtons = document.querySelectorAll('.saude-button, .programa-saude-button');
    saudeButtons.forEach(button => {
        button.addEventListener('click', function () {
            console.log('Saiba mais clicked');
            // Add your navigation logic here
        });
    });

    // Card link buttons
    const cardLinks = document.querySelectorAll('.card-link');
    cardLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log('Card link clicked:', this.textContent);
            // Add your navigation logic here
        });
    });

    // Protection links
    const protecaoLinks = document.querySelectorAll('.protecao-link');
    protecaoLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log('Protection link clicked:', this.textContent);
            // Add your navigation logic here
        });
    });
});