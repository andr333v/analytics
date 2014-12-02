define(["require", "exports"], function(require, exports) {
    var Serie = (function () {
        function Serie(type, data, name, color, axis) {
            this.type = type;
            this.data = data;
            this.name = name;
            this.color = color;
            this.axis = axis;
        }
        return Serie;
    })();
    exports.Serie = Serie;
});
