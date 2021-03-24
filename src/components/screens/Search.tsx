import React, { useState } from 'react'
import { BehaviorSubject, interval } from 'rxjs'
import { debounce } from 'rxjs/operators'
import { BookModel } from '../../@types'
import { HttpService } from '../../services/HttpService'
import { BookList, SearchBox } from '../shared'

export function Search(): JSX.Element {
	// TODO: tá feio, eu sei
	const googleBooksService = new HttpService('https://www.googleapis.com/books/v1/volumes?q=')
	const textUpdaterObserver = new BehaviorSubject('')

	const [books, setBooks] = useState<BookModel[]>([])

	textUpdaterObserver.pipe(debounce(() => interval(500))).subscribe(text => {
		googleBooksService.get(text).subscribe(response => {
			setBooks(response.data.items)
		})
	})

	return (
		<div className="Search">
			<SearchBox textObserver={textUpdaterObserver} />
			<BookList bookList={books} />
		</div>
	)
}
