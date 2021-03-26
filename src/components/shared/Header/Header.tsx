import { PageHeader } from 'antd'
import React, { useEffect, useState } from 'react'
import { useObservable } from '../../../hooks'

export function Header(): JSX.Element {
	const [currentBook, setCurrentBook] = useState('')

	useEffect(() => {
		const subscription = useObservable('Book', 'CurrentReading', setCurrentBook)
		return () => subscription.unsubscribe()
	}, [])

	const routes = [
		{
			path: 'index',
			breadcrumbName: 'Inicial',
		},
		{
			path: 'first',
			breadcrumbName: 'Livros',
		},
		{
			path: 'second',
			breadcrumbName: 'Busca',
		},
	]

	return <PageHeader breadcrumb={{ routes }} title="Aléxia" subTitle={'lendo: ' + currentBook} />
}
