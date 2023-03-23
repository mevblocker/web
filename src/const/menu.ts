import { CONFIG } from '@src/const/meta'
const {url, social} = CONFIG

export const mainMenu = [
  { id: 0, title: 'RPC', url: '#'},
  { id: 1, title: 'FAQ', url: '#'},
  { id: 2, title: 'Support', url: '#' }
]

export const footerMenu = [
  {id: 1, title: 'Terms', url: '/terms', target: "_parent"},
  {id: 3, title: social.discord.label, url: social.discord.url, target: '_blank'},
  {id: 4, title: social.twitter.label, url: social.twitter.url, target: '_blank'},
]

