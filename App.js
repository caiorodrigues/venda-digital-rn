/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import fetch from 'node-fetch';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function handleApiQuali(agent) {
  console.log('API QUALI');

  /* try {
    let response = await fetch(
      'https://apisimulador.qualicorp.com.br/endereco/Enderecos/18010000?api-key=f8ede107-a69a-49ba-9ee8-93089db076ff',
    );
    console.log(response);
    let responseJson = await response.json();
    console.log(responseJson);
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  } */

  let response = fetch(
    'http://apisimulador.qualicorp.com.br/endereco/Enderecos/18010000?api-key=f8ede107-a69a-49ba-9ee8-93089db076ff',
  )
    .then(res => {
      console.log(res);
      res.json();
    })
    .then(json => console.log(json))
    .catch(error => {
      console.error(`=>>:  ${error}`);
    });
  console.log(response);
}

function handleQuali() {
  console.log('API QUALI');

  try {
    let response = fetch(
      'https://apisimulador.qualicorp.com.br/endereco/Enderecos/18010000?api-key=92344d33-65ee-4a33-a3a2-a1fb7fcd65a7',
    )
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

async function handleApiGithub() {
  console.log('API GITHUB');

  try {
    let response = await fetch('https://api.github.com/users/caiorodrigues');
    console.log(response);
    let responseJson = await response.json();
    console.log(responseJson);
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}
// ref.
// let response = await fetch(urlBase, {agent: new HttpsProxyAgent('http://10.100.1.141:8080')})

function handleTransparencia() {
  console.log('API TRANSPARENCIA');

  try {
    let response = fetch(
      'http://www.transparencia.gov.br/api-de-dados/orgaos-siafi',
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

function handleNasa() {
  console.log('API NASA');

  try {
    let response = fetch(
      'https://api.nasa.gov/techport/api/projects/17792?api_key=DEMO_KEY',
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            {/* <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View> */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                style={{
                  height: 46,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 20,
                  padding: 20,
                  backgroundColor: '#999',
                }}
                onPress={handleQuali}>
                <Text>API QUALI</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 46,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 20,
                  padding: 20,
                  backgroundColor: '#999',
                }}
                onPress={handleApiGithub}>
                <Text>API GITHUB</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 46,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 20,
                  padding: 20,
                  backgroundColor: '#999',
                }}
                onPress={handleTransparencia}>
                <Text>API TRANSPARENCIA</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 46,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 20,
                  padding: 20,
                  backgroundColor: '#999',
                }}
                onPress={handleNasa}>
                <Text>API NASA</Text>
              </TouchableOpacity>
            </View>

            {/*<LearnMoreLinks />*/}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
