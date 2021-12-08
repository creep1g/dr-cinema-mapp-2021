import React, { useEffect } from 'react';
import {View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../actions/tokenActions';

const Tokenizer = () => {

	const dispatch = useDispatch()
	
	useEffect( () => {
		(async () => {
			dispatch(auth());
		})();
	}, []);
	
	return (
		<View><></></View>
	)
}

export default Tokenizer;
