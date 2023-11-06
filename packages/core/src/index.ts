import Engagespot from './engagespot';
export type { Options } from './options';
export type { NotificationItem } from './interfaces/NotificationItem';
export type { default as Notification } from './Notification';
export { PermissionState } from './PermissionState';
export type {
  Category,
  UserPreference,
  SetPreference,
  EngagespotChannel,
} from './apiRequestv2/interfaces/user-preference.interface';
export type { ChangeNotificationRequest } from './interfaces/NotificationState'
export default Engagespot;
