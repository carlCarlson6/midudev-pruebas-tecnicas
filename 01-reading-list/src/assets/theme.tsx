import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const Button = defineStyleConfig({
	baseStyle: {
	  	fontWeight: 'bold',
	 	borderRadius: 'base',
	},
	variants: {
	  	outline: {
			border: '2px solid',
			borderColor: 'gray.400',
			bg: 'gray.300',
			textColor: 'gray.600'
	  	},
	},
	defaultProps: {
	  	variant: 'outline',
	},
});

const Radio = defineStyleConfig({
	defaultProps: {
		colorScheme: 'gray'
	}
});

export const theme = extendTheme({
	components: {
		Button,
		Radio
	},
	styles: {
		global: {
			body: {
				bg: 'gray.400',
				color: 'black'
			}
		}
	},
});
