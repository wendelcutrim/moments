import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { enviroment } from "src/environments/enviroments";
import Moment from "src/app/interface/Moment";
import Response from "src/app/interface/Response";

@Injectable({
    providedIn: "root",
})
export class MomentService {
    private baseApiUrl = enviroment.API_BASE_URL;
    private apiUrl = `${this.baseApiUrl}/api/moments`;

    constructor(private http: HttpClient) {}

    createMoment(formData: FormData): Observable<FormData> {
        return this.http.post<FormData>(this.apiUrl, formData);
    }

    getMoments(): Observable<Response<Moment[]>> {
        return this.http.get<Response<Moment[]>>(this.apiUrl);
    }

    getMoment(id: number): Observable<Response<Moment>> {
        return this.http.get<Response<Moment>>(`${this.apiUrl}/${id}`);
    }

    deleteMoment(id: number) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
