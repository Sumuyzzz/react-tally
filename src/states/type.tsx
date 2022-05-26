type Tags = {
  id: number,
  name:string,
}
type RecordItem = {
  selectTagIds: number[];
  remark: string;
  category: '+' | '-';
  amount: string;
  createDate: string;
  remarkDate: string;
};



export type {Tags ,RecordItem}