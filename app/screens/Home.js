import React, { Component } from 'react'; //impor react
import { StyleSheet,Text,Image, View, Dimensions } from 'react-native'; //impor img sama view
import { CardViewWithIcon } from "react-native-simple-card-view";
import { Ionicons } from '@expo/vector-icons'; //impor icon	
import { SliderBox } from 'react-native-image-slider-box';
import siswaScreen from '../screens/datasiswa';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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

         class Home extends Component {
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
          render() {
            return (
              <Container>
              <Content> 
                <Header searchBar rounded style={{backgroundColor: '#171F33'}}>
                  <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                  </Item>
                  <Button transparent>
                    <Text>Search</Text>
                  </Button>
                </Header>
                <Content style={{paddingBottom: 10}} >
                  <SliderBox
                    images={this.state.images}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    circleLoop
                                      
                  />
                </Content>
                    <Row padder>
                      <Col >
                        <CardViewWithIcon
                          withBackground={ false }
                          androidIcon={ 'md-people' }
                          iosIcon={ 'ios-people' }
                          iconHeight={ 80 }
                          iconColor={ 'white' }
                          title={ 'Data Siswa' }
                          contentFontSize={ 10 }
                          titleFontSize={ 15 }
                          style={ miniCardStyle }
                          onPress={() => this.props.navigation.navigate("datasiswa")}
                        />
                      </Col>
                      <Col >
                      <CardViewWithIcon
                          withBackground={ false }
                          androidIcon={ 'md-school' }
                          iosIcon={ 'ios-school' }
                          iconHeight={ 80 }
                          iconColor={ 'white' }
                          title={ 'Data Guru' }
                          contentFontSize={ 10 }
                          titleFontSize={ 15 }
                          style={ miniCardStyle }
                        /> 
                      </Col>
                    </Row>
                    <Row>
                    <Col >
                        <CardViewWithIcon
                          withBackground={ false }
                          androidIcon={ 'md-paper' }
                          iosIcon={ 'ios-paper' }
                          iconHeight={ 80 }
                          iconColor={ 'white' }
                          title={ 'Mapel' }
                          contentFontSize={ 10 }
                          titleFontSize={ 15 }
                          style={ miniCardStyle }
                        />
                      </Col>
                      <Col >
                      <CardViewWithIcon
                          withBackground={ false }
                          androidIcon={ 'md-megaphone' }
                          iosIcon={ 'ios-megaphone' }
                          iconHeight={ 80 }
                          iconColor={ 'white' }
                          title={ 'Pengumuman' }
                          contentFontSize={ 20 }
                          titleFontSize={ 15}
                          style={ miniCardStyle }
                        /> 
                      </Col>
                  
                    </Row>            
              </Content>
           
          </Container>
            );
          }
        }

        const stack = createStackNavigator({
          Home: { screen: Home },
          datasiswa: { screen: siswaScreen},
        },{
          headerMode: 'none'
        });

        const miniCardStyle = {shadowColor       : '#000000',
        shadowOffsetWidth : 2,
        shadowOffsetHeight: 2,
        shadowOpacity     : 0.1,
        shadowRadius      : 5,
        bgColor           : '#586589',
        padding : 9,
        paddingRight : 5,
        paddingLeft : 5,
        margin            : 5,
        borderRadius      : 30,
        elevation         : 3,
        width             : (Dimensions.get("window").width / 2) - 10}
        
        export default createAppContainer(stack);