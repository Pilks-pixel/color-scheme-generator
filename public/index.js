// Form Functions
var selectedColor = function (e) {
    e.preventDefault();
    var colorPickerTarget = e.target;
    console.log(colorPickerTarget.value.slice(1));
};
var getSchemeColors = function (color, mode) {
    fetch("https://www.thecolorapi.com/scheme?hex=".concat(color, "&mode=").concat(mode, "&count=6"))
        .then(function (res) { return res.json(); })
        .then(function (data) { return setNewScheme(data.colors); });
};
var setNewScheme = function (scheme) {
    var colorElements = scheme.map(function (c, index) {
        return "<div id=\"colorPallet".concat(index, "\"  class=\"p-4 w-full\" style=\"background-color:").concat(c.hex.value, ";\">").concat(c.hex.value, "</div>");
    });
    schemeContainer.innerHTML = colorElements.join("");
    var colorPallet = document.getElementById("colorPallet1");
    colorPallet.addEventListener("click", handleClick);
};
var handleSubmit = function (e) {
    e.preventDefault();
    var colorPickerTarget = e.target;
    var modeSelected = colorPickerTarget.mode.value;
    var colorSelected = colorPickerTarget.seedColor.value.slice(1);
    getSchemeColors(colorSelected, modeSelected);
};
// Color Pallet Functions
function handleClick(e) {
    e.preventDefault();
    console.log(e.currentTarget);
}
;
// Event Listeners
var colorPicker = document.getElementById("seedColor");
var colorForm = document.getElementById("colorForm");
var schemeContainer = document.getElementById("scheme_container");
colorPicker.addEventListener("change", selectedColor);
colorForm.addEventListener("submit", handleSubmit);
//# sourceMappingURL=index.js.map