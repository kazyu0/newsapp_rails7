window.addEventListener('turbo:load', function(){
  const menu = document.getElementById("menu1");

  menu.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color: orange;");
  });
  menu.addEventListener('mouseout', function(){
    this.removeAttribute("style", "background-color: orange;");
  });
});