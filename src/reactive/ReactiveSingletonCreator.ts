import { BehaviorSubject, Subject } from 'rxjs'
import { BookModel } from '../@types'
import { ReactiveStore } from './ReactiveStore'

export abstract class ReactiveSingletonCreator {
	public static mountInstances(): void {
		ReactiveStore.save('CurrentReading', new BehaviorSubject<string>('A Rainha Vermelha'))
		ReactiveStore.save('BookTextChange', new BehaviorSubject<string>('A Rainha Vermelha'))
		ReactiveStore.save('BookSearchResponse', new Subject<BookModel[]>())
		ReactiveStore.save('TabChange', new Subject<{ tabKey: string; bookName: string }>())
	}
}
