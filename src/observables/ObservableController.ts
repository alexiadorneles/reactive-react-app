import { Subject } from 'rxjs'
import { BookModel } from '../@types'
import { ObservableStore } from './ObservableStore'

export class ObservableController {
	public static setup(): void {
		ObservableStore.save('CurrentReading', new Subject<string>())
		ObservableStore.save('BookTextChange', new Subject<string>())
		ObservableStore.save('BookSearchResponse', new Subject<BookModel[]>())
	}
}
