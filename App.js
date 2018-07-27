import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: undefined,
      email: null
    };
  }

  render() {
    if (this.state.greeting) return this.renderAfterButton();
    return (
      <View
        testID="welcome"
        style={{
          flex: 1,
          paddingTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 25, marginBottom: 30 }}>Welcome</Text>
        <TouchableOpacity
          testID="login_button"
          onPress={this.onButtonPress.bind(this, 'Login')}>
          <Text style={{ color: 'blue', marginBottom: 20 }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderAfterButton() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 25 }}>{this.state.greeting}!!!</Text>
        <TextInput style={{ padding: 20, fontSize: 20 }} testID="email" value={this.state.email} onChangeText={this.onChangeText} placeholder="email" />
      </View>
    );
  }

  onButtonPress(greeting) {
    this.setState({
      greeting: greeting,
    });
  }

  onChangeText = (text) => {
    this.setState({
      email: text
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
