$( document ).ready(function(){
    $( "button" ).button().click(function( event ) {
        event.preventDefault();
    });
    
    $( "#but_po_d2" ).click(function(){
        window.location.href = "po_d2.php";
    });
    
    $( "#but_inventory_db" ).click(function(){
        window.location.href = "po_inventory_database.php";
    });
});
