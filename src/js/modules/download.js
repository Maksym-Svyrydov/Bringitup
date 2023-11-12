export default class DownLoad {
  constructor(triggers) {
    this.btn = document.querySelectorAll(triggers);
    this.path = 'assets/img/mainbg.jpg';
  }
  downloadItem(path) {
    const elem = document.createElement('a');
    elem.setAttribute('href', path);
    elem.setAttribute('download', 'nice_picture');
    elem.style.display = 'none';
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }

  init() {
    this.btn.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.downloadItem(this.path);
      });
    });
  }
}
