import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { RootState } from '../Interface/Interface';
import { setDay, setMonth, setYear } from '../Redux/Slices/DateSlice';

// Custom styles for react-select
const customStyles = {
  container: (provided: any) => ({
    ...provided,
    marginBottom: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    fontSize: '15px',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    cursor: 'pointer'
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    border: '1px solid white',
    boxShadow: 'none',
    backgroundColor: state.isDisabled ? 'rgba(211, 211, 211, 0.5)' : 'white', // Change background when disabled
    '&:hover': {
      border: '1px solid #0056b3'
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    zIndex: 9999
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#007bff' : 'white',
    color: state.isSelected ? 'white' : 'black',
    '&:hover': {
      backgroundColor: '#0056b3',
      color: 'white'
    }
  })
};

// Generate options for months
const monthOptions = Array.from({ length: 12 }, (_, i) => ({
  value: String(i + 1).padStart(2, '0'),
  label: String(i + 1) // Display as numbers: "1", "2", "3", ...
}));

// Generate options for years
const currentYear = new Date().getFullYear() - 18;
const yearOptions = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => ({
  value: (currentYear - i).toString(),
  label: (currentYear - i).toString()
}));

const SignDate: FC = () => {

  const dispatch = useDispatch();

  const dateData = useSelector((state: RootState) => state.dateData);
  
  const daySel = dateData?.day;
  const monthSel = dateData?.month;
  const yearSel = dateData?.year;

  const [dayOptions, setDayOptions] = useState<{ value: string, label: string }[]>([]);

  // Generate day options based on the selected month and year
  useEffect(() => {
    if (monthSel) {
      const month = parseInt(monthSel, 10);
      const daysInMonth = new Date(2024, month, 0).getDate(); // Use a fixed year for day options
      const days = Array.from({ length: daysInMonth }, (_, i) => ({
        value: String(i + 1).padStart(2, '0'),
        label: String(i + 1).padStart(2, '0')
      }));
      setDayOptions(days);
    }
  }, [monthSel]);

  // Update day options when year changes
  useEffect(() => {
    if (monthSel && yearSel) {
      const year = parseInt(yearSel, 10);
      const month = parseInt(monthSel, 10);
      const daysInMonth = new Date(year, month, 0).getDate(); // Get the last day of the month
      const days = Array.from({ length: daysInMonth }, (_, i) => ({
        value: String(i + 1).padStart(2, '0'),
        label: String(i + 1).padStart(2, '0')
      }));
      setDayOptions(days);
    }
  }, [yearSel]);

  const handleMonthChange = (option: any) => {
    dispatch(setMonth(option ? option.value : null));
  }

  const handleDayChange = (option: any) => {
    dispatch(setDay(option ? option.value : null));
  }

  const handleYearChange = (option: any) => {
    dispatch(setYear(option ? option.value : null));
  }

  return (
    <div className='w-full'>
      <form className='flex w-full justify-around' style={{ fontSize: "14px" }}>
        {/* Day Selector */}
        <div className="form-group p-2">
          <label className=' mb-1' style={{ fontSize: "17px" }}>Day</label>
          <Select
            options={dayOptions}
            styles={customStyles}
            onChange={option => handleDayChange(option)}
            placeholder="DD"
            isDisabled={!monthSel} // Disable until month is selected
          />
        </div>
        {/* Month Selector */}
        <div className="form-group p-2">
          <label className=' mb-1' style={{ fontSize: "17px" }}>Month</label>
          <Select
            options={monthOptions}
            styles={customStyles}
            onChange={option => handleMonthChange(option)}
            placeholder="MM"
          />
        </div>
        {/* Year Selector */}
        <div className="form-group p-2">
          <label className=' mb-1' style={{ fontSize: "17px" }}>Year</label>
          <Select
            options={yearOptions}
            styles={customStyles}
            onChange={option => handleYearChange(option)}
            placeholder="YY"
          />
        </div>
      </form>
    </div>
  );
}

export default SignDate;
