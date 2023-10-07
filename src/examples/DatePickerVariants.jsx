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
            <h3>Default Variant</h3>
            <DatePicker
                id="datepicker-default"
                selectedDate="2023-10-15"
                zIndex="1"
                isError={false}
                setter={handleDateChange}
            />
        </div>

        {/* Variant 1 */}
        <div>
            <h3>Variant 1</h3>
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
        </div>

        {/* Variant 2 */}
        <div>
            <h3>Variant 2</h3>
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
        </div>

        {/* Variant 3 */}
        <div>
            <h3>Variant 3</h3>
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
        </div>

        {/* Add more variants as needed */}
        </div>
    </section>
  );
}

export default DatePickerVariants;
