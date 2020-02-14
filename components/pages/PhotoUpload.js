import React, {Component} from 'react';
import {StyleSheet, View, Alert, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';

export default class NewJob extends Component {

state = { title: "6Grid-Interior", content: "MSP or Tap JB interior, overall pic", avatarSource: null,};
onCameraClicked = () => {
  console.log('camera button clicked');
  const options = {
      quality: 1.0,
      maxWidth: 300,
      maxHeight: 300,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        this.setState({
          avatarSource: source
        });
      }
    });
}

onBackClicked = () => {
  Actions.pop();
}

render() {
  return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 22, fontWeight:'bold', marginLeft:20 }}>{this.state.title}</Text>
          <Text style={styles.textStyle}>{this.state.content}</Text>        
          <Button title="Use Camera App" color="#f194ff" style={styles.button} onPress={this.onCameraClicked}></Button>
          <Image source={this.state.avatarSource == null ?  null : this.state.avatarSource} style={styles.logoImage}/>
          <Text style={styles.textStyle}>Photos:1</Text>          
        </View>
        <Button title="Back" type="Outline" style={styles.backButton} onPress={this.onBackClicked}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create ({  
     container: {  
         flex: 1, marginTop: 100, justifyContent: 'space-between',
     },  
    textStyle:{  
        marginTop: 18, fontWeight:'bold', marginLeft:20, 
    },
    logoImage: {
      width: 200, height: 200, marginTop: 20, marginLeft: 10,
    },
    button: {
      margin:15, marginTop:20, height: 40, backgroundColor: '#2185D0',borderRadius:5
    },
    backButton: {
      margin:15, marginBottom:20, height: 40, borderRadius:5, borderColor:'lightgrey', borderWidth:1
    },
})  