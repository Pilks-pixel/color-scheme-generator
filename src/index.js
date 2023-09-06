// First Function
var firstType = function (person) {
    console.log("Hello ".concat(person, " !"));
};
firstType("Pete");
// Form Functions
var selectedColor = function (e) {
    e.preventDefault();
    var colorPickerTarget = e.target;
    console.log(colorPickerTarget.value);
};
var handleSubmit = function (e) {
    e.preventDefault();
    var colorPickerTarget = e.target;
    var modeSelector = colorPickerTarget.mode.value;
    var colorSelected = colorPickerTarget.seedColor.value.slice(2);
    fetch("https://www.thecolorapi.com/scheme?hex=".concat(colorSelected, "&mode=").concat(modeSelector, "&count=6"))
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data.colors);
    });
};
// Event Listeners
var colorPicker = document.getElementById("seedColor");
var colorForm = document.getElementById("colorForm");
colorPicker.addEventListener("change", selectedColor);
colorForm.addEventListener("submit", handleSubmit);
//# sourceMappingURL=index.js.map