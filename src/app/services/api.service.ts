import Axios from 'axios';
import { LanguagesType } from '../data/languages';
import { SortsType } from '../data/sorts';

const baseUrl = 'https://api.github.com/search/repositories';

export function search(searchTerm: string, sort: SortsType, language: LanguagesType) {
    const _url = `${baseUrl}${createQueryString(searchTerm, sort, language)}`;
    return Axios.get(_url);
}

function createQueryString(searchTerm: string, sort: SortsType, language: LanguagesType) {
    // basic query string with only a search term
    let query = `?q=${searchTerm}`;

    // if there is a language add that
    if (language !== 'Any') query += `+language:${encodeURIComponent(language)}`;

    // if sort by stars add that
    if (sort === 'Stars') query += `&sort=${sort.toLowerCase()}`;

    return query

}