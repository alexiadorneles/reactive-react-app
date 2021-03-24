import React from 'react'
import './App.css'
import { Search } from './components/screens'
import { Header } from './components/shared'
import { ObservableController } from './observables'

function App(): JSX.Element {
	ObservableController.setup()

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
