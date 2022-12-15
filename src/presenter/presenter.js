import SortView from '../view/sort-view.js';
import TripEditView from '../view/trip-edit-view.js';
import NewPointView from '../view/create-new-point-view.js';
import TripListView from '../view/trip-list-view.js';
import TripPointView from '../view/trip-point-view.js';
import {render} from '../render.js';

const TRIP_POINTS = 3;
const siteMainElement = document.querySelector('.trip-events');
export default class TripPresenter {
  tripComponent = new TripListView();

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(new SortView(), siteMainElement);
    render(this.tripComponent, siteMainElement);
    render(new NewPointView(), this.tripComponent.getElement());
    render(new TripEditView(), this.tripComponent.getElement());

    for (let i = 0; i < TRIP_POINTS; i++) {
      render(new TripPointView(), this.tripComponent.getElement());
    }

  }
}
