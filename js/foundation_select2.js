
(function ($) {

    $(function() {
        if (Drupal.ajax != undefined) {
            Drupal.ajax.prototype.commands.select2_add_option = function(ajax, response, status) {
                var $select = $(response.selector);
                var data = JSON.parse(response.data);
                if (data) {
                    var value = data.id;
                    if ($select.attr('multiple')) {
                        var oldVal = $select.val();
                        value = oldVal ? oldVal.concat(value) : [value];
                    }

                    var newOption = new Option(data.title, data.id, false, false);
                    $select.append(newOption).trigger('change');
                    $select.val(value);
                    $select.append(newOption).trigger('change');
                }
            };

            $('.foundation_select2').select2();
        }
    });

})(jQuery);
