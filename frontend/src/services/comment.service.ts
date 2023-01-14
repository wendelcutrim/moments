import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { enviroment } from "src/environments/enviroments";
import Comment from "src/app/interface/Comment";
import Response from "src/app/interface/Response";

@Injectable({
    providedIn: "root",
})
export class CommentService {
    private baseApiUrl = enviroment.API_BASE_URL;
    private apiUrl = `${this.baseApiUrl}/api/moments`;

    constructor(private http: HttpClient) {}

    createComment(data: Comment): Observable<Response<Comment>> {
        return this.http.post<Response<Comment>>(
            `${this.apiUrl}/${data.momentId}/comments`,
            data
        );
    }
}
