import { Button } from 'antd'
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
		<div className="BookList" style={{ display: 'flex', flexWrap: 'wrap' }}>
			{bookList.map(book => (
				<div key={book.id}>
					<br />
					<Book book={book} />
					<Button
						type="primary"
						onClick={() => changeCurrentBookSubject.next(book.volumeInfo.title)}
					>
						SELECIONAR
					</Button>
					<br />
				</div>
			))}
		</div>
	)
}
