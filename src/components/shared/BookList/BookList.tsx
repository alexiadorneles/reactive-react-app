import React from 'react'
import { BookModel } from '../../../@types'
import { ObservableStore } from '../../../observables/ObservableStore'
import { Book } from '../../shared'

export interface BookListPropTypes {
	bookList: BookModel[]
}

export function BookList({ bookList }: BookListPropTypes): JSX.Element {
	const selectBookObserver = ObservableStore.getSubject('CurrentReading')

	return (
		<div className="BookList">
			{bookList.map(book => (
				<span key={book.id}>
					<br />
					<Book book={book} />
					<button onClick={() => selectBookObserver.next(book.volumeInfo.title)}>
						Selecionar leitura atual
					</button>
					<br />
				</span>
			))}
		</div>
	)
}
