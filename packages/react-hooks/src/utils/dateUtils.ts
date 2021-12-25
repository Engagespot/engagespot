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

export function dateTransformer(dateFormatter: DateFormat) {
  return (notificationItem: NotificationItem) => {
    return {
      ...notificationItem,
      createdAt: dateFormatter(
        notificationItem?.createdAt ?? '',
        dateFunctions
      ),
    };
  };
}

export const dateFunctions = {
  format,
  formatDistance,
  formatRelative,
  subDays,
};
