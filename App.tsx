import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image
} from 'react-native';
import AppPro from './AppPro';

const App = () => {
  const date = new Date();
  return(
    <SafeAreaView>
      <View>
        {/* <Text>Hello World!</Text>
        <Text>{date.getFullYear()}</Text>
        <Image
          source={{uri:'https://picsum.photos/200'}}
          style={{width: 400, height: 400}}
        /> */}
        <AppPro />
      </View>
    </SafeAreaView>
  );
}

export default App;