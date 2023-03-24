import { CONFIG } from '@src/const/meta'
const {url, social} = CONFIG

export const mainMenu = [
  { id: 0, title: 'Get RPC', url: '#rpc'},
  { id: 1, title: 'FAQ', url: '#faq'},
  { id: 2, title: 'Forum', url: social.forum.url, target: '_blank' }
]

export const footerMenu = [
  {id: 1, title: 'Terms', url: '/terms', target: "_parent"},
  {id: 3, title: social.discord.label, url: social.discord.url, target: '_blank'},
  {id: 4, title: social.twitter.label, url: social.twitter.url, target: '_blank'},
]

