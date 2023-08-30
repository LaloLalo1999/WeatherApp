import React from 'react';
import { Text, View } from 'react-native';

const OurChild = (props) => {
  const { message } = props;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ height: 200, width: 200, backgroundColor: 'red' }}>
      <Text>{message}</Text>
    </View>
  );
};

export default OurChild;
