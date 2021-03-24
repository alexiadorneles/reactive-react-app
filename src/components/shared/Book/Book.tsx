import React from 'react'
import { BookModel } from '../../../@types'

export interface BookPropTypes {
	book: BookModel
}

export function Book({ book }: BookPropTypes): JSX.Element {
	return (
		<div className="Book">
			{book.name} - {book.authorName}
		</div>
	)
}
