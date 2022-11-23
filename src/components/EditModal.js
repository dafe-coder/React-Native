import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal, Alert } from 'react-native'
import { theme } from './../theme/theme'
import { AppButton } from './ui/AppButton'
export const EditModal = ({
	visible,
	setModal,
	updateElement,
	todoID,
	valuePrev,
}) => {
	const [value, setValue] = useState(valuePrev)

	const saveData = () => {
		if (value.length >= 3) {
			updateElement(value, todoID)
			setModal(false)
		} else {
			Alert.alert('Error!', `Minimum length 3. Now is ${value.length}`)
		}
	}

	const cancelHandle = () => {
		setValue(valuePrev)
		setModal(false)
	}

	return (
		<Modal visible={visible} animationType='slide'>
			<View style={styles.wrap}>
				<TextInput
					style={styles.input}
					placeholder='Write your edits'
					onChangeText={setValue}
					value={value}
				/>
				<View style={styles.btns}>
					<View style={styles.btn}>
						<AppButton onPress={cancelHandle} color={theme.RED}>
							Cancel
						</AppButton>
					</View>
					<View style={styles.btn}>
						<AppButton onPress={saveData} color={theme.VIOLET}>
							Save
						</AppButton>
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	wrap: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	btns: {
		flexDirection: 'row',
		width: '80%',
		justifyContent: 'space-between',
	},
	btn: {
		width: 140,
	},
	input: {
		padding: 10,
		borderBottomWidth: 2,
		borderColor: theme.VIOLET,
		width: '80%',
		color: theme.GRAY,
		marginBottom: 20,
	},
})
