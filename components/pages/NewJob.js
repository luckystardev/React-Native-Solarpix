import React, {Component} from 'react';
import {StyleSheet, View, Alert, Text, Picker } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class NewJob extends Component {

state = { uname: "", wlimit: 3, choosenIndex: 0 };
isMet = () => {
  if (String(this.state.uname).length > 0) {
      this.setState({ uname: ""});
      Actions.joblist();
  } else {
      Alert.alert('Alert','You must enter project name');
  }
}

render() {
  return (
      <View style={{ flex: 1, marginTop: 100}}>
        <Text style={{ fontSize: 25, fontWeight:'bold', marginLeft:20 }}>New Job</Text>
        <Text style={{ marginTop: 20, fontWeight:'bold', marginLeft:20 }}>Project name(try to use one word, all use same)</Text>        
        <TextInput value={this.state.uname} onChangeText={(text) => this.setState({ uname: text })} style={{paddingLeft:5, margin:15, marginTop:10, height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:5 }}></TextInput>
        <Text style={{ marginTop: 20,marginLeft:15, fontWeight:'bold'}}>Profile</Text>
        <Picker style={styles.pickerStyle}  
                selectedValue={this.state.jobStyle}  
                onValueChange={(itemValue, itemPosition) =>  
                    this.setState({jobStyle: itemValue, choosenIndex: itemPosition})}  
            >  
            <Picker.Item label="Install" value="install" />  
            <Picker.Item label="PCSV" value="pcsv" />  
            <Picker.Item label="Sales SV" value="ssv" /> 
        </Picker> 
        <Button title="Submit" color="#f194ff" style={{ margin:15, marginTop:50, height: 40, backgroundColor: '#2185D0',borderRadius:5}} onPress={this.isMet}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create ({  
     container: {  
         flex: 1,  
         alignItems: 'center',  
         justifyContent: 'center',  
     },
    pickerStyle:{  
        alignSelf: 'center',  
        height: 100,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',  
    }  
})  