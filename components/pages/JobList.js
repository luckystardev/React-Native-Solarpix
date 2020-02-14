import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {Actions} from 'react-native-router-flux';

export default class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_list: [
        {
            title: 'React js frontend',
            type: 0
        },
        {
            title: 'React Native app',
            type: 1
        }        
      ]
    }
  }

  onNewJobClicked = () => {
    console.log('new job button clicked');
    Actions.newJob();
  }

  Doclick_viewDetail(index) {
    console.log('Doclick_viewDetail:', this.state.data_list[index].title);
    Actions.categoryList();
  }

  onDeleteClicked(item) {
    console.log('delete', item);
  }

  actionOnRow(item) {
    console.log('Selected Item :',item);
    Actions.categoryList();
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
      <View style={{ flex: 1, marginTop: 80}}>
        <Text style={styles.text}>Job List</Text>

        <TouchableOpacity style={styles.view_newjob} onPress={this.onNewJobClicked}>
          <Icon name="plussquareo" color='gray' size={20} />
          <Text style={styles.text_newjob}>New Job</Text>        
        </TouchableOpacity>

        <FlatList
          data= {this.state.data_list}
          keyExtractor={(item, index) => index.toString() }
          extraData= {this.state}
          renderItem={ ({item, index}) =>
            <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
              <View key={index} style={styles.view_list}>              
                <Text style={styles.list}>{item.title}</Text>
                <TouchableOpacity style={styles.delete_button} onPress={this.onDeleteClicked(item)}>
                  <Text style={{color:'white', fontSize:12}}>Delete</Text>        
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          }
          numColumns={1}
        />  
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 25, fontWeight:'bold', marginLeft: 20,
  },
  text_newjob: {
    fontSize: 18, color:'dodgerblue', marginLeft: 10,
  },
  view_newjob: {
    marginTop: 30, flexDirection: 'row', marginLeft: 10,
  },
  view_list: {
    height: 40, margin: 10, backgroundColor: 'lightgreen', justifyContent:'center', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'
  },
  list: {
    fontSize:16, marginLeft:10,
  },
  delete_button: {
    marginRight:10, height:32, backgroundColor:'red', padding:8, justifyContent: 'center',
  },
});