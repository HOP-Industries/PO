$( document ).ready(function(){
    $( "#div_tabs" ).tabs({
        collapsible: true,
        active: false, 
        activate: function(event, ui){
            var active = $( "#div_tabs" ).tabs( "option", "active" );
            switch (active) {
                case 0:
                    getD2DB1().done(function(result) {
                        console.log(result);
                    }).fail(function() {
                        // an error occurred
                    });
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
/*
function getD2DB1(idTag) 
{
    $.ajax({
        type: "POST",
        url: "inventory_control.php",
        data: { function:   "getDb1",
                department: 2}
    }).success(function( msg ) {
        var db1 = [];
        var jsonObj = jQuery.parseJSON( msg );
        if (jsonObj === null) {
            alert("No result found");
        } else {
            for (var i = 0; i < jsonObj.length; i++) {
                db1[i] = new D2DB1(jsonObj[i]);
            }
            setD2DB1(db1);
        }
    });
}

function setD2DB1(obj)
{
    var tempTable = "<table id='tb_d2_item_list' border='1'><tr>"
                  + "<th>Item Code</th>"
                  + "<th>Packaging</th>"
                  + "<th>S.G</th>"
                  + "<th>Grade</th>"
                  + "<th>Gauge MM</th>"
                  + "<th>Width MM</th>"
                  + "<th>Length MM</th>"
                  + "<th>Gauge</th>"
                  + "<th>Width</th>"
                  + "<th>Length</th>"
                  + "<th>Sheet/lb</th></tr>"
    for (var i = 0; i < obj.length; i++) {
        tempTable+= "<tr>"
                  + "<td>" + obj[i].HIC           + "</td>"
                  + "<td>" + obj[i].Packing       + "</td>"
                  + "<td>" + obj[i].SG            + "</td>"
                  + "<td>" + obj[i].Grade         + "</td>"
                  + "<td>" + obj[i].GaugeM        + "</td>"
                  + "<td>" + obj[i].Gauge         + "</td>"
                  + "<td>" + obj[i].WidthM        + "</td>"
                  + "<td>" + obj[i].Width         + "</td>"
                  + "<td>" + obj[i].LengthM       + "</td>"
                  + "<td>" + obj[i].Length        + "</td>"
                  + "<td>" + obj[i].SheetPerPound + "</td>"
                  + "</tr>"
    }
    tempTable+= "</table>";
    $( "#div_d2_item_list" ).html(tempTable);
}

function D2DB1(obj) 
{
    this.HIC           = obj.ItemCode;
    this.Packing       = obj.Spec;
    this.SG            = parseFloat(obj.SG);
    this.Grade         = obj.Grade;
    this.GaugeM        = parseFloat(obj.Mgauge);
    this.Gauge         = obj.Gauge;
    this.WidthM        = parseFloat(obj.Mwidth);
    this.Width         = parseFloat(obj.Width);
    this.LengthM       = parseFloat(obj.Mlength);
    this.Length        = parseFloat(obj.Length);
    this.SheetPerPound = parseFloat(obj.LbsSheet);
}
*/