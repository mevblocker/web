
import { CONFIG } from '@src/const/meta'
import { BigButton } from '@src/components/Button'
import { RWebShare } from "react-web-share";

export function ShareButton() {

  return (
    <RWebShare
        data={{
          text: CONFIG.description,
          url: CONFIG.url.root,
          title: CONFIG.title,
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <BigButton fontSize={2.2} label='Share MEV Blocker 🌞' />
      </RWebShare>
  )
}