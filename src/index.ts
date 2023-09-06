// First Function
const firstType = (person: string) => {
	console.log(`Hello ${person} !`);
};

firstType("Pete");

// Form Functions
const selectedColor = (e: Event) => {
	e.preventDefault();
	const colorPickerTarget = e.target as HTMLInputElement;
	console.log(colorPickerTarget.value);
};

const handleSubmit = (e: Event) => {
	e.preventDefault();
	const colorPickerTarget = e.target as HTMLFormElement;
	const modeSelector = colorPickerTarget.mode.value as HTMLInputElement;
	const colorSelected = colorPickerTarget.seedColor.value.slice(
		2
	) as HTMLInputElement;


	fetch(
		`https://www.thecolorapi.com/scheme?hex=${colorSelected}&mode=${modeSelector}&count=6`
	)
		.then(res => res.json())
		.then(data => {
            console.log(data.colors)
            
        });
};

// Event Listeners
const colorPicker = document.getElementById("seedColor") as HTMLInputElement;

const colorForm = document.getElementById("colorForm") as HTMLFormElement;

colorPicker.addEventListener("change", selectedColor);
colorForm.addEventListener("submit", handleSubmit);
