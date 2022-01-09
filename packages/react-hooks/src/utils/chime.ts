export const defaultChimeSrc =
  'https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3';

export async function playSound(src: string) {
  let audio = new Audio(src);
  audio.play().catch(err => {});
}
