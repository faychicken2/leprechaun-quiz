import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View, TextInput, Button, ScrollView, Modal } from 'react-native';
// import test from './formik';
// import { form } from "./form";



export default function App() {
    const [text1, onChangeText1] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const [text3, onChangeText3] = React.useState("");
    const [text4, onChangeText4] = React.useState("");
    const [text5, onChangeText5] = React.useState("");
    const [text6, onChangeText6] = React.useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const https = require('https')
    const options = {
    hostname: 'http://localhost:2000/',
    port: 2000,
    path: '/',
    method: 'GET'
    }

    const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
        logic(d)
        return d;
    })
    })

    req.on('error', error => {
    console.error(error)
    })

req.end()


    let logic = (iSecret) => {
        let out = '';

        if (iSecret == 0)
        {
            out = "Sir Charms the the lucky lucky charms mascot! Look like you like cereal!";
        }
        if (iSecret == 1)
        {
            out = "Notre Dame is the mascot for well Notre Dame sports teams."; 
        }
        if (iSecret == 2)
        {
            out = "Lubdan is a murderous leprechaun from the movie 'Leprechaun'"; 

        }
        if (iSecret == 3)
        {
            out = "O'Reilly is a recurring character The Simpsons show"; 
        }
        if (iSecret == 4)
        {
            out = "Hornswoggle is a murderous leprechaun from the movie 'Leprechaun: Origins'"; 
        }
        if (iSecret == 5)
        {
            out = "O'Pat and O'Mike are characters from the popular short animated film 'The Wearing of the Grin'";
           
        }

        onChangeText6(out);
    } 

        let test = () => {
            // onChangeText6("O'Pat and O'Mike are characters from the popular short animated film 'The Wearing of the Grin'");
            setModalVisible(true);

        }

    return(
        <View style={styles.container}>
            <ScrollView>

            <Text>{"\n"}</Text>
            <Text>Welcome to our leprechaun quiz! </Text>
            <Text>This quiz will tell you what leprechaun you are! </Text>
            <Text>The leprechaun are from pop culture such as the lucky charms mascot Sir charms and O'Reilly from the The Simpsons".</Text>
            <Text>The full list of leprechaun are: Sir Charms, Notre Dame, Lubdan, O'Reilly, Hornswoggle, O'Pat and O'Mike</Text>
            
            <Text>{"\n\n"} </Text>

            <Text>{"\n\n"}Lets start with the quiz!!</Text>

            <View style={styles.questions}>
                
                <Text>{"\n\n"}Question 1: What is your name?</Text>
                <TextInput 
                style={styles.input}
                placeholder={'Question 1'}
                onChangeText={onChangeText1}
                value={text1}/>

                <Text>{"\n\n"}Question 2: What is your personality? (happy, mad, sad, funny, murderous)</Text>
                <TextInput 
                style={styles.input}
                placeholder={'Question 2'}
                onChangeText={onChangeText2}
                value={text2}/>

                <Text>{"\n\n"}Question 3: What is your preferred form of entertainment? (tv, movies, books, comics, games, ads, killing) </Text>
                <TextInput 
                style={styles.input}
                placeholder={'Question 3'}
                onChangeText={onChangeText3}
                value={text3}/>

                <Text>{"\n\n"}Question 4: What do you like more? (sports, games, exercise, murder)</Text>
                <TextInput 
                style={styles.input}
                placeholder={'Question 4'}
                onChangeText={onChangeText4}
                value={text4}/>

                <Text>{"\n\n"}Question 5:How old are you? </Text> 
                <TextInput 
                style={styles.input}
                placeholder={'Question 5'}
                onChangeText={onChangeText5}
                value={text5}/>

            </View>
            
            <Button
            onPress={test}
            title="Submit"
            color="#841584"
            />
            

            <Modal
            style={{backgroundColor: "white" , alignItems: 'center', justifyContent: 'center', alignItems: "center",}}
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              //Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}>

            <Text>{text6}</Text>
            </Modal>


            </ScrollView>
        </View>
        );
    }



    const styles = StyleSheet.create({
        container: {
          flex: 1,
          fontWeight: 'bold',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          alignItems: "center",
        },
        questions: {
            flex: 1,
          backgroundColor: '#fff',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          alignItems: "flex-start",
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
          },
      });
      

    //   Text>{text6, '\n\n\n\n\n\n\n\n\n\n\n'}</Text>