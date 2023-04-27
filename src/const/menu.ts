import { CONFIG } from '@src/const/meta'
import { openExternalLinkClickedElement, scrollToAction, scrollToClickedElement } from '@src/lib/analytics/events'
const {social} = CONFIG

export const mainMenu = [
  { id: 0, title: 'Get protected', url: `/${CONFIG.url.rpc}`, onClick: scrollToClickedElement },
  { id: 1, title: 'FAQ', url: `/${CONFIG.url.faq}`, onClick: scrollToClickedElement },
]

export const footerMenu = [
  {
    label: 'Support', links: [      
      {id: 0, title: 'Documentation', url: `/${CONFIG.url.docs}` },
      {id: 1, title: 'Questions & Support', url: social.telegram.url, target: '_blank', onClick: openExternalLinkClickedElement },
    ]
  },
  {
    label: 'About', links: [      
      {id: 1, title: 'Privacy Policy', url: 'https://swap.cow.fi/#/privacy-policy', type: 'external', target: '_blank' },
      {id: 2, title: 'Cookie Policy', url: 'https://swap.cow.fi/#/cookie-policy', type: 'external', target: '_blank' },
    ]
  },
]

