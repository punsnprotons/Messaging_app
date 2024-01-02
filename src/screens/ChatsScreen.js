import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'
import ChatListItem from '../components/ChatListItem'
import chats from '../../assets/data/chats.json'
const ChatsScreen = () => {
  return (
    <FlatList
      style={{backgroundColor:'white'}}
      data = {chats}
      renderItem = {({item}) =><ChatListItem chat={item}/>}

    />
  )
}

const styles = StyleSheet.create({
  
})
export default ChatsScreen
