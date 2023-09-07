// Form Functions
var selectedColor = function (e) {
    e.preventDefault();
    var colorPickerTarget = e.target;
    console.log(colorPickerTarget.value.slice(1));
};
var handleSubmit = function (e) {
    e.preventDefault();
    var colorPickerTarget = e.target;
    var modeSelector = colorPickerTarget.mode.value;
    var colorSelected = colorPickerTarget.seedColor.value.slice(1);
    fetch("https://www.thecolorapi.com/scheme?hex=".concat(colorSelected, "&mode=").concat(modeSelector, "&count=6"))
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var scheme = data.colors;
        var schemeContainer = document.getElementById("scheme_container");
        var schemeArr = scheme.map(function (c, index) {
            return "<div id=\"colorPallet".concat(index, "\"  class=\"p-4 w-full\" style = \"background-color:").concat(c.hex.value, ";\">").concat(c.hex.value, "</div>");
        });
        console.table(schemeArr);
        schemeContainer.innerHTML = schemeArr.join("");
    });
};
// Color Pallet Functions
var handleClick = function (e) {
    console.log(e.target);
};
// Event Listeners
var colorPicker = document.getElementById("seedColor");
var colorForm = document.getElementById("colorForm");
colorPicker.addEventListener("change", selectedColor);
colorForm.addEventListener("submit", handleSubmit);
//# sourceMappingURL=index.js.map