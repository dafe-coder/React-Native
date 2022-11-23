import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { theme } from '../theme/theme'
export const Navbar = () => {
	return (
		<View style={styles.navbar}>
			<Text style={styles.text}>Todo App</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	navbar: {
		height: 70,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.VIOLET,
	},
	text: {
		color: '#fff',
		fontSize: 20,
	},
})
