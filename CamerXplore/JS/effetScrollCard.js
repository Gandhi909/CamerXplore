const observer = new IntersectionObserver((entries)=>{
    
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
         entry.target.classList.add('show')
    }
  })
},{
    threshold:0.1
})
const cards = document.querySelectorAll('.card')
cards.forEach((el) => observer.observe(el))
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // Si l'élément est visible, on ajoute la classe
//       entry.target.classList.add('show');
//     }
//   });
// }, {
//   threshold: 0.1 // L'effet se déclenche quand 10% de la carte est visible
// });

// // On cible toutes les cartes et on demande à l'observer de les surveiller
// const cards = document.querySelectorAll('.card');
// cards.forEach((el) => observer.observe(el));