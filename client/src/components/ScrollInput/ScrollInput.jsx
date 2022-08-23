import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { getProductsAction } from '../../Redux/actions/productsAction';

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState({ food_name: '' });

  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.products);

  useEffect(() => {
    if (value.food_name.length > 2) {
      dispatch(getProductsAction(value));
    }
  }, [value]);

  console.log(allProduct, 'allproduct!!!!');

  return (
    <Autocomplete
      value={value.food_name}
      onInputChange={(e, val) => (setValue({ food_name: val }))}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.food_name);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={allProduct}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.food_name;
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props} key={option.id}>
          {option.food_name}
        </Box>
      )}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Free solo with text demo" />
      )}
    />
  );
}
