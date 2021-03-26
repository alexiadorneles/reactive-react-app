import React from 'react'
import './App.css'
import { Search } from './components/screens'
import { Header } from './components/shared'

function App(): JSX.Element {
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
