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
				<Book key={book.id} book={book} />
			))}
		</div>
	)
}
