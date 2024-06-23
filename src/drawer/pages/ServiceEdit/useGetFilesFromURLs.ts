import { useSuspenseQuery } from '@tanstack/react-query';

const parseUrlsToFiles = async (urls: string | string[] | undefined) => {
  if (!urls) return [];
  if (!Array.isArray(urls)) urls = [urls];

  const files = await Promise.all(
    urls.map(async (url) => {
      const s3name = url.split('/').pop();
      const response = await fetch(url, {
        mode: 'cors',
        credentials: 'include',
      });
      const blob = await response.blob();
      return new File([blob], `${s3name}.png`, { type: 'image/png' });
    })
  );

  return files;
};

export const useGetFilesFromURLs = (urls: string | string[] | undefined) => {
  return useSuspenseQuery({
    queryKey: ['urlToFile', ...(urls ?? [])],
    queryFn: () => parseUrlsToFiles(urls),
  });
};
