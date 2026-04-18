/**
 * @fileoverview Модуль персонажа-динозавра.
 * @module Dino
 */
class Dino {
  /**
   * @param {number} jumpHeight - Высота прыжка в пикселях.
   */
  constructor(jumpHeight) {
    /** @type {number} */
    this.jumpHeight = jumpHeight;
  }
  /** @param {number} dt @returns {void} */
  update(dt) {}
  /** @returns {void} */
  jump() {}
  /** @returns {DOMRect} */
  getBounds() {}
}
