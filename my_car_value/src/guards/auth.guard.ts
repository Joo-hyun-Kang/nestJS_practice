import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    console.log(request.session);
    // 가드에서 반환값에 null이나 undefined면 403으로 권한 없다고 보내줌
    return request.session.userId;
  }
}
