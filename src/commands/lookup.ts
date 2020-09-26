import registryUrl from 'registry-url'
import {Command, flags} from '@oclif/command'
import { NpmRegistryApi } from '../lib/registry/api'

export default class Lookup extends Command {

  static strict = false

  static description = 'search for @types for package(s)'

  static examples = [
    `$ tpm lookup [packageNames...]`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    registry: flags.string({
      char: 'r',
      default: () => registryUrl(),
    })
  }

  static args = []

  async run() {
    const {argv: packageNames, args, flags} = this.parse(Lookup)

    const api = new NpmRegistryApi({
      url: flags.registry
    })

    try{
      const results = await api.lookup(...packageNames);
      console.log(...results)
    }
    catch(err){
      console.log('Failed to fetch', err);
    }
  }
}
