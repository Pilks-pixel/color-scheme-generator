// Form Functions
const selectedColor = (e: Event) => {
	e.preventDefault();
	const colorPickerTarget = e.target as HTMLInputElement;
	console.log(colorPickerTarget.value.slice(1));
};


const getSchemeColors = (color: HTMLInputElement, mode: HTMLInputElement) => {
 	fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=6`)
		.then(res => res.json())
		.then(data => setNewScheme(data.colors))
};

const setNewScheme = (scheme : {}[]) => {
	const colorElements = scheme.map((c: any, index: number) => {
		return `<div id="colorPallet${index}"  class="p-4 w-full" style="background-color:${c.hex.value};">${c.hex.value}</div>`;
	});

   schemeContainer.innerHTML = colorElements.join("");
   const colorPallet = document.getElementById("colorPallet1");
		colorPallet.addEventListener("click", handleClick);


}

const handleSubmit = (e: Event) => {
	e.preventDefault();
	const colorPickerTarget = e.target as HTMLFormElement;
	const modeSelected = colorPickerTarget.mode.value as HTMLInputElement;
	const colorSelected = colorPickerTarget.seedColor.value.slice(
		1
	) as HTMLInputElement;

	getSchemeColors(colorSelected,modeSelected)
};




// Color Pallet Functions
 function handleClick(e: Event) {
	e.preventDefault();
	console.log(e.currentTarget);
};

// Event Listeners
const colorPicker = document.getElementById("seedColor") as HTMLInputElement;
const colorForm = document.getElementById("colorForm") as HTMLFormElement;
const schemeContainer = document.getElementById("scheme_container");

colorPicker.addEventListener("change", selectedColor);
colorForm.addEventListener("submit", handleSubmit);

