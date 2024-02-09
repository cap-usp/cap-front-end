import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { map, take } from 'rxjs';

export const AdminGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).usuarioLogado.pipe(take(1), map(usuarioLogado => {
    if(usuarioLogado?.role === '[ROLE_ADMIN]'){
      return true;
    }
    return false;
  }));
}