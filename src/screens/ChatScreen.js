import React from 'react'
import {Text,View,ImageBackground,StyleSheet,FlatList} from 'react-native'
import bg from '../../assets/images/BG.png'
import Message from '../components/Message'

import messages from '../../assets/data/messages.json'

const ChatScreen = () => {
  return (
   <ImageBackground source={bg} style={styles.bg}>
    <FlatList
        inverted
        style={styles.list}
        data={messages}
        renderItem= {({item}) => <Message message={item}/>}
    />
   </ImageBackground>
  )
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
    },
    list:{
        padding:10,
    }
})
export default ChatScreen
