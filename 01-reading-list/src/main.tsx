import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './assets/app.css'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './assets/theme';

ReactDOM
	.createRoot(document.getElementById('root')!)
	.render(
		<React.StrictMode>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</React.StrictMode>
	);
