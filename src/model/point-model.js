import { getRandomPoint } from '../constants/point.js';

const POINTS = 4;

export default class PointModel {
  #point = Array.from({length: POINTS}, getRandomPoint);

  get points(){
    return this.#point;
  }
}

