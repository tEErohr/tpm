interface ResultItem {
  name: string
}

interface SearchNpmRegistry {
  text(query:string):this
  size(maxSize:number):this
  from(offset:number):this
  quality(query:number):this
  popularity(query:number):this
  maintenance(query:number):this
  search<R extends ResultItem=ResultItem>():Promise<Array<R>>
}

export default function searchNpmRegistry():SearchNpmRegistry
