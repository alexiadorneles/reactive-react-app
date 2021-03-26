import React, { useState } from 'react'
import { BehaviorSubject, interval } from 'rxjs'
import { debounce, filter, map } from 'rxjs/operators'
import { BookModel } from '../../../@types'
import { HttpService } from '../../../services/HttpService'
import { BookList, SearchBox } from '../../shared'

import './Search.scss'

export function Search(): JSX.Element {
	// TODO: tá feio, eu sei
	const googleBooksService = new HttpService('https://www.googleapis.com/books/v1/volumes?q=')
	const textUpdaterObserver = new BehaviorSubject('')

	const [books, setBooks] = useState<BookModel[]>([])

	textUpdaterObserver
		.pipe(
			debounce(() => interval(500)),
			filter(text => Boolean(text)),
		)
		.subscribe(text => {
			googleBooksService
				.get(text)
				.pipe(
					map(response => response.data.items),
					map(items =>
						items.filter((book: BookModel) => ['en', 'pt'].includes(book.volumeInfo.language)),
					),
				)
				.subscribe(setBooks)
		})

	return (
		<div className="Search">
			<SearchBox textObserver={textUpdaterObserver} />
			<BookList bookList={books} />
		</div>
	)
}
