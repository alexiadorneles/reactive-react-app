import { Subject } from 'rxjs'
import { BookModel } from '../@types'
import { ReactiveStore } from './ReactiveStore'

export abstract class ReactiveSingletonCreator {
	public static mountInstances(): void {
		ReactiveStore.save('CurrentReading', new Subject<string>())
		ReactiveStore.save('BookTextChange', new Subject<string>())
		ReactiveStore.save('BookSearchResponse', new Subject<BookModel[]>())
	}
}
