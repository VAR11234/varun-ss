document.addEventListener('DOMContentLoaded', function () {
    // Function to display a message and scroll to the section when a link is clicked
    function handleClick(link, sectionId) {
        const linkText = link.textContent.trim();
        alert(`You clicked ${linkText}`);
        
        // Scroll to the corresponding section
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Navigation links with corresponding section ids
    const navLinks = document.querySelectorAll('nav a');

    // Add click event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevent the default behavior of the link (e.g., navigating to a new page)
            event.preventDefault();

            // Get the data-section attribute from the clicked link
            const sectionId = link.getAttribute('href').substring(1);

            // Handle the click
            handleClick(link, sectionId);
        });
    });
});

