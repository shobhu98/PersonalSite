let cy=document.body;


 arrcolor=['#ff0132','#928a53','#eaa052','#df103c'];
function colorchanger() {


         let colo= arrcolor.pop();
        cy.style.backgroundColor=colo;

        arrcolor.unshift(colo);


}


setInterval(colorchanger,4000);
