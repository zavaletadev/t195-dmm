import React from 'react';
import { Text, View } from 'react-native';

import firebase from './../../backend/firebase';

const Feed = (props) => {
	/*
    Tomamos el id del usuario actual
    */
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Feed.js</Text>
		</View>
	);
};

export default Feed;
