import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Box, ChakraProvider } from '@chakra-ui/react';

ReactDOM
	.createRoot(document.getElementById('root')!)
	.render(
		<React.StrictMode>
			<ChakraProvider>
				<Box p={5} backgroundColor={'gray.500'}>
					<App />
				</Box>
			</ChakraProvider>
		</React.StrictMode>
	);
