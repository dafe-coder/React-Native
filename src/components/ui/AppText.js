import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const AppText = ({ children, style, fw = 'regular' }) => {
	switch (fw) {
		case 'bold':
			return <Text style={{ ...styles.bold, ...style }}>{children}</Text>
		default:
			return <Text style={{ ...styles.default, ...style }}>{children}</Text>
	}
}

const styles = StyleSheet.create({
	default: {
		fontFamily: 'roboto-regular',
	},
	bold: {
		fontFamily: 'roboto-bold',
	},
})
