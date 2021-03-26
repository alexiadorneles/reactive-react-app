import { Dispatch, SetStateAction } from 'react'
import { Subscription } from 'rxjs'
import { ReactiveData, ReactiveKeys, ReactiveKeyToData } from '../@types/Observables'
import { ObservableStore } from '../observables/ObservableStore'

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
): SubscribeFunction<R>

export function useObservable<T extends ReactiveData>(
	observableName: ReactiveKeys,
	dispatcher?: Dispatch<SetStateAction<T>>,
): Subscription | SubscribeFunction<T> {
	const observable = ObservableStore.getObservable(observableName)

	if (dispatcher) {
		return observable.subscribe(value => dispatcher(value as T))
	}

	return observable.subscribe as SubscribeFunction<T>
}
