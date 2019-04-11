var $ = require ("jquery");
import "@progress/kendo-ui/js/kendo.grid";
require('../../src/main.css')

export function createGrid(rootElement, gridData, titleArray,gridName,date ) {
    rootElement.append(
        $("<div>").append(
            $("<div>").append(`<div class="gridInform"><h3 class="gridName">${gridName}</h3><h3>${date}</h3></div>`),
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
    )
}
