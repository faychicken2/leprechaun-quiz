import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import test from './formik';
// import { Formik } from 'formik';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Op!</Text>
      <StatusBar style="auto" />

      <View>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values) => {
                    console.log(values);
                }}>

                {(props) => (
                    <View>
                        <TextInput
                            placeholder='title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title} />

                        <TextInput
                            multiline
                            placeholder='body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body} />

                        <TextInput
                            multiline
                            placeholder='rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating} />

                        <Button title="submit" color="maroon" onPress={props.handleSubmit}/>

                    </View>
                )}
            </Formik>

        </View>

    </View>



  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
