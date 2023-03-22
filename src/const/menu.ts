import { siteConfig } from '@src/const/meta'
const {url, social} = siteConfig

export const mainMenu = [
  { id: 0, title: 'RPC', url: url.programOverview },
  { id: 1, title: 'FAQ', url: url.faq},
  { id: 2, title: 'Support', url: url.apply }
  // { id: 3, title: 'Grants tracker', url: url.airtableTracker, target: '_blank'},
]

export const footerMenu = [
  {id: 0, title: 'CoW.fi', url: url.cowLanding, target: "_blank"},
  {id: 1, title: 'Terms', url: '/terms', target: "_parent"},
  {id: 2, title: social.forum.label, url: social.forum.url, target: '_blank'},
  {id: 3, title: social.discord.label, url: social.discord.url, target: '_blank'},
  {id: 4, title: social.twitter.label, url: social.twitter.url, target: '_blank'},
]

