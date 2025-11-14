

import { BigButton } from '@src/components/Button'
import { shareLink as sendAnalytics } from '@src/lib/analytics/events';
import { RWebShare } from "react-web-share";



interface ShareButtonProps {
  label: string;
  shareText: string;
  shareUrl: string;
  shareTitle: string;
}

export function ShareButton({ label, shareText, shareUrl, shareTitle }: ShareButtonProps)  {

  return (
    <RWebShare
        data={{
          text: shareText,
          url: shareUrl,
          title: shareTitle
        }}
        onClick={() => sendAnalytics(shareUrl)}
      >
        <BigButton fontSize={2.2} label={label} />
      </RWebShare>
  )
}