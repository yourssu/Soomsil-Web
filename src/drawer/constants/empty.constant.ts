export const NOT_FOUND_TEXT: Record<
  'SEARCH' | 'STAR' | 'MYDRAWER' | 'PROVIDER',
  { boldText: string; subText: string }
> = {
  SEARCH: {
    boldText: '해당 검색어에 대한 검색결과가 없습니다.',
    subText: '더 간단한 단어로 검색하거나 직접 서비스를 등록해보세요.',
  },
  STAR: {
    boldText: '즐겨찾기한 서비스가 없습니다.',
    subText: '내 취향의 서비스를 추가해보세요.',
  },
  MYDRAWER: {
    boldText: '내가 등록한 서비스가 없습니다.',
    subText: '새로운 서비스를 등록해보세요.',
  },
  PROVIDER: {
    boldText: '아직 해당 카테고리에 업로드한 서비스가 없습니다.',
    subText: '',
  },
};
