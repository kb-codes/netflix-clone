import React from 'react';

import { StatusBar, Dimensions } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

import Header from './components/Header';
import Hero from './components/Hero';
import Movies from './components/Movies';

const api1 = [
	require('./assets/movie11.jpg'),
	require('./assets/movie22.jpg'),
	require('./assets/movie33.jpg'),
	require('./assets/movie44.jpg'),
]
const api2 = [
	require('./assets/popular1.jpg'),
	require('./assets/popular2.jpg'),
	require('./assets/popular3.jpg'),
	require('./assets/popular4.jpg'),
	require('./assets/popular5.jpg'),
	require('./assets/popular6.jpg'),
]
const api3 = [
	require('./assets/hollywood1.jpg'),
	require('./assets/hollywood2.jpg'),
	require('./assets/hollywood3.jpg'),
]
const api4 = [
	require('./assets/hindi1.jpg'),
	require('./assets/hindi2.jpg'),
	require('./assets/hindi3.jpg'),
]

const Container = styled.ScrollView`
	flex: 1;
	background-color: #000;
`

const Poster = styled.ImageBackground`
	width: 100%;
	height: ${(Dimensions.get('window').height * 81) / 100}px;
`

const Gradient = styled(LinearGradient)`
	height: 100%;
`

const HomeScreen = () => {
	return (
		<>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			<Container>
				<Poster source={require('./assets/dark.jpg')}>
					<Gradient
						locations={[0, 0.2, 0.6, 0.93]}
						colors={[
							'rgba(0,0,0,0.5)',
							'rgba(0,0,0,0.0)',
							'rgba(0,0,0,0.0)',
							'rgba(0,0,0,1)'
						]}>
						<Header />
						<Hero />
					</Gradient>
				</Poster>
				<Movies label='Recommendation' item={api1} />
				<Movies label='Popular on Netflix' item={api2} />
				<Movies label='Hollywood Movies' item={api3} />
				<Movies label='Hindi Movies & TV' item={api4} />
			</Container>
		</>
	)
}

export default HomeScreen;
