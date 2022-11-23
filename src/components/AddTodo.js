import React, { useState } from 'react'
import { View, TextInput, Pressable, StyleSheet, Keyboard } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export const AddTodo = ({ addTodo }) => {
	const [value, setValue] = useState('')

	const addToList = () => {
		addTodo(value)
		Keyboard.dismiss()
		setValue('')
	}

	return (
		<View style={styles.body}>
			<TextInput
				value={value}
				style={styles.input}
				onChangeText={setValue}
				placeholder='Введите название'
				autoCorrect={false}
				autoCapitalize='words'
				// autoFocus={true}
				// keyboardType='numeric'
			/>
			<Pressable color='#3949ab' style={styles.button} onPress={addToList}>
				<AntDesign name='pluscircleo' size={16} color='white' />
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flexDirection: 'row',
	},
	input: {
		width: '90%',
		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderBottomColor: '#3949ab',
		padding: 10,
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '10%',
		color: '#3949ab',
		backgroundColor: '#3949ab',
		textAlignVertical: 'middle',
	},
	text: {
		color: '#fff',
	},
})
