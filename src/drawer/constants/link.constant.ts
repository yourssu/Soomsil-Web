export const REGISTER_URL = {
  webpageUrl: 'https://',
  googlePlayUrl: 'https://play.google.com/',
  appStoreUrl: 'https://www.apple.com/',
  githubUrl: 'https://github.com/',
};

export const LINK = [
  {
    name: 'webpageUrl',
    title: '웹 페이지 링크',
  },
  {
    name: 'googlePlayUrl',
    title: 'Google Play 링크',
  },
  {
    name: 'appStoreUrl',
    title: 'App Store 링크',
  },
  {
    name: 'githubUrl',
    title: 'GitHub 링크',
  },
] as const;

export const LINK_NAMES = LINK.map((link) => link.name);
