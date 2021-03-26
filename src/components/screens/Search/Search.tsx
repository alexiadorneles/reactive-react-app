import { BookModel } from '@types'
import { BookList, SearchBox } from 'components/shared'
import { useObservable } from 'hooks'
import React, { useEffect, useState } from 'react'
import './Search.scss'

export function Search(): JSX.Element {
	const [books, setBooks] = useState<BookModel[]>([])

	useEffect(() => {
		const [_, onBooksResponse] = useObservable('Book', 'BookSearchResponse')
		const subscription = onBooksResponse(setBooks)

		return () => {
			subscription.unsubscribe()
		}
	}, [])

	return (
		<div className="Search">
			<SearchBox />
			<BookList bookList={books} />
		</div>
	)
}
