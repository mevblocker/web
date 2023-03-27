import { CONFIG } from '@src/const/meta'
const {social} = CONFIG

export const mainMenu = [
  { id: 0, title: 'Get RPC', url: '#rpc'},
  { id: 1, title: 'FAQ', url: '#faq'},
  { id: 2, title: 'Help', url: social.telegram.url, target: '_blank' }
]

export const footerMenu = [
  {id: 0, title: 'Help', url: social.telegram.url, target: '_blank'},
]

