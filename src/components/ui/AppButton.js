import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { AppText } from './AppText'
import { theme } from './../../theme/theme'

export const AppButton = ({ children, onPress, color = theme.VIOLET }) => {
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.7}>
			<View style={{ ...styles.button, backgroundColor: color }}>
				<AppText style={styles.text}>{children}</AppText>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#fff',
	},
})
