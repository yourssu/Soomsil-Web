import { ErrorCause, FallbackContent } from '@/components/Fallback/Fallback.type';

export const FALLBACK_TEXT: Record<ErrorCause, FallbackContent> = {
  SERVER: {
    boldText: '서버 에러가 발생했어요.',
    subText: '사용에 불편을 드려 죄송합니다. 다시 한 번 시도해주세요.',
    buttonText: '새로고침하기',
  },
  CLIENT: {
    boldText: '존재하지 않는 페이지입니다.',
    buttonText: '메인으로 이동하기',
  },
};
