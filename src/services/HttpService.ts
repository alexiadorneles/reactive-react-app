import Axios from "axios-observable";
import { AxiosObservable } from "axios-observable/dist/axios-observable.interface";

export class HttpService {
  http: Axios;
  constructor(private baseURL: string) {
    this.http = Axios.create({});
  }

  get(url: string): AxiosObservable<any> {
    return this.http.get(`${this.baseURL}${url}`);
  }

  post(url: string, data: any): AxiosObservable<any> {
    return this.http.post(`${this.baseURL}${url}`, data);
  }

  put(url: string): AxiosObservable<any> {
    return this.http.get(`${this.baseURL}${url}`);
  }

  delete(url: string): AxiosObservable<any> {
    return this.http.delete(`${this.baseURL}${url}`);
  }
}
