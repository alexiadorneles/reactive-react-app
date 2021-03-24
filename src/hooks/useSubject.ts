import { Subject } from 'rxjs'
import { ReactiveKeyToData } from '../@types/Observables'
import { ObservableStore } from '../observables/ObservableStore'

export function useSubject<
	T extends keyof ReactiveKeyToData,
	R extends Subject<ReactiveKeyToData[T]>
>(observableName: T): R {
	return ObservableStore.getSubject(observableName)
}
