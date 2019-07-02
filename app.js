let cy=document.body;


 arrcolor=['#039be5','#00FF00','#000000','#FFDF00'];
function colorchanger() {


         let colo= arrcolor.pop();
        cy.style.backgroundColor=colo;

        arrcolor.unshift(colo);


}


setInterval(colorchanger,2000);
