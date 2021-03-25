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
	const changeCurrentBookSubject = useSubject('CurrentReading')

	const createSelectionButton = (book: BookModel) => (
		<Button type="primary" onClick={() => changeCurrentBookSubject.next(book.volumeInfo.title)}>
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
