document.addEventListener("DOMContentLoaded", () => {

    const activeTabClasses = ['bg-blue-600', 'text-white'];
    const inactiveTabClasses = ['bg-gray-200', 'text-gray-700', 'hover:bg-gray-300'];

    const allProjectsContents = [
        document.getElementById("projects-content"),
        document.getElementById("certificates-content"),
        document.getElementById("tech-content")
    ];

    const projectsButton = document.getElementById("projects-button");
    const certificatesButton = document.getElementById("certificates-button");
    const techButton = document.getElementById("tech-button");

    const allProjectsButtons = [
        projectsButton,
        certificatesButton,
        techButton
    ];

    const heroSubtitle = document.getElementById("hero-subtitle");
    const roles = ["Szoftverfejlesztő", 
        "Backend fejlesztő", 
        "Full-stack fejlesztő", 
        "Android fejlesztő", 
        "Játék fejlesztő", 
        "Data scientist"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const delayBetweenRoles = 2000;

    let typingInterval;

    function swapActiveTab(activeButton, activeContent) {
        allProjectsContents.forEach(content => {
            content.classList.add("hidden");
        });

        allProjectsButtons.forEach(button => {
            button.classList.add(...inactiveTabClasses);
            button.classList.remove(...activeTabClasses);
        });

        activeContent.classList.remove("hidden");
        activeButton.classList.add(...activeTabClasses);
        activeButton.classList.remove(...inactiveTabClasses);
    }

    function typeEffect(){
        const currentRole = roles[roleIndex];

        if(isDeleting){
            heroSubtitle.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            if(charIndex === 0){
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;

                clearInterval(typingInterval);
                typingInterval = setInterval(typeEffect, typeSpeed);
            }
        }else{
            heroSubtitle.textContent = currentRole.substring(0, charIndex+1);
            charIndex++;
            if(charIndex === currentRole.length){
                isDeleting = true;
                clearInterval(typingInterval);
                setTimeout(() => {
                    typingInterval = setInterval(typeEffect, deleteSpeed);
                }, delayBetweenRoles);
            }
        }
    }

    typingInterval = setInterval(typeEffect, typeSpeed);


    projectsButton.addEventListener("click", () => {
        swapActiveTab(allProjectsButtons[0], allProjectsContents[0]);
    });

    certificatesButton.addEventListener("click", () => {
        swapActiveTab(allProjectsButtons[1], allProjectsContents[1]);
    });

    techButton.addEventListener("click", () => {
        swapActiveTab(allProjectsButtons[2], allProjectsContents[2]);
    });
});