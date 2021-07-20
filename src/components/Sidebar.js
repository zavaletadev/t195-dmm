import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

import {
	MaterialCommunityIcons,
	MaterialIcons,
	Feather,
} from '@expo/vector-icons';

import firebase from './../backend/firebase';

/*
Para diseñar un menu lateral (Sidebar) 
debemos utilizar las librerías de componentes de
Drawer
*/
import {
	DrawerContentScrollView,
	DrawerItem,
} from '@react-navigation/drawer';

const Sidebar = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<ImageBackground
				source={require('./../../assets/images/bg_sidebar2.jpg')}
				style={{
					width: '100%',
					paddingTop: 20,
					paddingBottom: 40,
					borderBottomWidth: 1,
					borderColor: 'slategrey',
				}}
			>
				<View style={{ flexDirection: 'row' }}>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
						}}
					>
						<ImageBackground
							source={{
								uri: firebase.auth
									.currentUser.photoURL,
							}}
							style={{
								width: 75,
								height: 75,
								overflow: 'hidden',
								marginTop: 20,
								backgroundColor:
									'slategrey',
								borderRadius: 75,
							}}
						/>
					</View>
					<View style={{ flex: 2 }}>
						<View
							style={{
								flex: 1,
								marginLeft: 10,
								marginTop: 20,
							}}
						>
							<Text
								style={{
									fontSize: 20,
									marginBottom: 10,
									color: '#333',
									fontWeight: 'bold',
								}}
							>
								{
									firebase.auth
										.currentUser
										.displayName
								}
							</Text>

							<Text
								style={{
									fontSize: 20,
									color: 'white',
									backgroundColor:
										'dimgrey',
									fontWeight: '400',
									fontSize: 16,
									padding: 5,
								}}
							>
								6 solicitudes
							</Text>
						</View>
					</View>
				</View>
			</ImageBackground>

			<DrawerContentScrollView {...props}>
				<Text
					style={{
						marginLeft: 20,
						color: 'tomato',
						fontSize: 16,
						marginBottom: 5,
					}}
				>
					Bienvenido de nuevo
				</Text>

				<Text
					style={{
						marginLeft: 20,
						color: 'slategrey',
						fontSize: 16,
						marginBottom: 10,
						fontWeight: 'bold',
					}}
				>
					{firebase.auth.currentUser.email}
				</Text>

				<Text
					style={{
						marginLeft: 20,
						fontSize: 16,
						marginBottom: 5,
						fontWeight: '600',
					}}
				>
					{firebase.auth.currentUser
						.emailVerified ? (
						<Text style={{ color: 'seagreen' }}>
							<Feather
								name='check-circle'
								size={18}
							/>
							{'  '}
							Cuenta verificada
						</Text>
					) : (
						<Text
							style={{ color: 'indianred' }}
						>
							<Feather
								name='x-circle'
								size={18}
							/>
							{'  '}
							Cuenta no verificada
						</Text>
					)}
				</Text>

				<DrawerItem
					icon={() => (
						<MaterialIcons
							name='list'
							color='tomato'
							size={22}
						/>
					)}
					label='Feed'
					onPress={() =>
						props.navigation.navigate('Feed')
					}
				/>
				<DrawerItem
					icon={() => (
						<MaterialIcons
							name='pets'
							color='tomato'
							size={22}
						/>
					)}
					label='Adopción'
					onPress={() =>
						props.navigation.navigate(
							'AdopcionTab'
						)
					}
				/>
				<DrawerItem
					icon={() => (
						<MaterialCommunityIcons
							name='heart'
							color='tomato'
							size={22}
						/>
					)}
					label='Awww'
					onPress={() =>
						props.navigation.navigate('Awww')
					}
				/>
				<DrawerItem
					icon={() => (
						<MaterialCommunityIcons
							name='format-list-checks'
							color='tomato'
							size={22}
						/>
					)}
					label='Solicitudes'
					onPress={() =>
						props.navigation.navigate(
							'Solicitudes'
						)
					}
				/>
				<DrawerItem
					icon={() => (
						<MaterialCommunityIcons
							name='account-cog'
							color='tomato'
							size={22}
						/>
					)}
					label='Perfil'
					onPress={() =>
						props.navigation.navigate('Perfil')
					}
				/>
				<DrawerItem
					icon={() => (
						<MaterialCommunityIcons
							name='power-standby'
							color='tomato'
							size={22}
						/>
					)}
					label='Salir'
					onPress={async () => {
						/*
                        Cerramos la sesión desde firebase
                        */
						await firebase.auth.signOut();
						//Borramos el historial de
						//navegación
						props.navigation.reset({
							index: 0,
							routes: [{ name: 'Login' }],
						});
						props.navigation.navigate('Login');
					}}
				/>
			</DrawerContentScrollView>
		</View>
	);
};

export default Sidebar;
