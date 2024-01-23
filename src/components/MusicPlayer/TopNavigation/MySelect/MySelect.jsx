import React from 'react';
import Select from "react-select";

function MySelect(props) {
    return (
        <Select
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? 'grey' : '#ccc',
                    backgroundColor:"#f8f8f8",
                    width:"200px",
                    outline:"none",
                    border: 0,
                    boxShadow: 'none',
                    fontSize:"16px",
                    height:"100%",
                    cursor:"pointer",
                    borderRadius:"8px"
                }),
                option: (baseStyles, {isFocused,isSelected}) => ({
                    ...baseStyles,
                    fontSize:"14px",
                    backgroundColor:isSelected ? "#282828" : isFocused ? "#E1E1E1" : null,
                    cursor:"pointer"
                })
            }}
            options={props.options}
            value={props.selectedValue}
            onChange={props.setSelectedValue}
        />
    );
}

export default MySelect;