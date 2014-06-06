$( document ).ready(function(){
    $( "#div_tabs" ).tabs({
        collapsible: true,
        active: false, 
        activate: function(event, ui){
            var active = $( "#div_tabs" ).tabs( "option", "active" );
            switch (active) {
                case 0:
                    initD2();
                    break;
            }
        }
    });
    
    $( "button" ).button().click(function( event ){
        event.preventDefault();
    });
    
    $( "#div_test" ).click(function(){
        var value = $( this ).html();
        var newTemp = "<input type='text' id='input_temp' value='" + value + "'/>";
        $( this ).replaceWith( newTemp );
        
    });
});

/**
 * Initialize Department 2 Inventory DB interface
 * @returns {undefined}
 */
function initD2()
{
    var d2 = new D2DB1("wtf");
}

function getData(department)
{
    $.ajax({
        type: "POST",
        url: "jthk_donation_control.php",
        data: { function:    "getDonationPublic",
                searchBy:    searchBy ,
                searchValue: searchValue, 
                toDonate:    toDonate }
    }).done(function( msg ) {
        var jsonObj = jQuery.parseJSON( msg );
        if (jsonObj === null) {
            alert("No result found");
        } else {
            for (var i = 0; i < jsonObj.length; i++) {
                var obj = jsonObj[i];
                donationList+= "<h3>" + obj.Title + "</h3>";
                donationList+= "<div>";
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        donationList+= key + ":" + obj[key] + "<br>";
                    }
                }
                donationList+= "</div>";
            }
        }
    });
}