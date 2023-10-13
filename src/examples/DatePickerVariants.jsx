import React, { useState } from "react";
import DatePicker from "../components/DatePicker"; // Replace with the actual import path

function DatePickerVariants() {
    const [selectedDate, setSelectedDate] = useState("")

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate)
        console.log(`Selected date: ${newDate}`);
    };

  return (
    <section>
        <h2 className="text-3xl font-bold text-center py-5">DatePicker Variants</h2>
        <div className="flex justify-around flex-wrap gap-20">

        {/* Default Variant */}
        <div>
            <h3>Default</h3>
            <DatePicker
                id="datepicker-default"
                selectedDate="2023-10-15"
                zIndex="1"
                isError={false}
                setter={handleDateChange}
            />
            <ul>
                <li>id: The unique identifier for the DatePicker.</li>
                <li>selectedDate: The initially selected date, set to "2023-10-15" in this variant.</li>
                <li>zIndex: The z-index for the DatePicker.</li>
                <li>isError: A boolean flag indicating if there is an error with the date selection (false in this case).</li>
                <li>setter: A callback function to handle date changes.</li>
            </ul>
        </div>

        {/* Variant 1 */}
        <div>
            <h3>Example 1</h3>
            <DatePicker
                id="datepicker-variant2"
                selectedDate="2023-11-30"
                zIndex="3"
                isError={false}
                setter={handleDateChange}
                width="400px"
                height="50px"
                backgroundColor="white"
                backgroundColorDropdown="gray"
                textColor="blue"
                borderColor="blue"
                minYear={2000}
                substractionYears={-10}
            />
            <ul>
                <li>id: The unique identifier for the DatePicker.</li>
                <li>selectedDate: The initially selected date, set to "2023-11-30" in this variant.</li>
                <li>zIndex: The z-index for the DatePicker.</li>
                <li>isError: A boolean flag indicating if there is an error with the date selection (false in this case).</li>
                <li>setter: A callback function to handle date changes.</li>
                <li>width: The width of the DatePicker (400px).</li>
                <li>height: The height of the DatePicker (50px).</li>
                <li>backgroundColor: The background color of the DatePicker (white).</li>
                <li>backgroundColorDropdown: The background color of the date dropdown (gray).</li>
                <li>textColor: The text color of the DatePicker (blue).</li>
                <li>borderColor: The border color of the DatePicker (blue).</li>
                <li>minYear: The minimum year in the date picker (2000).</li>
                <li>substractionYears: The number of years to subtract from the current year (-10).</li>
            </ul>
        </div>

        {/* Variant 2 */}
        <div>
            <h3>Example 2</h3>
            <DatePicker
                id="datepicker-variant2"
                selectedDate={selectedDate}
                zIndex="3"
                isError={true}
                setter={handleDateChange}
                width="400px"
                height="50px"
                backgroundColor="white"
                backgroundColorDropdown="gray"
                textColor="blue"
                borderColor="blue"
                minYear={2000}
                substractionYears={-10}
            />
            <ul>
                <li>id: The unique identifier for the DatePicker.</li>
                <li>selectedDate: The selected date is now based on the `selectedDate` variable, allowing dynamic selection.</li>
                <li>zIndex: The z-index for the DatePicker.</li>
                <li>isError: Indicates an error (true in this case).</li>
                <li>width: The width of the DatePicker (400px).</li>
                <li>height: The height of the DatePicker (50px).</li>
                <li>backgroundColor: The background color of the DatePicker (white).</li>
                <li>backgroundColorDropdown: The background color of the date dropdown (gray).</li>
                <li>textColor: The text color of the DatePicker (blue).</li>
                <li>borderColor: The border color of the DatePicker (blue).</li>
                <li>minYear: The minimum year in the date picker (2000).</li>
                <li>substractionYears: The number of years to subtract from the current year (-10).</li>
            </ul>
        </div>

        {/* Variant 3 */}
        <div>
            <h3>Example 3</h3>
            <DatePicker
                id="datepicker-variant2"
                selectedDate={selectedDate}
                zIndex="3"
                isError={false}
                setter={handleDateChange}
                width="400px"
                height="50px"
                backgroundColor="orange"
                backgroundColorDropdown="black"
                textColor="green"
                borderColor="orange"
                minYear={2000}
                substractionYears={-10}
            />
            <ul>
                <li>id: The unique identifier for the DatePicker.</li>
                <li>selectedDate: The selected date is now based on the `selectedDate` variable, allowing dynamic selection.</li>
                <li>zIndex: The z-index for the DatePicker.</li>
                <li>isError: A boolean flag indicating if there is an error with the date selection (false in this case).</li>
                <li>setter: A callback function to handle date changes.</li>
                <li>width: The width of the DatePicker (400px).</li>
                <li>height: The height of the DatePicker (50px).</li>
                <li>backgroundColor: The background color of the DatePicker (orange).</li>
                <li>backgroundColorDropdown: The background color of the date dropdown (black).</li>
                <li>textColor: The text color of the DatePicker (green).</li>
                <li>borderColor: The border color of the DatePicker (orange).</li>
                <li>minYear: The minimum year in the date picker (2000).</li>
                <li>substractionYears: The number of years to subtract from the current year (-10).</li>
            </ul>
        </div>

        {/* Add more variants as needed */}
        </div>
    </section>
  );
}

export default DatePickerVariants;
