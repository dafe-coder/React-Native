import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { theme } from './../theme/theme'
import { AppCard } from '../components/ui/Card'
import { EditModal } from '../components/EditModal'
import { AppText } from './../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton'

export const TodoScreen = ({
	goBack,
	todoID,
	updateElement,
	data,
	removeItem,
}) => {
	const [modal, setModal] = useState(false)
	return (
		<View style={styles.body}>
			<AppCard style={styles.card}>
				<AppText style={styles.text} fw='bold'>
					{data.find((t) => t.id == todoID).title}
				</AppText>
				<Button title='Edit' onPress={() => setModal(true)} />
			</AppCard>
			<View style={styles.btns}>
				<View style={styles.btn}>
					<Button onPress={goBack} title='Go Back' color={theme.GRAY} />
				</View>
				<View style={styles.btn}>
					<Button
						onPress={() => removeItem(data.find((t) => t.id == todoID))}
						title='Remove'
						color={theme.RED}
					/>
				</View>
			</View>
			<EditModal
				visible={modal}
				setModal={setModal}
				updateElement={updateElement}
				todoID={todoID}
				valuePrev={data.find((t) => t.id == todoID).title}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	btns: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	btn: {
		width: 150,
	},
	text: {
		fontSize: 20,
		marginBottom: 15,
	},
	card: {
		marginBottom: 20,
	},
})
