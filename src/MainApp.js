import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import GameScreen from './screens/GameScreen';
import QuestionScreen from './screens/QuestionScreen';
import MainTabNavigator from './components/MainTabNavigator';
import CategoryScreen from './screens/CategoryScreen';
import LoadingScreen from './screens/LoadingScreen';
import {persistor, store} from './store/store';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import OnboardingScreen from './screens/OnboardingScreen';

const Stack = createStackNavigator();

export default function MainApp() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkIfFirstLaunch = async () => {
      try {
        const hasSeenOnboarding = await AsyncStorage.getItem(
          'hasSeenOnboarding',
        );
        setIsFirstLaunch(hasSeenOnboarding === null);
      } catch (error) {
        console.error('Error reading AsyncStorage', error);
        setIsFirstLaunch(false);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    };

    checkIfFirstLaunch();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={isFirstLaunch ? 'Onboarding' : 'MainTabs'}
            screenOptions={{headerShown: false, gestureEnabled: true}}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Game" component={GameScreen} />
            <Stack.Screen name="Question" component={QuestionScreen} />
            <Stack.Screen name="MainTabs" component={MainTabNavigator} />
            <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          </Stack.Navigator>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
