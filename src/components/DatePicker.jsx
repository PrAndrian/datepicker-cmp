import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

/**
 * A date picker component that allows users to select a date.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} props.id - The unique identifier for the date picker (required).
 * @param {string} props.selectedDate - The selected date in ISO format (required).
 * @param {number} [props.minYear] - The minimum selectable year.
 * @param {number} [props.substractionYears] - The number of years to subtract from the current year to determine the maximum year.
 * @param {string} props.zIndex - The z-index for the date picker (required).
 * @param {boolean} props.isError - Indicates whether there is an error state.
 * @param {function} props.setter - A callback function to handle date selection (required).
 * @param {string} [props.backgroundColor] - The background color of the input.
 * @param {string} [props.backgroundColorDropdown] - The background color of the date picker dropdown.
 * @param {string} [props.textColor] - The text color of the input.
 * @param {string} [props.borderColor] - The border color of the input.
 * @param {string} [props.width] - The width of the date picker.
 * @param {string} [props.height] - The height of the date picker.
 * @return {JSX.Element} The rendered DatePicker component.
 */
const DatePicker = ({ 
  id, 
  selectedDate, 
  minYear, 
  substractionYears, 
  zIndex, 
  isError, 
  setter, 
  backgroundColor, 
  backgroundColorDropdown, 
  textColor, 
  borderColor, 
  width, 
  height 
}) => {
  const maxYear = new Date().getFullYear() - substractionYears;
  const [selectedYear, setSelectedYear] = useState(maxYear);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [visible, setVisible] = useState(false);

  const elementRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = () => {
    if (elementRef.current) {
      const element = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      setIsOverflowing(element.bottom > windowHeight) 
    }
  };

  useEffect(() => {
    checkOverflow()
  }, [visible]);

  const handleChange = (event) => {
    const inputDate = event.target.value;
    setter(inputDate);
  };

  const formatSelectedDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const handleDateClick = (date) => {
    const formattedDate = formatSelectedDate(date);
    setter(formattedDate);
    setVisible(false);
  };

  const handleOpenModal = () => {
    setTimeout(() =>setVisible(!visible),100)
  };
  
  
  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value, 10));
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value, 10));
  };

  const renderYearDropdown = () => {
    const years = [];
    for (let year = minYear; year <= maxYear; year++) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return (
      <select
        className="block w-1/2 p-2 bg-gray-200 border border-gray-300 rounded-md"
        onChange={handleYearChange}
        value={selectedYear}
      >
        {years}
      </select>
    );
  };

  const renderMonthDropdown = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
      <select
        className="block w-1/2 p-2 bg-gray-200 border border-gray-300 rounded-md"
        onChange={handleMonthChange}
        value={selectedMonth}
      >
        {months.map((month, index) => (
          <option key={month} value={index}>
            {month}
          </option>
        ))}
      </select>
    );
  };

  const renderCalendarDays = () => {
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const calendarDays = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(
        <div key={`empty-${i}`} className="empty-day w-10 h-10"></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(
        <div
          key={day}
          onClick={() => handleDateClick(new Date(selectedYear, selectedMonth, day))}
          className="calendar-day flex justify-center items-center w-10 h-10 cursor-pointer hover-bg-gray-200"
        >
          {day}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {dayNames.map((dayName) => (
          <div key={dayName} className="flex justify-center items-center day-name w-10 h-10">
            {dayName}
          </div>
        ))}
        {calendarDays}
      </div>
    );
  };

  return (
    <div id={id} className={`w-${width} relative flex ${isOverflowing ? 'flex-col-reverse':'flex-col'}`} 
      style={{zIndex:zIndex,width:width}}
    >
      <div className='flex items-center justify-between relative'>
        <input 
          className={`
            font-semibold
            flex
            items-center
            justify-between
            h-${height}
            w-full
            p-2
            bg-transparent
            border  
            rounded-lg
          `}
          style={{ 
            backgroundColor, 
            color: textColor,
            height:height,
            borderColor: isError ? "red" : '#ccc',
            borderWidth : isError ? "4px" : '1'
          }}
          onBlur={() => setVisible(false)}
          onChange={handleChange}
          value={selectedDate}
          type="date"
        /> 
        <FontAwesomeIcon className='absolute right-3 cursor-pointer' icon={faCalendar} onClick={handleOpenModal}/>    
      </div>

      <div
        ref={elementRef}
        style={{ color: textColor,backgroundColor:backgroundColorDropdown }} 
        className={` 
          ${visible ? 'block' : 'hidden'} 
          ${isOverflowing ?'mb-12' :'mt-12'} 
          z-10
          container 
          border 
          border-${borderColor} 
          px-4 
          pt-2 
          bg-${backgroundColorDropdown} 
          shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
          rounded-lg 
          absolute
          max-h-fit
          transition-max-height 
          duration-300 
          ease-in-out
        `}
      >
        <div className="flex items-center justify-between gap-2 mb-4">
          {renderYearDropdown()}
          {renderMonthDropdown()}
        </div>
        <div>
          {renderCalendarDays()}
        </div>
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  selectedDate: PropTypes.string.isRequired,
  minYear: PropTypes.number,
  substractionYears: PropTypes.number,
  zIndex: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  setter: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  backgroundColorDropdown: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

DatePicker.defaultProps = {
  backgroundColor: 'transparent',
  backgroundColorDropdown: 'white',
  borderColor: '#ccc',
  height: '45px', // Change this to your desired default height
  minYear: 1900, // Change this to your desired default minYear
  substractionYears: 100, // Change this to your desired default substractionYears
  textColor: '#000',
  width: '370px', // Change this to your desired default width
};

export default DatePicker;
