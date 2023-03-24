import { CONFIG } from '@src/const/meta'
const {social} = CONFIG

export const mainMenu = [
  { id: 0, title: 'Get RPC', url: '#rpc'},
  { id: 1, title: 'FAQ', url: '#faq'},
  { id: 2, title: 'Forum', url: social.forum.url, target: '_blank' }
]

export const footerMenu = [
  {id: 0, title: 'Terms', url: '/terms', target: "_parent"},
  {id: 1, title: social.discord.label, url: social.discord.url, target: '_blank'},
  {id: 2, title: social.twitter.label, url: social.twitter.url, target: '_blank'},
  {id: 3, title: social.github.label, url: social.github.url, target: '_blank'},
  {id: 4, title: 'Forum', url: social.forum.url, target: '_blank' }
]

