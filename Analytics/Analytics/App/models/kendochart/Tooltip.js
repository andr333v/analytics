define(["require", "exports"], function(require, exports) {
    var Tooltip = (function () {
        function Tooltip(visible, format, template) {
            this.visible = visible;
            this.format = format;
            this.template = template;
        }
        return Tooltip;
    })();
    exports.Tooltip = Tooltip;
});
