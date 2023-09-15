# color-scheme-generator

![project page screenshot](/assets/screenshot.png)

## Deployment

:rocket: **Deployed** with Netlify at [create color scheme](https://create-color-scheme.netlify.app/)

## About

Generate a color scheme, using a seed color and mode. Built with **Typescript** & **Tailwind CSS** , this website uses the [color API](https://www.thecolorapi.com/docs#schemes-generate-scheme-get) to fetch JSON data and create a color scheme. 

## Instructions

Clone down to local machine, `npm install` and `cd color_pick`

Ensure that you have typescript installed with `tsc --version`

`tsc --watch -p tsconfig.json` to compile the typescript file.

Start a development server and run on localhost to view it in your browser.

## Wins

-[x] Mobile first design, that is responsive at tablet and desktop sizes using **flexbox**.

-[x] Type checking with **Typescript**.

-[x] Dark mode theme enabled and uses **localStorage** to persist user theme preference.

-[x] Pure Functions and readable names keep the code DRY & clean. 

-[x] Accessibility considered with Aria attributes.

## Significant code

```javascript
// Form fetches from API, creates an array of divs with the data and appends to the DOM.
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

// Function allowing fetched color to be copied to the clipboard.
function handleClick(e: Event) {
	const schemeElement = e.target as HTMLElement;
	const schemeColor = schemeElement.dataset.value;
	console.log(schemeColor);
	navigator.clipboard.writeText(schemeColor);
}
```
