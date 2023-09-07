
// Form Functions
const selectedColor = (e: Event) => {
	e.preventDefault();
	const colorPickerTarget = e.target as HTMLInputElement;
	console.log(colorPickerTarget.value.slice(1));
};

const handleSubmit = (e: Event) => {
	e.preventDefault();
	const colorPickerTarget = e.target as HTMLFormElement;
	const modeSelector = colorPickerTarget.mode.value as HTMLInputElement;
	const colorSelected = colorPickerTarget.seedColor.value.slice(
		1
	) as HTMLInputElement;


	fetch(
		`https://www.thecolorapi.com/scheme?hex=${colorSelected}&mode=${modeSelector}&count=6`
	)
		.then(res => res.json())
		.then((data) => {
            const scheme = data.colors
			const schemeContainer = document.getElementById("scheme_container");
			
            const schemeArr : [] = scheme.map((c: any, index : string)  => {
				return `<div id="colorPallet${index}"  class="p-4 w-full" style = "background-color:${c.hex.value};">${c.hex.value}</div>`;	
					
				
			});
			console.table(schemeArr);
			schemeContainer.innerHTML = schemeArr.join("");

			

        });
};

// Color Pallet Functions
const handleClick = (e: Event) => {
	console.log(e.target)
};

// Event Listeners
const colorPicker = document.getElementById("seedColor") as HTMLInputElement;

const colorForm = document.getElementById("colorForm") as HTMLFormElement;

colorPicker.addEventListener("change", selectedColor);
colorForm.addEventListener("submit", handleSubmit);
