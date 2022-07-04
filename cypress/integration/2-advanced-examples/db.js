/// <reference types="Cypress" />



describe('database connection', function(){


    it('My seventh Case', function(){

        cy.task(
            "queryDb",
            `SELECT * FROM accounting_groups`
          ).then((result)=>{

         console.log(result[0][1]);
        })
       


    })

   

})



   
   
