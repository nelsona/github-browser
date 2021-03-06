import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

export default class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Profile',
    title: `Profile`,
  });

  render () {
    const { profile } = this.props
    let text = null;
    if (profile) {
      text = 
        <View
          style={{ alignItems: 'center' }}
        >
          <View
            style={{ width: 300, marginTop: 30 }}
          >
            <Image source={{uri: profile.avatar_url}} style={{ width: 50, height: 50 }} />
            <Text
              style={{ marginBottom: 10 }}>
              {profile.name}
            </Text>
            <Text>{profile.bio}</Text>
          </View>
        </View>
    } else {
      text = 
        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text>Spinner would be spinning just now.</Text>
        </View>      
    }
    return (
      <View>
        {text}
      </View>
    )
  }
}
