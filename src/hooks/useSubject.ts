import { Subject } from 'rxjs'
import { ReactiveKeyToData } from '../@types'
import { ReactiveStore } from '../reactive'

export function useSubject<
	T extends keyof ReactiveKeyToData,
	R extends Subject<ReactiveKeyToData[T]>
>(observableName: T): R {
	return ReactiveStore.getSubject(observableName)
}
