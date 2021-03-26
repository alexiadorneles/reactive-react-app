import { Button, Space } from 'antd'
import React from 'react'
import { BookModel } from '../../../@types'
import { useSubject } from '../../../hooks'
import { Book } from '../../shared'
import './BookList.scss'

export interface BookListPropTypes {
	bookList: BookModel[]
}

export function BookList({ bookList }: BookListPropTypes): JSX.Element {
	const changeCurrentBookSubject = useSubject('Book', 'CurrentReading')
	const updateTabSubject = useSubject('Tab', 'TabChange')

	const onBookChange = (book: BookModel): void => {
		changeCurrentBookSubject.next(book.volumeInfo.title)
		updateTabSubject.next({ tabKey: '2', bookName: book.volumeInfo.title })
	}

	const createSelectionButton = (book: BookModel) => (
		<Button size="middle" type="primary" onClick={onBookChange.bind(null, book)}>
			SELECIONAR
		</Button>
	)

	return (
		<Space className="BookList" align="center" wrap={true}>
			{bookList.map(book => (
				<Book key={book.id} actionButton={createSelectionButton(book)} book={book} />
			))}
		</Space>
	)
}
