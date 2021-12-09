import React, { useRef } from 'react';
import {View, Alert, Dimensions} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles';

const Youtube = function ( {videoId} ) {
	
	const controlRef = useRef();
  
	const onStateChange = (state) => {
	  if (state === 'ended') {
		setPlaying(false);
		Alert.alert('video has finished playing!');
	  }
	  if (state !== 'playing') {
		setPlaying(false);
	  }
	};
  	
	const { width: winWidth } = Dimensions.get('window');


	return (
	  <View style={styles.container}>
		<YoutubePlayer
		  height={300}
			width={winWidth-40}
		  ref={controlRef}
			videoId={videoId}
		  onChangeState={onStateChange}
		/>

	  </View>

	);
  };
export default Youtube;
