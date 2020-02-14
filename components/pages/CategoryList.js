import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {Actions} from 'react-native-router-flux';

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_list: [
        {
            title: 'aaa',
            content: 'AAAAA',
            type: 0,
            count: 1
        },
        {
            title: 'bbb',
            content: 'BBBBBB',
            type: 1,
            count: 0
        },
        {
            title: 'ccc',
            content: 'CCCCC',
            type: 1,
            count: 0
        }        
      ]
    }
  }

  Doclick_viewDetail(index) {
    console.log('Doclick_viewDetail:', this.state.data_list[index].title);
  }

  actionOnRow(item) {
    console.log('Selected Item :',item);
    Actions.photoUpload();
  }

  onBackClicked = () => {
    Actions.pop();
  }

  onUploadClicked = () => {
    console.log('upload button clicked');
  }

  renderItems(data_list, sectionIndex) {
    if (data_list.length != 0) {
      var i = -1;
      return data_list.map((data)=>{
        i++;
        return (
          <Child_Product key={i} itemData={data} index={i} item_list={data_list} section_index={sectionIndex} click_viewDetail={this.Doclick_viewDetail} />
        )
      })
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Category List</Text>

          <FlatList
            data= {this.state.data_list}
            keyExtractor={(item, index) => index.toString() }
            extraData= {this.state}
            renderItem={ ({item, index}) =>
              <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                <View key={index} style={styles.view_list}>
                  <View>           
                    <Text style={styles.list}>{item.title}</Text>
                    <Text style={styles.list}>{item.content}</Text>
                  </View>
                  <View style={{marginRight:10}}>      
                    <Text style={styles.list}>Pics</Text>
                    <Text style={{fontSize:16, alignSelf: 'center'}}>{item.count.toString()}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            }
            numColumns={1}
          />  
        </View>
        <View>
          <Button title="Upload All" type="Outline" style={styles.uploadButton} onPress={this.onUploadClicked}></Button>
          <Button title="Back" type="Outline" style={styles.backButton} onPress={this.onBackClicked}></Button>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25, fontWeight:'bold', marginLeft: 20,
  },
  view_list: {
    height: 50, marginHorizontal: 10, marginTop: 4, backgroundColor: 'lightgreen', justifyContent:'center', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'
  },
  list: {
    fontSize:16, marginLeft:10,
  },
  backButton: {
    margin:15, marginBottom:20, height: 40, borderRadius:5, borderColor:'lightgrey', borderWidth:1
  },
  uploadButton: {
    marginHorizontal:15, height: 40, borderRadius:5, borderColor:'lightgrey', borderWidth:1
  },
});