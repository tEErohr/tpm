export interface MatchingPackage {
  name: string
  scope: string
  version: string
  description: string
  date: string
  links: any
  publisher: any
  maintainers: any[]
}

export interface MatchingScore {
  final: number
  detail: {
    quality: number
    popularity: number
    maintenance: number
  }
}

export interface QueryMatch {
  package: MatchingPackage
  score: MatchingScore
  flags: any
  searchScore: BigInt
}
