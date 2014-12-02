define(["require", "exports"], function(require, exports) {
    var ValueAxis = (function () {
        function ValueAxis(name, color, min, max) {
            this.name = name;
            this.color = color;
            this.min = min;
            this.max = max;
        }
        return ValueAxis;
    })();
    exports.ValueAxis = ValueAxis;
});
