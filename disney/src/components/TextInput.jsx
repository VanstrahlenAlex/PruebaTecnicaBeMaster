import React from 'react';
import {
	FormControl,
	FormLabel,
	Input,
	chakra,
} from '@chakra-ui/react';

const TextInput = ({ label, type, value, onChange }) => {

	return (
		<FormControl mb="5">
			<FormLabel mb="2">{label}</FormLabel>
			<Input
				type={type}
				value={value}
				onChange={onChange}
				focusBorderColor="brand.900"
				placeholder="Introducir..."
			/>
		</FormControl>
	);
};

export default TextInput;
