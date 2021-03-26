import { HttpService } from '../services'
import { BookSearchMediator } from './Book/BookSearchMediator'

export abstract class MediatorSingletonCreator {
	public static mountInstances(): void {
		const googleBooksService = new HttpService('https://www.googleapis.com/books/v1/volumes?q=')
		new BookSearchMediator(googleBooksService).mediate()
	}
}
