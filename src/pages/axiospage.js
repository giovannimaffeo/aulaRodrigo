import React, {useState} from 'react';
import {StyleSheet, Button, View, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../redux/reducers';


const api = axios.create({
  baseURL: 'https://api.github.com/users/',
});

const App = ({}) => {
  const dispatch = useDispatch();
  const [lista, setLista] = useState('');
  const [loading, setloading] = useState(false);
  const userData = useSelector(state => state.user)

  async function pingar() {
    setloading(true)
    try {
      const response = await api.get('giovannimaffeo', {
        data: {},
      });
      setLista(response.data);
      dispatch(setUser(response.data))
  

      //alert(JSON.stringify(response));
    } 
    catch (e) {
      console.log(e);
    }
    finally {
      setloading(false)
    }
  }
  return (
    <>
      <Button title="Pingar" onPress={() => pingar()}></Button>

      <Spinner visible={loading}/> 

      <Text>{lista.login}</Text>
      <Text>{lista.avatar_url}</Text>

      <Text>{userData.login}</Text>
      
        
           

          
      
    </>
  );
};



export default App;