import Axios from 'axios';

export function search(searchTerm: string, sort: string, language: string) {
    return Axios.get(`https://api.github.com/search/repositories?q=${searchTerm}`);
}