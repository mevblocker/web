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

export type AddRpcUrlActionType = 'click_to_add_rpc' | 'added_rpc_successfully'| 'rejected_by_user_adding_rpc' | 'timeout_add_rpc' | 'adding_is_taking_too_long' | 'error_add_rpc'
export function addRpcUrlAction(action: AddRpcUrlActionType ) {
  sendEvent({
    category: Category.RPC_URL,
    action: action
  });
}
