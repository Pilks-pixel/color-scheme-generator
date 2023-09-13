// Form Functions
var getSchemeColors = function (color, mode) {
    fetch("https://www.thecolorapi.com/scheme?hex=".concat(color, "&mode=").concat(mode, "&count=6"))
        .then(function (res) { return res.json(); })
        .then(function (data) { return setNewScheme(data.colors); });
};
var setNewScheme = function (scheme) {
    var colorElements = scheme.map(function (c) {
        return "<div data-value=\"".concat(c.hex.value, "\"  class=\"p-4 w-full tooltip tooltip:active\"  style=\"background-color:").concat(c.hex.value, ";\">").concat(c.hex.value, "</div>");
    });
    schemeContainer.innerHTML = colorElements.join("");
};
var handleSubmit = function (e) {
    e.preventDefault();
    var colorPickerTarget = e.target;
    var modeSelected = colorPickerTarget.mode.value;
    var colorSelected = colorPickerTarget.seedColor.value.slice(1);
    getSchemeColors(colorSelected, modeSelected);
    colorForm.reset();
};
// Color Copy To Clipboard Function
function handleClick(e) {
    var schemeElement = e.target;
    var schemeColor = schemeElement.dataset.value;
    console.log(schemeColor);
    navigator.clipboard.writeText(schemeColor);
}
// Dark Mode Theme
var currentTheme = localStorage.getItem("theme");
var rootElement = document.documentElement.classList;
var handleThemeToggle = function () {
    currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
        enableDarkMode();
    }
    else {
        enableLightMode();
    }
};
var enableDarkMode = function () {
    rootElement.add("dark");
    localStorage.setItem("theme", "dark");
    darkModeToggle.innerHTML = "<i class=\"fa-regular fa-sun\"></i>";
};
var enableLightMode = function () {
    rootElement.remove("dark");
    localStorage.setItem("theme", "light");
    darkModeToggle.innerHTML = "<i class='fa-regular fa-moon'></i>";
};
// Event Listeners
var colorForm = document.getElementById("colorForm");
var schemeContainer = document.getElementById("scheme_container");
var darkModeToggle = document.getElementById("toggle_btn");
colorForm.addEventListener("submit", handleSubmit);
schemeContainer.addEventListener("click", handleClick);
darkModeToggle.addEventListener("click", handleThemeToggle);
// Set Theme On Page Load
currentTheme === "light" ? enableLightMode() : enableDarkMode();
//# sourceMappingURL=index.js.map