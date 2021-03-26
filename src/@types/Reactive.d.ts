import { Observable } from 'rxjs'
import { BookModel } from './BookModel'

export interface ReactiveKeyToData {
	CurrentReading: string
	BookTextChange: string
	BookSearchResponse: BookModel[]
}

export type ReactiveKeys = keyof ReactiveKeyToData
export type ReactiveData = ReactiveKeyToData[keyof ReactiveKeyToData]
export type ReactiveObservable<T extends ReactiveKeys> = Observable<ReactiveKeyToData[T]>