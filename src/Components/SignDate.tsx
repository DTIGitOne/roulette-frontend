import { FC, useState, useEffect } from 'react';
import Select from 'react-select';

// Custom styles for react-select
const customStyles = {
  container: (provided: any) => ({
    ...provided,
    marginBottom: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    fontSize: '15px',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%'
  }),
  control: (provided: any) => ({
    ...provided,
    border: '1px solid white',
    boxShadow: 'none',
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
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [dayOptions, setDayOptions] = useState<{ value: string, label: string }[]>([]);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  // Generate day options based on the selected month and year
  useEffect(() => {
    if (selectedMonth) {
      const month = parseInt(selectedMonth, 10);
      const daysInMonth = new Date(2024, month, 0).getDate(); // Use a fixed year for day options
      const days = Array.from({ length: daysInMonth }, (_, i) => ({
        value: String(i + 1).padStart(2, '0'),
        label: String(i + 1).padStart(2, '0')
      }));
      setDayOptions(days);
    }
  }, [selectedMonth]);

  // Update day options when year changes
  useEffect(() => {
    if (selectedMonth && selectedYear) {
      const year = parseInt(selectedYear, 10);
      const month = parseInt(selectedMonth, 10);
      const daysInMonth = new Date(year, month, 0).getDate(); // Get the last day of the month
      const days = Array.from({ length: daysInMonth }, (_, i) => ({
        value: String(i + 1).padStart(2, '0'),
        label: String(i + 1).padStart(2, '0')
      }));
      setDayOptions(days);
    }
  }, [selectedYear]);

  return (
    <div className='w-full'>
      <form className='flex w-full justify-around' style={{ fontSize: "14px" }}>
        {/* Month Selector */}
        <div className="form-group p-2">
          <label style={{ fontSize: "17px" }}>Month</label>
          <Select
            options={monthOptions}
            styles={customStyles}
            onChange={option => setSelectedMonth(option ? option.value : null)}
            placeholder="MM"
          />
        </div>

        {/* Day Selector */}
        <div className="form-group p-2">
          <label style={{ fontSize: "17px" }}>Day</label>
          <Select
            options={dayOptions}
            styles={customStyles}
            onChange={option => setSelectedDay(option ? option.value : null)}
            placeholder="DD"
            isDisabled={!selectedMonth} // Disable until month is selected
          />
        </div>

        {/* Year Selector */}
        <div className="form-group p-2">
          <label style={{ fontSize: "17px" }}>Year</label>
          <Select
            options={yearOptions}
            styles={customStyles}
            onChange={option => setSelectedYear(option ? option.value : null)}
            placeholder="YY"
          />
        </div>
      </form>
    </div>
  );
}

export default SignDate;
