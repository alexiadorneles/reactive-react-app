import React from 'react'
import { BehaviorSubject, interval } from 'rxjs'
import { debounce } from 'rxjs/operators'
import { BookModel } from '../../@types'
import { Book, SearchBox } from '../shared'

export function Search(): JSX.Element {
	const textUpdaterObserver = new BehaviorSubject('')

	textUpdaterObserver.pipe(debounce(() => interval(500))).subscribe(text => console.log(text))

	return (
		<div className="Search">
			<SearchBox textObserver={textUpdaterObserver} />
			<Book book={{} as BookModel} />
		</div>
	)
}
