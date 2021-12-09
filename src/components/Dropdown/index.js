import React from 'react';
import { useSelector } from 'react-redux';

const Dropdown = function () {
    const movies = useSelector(state => state.movies)
    const allGenres = () => {
        const genres = []
        for (var i = 0; i < movies.length; i++) {
            for (var j = 0; j < movies[i].genres.length; j++) {
                if (!genres.includes(movies[i].genres[j]["NameEN	"])) {
                    genres.push(movies[i].genres[j]["NameEN	"])
                }
            }
        }
        return genres;
    }

};

export default Dropdown;