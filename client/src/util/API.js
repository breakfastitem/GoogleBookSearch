import axios from 'axios';

const routes = {
    searchBooks: function (title) {
        return axios.get(`/api/search/${title}`)
    },
    saveBook: function (book) {
        return axios.post('/api/books',book);
    },
    deleteBook: function (id) {
        return axios.delete(`/api/books/${id}`);
    },
    getBooks: function () {
        return axios.get('/api/books');
    }
}

export default routes;