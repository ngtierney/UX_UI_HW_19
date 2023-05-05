console.log("Your index.js file is loaded correctly!");

const mainnav = document.querySelectorAll('#mainnav li a');

mainnav.forEach(link => {
  link.addEventListener('mouseover', () => {
    CSS = '#10349C'; 
  });
  link.addEventListener('mouseout', () => {
    CSS = '#2F292A'; 
  });
});