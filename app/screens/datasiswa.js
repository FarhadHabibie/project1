import React, { Component } from 'react'; //impor react
import { StyleSheet,Text,Image, View, Dimensions } from 'react-native'; //impor img sama view
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'; //import bottom nav
import { Ionicons } from '@expo/vector-icons'; //impor icon	
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
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

        class datasiswa extends Component {
          render() {
            return (             
                <Content> 
                  <Header style={{backgroundColor: '#171F33'}}>
                    <Left>
                      <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
                        <Icon name="arrow-back" />
                      </Button>
                    </Left>
                    <Body>
                      <Title>Data Siswa</Title>
                    </Body>
                    <Right>
                      <Button transparent>
                      </Button>
                    </Right>
                  </Header>
                  <Body>
                    <Row>
                      <Card style={{width} }>
                        <CardItem>

                        </CardItem>
                      </Card>
                    </Row>
                  </Body>
                </Content>                         
            );
          }
        }

        const stacksiswa = createStackNavigator({
          datasiswa: datasiswa,
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

 

      export default createAppContainer(stacksiswa); 