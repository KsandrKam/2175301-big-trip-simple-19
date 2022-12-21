import SortView from '../view/sort-view.js';
import TripEditView from '../view/trip-edit-view.js';
import NewPointView from '../view/create-new-point-view.js';
import TripListView from '../view/trip-list-view.js';
import PointView from '../view/point-view.js';
import {render, RenderPosition} from '../render.js';


const siteMainElement = document.querySelector('.trip-events');
export default class TripPresenter {
  tripComponent = new TripListView();

  constructor({tripContainer, pointsModel}) {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.listPoints = [...this.pointsModel.getPoints()];
    render(new SortView(), siteMainElement);
    render(this.tripComponent, siteMainElement);

    render(new NewPointView(), this.tripComponent.getElement(), RenderPosition.AFTERBEGIN);
    render(new TripEditView(), this.tripComponent.getElement(), RenderPosition.AFTERBEGIN);

    for (let i = 0; i < this.listPoints.length; i++) {
      render(new PointView({point: this.listPoints[i]}), this.tripComponent.getElement());
    }

  }
}
