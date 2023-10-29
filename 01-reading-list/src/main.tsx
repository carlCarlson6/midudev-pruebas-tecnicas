import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './assets/app.css'
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

const theme = extendTheme({
	syltes: {
		global: (_: StyleFunctionProps) => ({
			body: {
				color: 'default',
				bg: '#718096'
			},
		}),
	},
})

ReactDOM
	.createRoot(document.getElementById('root')!)
	.render(
		<React.StrictMode>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</React.StrictMode>
	);
