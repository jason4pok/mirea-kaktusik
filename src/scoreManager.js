/**
 * @fileoverview Модуль подсчёта очков и работы с рекордом.
 * @module ScoreManager
 */
class ScoreManager {
  /**
   * @param {Object} storage - Сервис доступа к хранилищу.
   */
  constructor(storage) {
    /** @type {number} */
    this.currentScore = 0;
    /** @type {number} */
    this.bestScore = 0;
  }
  /** @param {number} points @returns {void} */
  addPoints(points) {}
  /** @returns {void} */
  resetCurrent() {}
  /** @returns {number} */
  loadBest() {}
  /** @returns {void} */
  saveBest() {}
}
