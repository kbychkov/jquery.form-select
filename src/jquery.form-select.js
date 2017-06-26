/**
 * jquery.form-select plugin v0.0.1
 * https://github.com/kbychkov/jquery.form-select
 */
(function ($) {

    $.fn.formSelect = function (options) {

        var settings = $.extend({
            activeClass: 'active',
            focusClass: 'focus',
            textClass: 'text'
        }, options);

        return this.each(function () {

            var $parent = $(this),
                $control = $('select', $parent);

            $parent.append($('span').addClass(settings.textClass));

            var $text = $parent.find(settings.textClass);

            function activateControl($control) {
                var value = $control.val();
                var text = $control.find(':selected').text();
                console.log(value, text);

                if (value == null || value == '') {
                    $parent.removeClass(settings.activeClass);
                } else {
                    $parent.addClass(settings.activeClass);
                }

                $text.text(text);
            }

            activateControl($control);

            $control.on('focus', function () {
                $parent.addClass(settings.focusClass);
            });

            $control.on('blur', function () {
                $parent.removeClass(settings.focusClass);
                activateControl($control);
            });

            $control.on('change', function () {
                activateControl($control);
            });
        });
    }
}(jQuery));
