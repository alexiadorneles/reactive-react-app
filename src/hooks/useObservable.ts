import { ReactionLevel } from '@types'
import { Dispatch, SetStateAction } from 'react'
import { ReactiveStore } from 'reactive'
import { Observable, Subscription } from 'rxjs'

type SubscribeFunction<T> = (
	next?: ((value: T) => void) | undefined,
	error?: ((error: unknown) => void) | undefined,
	complete?: (() => void) | undefined,
) => Subscription

export function useObservable<
	L extends keyof ReactionLevel,
	T extends keyof ReactionLevel[L],
	R extends ReactionLevel[L][T]
>(level: L, observableName: T, dispatcher: Dispatch<SetStateAction<R>>): Subscription

export function useObservable<
	L extends keyof ReactionLevel,
	T extends keyof ReactionLevel[L],
	R extends ReactionLevel[L][T]
>(level: L, observableName: T): [Observable<R>, SubscribeFunction<R>]

export function useObservable<L extends keyof ReactionLevel, T extends keyof ReactionLevel[L]>(
	level: L,
	observableName: T,
	dispatcher?: Dispatch<SetStateAction<ReactionLevel[L][T]>>,
): Subscription | [Observable<ReactionLevel[L][T]>, SubscribeFunction<ReactionLevel[L][T]>] {
	const observable = ReactiveStore.instance().onLevel(level).getObservable(observableName)

	if (dispatcher) {
		return observable.subscribe(value => dispatcher(value))
	}

	return [observable, observable.subscribe.bind(observable)]
}
