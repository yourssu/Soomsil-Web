export interface AgreeTermData {
  required: boolean;
  detailTermContent: React.ReactNode;
}

export type AgreeTermNameType =
  | '서비스 이용약관'
  | '커뮤니티 이용규칙'
  | '개인정보 수집 및 이용 동의'
  | '개인정보 처리방침';
