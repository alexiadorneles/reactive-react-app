import { Dispatch, SetStateAction } from 'react'
import { Subscription } from 'rxjs'
import { ReactiveData, ReactiveKeys } from '../@types/Observables'
import { ObservableStore } from '../observables/ObservableStore'

export function useObservable<T extends ReactiveData>(
	observableName: ReactiveKeys,
	dispatcher: Dispatch<SetStateAction<T>>,
): Subscription {
	return ObservableStore.getObservable(observableName).subscribe(value => dispatcher(value as T))
}
