import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it 🤔';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  } //end addHandlerRender

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  } //end _generateMarkup
} //end BookmarksView class

export default new BookmarksView();
