import React, {useRef} from 'react';
import {View, Alert, Dimensions} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles';
import PropTypes from 'prop-types';

const Youtube = function( {videoId} ) {
  const controlRef = useRef();

  const {width: winWidth} = Dimensions.get('window');


  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        width={winWidth-40}
        ref={controlRef}
        videoId={videoId}

      />

    </View>

  );
};

Youtube.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default Youtube;
