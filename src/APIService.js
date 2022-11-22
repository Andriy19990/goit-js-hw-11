import axios from 'axios';
import Notiflix from 'notiflix';

class imgApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.totalHits = null;
    }

    async getImage() {
        try {
            return await axios.get('https://pixabay.com/api/', {
                params: {
                    key: "31494782-f8925e3bc0c2d3512d1e62fab",
                    q: this.searchQuery,
                    image_type: "photo",
                    orientation: "horizontal",
                    safesearch: true,
                    per_page: 40,
                    page: this.page,
                }
            }).then(responce => {
                return responce.data;
            }).then(data => {
                return data;
            })
        } catch (error) {
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
        }
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    resetPage() {
        this.page = 1;
    }
    decreaseTotalHits() {
        this.totalHits = this.totalHits - 40;
    }
}

export { imgApiService };