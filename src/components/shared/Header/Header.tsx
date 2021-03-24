import React, { useEffect, useState } from 'react'
import { useObservable } from '../../../hooks'

export function Header(): JSX.Element {
	const [currentBook, setCurrentBook] = useState('')

	useEffect(() => {
		const subscription = useObservable('CurrentReading', setCurrentBook)
		return () => subscription.unsubscribe()
	}, [])

	const headerStyles: React.CSSProperties = {
		backgroundColor: 'rgba(0,0,0, .1)',
		height: 30,
		width: '100%',
	}
	return (
		<div className="Header" style={headerStyles}>
			<p style={{ margin: 0, paddingLeft: 30, paddingTop: 5 }}>Aléxia — Lendo: {currentBook}</p>
		</div>
	)
}
