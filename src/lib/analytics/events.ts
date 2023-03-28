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
