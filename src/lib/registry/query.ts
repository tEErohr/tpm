import * as qs from 'querystring'

export interface ApiQuery {
  text: string
  size?: number
  from?: number
  quality?: number
  popularity?: number
  maintenance?: number
}

export type ApiQueryProperty = keyof ApiQuery

export class ApiQueryParams extends Map<ApiQueryProperty, ApiQuery[ApiQueryProperty]> {
  constructor(query:ApiQuery){
    super(Object.entries(query) as any)
  }

  toObject(){
    const entries = Array.from(this.entries()).map(([key, value]) => ({[key]: value}))
    return Object.assign({}, ...entries) as ApiQuery
  }

  toString(){
    const q = qs.stringify(this.toObject())
    return q
  }
}
