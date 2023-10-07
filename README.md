# Datepicker-Cmp React Component

Datepicker-Cmp is a versatile and customizable React component for selecting dates. It provides a date input field along with a date picker modal that allows users to pick a date from a calendar. This component offers various customization options for styling and behavior.

## Prerequisites
To use the SelectMenu component in your React application, you need:

  1. To have node Node : ^16.15.1

  2. To have install tailwindcss : 
    https://tailwindcss.com/docs/installation/framework-guides

## Installation

1. You can install the `datepicker-cmp` package via npm:

```bash
npm install datepicker-cmp
```

2. Your tailwin.config.js should be like this :

   ```javascript
   /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        './node_modules/datepicker-cmp/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
   ```

## Usage

### DatePicker Component

The `DatePicker` component is used to display a date input field and a date picker modal. It accepts the following props:

- `id` (string): A unique identifier for the component.
- `selectedDate` (string): The selected date in the format 'YYYY-MM-DD'.
- `minYear` (number, optional): The minimum selectable year in the date picker.
- `substractionYears` (number, optional): The number of years to subtract from the current year for the maxYear calculation.
- `zIndex` (string): The z-index CSS property for the component.
- `isError` (boolean): Indicates whether there is an error with the date (true) or not (false).
- `setter` (function): A function to update the selected date.
- `backgroundColor` (string, optional): The background color of the date input field.
- `backgroundColorDropdown` (string, optional): The background color of the date picker modal.
- `textColor` (string, optional): The text color of both the input field and the modal.
- `borderColor` (string, optional): The border color of the input field.
- `width` (string, optional): The width of the date input field.
- `height` (string, optional): The height of the date input field.

Example usage:

```jsx
import { DatePicker } from 'datepicker-cmp';

const App = () => {
  const id = 'datepicker';
  const selectedDate = '2023-10-06';
  const minYear = 1900;
  const substractionYears = 100;
  const zIndex = '100';
  const isError = false;

  const handleDateChange = (newDate) => {
    // Handle date change logic here
  };

  return (
    <DatePicker
      id={id}
      selectedDate={selectedDate}
      minYear={minYear}
      substractionYears={substractionYears}
      zIndex={zIndex}
      isError={isError}
      setter={handleDateChange}
      backgroundColor="transparent"
      backgroundColorDropdown="white"
      textColor="#000"
      borderColor="#ccc"
      width="370px"
      height="45px"
    />
  );
};
```

## PropTypes

Please refer to the PropTypes documentation for the `DatePicker` component above for information on the expected prop types and their default values.

## Node Version

The `datepicker-cmp` package requires Node.js version ^16.15.1 to work correctly.

## License

This package is distributed under the MIT License. Feel free to use and customize it to suit your needs.

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/example/datepicker-cmp/issues) on GitHub. We appreciate your feedback!