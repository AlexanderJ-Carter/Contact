/**
 * 彩蛋 - Konami Code
 */

import { showToast } from './toast.js';

const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA',
];

let buffer = [];

export function bindEasterEgg() {
  document.addEventListener('keydown', (e) => {
    buffer = [...buffer.slice(-KONAMI.length + 1), e.code];

    if (buffer.join('') === KONAMI.join('')) {
      showToast('🎉 发现彩蛋！');
      document.body.style.filter = 'hue-rotate(180deg)';
      setTimeout(() => {
        document.body.style.filter = '';
      }, 3000);
      buffer = [];
    }
  });
}
