export interface ValveModel {
  id: string;
  name: string;
  type?: string;
  mode?: string;
  position?: string;
  last_purge_date?: string;
  last_error?:string;
  clients?:[string];
  actions?:any[];
}
