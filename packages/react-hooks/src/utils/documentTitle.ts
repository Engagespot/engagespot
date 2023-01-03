let id: number | null = null;
export const defaultTitleUpdateText = '(1) New Notification Received';

export function updateDocumentTitle(newTitle: string) {
  if (id) return;
  const title = document.title;
  document.title = newTitle;
  id = setTimeout(() => {
    document.title = title;
    id = null;
  }, 5000);
}
