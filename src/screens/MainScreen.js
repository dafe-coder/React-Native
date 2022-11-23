import React from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { TodoItem } from '../components/TodoItem'
export const MainScreen = ({ todos, addTodo, shortPress, removeItem }) => {
	return (
		<View>
			<AddTodo addTodo={addTodo} />
			{todos.length > 0 ? (
				<FlatList
					keyExtractor={(item) => item.id.toString()}
					style={styles.list}
					data={todos}
					renderItem={({ item }) => (
						<TodoItem
							item={item}
							removeItem={removeItem}
							shortPress={shortPress}
						/>
					)}
				/>
			) : (
				<View style={styles.imageWrap}>
					<Image
						style={styles.image}
						resizeMode='contain'
						source={require('../../assets/no-result.png')}
					/>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	list: {
		paddingVertical: 20,
	},
	imageWrap: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	image: {
		width: '100%',
	},
})
