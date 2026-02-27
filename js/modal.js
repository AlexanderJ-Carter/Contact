/**
 * Modal 模态框 - 打开/关闭与事件
 */

import { $ } from './dom.js';
import { SELECTORS } from './dom.js';

export function openModal(modalId = SELECTORS.wechatModal) {
  const modal = $(modalId);
  if (!modal) return;

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

export function closeModal(modalId = SELECTORS.wechatModal) {
  const modal = $(modalId);
  if (!modal) return;

  modal.classList.remove('show');
  document.body.style.overflow = '';
}

export function bindModalEvents() {
  const modal = $(SELECTORS.wechatModal);
  if (!modal) return;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}
