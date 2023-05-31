interface agencias {
  id: number,
  name: string,
  status: number,
  has_pickup: number,
  observation: string,
  phones: string,
  faxes: string,
  emails: string,
  person_type: string,
  exchange_rate: number,
  bill_to_appear: number,
}

export interface RespuestaAgencia{
  data: agencias[],
  
}
