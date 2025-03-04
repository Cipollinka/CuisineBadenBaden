import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import GameTitle from '../components/game/GameTitle';
import HowToPlaySection from '../components/game/HowToPlaySection';
import LevelsSection from '../components/game/LevelsSection';

export default function GameScreen() {
    const navigation = useNavigation();
    const levels = useSelector((state) => state.quiz.levels);
    const tabBarHeight = useBottomTabBarHeight();

    const handleLevelPress = (levelId, status) => {
        if (status === 'open') {
            navigation.navigate('Question', { levelId });
        }
    };

    return (
        <View style={{flex: 1}}>
            <Image style={{flex: 1, width: '100%', height: '100%', position: 'absolute'}} source={require('../assets/bg.png')} />
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                contentContainerStyle={[
                    styles.container,
                    { paddingBottom: tabBarHeight + 20},
                ]}
            >
                <GameTitle />
                <HowToPlaySection />
                <LevelsSection levels={levels} onPress={handleLevelPress} />
            </ScrollView>
        </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        // backgroundColor: '#010204',
    },
    container: {
        flexGrow: 1,
        paddingHorizontal: 32,
        borderTopWidth: 1,
        borderTopColor: '#CDA568',
    },
});
