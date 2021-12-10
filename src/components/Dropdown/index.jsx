import React from 'react';
import {useSelector} from 'react-redux';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

const Dropdown = function({selected, isUpcoming}) {
  const movies = useSelector((state) => state.allMovies);
  const upcoming = useSelector((state) => state.upcoming);

  const allGenres = () => {
    const genres = ['All'];
    if (upcoming) {
      for (let i = 0; i < upcoming.length; i++) {
        for (let j = 0; j < upcoming[i].genres.length; j++) {
          if (!genres.includes(upcoming[i].genres[j]['NameEN	']) &&
              upcoming[i].genres[j]['NameEN	'] !== undefined) {
            genres.push(upcoming[i].genres[j]['NameEN	']);
          }
        }
      }
    } else {
      for (let i = 0; i < movies.length; i++) {
        for (let j = 0; j < movies[i].genres.length; j++) {
          if (!genres.includes(movies[i].genres[j]['NameEN	']) &&
               movies[i].genres[j]['NameEN	'] !== undefined) {
            genres.push(movies[i].genres[j]['NameEN	']);
          }
        }
      }
    }

    return genres.sort((a, b) => a > b ? 1 : -1);
  };

  return (
    <SelectDropdown
      data={allGenres()}
      defaultButtonText={'Choose genre'}
      buttonStyle={[styles.button, styles.shadow]}
      buttonTextStyle={styles.buttonText}
      rowStyle={{padding: 10, margin: 10}}
      dropdownIconPosition={'right'}
      renderDropdownIcon={() => {
        return (
          <FontAwesome name="chevron-down" color={'#444'} size={14} />
        );
      }}
      onSelect={(selectedItem, index) => {
        // console.log(selectedItem, index);
        selected(selectedItem);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
    />
  );
};

Dropdown.propTypes = {
  selected: PropTypes.func.isRequired,
  isUpcoming: PropTypes.bool,
};

Dropdown.defaultProps ={
  isUpcoming: false,
};
export default Dropdown;
