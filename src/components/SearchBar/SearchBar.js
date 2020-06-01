import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
  return (
    <FormControl variant="outlined" fullWidth>
      <OutlinedInput
        type="search"
        placeholder="Buscar planos..."
        id="outlined-adornment-search"
        color="secondary"
        startAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="search" edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchBar;
