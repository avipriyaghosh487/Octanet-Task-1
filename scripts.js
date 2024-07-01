// SLIDER CODE

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.brand-slider');
    let scrollSpeed = 1;

    function scrollBrands() {
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0;
        } else {
            slider.scrollLeft += scrollSpeed;
        }
    }

    let scrollInterval = setInterval(scrollBrands, 20);

    slider.addEventListener('mouseover', function() {
        clearInterval(scrollInterval);
    });

    slider.addEventListener('mouseout', function() {
        scrollInterval = setInterval(scrollBrands, 20);
    });
});


// NEWSLETTER CODE

document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate form submission and show success message (customize as needed)
    alert("Thank you for subscribing!");

    // Clear the form
    event.target.reset();
});
