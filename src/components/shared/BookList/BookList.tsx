import React from 'react'
import { BookModel } from '../../../@types'
import { Book } from '../../shared'

export interface BookListPropTypes {
	bookList: BookModel[]
}

export function BookList({ bookList }: BookListPropTypes): JSX.Element {
	return (
		<div className="BookList">
			{bookList.map(book => (
				<span key={book.id}>
					<br />
					<Book book={book} />
					<button>Click Me!</button>
					<br />
				</span>
			))}
		</div>
	)
}
