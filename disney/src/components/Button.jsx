import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

const Button = ({ text, onClick }) => {

	return (
		<ChakraButton
			colorScheme="brand"
			size="md"
			w="full"
			onClick={onClick}
		>
			{text}
		</ChakraButton>
	);
};

export default Button;
