import fetch from 'node-fetch'
import { ApiQuery, ApiQueryParams } from './query';
import { QueryMatch } from './result';

export class NpmRegistryApi {
  constructor(readonly config:{
    url: string
  }){}

  async query(queryParams:ApiQuery){
    const q = new ApiQueryParams(queryParams);
    const url = [this.config.url, '-/v1/search?', q.toString()].join('')
    const response = await fetch(url)
    const result:{
      objects: QueryMatch[]
    } = await response.json()
    return result.objects
  }

  async exists(packageName:string){
    const result = await this.query({
      text: packageName
    })
    if(result.length === 0){
      return false
    }
    return result[0].package.name === packageName
  }

  async lookup(...packageNames:string[]){
    const acc:string[] = []
    return packageNames.reduce(async (acc, packageName) => {
      const resolved = await acc;
      const typesPackage = `@types/${packageName}`
      const typesPackageExists = await this.exists(typesPackage)
      if(!typesPackageExists){
        return resolved
      }
      return [...resolved, typesPackage]
    }, Promise.resolve(acc))
  }

}
