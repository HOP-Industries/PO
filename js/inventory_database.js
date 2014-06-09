$( document ).ready(function(){
    $( "#div_tabs" ).tabs({
        collapsible: true,
        active: false, 
        activate: function(event, ui){
            var active = $( "#div_tabs" ).tabs( "option", "active" );
            switch (active) {
                case 0:
                    initD2Item();
                    break;
            }
        }
    });
    
    $( "button" ).button().click(function( event ){
        event.preventDefault();
    });
    
    //adding item 
    $( ".add_item" ).click(function( event ){
        var temp = "form#" + $( this ).val() + " :input";
        var item = [];
        $( temp ).each(function(){
            item.push($( this ).val());
        });
        addD2Item( item );
    });
    
    //update an item
    $( ".update_item").click(function( event ){
        var temp = "form#" + $( this ).val() + " :input";
        var item = [];
        $( temp ).each(function(){
            item.push($( this ).val());
        });
        updateD2Item( item );
    });
    
    //delete an item
    $( ".delete_item" ).click(function( event ){
        var temp = "form#" + $( this ).val() + " :input";
        var item = [];
        $( temp ).each(function(){
            item.push($( this ).val());
        });
        deleteD2Item( item );
    });
    
    //clear the form
    $( ".clear_item" ).click(function( event ){
        document.getElementById( $( this ).val() ).reset();
    });
});
