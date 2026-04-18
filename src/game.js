/**
 * @fileoverview Центральный модуль управления игровой сессией.
 * @module Game
 */
class Game {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {Object} settings
   */
  constructor(canvas, settings) {
    /** @type {string} */
    this.state = 'idle';
    /** @type {number} */
    this.speed = 1.0;
    /** @type {number} */
    this.score = 0;
  }
  /** @returns {void} */
  start() {}
  /** @returns {void} */
  pause() {}
  /** @returns {void} */
  reset() {}
  /** @returns {boolean} */
  gameOver() {}
}
