export type Query = {
  query: string;
  count: number;
};

export interface RealTimeKeywordData {
  basedTime: string;
  querys: Query[];
}
