import { Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import './App.css'
import { Search } from './components/screens'
import { Header } from './components/shared'
import { useObservable } from './hooks'

const { TabPane } = Tabs

function App(): JSX.Element {
	const [key, setKey] = useState('1')
	const [tabDescription, setTabDescription] = useState('Tab 2')

	useEffect(() => {
		const [_, onTabChange] = useObservable('Tab', 'TabChange')
		const subscription = onTabChange(({ tabKey, bookName }) => {
			setKey(tabKey)
			setTabDescription(bookName)
		})
		return () => {
			subscription.unsubscribe
		}
	}, [])

	return (
		<>
			<Header />
			<div className="App">
				<Tabs onTabClick={value => setKey(value)} activeKey={key} defaultActiveKey="1">
					<TabPane tab="Buscar livros" key="1">
						<Search />
					</TabPane>
					<TabPane tab="Detalhe" key="2">
						{tabDescription}
					</TabPane>
				</Tabs>
			</div>
		</>
	)
}

export default App
