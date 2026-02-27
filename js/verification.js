/**
 * 人机验证 - Turnstile 与进入流程
 * 本地预览（localhost / file）时自动跳过验证
 */

import { $ } from './dom.js';
import { SELECTORS } from './dom.js';
import { initTypewriter } from './typewriter.js';
import { isLocalPreview } from './config.js';

let isVerified = false;

export function getVerified() {
  return isVerified;
}

export function setVerified() {
  isVerified = true;
  const btn = $(SELECTORS.continueBtn);
  if (btn) btn.classList.add('enabled');
}

/** 进入主内容区（隐藏验证遮罩、显示主内容、启动打字机） */
function showMainContent() {
  const overlay = $(SELECTORS.verificationOverlay);
  const main = $(SELECTORS.mainContent);
  if (!overlay || !main) return;

  overlay.style.display = 'none';
  main.classList.add('verified');
  initTypewriter();
}

/**
 * 初始化验证流程：本地预览则直接进入主内容，否则显示验证遮罩
 */
export function initVerification() {
  if (isLocalPreview()) {
    isVerified = true;
    showMainContent();
    return;
  }
  // 生产环境：保持验证遮罩显示，由 Turnstile 回调后用户点击「进入」再调用 enterSite()
}

export function enterSite() {
  if (!isVerified) return;
  const overlay = $(SELECTORS.verificationOverlay);
  const main = $(SELECTORS.mainContent);
  if (!overlay || !main) return;

  overlay.style.opacity = '0';
  overlay.style.transition = 'opacity 0.4s';
  overlay.addEventListener(
    'transitionend',
    () => {
      overlay.style.display = 'none';
      main.classList.add('verified');
      initTypewriter();
    },
    { once: true }
  );
}
