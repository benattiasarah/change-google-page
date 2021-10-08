/*     -change la couleur du fond de la page google  en jaune 
     -changer la couleur du fond du footer en vert
     -changer la couleur des éléments situer dans le footer
     -changer le font-size de tout element de la page a 30px 
     -changer la bordure de l'input en 5x solid black*/

     
document.querySelector('body').style.background='yellow'
document.querySelectorAll('.o3j99')[4].style.background='green'
document.querySelectorAll('.c93Gbe *').forEach((e) => {e.style.color='black'})
document.querySelectorAll('body *').forEach((e) => {e.style.fontSize='30px'})
document.querySelector('.RNNXgb').style.border='5px solid black'


