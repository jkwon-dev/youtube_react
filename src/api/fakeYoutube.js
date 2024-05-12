import axios from "axios";

export default class FakeYoutube {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.videoId })));
  }

  async #mostPopular() {
    return axios.get(`/videos/search.json`).then((res) => res.data.items);
  }
}
