import React, { useState, useCallback, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Alert, View, StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export default function App() {
	const [todos, setTodos] = useState([
		{ id: '1', title: 'Generate Pass' },
		{ id: '2', title: 'Wash mashines' },
	])
	const [todoID, setTodoID] = useState(null)

	const [appIsReady, setAppIsReady] = useState(false)

	useEffect(() => {
		async function prepare() {
			try {
				// Pre-load fonts, make any API calls you need to do here
				await Font.loadAsync({
					'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
					'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
				})
				// Artificially delay for two seconds to simulate a slow loading
				// experience. Please remove this if you copy and paste the code!
				await new Promise((resolve) => setTimeout(resolve, 2000))
			} catch (e) {
				console.warn(e)
			} finally {
				// Tell the application to render
				setAppIsReady(true)
			}
		}

		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			await SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
		return null
	}

	const shortPress = (item) => {
		setTodoID(item.id)
	}
	const goBack = () => {
		setTodoID(null)
	}
	const updateElement = (title, id) => {
		setTodos((state) =>
			state.map((t) => {
				if (t.id === id) {
					t.title = title
				}
				return t
			})
		)
	}
	const removeItem = (item) => {
		Alert.alert(
			'Delete Element',
			`You really want to delete this element ${item.title}? If you change your mind - click cancel!`,
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'OK',
					onPress: () => {
						goBack()
						setTodos((state) => state.filter((i) => i.id !== item.id))
					},
				},
			],
			{ cancelable: true }
		)
	}
	const addTodo = (title) => {
		if (title !== '') {
			const newTodo = {
				id: Date.now().toString(),
				title: title,
			}
			setTodos((state) => [...state, newTodo])
		} else {
			Alert.alert('This cant empty')
		}
	}

	return (
		<View style={styles.body} onLayout={onLayoutRootView}>
			<Navbar />
			<View style={styles.containerAddTodo}>
				{todoID == null ? (
					<MainScreen
						todos={todos}
						addTodo={addTodo}
						shortPress={shortPress}
						removeItem={removeItem}
					/>
				) : (
					<TodoScreen
						goBack={goBack}
						todoID={todoID}
						data={todos}
						removeItem={removeItem}
						updateElement={updateElement}
					/>
				)}
				<StatusBar></StatusBar>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		fontFamily: 'roboto-bold',
	},
	containerAddTodo: {
		paddingVertical: 30,
		paddingHorizontal: 30,
	},
})
