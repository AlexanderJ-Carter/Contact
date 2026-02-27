/**
 * 剪贴板模块 - 复制与 Fallback
 */

import { showToast } from './toast.js';

export async function copyToClipboard(text, successMessage = '已复制到剪贴板') {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
    return true;
  } catch {
    return fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();

  try {
    document.execCommand('copy');
    showToast(successMessage);
    return true;
  } catch {
    showToast('复制失败，请手动复制');
    return false;
  } finally {
    document.body.removeChild(ta);
  }
}
