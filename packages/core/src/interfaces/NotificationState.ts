export interface ChangeNotificationRequest {
  state: string;
  data?: {
     [x: string]: string;
  };
}
