document.querySelectorAll(".menubar li").forEach(function(item) {
    item.addEventListener("click", function() {
        // Verwijder de 'active' klasse van alle lijstitems
        document.querySelectorAll(".menubar li").forEach(function(li) {
            li.classList.remove("active");
        });

        // Voeg de 'active' klasse toe aan het aangeklikte item
        this.classList.add("active");
    });
});