document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("ul.menubar li");
    let activeIndex = 0;

    function setActiveItem(index) {
        menuItems.forEach(item => item.classList.remove("active"));
        
        menuItems[index].classList.add("active");
    }

    setActiveItem(activeIndex);

    setInterval(() => {
        activeIndex = (activeIndex + 1) % menuItems.length; 
        setActiveItem(activeIndex);
    }, 1000); 
});
