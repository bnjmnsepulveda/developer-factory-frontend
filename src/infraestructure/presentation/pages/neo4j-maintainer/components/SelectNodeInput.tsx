import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { getNodeTypes } from '../../../../../core/domain/service/getNodeTypes';
import { CustomInputProps } from '../../../shared/utils/CustomInputProps';

interface NodeOptionType {
  inputValue?: string;
  title: string;
}

const filter = createFilterOptions<NodeOptionType>();

export default function SelectNodeInput(props: CustomInputProps<string>) {

  const { value, onChange } = props;


  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          onChange(newValue);
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          onChange(newValue.inputValue);
        } else if (newValue) {
          onChange(newValue.title);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Crear Nodo "${inputValue}"`,
          });
        }
        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="node-type"
      options={getNodeTypes().map(x => ({ title: x }as NodeOptionType))}
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
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Nodo" />
      )}
    />
  );
}

// export default function SelectNodeInput() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

//   const nodeTypes = getNodeTypes()

//   return (
//       <FormControl fullWidth>
//         <InputLabel id="node-select-label">Tipo Nodo</InputLabel>
//         <Select
//           labelId="node-select-label"
//           id="node-select"
//           value={age}
//           label="Entidad"
//           onChange={handleChange}
//         >
//           { nodeTypes.map(n => <MenuItem key={n} value={n}>{n}</MenuItem>)}
//         </Select>
//       </FormControl>
//   );
// }
