import { ReactionLevel } from '@types'
import { Subject } from 'rxjs'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const observables: any = {}

export class ReactiveStore<L extends keyof ReactionLevel> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private static _instance: ReactiveStore<any>

	public static instance<L extends keyof ReactionLevel>(): ReactiveStore<L> {
		return this._instance || (this._instance = new this())
	}

	// level here is needed to reinforce type K in return
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public onLevel<K extends keyof ReactionLevel>(level: K): ReactiveStore<K> {
		return this as ReactiveStore<K>
	}

	public save<T extends keyof ReactionLevel[L], R extends Subject<ReactionLevel[L][T]>>(
		name: T,
		observable: R,
	): ReactiveStore<L> {
		observables[name] = observable
		return this
	}

	public getObservable<T extends keyof ReactionLevel[L], R extends Subject<ReactionLevel[L][T]>>(
		name: T,
	): R {
		return observables[name].asObservable() as R
	}

	public getSubject<T extends keyof ReactionLevel[L], R extends Subject<ReactionLevel[L][T]>>(
		name: T,
	): R {
		return observables[name] as R
	}
}
