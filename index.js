var $ = require ("jquery");
import "@progress/kendo-ui/js/kendo.grid";
require('./src/css/main.css')

export function createGrid(rootElement, gridData, titleArray,gridName,date ) {
    rootElement.append(
        $("<div>").append(
            $("<div>").append(`<div class="gridInform"><h3 class="gridName">${gridName}</h3><h3>${date}</h3></div>`),
            $("<div>").append('<hr class="gridSelectCell">'),
            $("<div>").kendoGrid({
                columns:titleArray,
                    dataSource: {
                data: gridData,
                },
                scrollable: false,
                selectable: "cell",
                editable: "popup",
            }).addClass('kendoGrid')
        ).addClass('kendo')
    );
    var gridTdvalues = $('.gridCellValue')
    var tdText
    for (let i = 0; i < gridTdvalues.length; i++) {
        tdText = gridTdvalues[i].innerText
        if(tdText.slice(0,1) == "-"){
            gridTdvalues[i].style.color = "#8a0700"
        } else if (tdText.slice(0,1) == "0") {
            gridTdvalues[i].style.color = "#02536e"
        } else {
            gridTdvalues[i].style.color = "#109133"
        }
    }
            
}
