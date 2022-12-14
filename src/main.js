//import FormEditView from './view/form-edit-view.js';
import FilterView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import BoardView from './view/board-view.js';
import TaskView from './view/point-view.js';
import TaskEditView from './view/task-edit-view.js';
import {render} from './render.js';
import BoardPresenter from './presenter/presenter.js';

const siteMainElement = document.querySelector('.page-body__page-main');
const siteHeaderElement = document.querySelector('.page-header');
const boardPresenter = new BoardPresenter({boardContainer: siteMainElement});

//render(new FormEditView(), siteHeaderElement);
render(new FilterView(), siteHeaderElement);
render(new SortView(), siteMainElement);
render(new TaskEditView(), siteMainElement);
render(new BoardView(), siteMainElement);
render(new TaskView(), siteMainElement);


boardPresenter.init();


