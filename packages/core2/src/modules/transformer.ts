import { fromNow } from '../utils/date';
import { Notification } from './notificationFactory';

type TransformNotificationParams<T> = {
  notification: Notification<T>;
  helpers: {
    fromNow: (date: Date | string) => string;
  };
};

export type TransformNotificationFn<T, U> = (
  params: TransformNotificationParams<T>
) => U;

export const defaultTransformFn: any = <T>(
  params: TransformNotificationParams<T>
) => params.notification;

export function createTransformer<T, U>(
  transformFn: TransformNotificationFn<T, U> = defaultTransformFn
) {
  return function transform(
    notification: Parameters<typeof transformFn>[0]['notification']
  ) {
    return transformFn({
      notification,
      helpers: {
        fromNow,
      },
    });
  };
}

