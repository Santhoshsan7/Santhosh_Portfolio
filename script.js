// Function to show the dropdown menu
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

// Function to hide the dropdown menu
function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect Variables
const texts = [
    "JAVA DEVELOPER",
    "FULL STACK DEVELOPER",
    "SOFTWARE DEVELOPER"
];

let speed = 100; // Speed of typing
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

// Function for typing effect
function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        // Delay before starting to erase text
        setTimeout(eraseText, 1000);
    }
}

// Function for erasing effect
function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50); // Speed of erasing
    } else {
        // Move to the next text
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        // Delay before typing the next text
        setTimeout(typeWriter, 500);
    }
}

// Start the typewriter effect on window load
window.onload = function() {
    typeWriter();
};

    document.addEventListener('DOMContentLoaded', function () {
        const sections = document.querySelectorAll('section'); // All sections
        const links = document.querySelectorAll('.links a'); // All nav links

        // Function to handle showing the clicked section and hiding others
        function showSection(targetSection) {
            sections.forEach(section => {
                section.classList.remove('active'); // Hide all sections
            });

            document.querySelector(targetSection).classList.add('active'); // Show the selected section
        }

        // Event listeners for nav links
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent default link behavior

                // Get the target section's ID from the href attribute
                const targetSection = this.getAttribute('href');

                // Show the target section
                showSection(targetSection);

                // Smooth scroll to the section
                document.querySelector(targetSection).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Initially display the home section when the page loads
        showSection('#home');
    });

    