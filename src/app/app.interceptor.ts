import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from './../environments/environment'
@Injectable()
export class AppInterceptor implements HttpInterceptor{
    apiUrl = environment.firebaseConfig.databaseURL;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!req.url.includes('http')){
            req = req.clone({url: `${this.apiUrl}${req.url}`});
        }
        return next.handle(req);
    }
}
export const AppInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
}