import { NotificationItem } from '@engagespot/core';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

export type DateFormat = (
  dateString: string,
  dateFns: typeof dateFunctions
) => string;

export const defaultDateFormatter = (dateString: string) => {
  return formatDistance(new Date(dateString), new Date(), {
    addSuffix: true,
  });
};

export const dateFunctions = {
  format,
  formatDistance,
  formatRelative,
  subDays,
};

export function dateTransformer(dateFormatter: DateFormat) {
  return (notificationItem: NotificationItem) => {
    return {
      ...notificationItem,
      created: dateFormatter(notificationItem?.createdAt ?? '', dateFunctions),
    };
  };
}
