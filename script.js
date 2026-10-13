const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log("Navigation clicked");

    });

});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("click", () => {

        projectCards.forEach(item => {
            item.classList.remove("active");
        });

        card.classList.add("active");

    });

});

photo: "isaac.jpg", // <img src="isaac.jpg" width="40">