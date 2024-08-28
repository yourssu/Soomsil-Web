export const extractOrigin = (url: string): string => {
  try {
    const { origin } = new URL(url);
    return origin;
  } catch (error) {
    return url;
  }
};
