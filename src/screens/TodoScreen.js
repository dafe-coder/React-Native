import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { theme } from './../theme/theme'
import { AppCard } from '../components/ui/Card'
import { EditModal } from '../components/EditModal'
import { AppText } from './../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

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
				<AppButton onPress={() => setModal(true)}>
					<FontAwesome name='edit' size={20} />
				</AppButton>
			</AppCard>
			<View style={styles.btns}>
				<View style={styles.btn}>
					<AppButton onPress={goBack} color={theme.GRAY}>
						<AntDesign name='back' size={20} />
					</AppButton>
				</View>
				<View style={styles.btn}>
					<AppButton
						onPress={() => removeItem(data.find((t) => t.id == todoID))}
						color={theme.RED}>
						<FontAwesome name='remove' size={20} />
					</AppButton>
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
	},
	card: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
})
