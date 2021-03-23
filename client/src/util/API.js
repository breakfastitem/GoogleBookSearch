import axios from 'axios';

const routes = {
    searchBooks: function (title) {
        return axios.get(`/api/search/${title}`)
    }
}

export default routes;