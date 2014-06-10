/**
 * Initialize d2 items
 * @returns {undefined}
 */
function initD2Item()
{
    getD2DB1().done(function(result) {
        var db1 = [];
        var jsonObj = jQuery.parseJSON( result );
        if (jsonObj === null) {
            alert("No result found");
        } else {
            for (var i = 0; i < jsonObj.length; i++) {
                db1[i] = new D2DB1(jsonObj[i]);
            }
        }
        setD2DB1(db1);
        $( "#tb_d2_item_list tr" ).click(function(){
            var hic = $( this ).children( ":first" ).text();
            loadD2DB1(hic, db1);
        });
    }).fail(function() {
        // an error occurred
    });
}

function initD2POItem(callback)
{
    $.ajax({
        type: "POST",
        url: "inventory_control.php",
        data: { function:   "getDb1",
                department: 2}
    }).done(function( msg ){
        var db1 = [];
        var jsonObj = jQuery.parseJSON( msg );
        if (jsonObj === null) {
            alert("No result found");
        } else {
            for (var i = 0; i < jsonObj.length; i++) {
                db1[i] = new D2DB1(jsonObj[i]);
            }
        }
        callback( db1 );
    });
}


/**
 * Getting d2 db1 information from database
 * @returns {jqXHR}
 */
function getD2DB1() 
{
    return $.ajax({
        type: "POST",
        url: "inventory_control.php",
        data: { function:   "getDb1",
                department: 2},
        success: function( msg ) {
            return msg;
        }
    });
}

/**
 * Appending d2 db1 items onto the page.
 * @param {D2DB1} obj
 * @returns {undefined}
 */
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
                  + "<td>" + obj[i].WidthM        + "</td>"
                  + "<td>" + obj[i].LengthM       + "</td>"
                  + "<td>" + obj[i].Gauge         + "</td>"
                  + "<td>" + obj[i].Width         + "</td>"
                  + "<td>" + obj[i].Length        + "</td>"
                  + "<td>" + obj[i].SheetPerPound + "</td>"
                  + "</tr>";
    }
    tempTable+= "</table>";
    $( "#div_d2_item_list" ).html(tempTable);
}

/**
 * Loading D2DB1 item info into input box for editing.
 * @param {string} hic Hop Item Code
 * @param {D2DB1} obj
 * @returns {undefined}
 */
function loadD2DB1(hic, obj)
{
    var index = false;
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].HIC === hic) {
            index = i;
            break;
        }
    }
    if (index !== false) {
        $( "#input_d2_db1_hic" ).val(obj[index].HIC);
        $( "#input_d2_db1_packaging" ).val(obj[index].Packing);
        $( "#input_d2_db1_sg" ).val(obj[index].SG);
        $( "#input_d2_db1_grade" ).val(obj[index].Grade);
        $( "#input_d2_db1_gaugemm" ).val(obj[index].GaugeM);
        $( "#input_d2_db1_widthmm" ).val(obj[index].WidthM);
        $( "#input_d2_db1_lengthmm" ).val(obj[index].LengthM);
        $( "#input_d2_db1_gauge" ).val(obj[index].Gauge);
        $( "#input_d2_db1_width" ).val(obj[index].Width);
        $( "#input_d2_db1_length" ).val(obj[index].Length);
        $( "#input_d2_db1_poundpersheet" ).val(obj[index].SheetPerPound);
    }
}

function addD2Item(item)
{
    var jsonObj = JSON.stringify(item); 
    $.ajax({
        type: "POST",
        url: "inventory_control.php",
        data: { function: "add",
                item: jsonObj,
                department: 2},
        success: function( msg ) {
            initD2Item();
            $( "#div_d2_error_message" ).html(msg);
        }
    });
}

function updateD2Item(item)
{
     var jsonObj = JSON.stringify(item); 
    $.ajax({
        type: "POST",
        url: "inventory_control.php",
        data: { function: "update",
                item: jsonObj,
                department: 2},
        success: function( msg ) {
            initD2Item();
            $( "#div_d2_error_message" ).html(msg);
        }
    });
}

function deleteD2Item(item)
{
     var jsonObj = JSON.stringify(item); 
    $.ajax({
        type: "POST",
        url: "inventory_control.php",
        data: { function: "delete",
                item: jsonObj,
                department: 2},
        success: function( msg ) {
            initD2Item();
            $( "#div_d2_error_message" ).html(msg);
        }
    });
}

/**
 * D2DB1 object, filter out unnecessary variables from json obj and put it into
 * D2DB1 obj.
 * @param {json} obj
 * @returns {D2DB1}
 */
function D2DB1(obj) 
{
    this.HIC           = obj.ItemCode;
    this.Packing       = obj.Spec;
    this.SG            = obj.SG;
    this.Grade         = obj.Grade;
    this.GaugeM        = obj.MGauge;
    this.Gauge         = obj.Gauge;
    this.WidthM        = obj.Mwidth;
    this.Width         = obj.Width;
    this.LengthM       = obj.Mlength;
    this.Length        = obj.Length;
    this.SheetPerPound = obj.LbsSheet;
}