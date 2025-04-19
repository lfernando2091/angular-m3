import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import {AuthService} from "auth";
import { map, take } from 'rxjs/operators';
import {Observable, pipe, UnaryFunction} from "rxjs";

export type AuthPipeGenerator = () => AuthPipe;
export type AuthPipe = UnaryFunction<Observable<boolean>, Observable<boolean | string | unknown[]>>;
export const loggedIn = map((isAuth: boolean) => isAuth);

@Injectable()
export class AppGuardService {

  canActivate(route: ActivatedRouteSnapshot, authService: AuthService, router: Router): Observable<boolean | UrlTree> {
    const authPipeFactory = route.data["authGuardPipe"] as AuthPipeGenerator || (() => loggedIn);
    return authService.isAuthenticated.pipe(
      take(1),
      authPipeFactory(),
      map((can) => {
        if (typeof can === 'boolean') {
          return can;
        } else if (Array.isArray(can)) {
          return router.createUrlTree(can);
        }
        return router.parseUrl(can);
      })
    )
  }
}

export const checkAccess: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(AppGuardService).canActivate(route, inject(AuthService), inject(Router));
}

export const redirectUnauthorizedTo = (redirect: string | unknown[]): AuthPipe =>
  pipe(loggedIn, map(loggedIns => loggedIns || redirect))

export const redirectLoggedInTo = (redirect: string | unknown[]): AuthPipe =>
  pipe(loggedIn, map((loggedIns) => loggedIns && redirect || true));

export const canActivate = (pipes: AuthPipeGenerator) => ({
  canActivate: [ checkAccess ], data: { authGuardPipe: pipes }
});
