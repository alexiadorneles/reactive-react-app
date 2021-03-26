import { Subject } from 'rxjs'
import { ReactionLevel } from '../@types'
import { ReactiveStore } from '../reactive'

export function useSubject<L extends keyof ReactionLevel, T extends keyof ReactionLevel[L]>(
	level: L,
	observableName: T,
): Subject<ReactionLevel[L][T]> {
	return ReactiveStore.instance().onLevel(level).getSubject(observableName)
}
