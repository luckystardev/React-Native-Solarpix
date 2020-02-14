import React, {Component} from 'react';
import {StyleSheet, View, Alert, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class SignIn extends Component {

state = { toJobList: false, toSignIn: false, uname: "", wlimit: 3 };
isMet = () => {
  if (String(this.state.uname).length <= this.state.wlimit && String(this.state.uname).length > 0) {
      this.setState({ uname: ""});
      Actions.joblist();
  } else {
      Alert.alert('Alert','You must enter a User Name (Max 3 characters)');
  }
}

render() {
  return (
      <View style={{ flex: 1, marginTop: 100}}>
        <Text style={{ textAlign: 'center',fontSize: 25, fontWeight:'bold' }}>SolarPix 3.0</Text>
        <Text style={{ textAlign: 'center',marginTop: 20, fontWeight:'bold'}}>Please Login In with your Initials</Text>
        <Text style={{ marginTop: 20,marginLeft:15, fontWeight:'bold'}}>User Initials</Text>
        <TextInput value={this.state.uname} onChangeText={(text) => this.setState({ uname: text })} style={{paddingLeft:5, margin:15, marginTop:10, height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:5 }}></TextInput>
        <Button title="Submit" color="#f194ff" style={{ margin:15, marginTop:15, height: 40, backgroundColor: '#2185D0',borderRadius:5}} onPress={this.isMet}></Button>
      </View>
    );
  }
}

