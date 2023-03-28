import { MouseEvent } from "react";
import { sendEvent } from "./index";
import { Category } from "./types";

export function copyToClipboardAction(label: string) {
  sendEvent({
    category: Category.COPY_TO_CLIPBOARD,
    action: `copy_to_clipboard`,
    label
  });
}

export function scrollToAction(label: string) {
  sendEvent({
    category: Category.SCROLL_TO,
    action: `scroll_to`,
    label
  });
}

export function openExternalLink(url: string) {
  sendEvent({
    category: Category.EXTERNAL_LINK,
    action: `follow_link`,
    label: url
  });
}

export function shareLink(url: string) {
  sendEvent({
    category: Category.SHARE_LINK,
    action: `share`,
    label: url
  });
}

/**
 * Triggers an analytic event of type scroll_to, with the text of the element that was cliked as the event's label
 * @param event click event
 */
export function scrollToClickedElement(event: MouseEvent<HTMLElement>) {
  const text = event.currentTarget.innerHTML
  scrollToAction(text)
}


/**
 * Triggers an analytic event of type scroll_to, with the text of the element that was cliked as the event's label
 * @param event click event
 */
export function openExternalLinkClickedElement(event: MouseEvent<HTMLAnchorElement>) {
  const href = event.currentTarget.href
  openExternalLink(href)
}


export function expandFaqQuestion(question: string) {
  sendEvent({
    category: Category.FAQ,
    action: `expand_question`,
    label: question
  });
}
