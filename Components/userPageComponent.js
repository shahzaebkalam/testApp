//I forget How to combine react router flux and drawer navigation


import React,{ Component } from 'react';
import { View, Platform, Image, StyleSheet, ScrollView, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { createDrawerNavigator, createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';






const SettingNavigator = createStackNavigator({
         Settings: { screen: Settings,
        navigationOptions: ({ navigation }) => ({ // navigationOptions can be an object or be a function that takes in props 
            headerLeft: <Icon name='menu' size={24}
                color='white'
                onPress={() => navigation.toggleDrawer()}
                />
        }) }, 
        
    },
    {
        initialRouteName: 'Setting',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"            
            }
        }
    }
);
const HelpNavigator=createStackNavigator({
	Help: { screen: Help }
},
{
	navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name='menu' size={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
            />
    })
});
const LogoutNavigator = createStackNavigator(
  {
    Logout: { screen: Logout },
  },
  {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name='menu' size={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
            />
    })
  });


const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')}
                        style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>
            <DrawerItems {...props}></DrawerItems>
        </SafeAreaView>
    </ScrollView>
);

const HomeNavigator=createDrawerNavigator(
	{
		Settings:{
			screen: Settings,
			navigationOptions:{
				title:'Home',
				drawerLabel: 'Settings',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
			}
		},
		Help: {
		    screen: Help,
		    navigationOptions: {
		      title: 'Help',
		      drawerLabel: 'Help',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='info-circle'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
		 	}
		},
		Logout:{
			screen:LogoutNavigator,
			navigationOptions:{
				title:'Menu',
				drawerLabel: 'Logout',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='list'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
			}
		}
	{
		drawerBackgroundColor: '#D1C4E9',
		contentComponent: CustomDrawerContentComponent,
	});

class Main extends Component{

	componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
	render(){

		return(
			<View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            	<MainNavigator />
        	</View>			
			);

	}
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60,
    }
});
export default userPage;
