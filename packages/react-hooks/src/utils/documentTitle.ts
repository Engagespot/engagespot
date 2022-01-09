export const defaultTitleUpdateText = '(1) New Notification Received';

export function updateDocumentTitle(newTitle: string) {
  const title = document.title;
  document.title = newTitle;
  setTimeout(() => {
    document.title = title;
  }, 5000);
}
