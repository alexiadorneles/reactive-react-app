import React from 'react'
import { BookModel } from '../../../@types'

export interface BookPropTypes {
	book: BookModel
}

export function Book({ book }: BookPropTypes): JSX.Element {
	return <span className="Book">{book.volumeInfo.title}</span>
}
