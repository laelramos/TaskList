
import React, { useState } from 'react';
import {  StyleSheet, Text, View, SafeAreaView, StatusBar, 
          TouchableOpacity, FlatList, Modal, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './src/components/TaskList';
import * as Animatable from 'react-native-animatable';

const AnimatableBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const [task, setTask] = useState([
    {key: 1, task: 'compra pao'},
    {key: 2, task: 'compra pao'},
    {key: 3, task: 'compra pao'},
    {key: 4, task: 'compra pao'},
    {key: 5, task: 'compra pao'},
  ]);
  
const [open, setOpen] = useState(false);


  return (
     <SafeAreaView  style={styles.container}>
      <StatusBar backgroundColor= '#171d31' barStyle="light-content"/>

      <View style={styles.content}>
        <Text style={styles.title}> Minhas Tarefas </Text>
      </View>
    
    
    <FlatList
    marginHorizontal={10}
    showsHorizontalScrollIndicator={false}
    data={task}
    keyExtractor={ (item) => String(item.key) }
    renderItem={ ({item}) => <TaskList data ={item} />}
    />

    <Modal animationType="slide" transparent={false} visible={open}>
      <SafeAreaView style={styles.modal}>

        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={ () => setOpen(false) }>
            <Ionicons style={{marginLeft:5, marginRight:5}} name="md-arrow-back" size={40} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Nova Tarefa</Text>
        </View>

        <View style={styles.modalBody}>
          <TextInput
          multiline={true}
          placeholder="O que precisa fazer hoje?"
          style={styles.input}
          />

          <TouchableOpacity style={styles.handleAdd}>
            <Text style ={styles.handleAddText} > Cadastrar </Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    </Modal>

    <AnimatableBtn 
    style={styles.fab}
    useNativeDriver
    animation="bounceInUp"
    duration={1500}
    onPress={ () => setOpen(true) }
    >
      <Ionicons name="ios-add" size={35} color="#fff"/>
    </AnimatableBtn>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#171d31'
  },
  title:{
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 26,
    textAlign: 'center',
    color:'#fff'
  },

  fab:{
    position:'absolute',
    width: 60,
    height: 60,
    backgroundColor:'#00ebd6',
    alignItems: 'center',
    justifyContent: 'center', 
    borderRadius: 30,
    right: 25,
    bottom: 25, 
    elevation: 2,
    zIndex: 9,
    shadowColor:'#000',
    shadowOpacity: 0.2,
    shadowOffset:{
      width: 1,
      height: 3,
    }
  },

  modal:{
    flex:1,
    backgroundColor:'#171d31',
    },
  
  modalHeader:{
    marginLeft:10,
    marginTop:20,
    flexDirection:'row',
    alignItems:'center'
  },
  modalTitle:{
    marginLeft:15,
    fontSize: 23,
    color: '#fff'
  },

  modalBody:{
    marginTop: 15,
  },

  input:{
    fontSize:15,
    marginLeft:10,
    marginRight:10,
    marginTop: 30,
    backgroundColor:'#fff',
    padding: 9,
    height: 100,
    textAlignVertical: 'top',
    color:'#000',
    borderRadius: 5,
  },

  handleAdd:{
    backgroundColor:'#00ebd6',
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginRight:10,
    height:40,
    borderRadius:5
  },
  
  handleAddText:{
    fontSize:20
  }
})
