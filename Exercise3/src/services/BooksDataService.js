import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/books");
  }

  get(id) {
    return http.get(`/books/${id}`);
  }

  create(data) {
    return http.post("/books", data);
  }

  update(id, data) {
    return http.put(`/books/${id}`, data);
  }

  delete(id) {
    return http.delete(`/books/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/books?title=${title}`);
  }
}

export default new TutorialDataService();
