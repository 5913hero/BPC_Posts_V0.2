import React, { Component } from 'react';
import { Image } from 'react-native';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Card , CardItem , Content, Left, Thumbnail, Right, Button, Icon, Title, Input, Body, Item, Footer, Badge , StyleProvider } from 'native-base';

export default class Position extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.box1} >
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.box3}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    box1: {
      position: 'absolute',
      top: 40,
      left: 40,
      width: 100,
      height: 100,
      backgroundColor: 'red'
    },
    box2: {
      position: 'absolute',
      top: 80,
      left: 80,
      width: 100,
      height: 100,
      backgroundColor: 'blue'
    },
    box3: {
      position: 'absolute',
      top: 120,
      left: 120,
      width: 100,
      height: 100,
      backgroundColor: 'green'
    },
    text: {
      color: '#ffffff',
      fontSize: 80
    }
  });