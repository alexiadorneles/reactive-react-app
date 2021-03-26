import { Dispatch, SetStateAction } from 'react'
import { Observable, Subscription } from 'rxjs'
import { ReactiveKeys, ReactiveKeyToData } from '../@types'
import { ReactiveStore } from '../reactive'

type SubscribeFunction<T> = (
	next?: ((value: T) => void) | undefined,
	error?: ((error: unknown) => void) | undefined,
	complete?: (() => void) | undefined,
) => Subscription

export function useObservable<T extends keyof ReactiveKeyToData, R extends ReactiveKeyToData[T]>(
	observableName: T,
	dispatcher: Dispatch<SetStateAction<R>>,
): Subscription

export function useObservable<T extends keyof ReactiveKeyToData, R extends ReactiveKeyToData[T]>(
	observableName: T,
): [Observable<R>, SubscribeFunction<R>]

export function useObservable<T extends keyof ReactiveKeyToData, R extends ReactiveKeyToData[T]>(
	observableName: ReactiveKeys,
	dispatcher?: Dispatch<SetStateAction<R>>,
): Subscription | [Observable<R>, SubscribeFunction<R>] {
	const observable = ReactiveStore.getObservable(observableName)

	if (dispatcher) {
		return observable.subscribe(value => dispatcher(value as R))
	}

	return [observable, observable.subscribe.bind(observable)] as [
		Observable<R>,
		SubscribeFunction<R>,
	]
}
