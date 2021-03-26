import { Observable } from 'rxjs'
import { BookModel } from './Book/BookModel'
import { BookTasks } from './Book/BookTasks'

export interface ReactiveKeyToData {
	CurrentReading: string
	BookTextChange: string
	BookSearchResponse: BookModel[]
	TabChange: { tabKey: string; bookName: string }
}

export interface ReactiveLevelToTask {
	CurrentReading: string
	BookTextChange: string
	BookSearchResponse: BookModel[]
	TabChange: { tabKey: string; bookName: string }
}

export type ReactionLevel = {
	Book: BookTasks
	Tab: {
		TabChange: { tabKey: string; bookName: string }
	}
}

export type ReactiveKeys = keyof ReactiveKeyToData
export type ReactiveData = ReactiveKeyToData[keyof ReactiveKeyToData]
export type ReactiveObservable<T extends ReactiveKeys> = Observable<ReactiveKeyToData[T]>
