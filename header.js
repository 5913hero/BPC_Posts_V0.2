import React, { Component } from 'react';
import { Image } from 'react-native';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Card , CardItem , Content, Left, Thumbnail, Right, Button, Icon, Title, Input, Body, Item, Footer, Badge , StyleProvider } from 'native-base';

import { database } from './firebase'


export default class ButtonThemeExample  extends Component {
    

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: "#FF6666"}}>
                    <Body >
                        <Title style={{ marginLeft : 140 }} >Posts</Title>
                    </Body>
                </Header>
                
     


                
            <Item>
              <Icon active name='home' />
              <Input placeholder='Icon Textbox '/>
            </Item>
            

        
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.ytimg.com/vi/TtAMB2wv-8k/maxresdefault.jpg'}} style={{height: 50, width: 50}} />
                <Body>
                  <Text style={{ fontSize: 12 }}>John Wick</Text>
                  <Text style={{ fontSize: 10 }} note>Advanced </Text>
                  <Text style={{ fontSize: 11 }} note>Aug 7, 2018 | 3:13 am </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
                <Text>
                  How to play basketball?
                </Text>
              </Body>
            </CardItem>
            {/* <View style={styles.box1} > */}
          
              <Button style={styles.box1}>
                <Text style={styles.text}>+JOIN</Text>
              </Button>
            
          {/* </View> */}
            {/* <CardItem>
              <Left>
                <Button transparent style = {{ marginLeft : 240 }} textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text> + JOIN </Text>
                </Button>
              </Left>
            </CardItem> */}
          </Card>
        

        <Content>
          <Card style={{flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.catdumb.com/wp-content/uploads/2018/03/1-592.jpg'}}  />
                <Body>
                  <Text style={{ fontSize: 12 }}>Kuroky</Text>
                  <Text style={{ fontSize: 10 }} note>Beginner </Text>
                  <Text style={{ fontSize: 11 }} note>Aug 6, 2018 | 2:20 am </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
              
                {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
                <Text>
                  Get this shit inside your head!
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent style = {{ marginLeft : 240 }} textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text> + JOIN </Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
            </Container>

        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    position: 'absolute',
    top: 80,
    left: 290,
    width: 60,
    height: 30,
    
    backgroundColor: '#00CCCC'
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
    fontSize: 10 ,
  }
});