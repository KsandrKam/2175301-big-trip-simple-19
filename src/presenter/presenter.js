import BoardView from '../view/board-view.js';
import SortView from '../view/sort-view.js';
import TaskListView from '../view/task-list-view.js';
import TaskView from '../view/point-view.js';
import TaskEditView from '../view/task-edit-view.js';
//import FormEditView from '../view/form-edit-view.js';
import FilterView from '../view/filters-view.js';
//import LoadMoreButtonView from '../view/load-more-button-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  taskListComponent = new TaskListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new TaskEditView(), this.taskListComponent.getElement());
    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.taskListComponent, this.boardComponent.getElement());
    render(new BoardView(), this.taskListComponent.getElement());
    //render(new FormEditView(), this.taskListComponent.getElement());
    render(new FilterView(), this.taskListComponent.getElement());


    for (let i = 0; i < 3; i++) {
      render(new TaskView(), this.taskListComponent.getElement());
    }

    //render(new LoadMoreButtonView(), this.boardComponent.getElement());
  }
}
