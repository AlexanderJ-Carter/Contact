/**
 * Toast 通知 - 轻量反馈
 */

import { $ } from './dom.js';
import { SELECTORS } from './dom.js';

const DURATION = 2500;

let hideTimer = null;

export function showToast(message) {
  const toast = $(SELECTORS.toast);
  const span = toast?.querySelector('span');
  if (!toast || !span) return;

  span.textContent = message;
  toast.classList.add('show');

  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    toast.classList.remove('show');
    hideTimer = null;
  }, DURATION);
}
