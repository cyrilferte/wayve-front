import { Injectable, Injector} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { AuthService } from './services/auth.service';



@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(  private route: ActivatedRoute,
  private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    request = request.clone({
      setHeaders: {
        'googleAccessToken': 'token',
        'Content-Type': 'application/json'
      }
    });

    return next.handle(request).do(event => {
      if (event instanceof HttpErrorResponse) {
        console.log(event)
            if (event['status'] == 401) {
                  console.log('logout', localStorage, 'nik')

                  localStorage.clear()
                  console.log('logout 2', localStorage)
                  this.router.navigate(['/'])
                   window.location.reload();
                   console.log('logout 3', localStorage)
            }
        }
    }, err => {
      console.log('error', err)
      if (err['status'] == 401) {
            console.log('logout', localStorage, 'nik')

            localStorage.clear()
            console.log('logout 2', localStorage)
            this.router.navigate(['/'])
             window.location.reload();
             console.log('logout 3', localStorage)
      }
    }  )
  }
}
