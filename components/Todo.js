
export default class Todo {
  constructor(data, selector) {
    this._data = data;
    this._selector = selector;
  }

  _setEventListeners() {
    const deleteButton = this._element.querySelector(
      ".todo__delete-btn"
    );

    const checkbox = this._element.querySelector(
      ".todo__completed"
    );

    deleteButton.addEventListener("click", () => {
      this._element.remove();
    });

    checkbox.addEventListener("change", () => {
      this._element.classList.toggle("todo_completed");
    });
  }

  getView() {
    const template = document.querySelector(this._selector);

    this._element = template.content
      .querySelector(".todo")
      .cloneNode(true);

    const checkbox = this._element.querySelector(
      ".todo__completed"
    );

    const label = this._element.querySelector(
      ".todo__label"
    );

    this._element.querySelector(".todo__name").textContent =
      this._data.name;

   this._element.querySelector(".todo__date").textContent =
  this._data.date
    ? this._data.date.toLocaleDateString()
    : "";

    checkbox.id = this._data.id;
    label.htmlFor = this._data.id;

    checkbox.checked = Boolean(this._data.completed);

    if (this._data.completed) {
      this._element.classList.add("todo_completed");
    }

    this._setEventListeners();

    return this._element;
  }
}

