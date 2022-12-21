import React, { useState } from 'react';
 
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

 
import AppIntroSlider from 'react-native-app-intro-slider';

const Slide = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = ( ) => {
 
    setShowRealApp(true);
  };

  const appLogin = () => {
   
    navigation.navigate("Login")
  }

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
               Explore more about our services
            </Text>
            
            <Button
              title="cilck here!!!"
              onPress={appLogin}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0CE1B',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
   
  },
 
  introImageStyle: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    borderRadius:15
  },
  introTextStyle: {
    fontSize: 18,
    color: '#232323',
    textAlign: 'center',
     
  },
  introTitleStyle: {
    fontSize: 25,
    color: '#232323',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: ' Provide Quality Service ',
    title: ' Service Priority',
    image: require("../.././assets/images/slider/car-1.jpg"),
    backgroundColor: '#F0CE1B',
  },
  {
    key: 's2',
    title: '20 Point Check-up',
    text: 'full body check-up',
    image: require("../.././assets/images/slider/car-2.jpg"),
    backgroundColor: '#F0CE1B',
  },
  {
    key: 's3',
    title: 'Service At Your Home',
    text: 'Door step service when you need ',
    image: require("../.././assets/images/slider/car-3.png"),
    backgroundColor: '#F0CE1B',
  },
  {
    key: 's4',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    image: require("../.././assets/images/slider/car-4.png"),
    backgroundColor: '#F0CE1B',
  },
   
];
