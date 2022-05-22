import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView,
    FlatList,
    Dimensions, Link

} from 'react-native';

import { Card } from 'react-native-elements'
import { Video, AVPlaybackStatus } from 'expo-av';




export function VideosScreen() {
    const video = useRef(null);

    const data = [
        {
            id: 1,
            name: 'https://vod-progressive.akamaized.net/exp=1647911127~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F876%2F7%2F179384379%2F585253697.mp4~hmac=18b3cd71038034673df58569cd7ba32b984be3d8cc2093fd74beb8b0fa70b40d/vimeo-prod-skyfire-std-us/01/876/7/179384379/585253697.mp4?filename=Pictures+Show+-+4569.mp4',
            name_1: 'What you can grow at your home',
            time: '5',
        },
        {
            id: 2,
            name: 'https://vod-progressive.akamaized.net/exp=1647910764~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4536%2F15%2F397683425%2F1693542568.mp4~hmac=3b9e7d11b4f9457e792d68726b6ab05a9d7aca0a9ec3d046efc852f2c405d632/vimeo-prod-skyfire-std-us/01/4536/15/397683425/1693542568.mp4?filename=production+ID%3A3934890.mp4',
            name_1: 'Home Garden',
            time: '4',

        },
        {
            id: 3,
            name: 'https://vod-progressive.akamaized.net/exp=1647910829~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4707%2F16%2F423539147%2F1832535682.mp4~hmac=df330571424b945b136e68711103caca8b124ba14499683343655a9845bf1ee2/vimeo-prod-skyfire-std-us/01/4707/16/423539147/1832535682.mp4?filename=production+ID%3A4503294.mp4',
            name_1: 'Our Packaging',
            time: '4',
        },
        {
            id: 4,
            name: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            name_1: 'how to grow koko',
            time: '4',
        }


    ]
    return (

        <SafeAreaView>
            <FlatList data={data}
                keyExtractor={(item, index) => { item.id + index }}
                renderItem={({ item }) => {
                    return (
                        

                        <Card>
                            <Card.Title>
                                {item.name_1}
                            </Card.Title>
                            <Text>Time: {item.time} minutes</Text>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={{
                                    uri:item.name,
                                }}
                                useNativeControls
                                resizeMode="contain"
                                isLooping='false'
                            />
                            
                        </Card>


                    )
                }}


            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });