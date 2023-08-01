
// Obtener todos los elementos con la clase "menu-item"
const menuItems = document.getElementsByClassName("menu_item");

// Función para quitar la clase "hovered" de todos los elementos
function removeHoverFromAll() {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("activado");
  }
}

// Agregar el evento hover a cada elemento del menú
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("mouseenter", function() {
    // Al hacer hover, quitar la clase "hovered" de todos los elementos y luego agregarla al elemento actual
    removeHoverFromAll();
    this.classList.add("activado");
  });

  menuItems[i].addEventListener("mouseleave", function() {
    this.classList.remove("activado"); // Quitar la clase "hovered" al dejar de hacer hover
  });
}
