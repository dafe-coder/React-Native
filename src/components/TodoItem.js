import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const TodoItem = ({ item, removeItem, shortPress }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={() => shortPress(item)}
			onLongPress={() => removeItem(item)}>
			<View style={styles.list}>
				<Text style={styles.item}>{item.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		padding: 20,
		borderColor: '#4954ad',
		borderWidth: 1,
		borderRadius: 4,
		marginBottom: 10,
		fontFamily: 'roboto-bold',
	},
})
