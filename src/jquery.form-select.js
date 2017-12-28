/**
 * jquery.form-select plugin v1.0.1
 * https://github.com/kbychkov/jquery.form-select
 */
(function ($) {

    $.fn.formSelect = function (options) {

        var settings = $.extend({
            activeClass: 'active',
            focusClass: 'focus',
            openClass: 'open',
            textClass: 'text'
        }, options);

        return this.each(function () {

            var $parent = $(this),
                $control = $('select', $parent);

            $parent.append($('<span></span>').addClass(settings.textClass));

            var $text = $parent.find('.'+settings.textClass);

            function activateControl($control) {
                var $selected = $control.find(':selected');
                var text = $selected.text();

                if ($selected.get(0).disabled) {
                    $parent.removeClass(settings.activeClass);
                } else {
                    $parent.addClass(settings.activeClass);
                    $text.text(text);
                }
            }

            activateControl($control);

            $control.on('focus', function () {
                $parent.addClass(settings.focusClass);
            });

            $control.on('blur', function () {
                $parent.removeClass(settings.focusClass);
            });

            $control.on('change', function () {
                activateControl($control);
            });

            $control.on('click', function () {
                $parent.toggleClass(settings.openClass);
            });
        });
    }
}(jQuery));
