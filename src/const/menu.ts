import { CONFIG } from '@src/const/meta'
import { openExternalLinkClickedElement, scrollToAction, scrollToClickedElement } from '@src/lib/analytics/events'
const {social} = CONFIG

export const mainMenu = [
  { id: 0, title: 'Get protected', url: `${CONFIG.url.root}/${CONFIG.url.rpc}`, onClick: scrollToClickedElement },
  { id: 1, title: 'FAQ', url: `${CONFIG.url.root}/${CONFIG.url.faq}`, onClick: scrollToClickedElement },
]

export const footerMenu = [
  {id: 0, title: 'Documentation', url: `${CONFIG.url.root}/${CONFIG.url.docs}` },
  {id: 1, title: 'Questions & Support', url: social.telegram.url, target: '_blank', onClick: openExternalLinkClickedElement },
]

