import React, { Component } from 'react'; //impor react
import { StyleSheet,Text,Image, View, Dimensions } from 'react-native'; //impor img sama view
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'; //import bottom nav
import { Ionicons } from '@expo/vector-icons'; //impor icon	
import { SliderBox } from 'react-native-image-slider-box';
const { width, height } = Dimensions.get('window');
import { Row,
         Col,
         Container, 
         Header, 
         Title, 
         Content, 
         Footer, 
         FooterTab, 
         Button, 
         Left, Right, Body, Icon, Card, CardItem, Item, Input} from 'native-base';


export default class Raport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?tree',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
      ]
    };
  }
  

  //render tampilan seluruh
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    
    
    return(     
      <Container>
        <Content> 
          
          
        </Content>

 
    </Container>);
  }
}
