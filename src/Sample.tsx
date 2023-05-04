import React, { useState } from "react";
import Select from 'react-select';

const SearchableDropdown = () => {
    const options = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
        { value: 'grape', label: 'Grape' },
        { value: 'pear', label: 'Pear' },
      ];
      const [selectedOption, setSelectedOption] = useState(null);
      const handleSelectedOptionChange = (selectedOption:any) => {
        setSelectedOption(selectedOption);
      };
      
  return (
    <div>
<Select
              options={options}
              value={selectedOption}
              onChange={handleSelectedOptionChange}
              placeholder="Select an option"
              isSearchable={true}
              
              />
              
    </div>
  );
};

export default SearchableDropdown;
