import React from 'react';
import {ScrollView, StyleSheet, SafeAreaView, Image, View} from 'react-native';

import Header from '../components/Header';
import AboutBadenBadenBlock from '../components/AboutBadenBadenBlock';
import CategoriesSection from '../components/CategoriesSection';

const HomeScreen = () => {
    return (
        <View style={{flex: 1}}>
            <Image style={{flex: 1, width: '100%', height: '100%', position: 'absolute'}} source={require('../assets/bg.png')} />
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <Header />
                <AboutBadenBadenBlock />
                <CategoriesSection />
            </ScrollView>
        </SafeAreaView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#010204',
    },
});
