import React from 'react'
import './App.css'
import { Search } from './components/screens'
import { Header } from './components/shared'
import { MediatorSingletonCreator } from './mediators'
import { ReactiveSingletonCreator } from './reactive'

function App(): JSX.Element {
	ReactiveSingletonCreator.mountInstances()
	MediatorSingletonCreator.mountInstances()

	return (
		<>
			<Header />
			<div className="App">
				<Search />
			</div>
		</>
	)
}

export default App
