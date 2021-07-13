export const table_filter_init = () => {
    (function () {
        $('.table-filters input').on('input', function () {
            filterTable($(this).parents('table'), "input");
        });
        $('.table-filters select').on('click', function () {
            filterTable($(this).parents('table'), "select");
        });

        function filterTable($table, input_type) {
            var $filters = $table.find('.table-filters td');
            var $rows = $table.find('.table-data');
            $rows.each(function (rowIndex) {
                var valid = true;
                $(this).find('td').each(function (colIndex) {
                    if ($filters.eq(colIndex).find(input_type).val()) {
                        if ($(this).html().toLowerCase().indexOf(
                                $filters.eq(colIndex).find(input_type).val().toLowerCase()) == -1) {
                            valid = valid && false;
                        }
                    }
                });
                if (valid === true) {
                    $(this).css('display', '');
                } else {
                    $(this).css('display', 'none');
                }
            });
        }

    }());
};