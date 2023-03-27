import { sendEvent } from "./index";
import { Category } from "./types";


export function copyToClipboardAction(label: string) {
  sendEvent({
    category: Category.COPY,
    action: `copy_to_clipboard`,
    label
  });
}
