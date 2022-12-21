import { getRandomPoint } from '../mock/mock.js';

const POINTS = 4;

export default class PointModel {
  point = Array.from({length: POINTS}, getRandomPoint);

  getPoints(){
    return this.point;
  }
}
