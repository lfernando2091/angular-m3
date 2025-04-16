import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import {AuthService} from "auth";

@Injectable()
export class AppGuardService {

  async canActivate(authService: AuthService, router: Router): Promise<boolean> {
    if (authService.isAuthenticated) {
      return Promise.resolve(true);
    }
    return router.navigate([authService.loginPageUrl]);
  }
}

export const hasAccess: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Promise<boolean> => {
  return inject(AppGuardService).canActivate(inject(AuthService), inject(Router));
}
