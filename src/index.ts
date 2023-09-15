// Form Functions
const getSchemeColors = (color: HTMLInputElement, mode: HTMLInputElement) => {
	fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=6`)
		.then(res => res.json())
		.then(data => setNewScheme(data.colors));
};

const setNewScheme = (scheme: {}[]) => {
	const colorElements = scheme.map((c: any) => {
		return `<button data-value="${c.hex.value}"  class="p-4 w-full tooltip tooltip:active md:flex md:flex-col md:justify-end group" style="background-color:${c.hex.value};"><span class="md:bg-white md:p-2 md:rounded md:text-black group-focus:text-cyan-400 group-active:text-cyan-400">${c.hex.value}</span></button>`;
	});

	schemeContainer.innerHTML = colorElements.join("");
};

const handleSubmit = (e: Event) => {
	e.preventDefault();
	const colorPickerTarget = e.target as HTMLFormElement;
	const modeSelected = colorPickerTarget.mode.value as HTMLInputElement;
	const colorSelected = colorPickerTarget.seedColor.value.slice(
		1
	) as HTMLInputElement;

	getSchemeColors(colorSelected, modeSelected);
	colorForm.reset();
};

// Color Copy To Clipboard Function
function handleClick(e: Event) {
	const schemeElement = e.target as HTMLElement;
	const schemeColor = schemeElement.dataset.value;
	console.log(schemeColor);
	navigator.clipboard.writeText(schemeColor);
}

// Dark Mode Theme
let currentTheme = localStorage.getItem("theme");
const rootElement = document.documentElement.classList;

const handleThemeToggle = () => {
	currentTheme = localStorage.getItem("theme");

	if (currentTheme === "light") {
		enableDarkMode();
	} else {
		enableLightMode();
	}
};

const enableDarkMode = () => {
	rootElement.add("dark");
	localStorage.setItem("theme", "dark");
	darkModeToggle.innerHTML = `<i class="fa-regular fa-sun"></i>`;
};

const enableLightMode = () => {
	rootElement.remove("dark");
	localStorage.setItem("theme", "light");
	darkModeToggle.innerHTML = `<i class='fa-regular fa-moon'></i>`;
};

// Event Listeners
const colorForm = document.getElementById("colorForm") as HTMLFormElement;
const schemeContainer = document.getElementById("scheme_container");
const darkModeToggle = document.getElementById(
	"toggle_btn"
) as HTMLButtonElement;

colorForm.addEventListener("submit", handleSubmit);
schemeContainer.addEventListener("click", handleClick);
darkModeToggle.addEventListener("click", handleThemeToggle);

// Set Theme On Page Load
currentTheme === "light" ? enableLightMode() : enableDarkMode();
