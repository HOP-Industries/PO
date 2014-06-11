$( document ).ready(function(){
    initD2POItem(function(db1){
        $( "#but_d2_po_add_item" ).click(function(){
            addItemInput(db1);
        });
        
        $( ".delete_item" ).click(function(){
            deleteRow();
        });
    });

    $( "button" ).button().click(function( event ){
        event.preventDefault();
    });
    
    //clear the form
    $( ".clear_item" ).click(function( event ){
        document.getElementById( $( this ).val() ).reset();
    });
});

function addItemInput(db1)
{
    var hicValue = [];
    for (var i = 0;i < db1.length; i++) {
        hicValue.push(db1[i].HIC);//getting hop item code for drop down box
    }
    //adding rows in table
    $( "#tb_d2_po_items tr:last" ).after(insertRow());//inserting row
    //adding drop down box
    $( "#tb_d2_po_items tr:last .d2_hic").append(insertSelectOption(hicValue));
    //add jquery-ui button
    $( "button" ).button().click(function( event ){
        event.preventDefault();
    });
    $( ".d2_hic_select" ).change(function(){
        var rowId  = $( this ).parent().parent().prop("id");
        var itemId = $( this ).val();
        loadPOItem(itemId, rowId, db1);
    });
    $( ".d2_usdlb :input" ).keyup(function(){
        var rowId = $( this ).parent().parent().prop("id");
        var price = $( this ).val();
        if (validateNumber(price)) {
            changePrice(rowId, price);
        } else {
            alert(price + " is not a valid number.");
        }
    });
    $( ".d2_sheets :input" ).keyup(function(){
        var rowId = $( this ).parent().parent().prop("id");
        var sheet = $( this ).val();
        if (validateNumber(sheet)) {
            changeSheet(rowId, sheet);
        } else {
            alert(sheet + " is not a valid number.");
        }
    });
}

/**
 * Load item value into table
 * @param {string} itemId HOP Item id, use it to look up info
 * @param {string} rowId Row id is use to insert intem into
 * @param {array} db1 Array to look up item info 
 * @returns {Boolean}
 */
function loadPOItem(itemId, rowId, db1)
{
    for (var i = 0; i < db1.length; i++) {
        if (db1[i].HIC === itemId) {
            var item = db1[i];
        }
    }
    if (item === null) {
        return false;
    }
    $( "#" + rowId + " .d2_sg" ).html(item.SG);
    $( "#" + rowId + " .d2_grade" ).html(item.Grade);
    $( "#" + rowId + " .d2_gauge" ).html(item.Gauge + "\"<br>" + item.GaugeM + "mm");
    $( "#" + rowId + " .d2_width" ).html(item.Width + "\"<br>" + item.WidthM + "mm");
    $( "#" + rowId + " .d2_length" ).html(item.Length + "\"<br>" + item.LengthM + "mm");
    $( "#" + rowId + " .d2_lbsheet" ).html(item.SheetPerPound);
    $( "#" + rowId + " .d2_usdlb :input" ).val(0);
    $( "#" + rowId + " .d2_sheets :input" ).val(0);
}

/**
 * Insert drop down box 
 * @param {array} hicValue Array of value to be insert as options
 * @returns {String}
 */
function insertSelectOption(hicValue)
{
    var temp = "<select class='d2_hic_select'>"
             + "<option value='---'>Select an Item</option>";
    for (var i = 0; i < hicValue.length; i++) {
        temp+= "<option value='" + hicValue[i] + "'>" + hicValue[i] + "</option>";
    }
    temp+= "</select>";
    return temp;
}

/**
 * Insert table row
 * @returns {String}
 */
function insertRow()
{
    //use current timestamp to create unique id
    var id   = "d2_item_" + new Date().getTime();
    var temp = "<tr id='" + id + "'>"
             + "<td class='d2_hic'></td>"
             + "<td class='d2_sg'></td>"
             + "<td class='d2_grade'></td>"
             + "<td class='d2_gauge'></td>"
             + "<td class='d2_width'></td>"
             + "<td class='d2_length'></td>"
             + "<td class='d2_lbsheet'></td>"
             + "<td class='d2_usdlb'><input type='number'></td>"
             + "<td class='d2_sheets'><input type='number''></td>"
             + "<td class='d2_lbs'></td>"
             + "<td class='d2_usd'></td>"
             + "<td ><button onclick='deleteRow(" + id + ")'>Delete</button>"
             + "</tr>";
     return temp;
}

/**
 * Delete table row
 * @param {string} id Table row id, use as reference
 * @returns {undefined}
 */
function deleteRow(id)
{
    $( id ).remove();
}

function changePrice(rowId, price)
{
    var lbPerSheet = parseFloat($( "#" + rowId + " .d2_lbsheet" ).html());
    var numSheet   = parseInt($( "#" + rowId + " .d2_sheets :input" ).val());
    var totalLbs   = parseFloat(numSheet * lbPerSheet).toFixed(3);
    var totalPrice = parseFloat(price * totalLbs).toFixed(3);
    $( "#" + rowId + " .d2_lbs" ).html(totalLbs);
    $( "#" + rowId + " .d2_usd" ).html(totalPrice);
}

function changeSheet(rowId, numSheet)
{
    var lbPerSheet = parseFloat($( "#" + rowId + " .d2_lbsheet" ).html());
    var price      = parseInt($( "#" + rowId + " .d2_usdlb :input" ).val());
    var totalLbs   = parseFloat(numSheet * lbPerSheet).toFixed(3);
    var totalPrice = parseFloat(price * totalLbs).toFixed(3);
    $( "#" + rowId + " .d2_lbs" ).html(totalLbs);
    $( "#" + rowId + " .d2_usd" ).html(totalPrice);
}

function validateNumber(input)
{
    if (! isNaN(input)) {
        return true;
    } else {
        return false;
    }
}