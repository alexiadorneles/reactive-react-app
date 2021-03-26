import { BookModel } from '@types'
import { BehaviorSubject, Subject } from 'rxjs'
import { ReactiveStore } from './ReactiveStore'

export abstract class ReactiveSingletonCreator {
	public static mountInstances(): void {
		ReactiveSingletonCreator.mountBookSubjects()
		ReactiveSingletonCreator.mountTabSubjects()
	}

	private static mountTabSubjects() {
		ReactiveStore.instance()
			.onLevel('Tab')
			.save('TabChange', new Subject<{ tabKey: string; bookName: string }>())
	}

	private static mountBookSubjects() {
		ReactiveStore.instance()
			.onLevel('Book')
			.save('CurrentReading', new BehaviorSubject<string>('A Rainha Vermelha'))
			.save('BookTextChange', new BehaviorSubject<string>('A Rainha Vermelha'))
			.save('BookSearchResponse', new Subject<BookModel[]>())
	}
}
