import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AppContainer from './src/routes';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './src/reducers';

export default function App() {
	
	return (
		<Provider store={createStore(reducers, applyMiddleware(thunk))}>
			<View style={{ flex: 1 }}>
				<AppContainer />
			</View>
		</Provider>
  );
}

