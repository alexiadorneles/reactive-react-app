import { interval, Observable } from 'rxjs'
import { debounce, filter, map } from 'rxjs/operators'
import { BookModel, Mediator } from '../../@types'
import { useObservable, useSubject } from '../../hooks'
import { HttpService } from '../../services/HttpService'

export class BookSearchMediator implements Mediator {
	constructor(private googleBooksService: HttpService) {}

	public mediate = (): void => {
		const wordObservable = this.debounceUserInputAndExtractWord()
		wordObservable.subscribe(this.searchBooks)
	}

	private debounceUserInputAndExtractWord = (): Observable<string> => {
		const [observable] = useObservable('BookTextChange')
		return observable.pipe(
			debounce(() => interval(500)),
			filter(text => Boolean(text)),
		)
	}

	private searchBooks = (text: string): void => {
		const subject = useSubject('BookSearchResponse')
		const booksObservable = this.googleBooksService.get(text).pipe(
			map(response => response.data.items),
			map(this.filterEnglishAndPortugueseBooks),
		)
		booksObservable.subscribe(books => subject.next(books))
	}

	private filterEnglishAndPortugueseBooks = (books: BookModel[]): BookModel[] =>
		books.filter((book: BookModel) => ['en', 'pt'].includes(book.volumeInfo.language))
}
