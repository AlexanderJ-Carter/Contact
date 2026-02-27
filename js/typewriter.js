/**
 * 打字机效果
 */

import { $ } from './dom.js';
import { SELECTORS } from './dom.js';
import { CONFIG } from './config.js';

export function initTypewriter() {
  const el = $(SELECTORS.typewriter);
  if (!el) return;

  const texts = CONFIG.typewriterTexts;
  let i = 0;
  let j = 0;
  let deleting = false;

  function tick() {
    const cur = texts[i];
    el.textContent = cur.substring(0, j);

    if (deleting) {
      j--;
      setTimeout(tick, 40);
    } else if (j < cur.length) {
      j++;
      setTimeout(tick, 80);
    } else {
      deleting = true;
      setTimeout(tick, 1500);
    }

    if (deleting && j === 0) {
      deleting = false;
      i = (i + 1) % texts.length;
      setTimeout(tick, 400);
    }
  }

  setTimeout(tick, 600);
}
