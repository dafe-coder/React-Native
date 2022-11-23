import React from 'react'
import { View, StyleSheet } from 'react-native'

export const AppCard = ({ children, style }) => {
	return <View style={{ ...styles.card, ...style }}>{children}</View>
}

const styles = StyleSheet.create({
	card: {
		width: '100%',
		padding: 20,
		shadowColor: '#000',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		shadowOffset: { width: 2, height: 2 },
		elevation: 10,
		backgroundColor: '#fff',
		borderRadius: 10,
	},
})
