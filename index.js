import * as $ from "jquery";
require ("@progress/kendo-ui/js/kendo.grid");

export function createGrid(rootElement, cars) {

    var div = document.createElement('div');
    rootElement.appendChild(div);
    $("div").addClass("grid");
    $("div").kendoGrid({
        columns: [
        { title: "id", field: "id" },
        { title: "Model", field: "model" },
        { title: "Price", field: "price" },
        { title: "Country", field: "country" },
        {
            title: "img",
            field: "picture",
            template: '<img src="#= picture #" alt="image"  class="img"/>',
        },
        { command: "edit" }
        ],
        dataSource: {
        data: cars,
        pageSize: 5,
        schema: {
            model: {
            id: "id",
            fields: {
                "id": { type: "number" }
            }
            }
        }
        },
        pageable: true,
        sortable: { mode: "multiple" },
        groupable: true,
        selectable: true,
        editable: "popup",

        edit: function (e) {
            if ( !e.model.isNew() ) {
                var numeric = e.container.find("input[name=id]").data("kendoNumericTextBox");
                numeric.enable(false);
            }
        }
    });
}