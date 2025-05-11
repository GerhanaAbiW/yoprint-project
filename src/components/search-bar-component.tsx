import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  width?: string | number;
  height?: string | number;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

const SearchBarComponent: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  width = "100%",
  height,
  onChange,
  onSearch,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  const clearInput = () => {
    setValue("");
    onChange?.("");
  };

  const handleSearch = () => {
    onSearch?.(value);
  };

  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      sx={{
        width,
        height,
        "& .MuiInputBase-root": {
          height: height,
        },
      }}
      slotProps={{
        input: {
          onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          },
          endAdornment: (
            <InputAdornment position="end">
              {value && (
                <IconButton onClick={clearInput} size="small">
                  <CloseIcon fontSize="small" />
                </IconButton>
              )}
              <IconButton onClick={handleSearch} size="small">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchBarComponent;
