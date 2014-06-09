$( document ).ready(function(){
    var http = new XMLHttpRequest();
    var url  = "inventory_control.php";
    var params = "function=getDb1&department=2";
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState === 4 && http.status === 200) {
	}
    };
    http.send(params);
    
    console.log(http.responseText);
    $( "button" ).button().click(function( event ){
        event.preventDefault();
    });
    //clear the form
    $( ".clear_item" ).click(function( event ){
        document.getElementById( $( this ).val() ).reset();
    });
});

