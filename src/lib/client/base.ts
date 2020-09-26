import { nextTick } from 'process';

interface NpmCommand {
  command: string
  [key: string]: string | string[]
}

export default class ClientBase {

  constructor(){

  }

  async execNpmCommand(command: NpmCommand) {
    await Promise.resolve(nextTick)
    console.log(command)
  }
}
