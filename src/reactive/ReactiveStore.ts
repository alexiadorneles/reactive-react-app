import { Observable, Subject } from 'rxjs'
import { ReactiveKeyToData } from '../@types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const observables: any = {}

export abstract class ReactiveStore {
	public static save<T extends keyof ReactiveKeyToData, R extends Subject<ReactiveKeyToData[T]>>(
		name: T,
		observable: R,
	): void {
		observables[name] = observable
	}

	public static getObservable<
		T extends keyof ReactiveKeyToData,
		R extends Observable<ReactiveKeyToData[T]>
	>(name: T): R {
		return observables[name].asObservable() as R
	}

	public static getSubject<
		T extends keyof ReactiveKeyToData,
		R extends Subject<ReactiveKeyToData[T]>
	>(name: T): R {
		return observables[name] as R
	}
}
