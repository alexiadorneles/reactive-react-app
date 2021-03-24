import React from 'react'
import { BookModel } from '../../../@types'
import { useSubject } from '../../../hooks'
import { Book } from '../../shared'

export interface BookListPropTypes {
	bookList: BookModel[]
}

export function BookList({ bookList }: BookListPropTypes): JSX.Element {
	const changeCurrentBookSubject = useSubject('CurrentReading')

	return (
		<div className="BookList">
			{bookList.map(book => (
				<span key={book.id}>
					<br />
					<Book book={book} />
					<button onClick={() => changeCurrentBookSubject.next(book.volumeInfo.title)}>
						Selecionar leitura atual
					</button>
					<br />
				</span>
			))}
		</div>
	)
}
