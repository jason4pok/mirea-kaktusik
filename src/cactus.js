/**
 * @fileoverview Модуль кактуса — основного препятствия.
 * @module Cactus
 */
class Cactus {
  /**
   * @param {number} initialLevel - Начальный уровень высоты.
   */
  constructor(initialLevel) {
    /** @type {number} */
    this.level = initialLevel;
  }
  /** @param {number} level @returns {void} */
  setLevel(level) {}
  /** @param {number} dt @returns {void} */
  update(dt) {}
  /** @returns {DOMRect} */
  getBounds() {}
}
