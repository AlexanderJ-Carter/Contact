/**
 * 主入口 - 应用引导与事件委托
 */

import { $, SELECTORS } from './dom.js';
import { CONFIG } from './config.js';
import { copyToClipboard } from './clipboard.js';
import { enterSite, setVerified, initVerification } from './verification.js';
import { bindEasterEgg } from './easter-egg.js';

// Turnstile 全局回调
window.onTurnstileSuccess = setVerified;

function handleCopyableClick(e, el) {
    const value = el.dataset.value;
    if (el.dataset.copyable !== undefined && value) {
        e.preventDefault();
        copyToClipboard(value);
    }
}

function initEventDelegation() {
    document.addEventListener('click', (e) => {
        const action = e.target.closest('[data-action]')?.dataset.action;
        if (!action) return;

        if (action === 'verification:enter') {
            enterSite();
        }
    });

    // 复制逻辑
    document.addEventListener('click', (e) => {
        const el = e.target.closest(SELECTORS.copyableItems);
        if (el) handleCopyableClick(e, el);
    });
}

function initAvatarFallback() {
    const img = $(SELECTORS.avatarImg);
    if (!img) return;

    img.addEventListener('error', function () {
        this.style.display = 'none';
        this.nextElementSibling?.classList.remove('hidden');
    });
}

function initContactTagline() {
    const el = document.getElementById('contact-tagline');
    if (el && CONFIG.contactTagline) el.textContent = CONFIG.contactTagline;
}

function bootstrap() {
    initVerification();
    initContactTagline();
    initEventDelegation();
    bindEasterEgg();
    initAvatarFallback();
}

document.addEventListener('DOMContentLoaded', bootstrap);
