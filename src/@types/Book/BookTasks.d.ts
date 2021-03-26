import { BookModel } from './BookModel'

export interface BookTasks {
	CurrentReading: string
	BookTextChange: string
	BookSearchResponse: BookModel[]
}
