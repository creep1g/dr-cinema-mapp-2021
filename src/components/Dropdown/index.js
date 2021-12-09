import React from 'react';
import { useSelector } from 'react-redux';
import SelectDropdown from "react-native-select-dropdown";

const Dropdown = function ({selected}) {
    const movies = useSelector(state => state.allMovies)
    
    const allGenres = () => {
        const genres = ['All']
        for (var i = 0; i < movies.length; i++) {
            for (var j = 0; j < movies[i].genres.length; j++) {
                if (!genres.includes(movies[i].genres[j]["NameEN	"])) {
                    genres.push(movies[i].genres[j]["NameEN	"])
                }
            }
        }
        return genres;
    }

    return (
        <SelectDropdown
        data={allGenres()}
        // defaultValueByIndex={1} // use default value by index or default value
        // defaultValue={'Canada'} // use default value by index or default value
        onSelect={(selectedItem, index) => {
          //console.log(selectedItem, index);
          selected(selectedItem)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
        )


};

export default Dropdown;