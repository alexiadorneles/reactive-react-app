import Axios from 'axios-observable'
import { AxiosObservable } from 'axios-observable/dist/axios-observable.interface'
import { PlainObject } from '../@types/PlainObject'

export class HttpService {
	http: Axios

	constructor(private baseURL: string) {
		this.http = Axios.create({})
	}

	get(url: string): AxiosObservable<PlainObject> {
		return this.http.get(`${this.baseURL}${url}`)
	}

	post(url: string, data: PlainObject): AxiosObservable<PlainObject> {
		return this.http.post(`${this.baseURL}${url}`, data)
	}

	put(url: string): AxiosObservable<PlainObject> {
		return this.http.get(`${this.baseURL}${url}`)
	}

	delete(url: string): AxiosObservable<PlainObject> {
		return this.http.delete(`${this.baseURL}${url}`)
	}
}
