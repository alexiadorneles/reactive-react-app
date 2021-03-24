import React from 'react'

interface HeaderPropTypes {
	currentBook: string
}

export function Header({ currentBook }: HeaderPropTypes): JSX.Element {
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
