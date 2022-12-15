
import FilterView from './view/filters-view.js';
import TripPresenter from './presenter/presenter.js';
import {render} from './render.js';

const siteMainElement = document.querySelector('.trip-events');
const siteHeaderElement = document.querySelector('.trip-controls__filters');

const tripPresenter = new TripPresenter({tripContainer: siteMainElement});

render(new FilterView(), siteHeaderElement);

tripPresenter.init();
