<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Department 2 PO</title>
        <script src="../lib/jquery-ui/js/jquery-1.10.2.js"></script>
        <script src="../lib/jquery-ui/js/jquery-ui-1.10.4.custom.min.js"></script>
        <script src="js/d2_item.js"></script>
        <link rel=stylesheet href="../lib/jquery-ui/css/cupertino/jquery-ui-1.10.4.custom.min.css"/>
    </head>
    <body>
        <input type="hidden" id="input_temp_holder">
        <form id="fm_d2_po">
            <div id="div_d2_po_address">
                <table id="tb_d2_po_address">
                    <tr>
                        <th>HOP P.O.#:</th>
                        <td><input type=text id="input_d2_po_ponum"></td>
                        <th>Print Time:</th>
                        <td id="td_d2_po_time"></td>
                    </tr>
                    <tr>
                        <th>Related Faxes:</th>
                        <td><input type=text id="input_d2_po_fax"></td>
                        <th>Terms:</th>
                        <td><input type=text id="input_d2_po_fax"></td>
                    </tr>
                    <tr>
                        <th>EDS:</th>
                        <td><input type=text id="input_d2_po_eds"></td>
                        <th>EDA:</th>
                        <td><input type=text id="input_d2_po_eda"></td>
                    </tr>
                    <tr>
                        <th>Port of Discharge:</th>
                        <td><input type=text id="input_d2_po_discharge"></td>
                        <th>Port of Destination:</th>
                        <td><input type=text id="input_d2_po_destination"></td>
                    </tr>
                    <tr>
                        <th>Indent Order For:</th>
                        <td><input type=text id="input_d2_po_orderfor"></td>
                        <th>Customer PO#:</th>
                        <td><input type=text id="input_d2_po_customerpo"></td>
                    </tr>
                    <tr>
                        <th>Vendor:</th>
                        <td colspan="3"><input type=text 
                                               size="60"
                                               id="input_d2_po_vendor"></td>
                    </tr>
                </table>
            </div>
            <div id="div_d2_po_items">
                
            </div>
            <hr>
            <button id="but_d2_po_add_item">Add</button>
            <div id="div_d2_po_production_instruction">
                <h3>Production Instructions:</h3><br>
                All rolls polypropylene (P.P.) film a/k/a synthetic paper.<br>
                All rolls must be on 6" cores.<br>
                All rolls must be within +/- 5% gauge tolerance.<br>
                All rolls must have good layflat and no wrinkles.<br>
                All rolls must be produced with 463 embossing facing inside.<br>
            </div>
            <div id="div_p2_po_special_instruction">
                <h3>Special Instruction:</h3><br>
                For each item please provide a COA.<br>
            </div>
            <div id="div_p2_po_shipping_instruction">
                <h3>Shipping Instructions:</h3><br>
                For all items please mark "MADE IN TAIWAN" on each skid.<br>
                For all items please mark "HOP-SYN" on each skid.<br>
                For all items, do not identify the Nanya grade / embossing# on pallet labels or side mark, unless with *ID*.<br>
            </div>
        </form>
        <script src="js/d2_po.js"></script>
    </body>
</html>
