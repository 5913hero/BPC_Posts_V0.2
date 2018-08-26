// import React, { Component } from 'react';
// import { Image } from 'react-native';
// import { Platform, StyleSheet, Text, View } from 'react-native';
// import { Container, Header, Card , CardItem , Content, Left, Thumbnail, Right, Button, Icon, Title, Input, Body, Item, Footer, Badge , StyleProvider } from 'native-base';



// import { database } from './firebase'


// export default class FooterTabsBadgeExample extends Component {
    

//     render() {
//         return (
//             <Container>
//                 <Footer style = {{backgroundColor: "#FF6666"}}>
//                     < Body>
//                         <Button style = {{marginLeft : 60}} warning>
//                         <Text> News </Text>
//                         </Button>
//                         <Button style = {{marginLeft : 50}} warning>
//                         <Text> Home </Text>
//                         </Button>
//                         <Button style = {{marginLeft : 60}} warning>
//                         <Text> Friends </Text>
//                         </Button>
//                     </Body>
//                 </Footer> 
//             </Container>

//         )
//     }
// }
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Right } from 'native-base';

export default class FooterTabsBadgeExample extends Component {
  render() {
    return (
      <Container>
        <Content />
        
          <Right>
            <Button light style={{ marginLeft : 280 , marginTop : 65 }}  > 

              <Text>Write</Text>
            </Button>
          </Right>
          
        
        
        <Footer >
          <FooterTab style={{backgroundColor: "#FF8000"}}>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>News</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Posts</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Friends</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}