import { of, Subject } from 'rxjs'
import { ObservableStore } from './ObservableStore'

export class ObservableController {
	public static setup(): void {
		ObservableStore.save('CurrentReading', new Subject<string>())
	}
}
