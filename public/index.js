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
        var scheme = data.colors;
        console.log(scheme);
        scheme.map(function (c) {
            var colorContainer = document.createElement("div");
            var schemeContainer = document.getElementById("scheme_container");
            colorContainer.classList.add("bg-[".concat(c.hex.value, "]"), "w-1/6");
            schemeContainer.appendChild(colorContainer);
        });
    });
};
// Event Listeners
var colorPicker = document.getElementById("seedColor");
var colorForm = document.getElementById("colorForm");
colorPicker.addEventListener("change", selectedColor);
colorForm.addEventListener("submit", handleSubmit);
//# sourceMappingURL=index.js.map