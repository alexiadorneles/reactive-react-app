export interface ReactiveKeyToData {
	CurrentReading: string
	SomethingElse: { key: string; value: boolean }
}

export type ReactiveKeys = keyof ReactiveKeyToData
export type ReactiveData = ReactiveKeyToData[keyof ReactiveKeyToData]
