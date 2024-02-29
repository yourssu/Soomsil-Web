import axios from 'axios';

export const searchClient = axios.create({
  // CORS 오류 해결이 아직 안되어서 임의로 vite에서 proxy 설정하여 태스트중입니다.
  // 추후 백엔드 문제 해결 후, 수정 예정
  baseURL: '/api',
});
