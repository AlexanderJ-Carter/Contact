/**
 * DOM 引用 - 集中管理选择器，便于维护
 */

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export const SELECTORS = {
  verificationOverlay: '#verificationOverlay',
  continueBtn: '#continueBtn',
  mainContent: '#mainContent',
  toast: '#toast',
  wechatModal: '#wechatModal',
  typewriter: '#typewriter',
  avatarImg: '.avatar-img',
  copyableItems: '[data-copyable]',
};
