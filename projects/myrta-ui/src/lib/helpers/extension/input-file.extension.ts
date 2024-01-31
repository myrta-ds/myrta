const bytesInOneMb = 1048576;

export function toBytes(mb: number): number {
  return mb * bytesInOneMb;
}

export function formatBytes(bytes?: number, decimals = 2): string {
  if (!bytes) {
    return '';
  }

  if (bytes === 0) {
    return '0 Байт';
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Байт', 'Kбайт', 'Мбайт', 'Гбайт', 'Тбайт', 'Pбайт', 'Eбайт', 'Zбайт', 'Yбайт'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function convertBase64ToFile(base64String: string, imageName: string, imageType: string) {
  const byteString = atob(base64String.split(',')[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new File([ab], imageName, { type: imageType });
}

export async function getBase64FromUrl (url: string) {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    }
  });
}
