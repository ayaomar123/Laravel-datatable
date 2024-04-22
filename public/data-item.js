"use strict";
// Class definition

var KTDatatableRemoteAjaxDemo = function () {
    // Private functions

    // basic demo
    var demo = function () {

        var datatable = $('#kt_datatable_items').KTDatatable({
            // datasource definition
            data: {
                type: 'remote',
                source: {
                    read: {
                        url: "http://127.0.0.1:8000/test",
                        method: 'GET',

                        // sample custom headers
                        // headers: {'x-my-custom-header': 'some value', 'x-test-header': 'the value'},
                        map: function (raw) {
                            // sample data mapping
                            var dataSet = raw;
                            if (typeof raw.data !== 'undefined') {
                                dataSet = raw.data;
                            }
                            return dataSet;
                        },
                    },
                },
                pageSize: 1,
                serverPaging: true,
                serverFiltering: true,
                serverSorting: true,
            },

            // layout definition
            layout: {
                scroll: false,
                footer: false,
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [
                /*{
                field: 'advertise_no',
                title: 'advertise_no',
                sortable: 'asc',
                width: 30,
                type: 'number',
                selector: false,
                textAlign: 'center',
            },*/
                {
                    field: 'advertise_no',
                    title: 'advertise_no',
                },
                {
                    field: 'ad_no',
                    title: 'ad_no',
                },{
                    field: 'entry_name',
                    title: 'entry_name',
                },
            ],

            translate: {
                records: {
                    processing: '..جاري التحميل',
                    noRecords: 'لا يوجد بيانات لعرضها..',
                },
                toolbar: {
                    pagination: {
                        items: {
                            default: {
                                first: 'الأول',
                                prev: 'السابق',
                                next: 'التالي',
                                last: 'الأخير',
                                more: 'المزيد',
                                input: 'ابحث',
                                select: 'اختر',
                            },
                            info: 'عرض {{start}} - {{end}} من {{total}} الصفوف',
                        },
                    },
                },
            },

        });

        $('#kt_datatable_search_status').on('change', function () {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });

        $('#kt_datatable_search_type').on('change', function () {
            datatable.search($(this).val().toLowerCase(), 'Type');
        });

        $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
    };

    return {
        // public functions
        init: function () {
            demo();
        },
    };
}();

jQuery(document).ready(function () {
    KTDatatableRemoteAjaxDemo.init();
});
