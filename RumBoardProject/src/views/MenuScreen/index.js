import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import profile from './../../assets/icon/inco.png';
// Tab ICons...
import home from './../../assets/icon/home.png';
import search from './../../assets/icon/search.png';
import notifications from './../../assets/icon/bell.png';
import settings from './../../assets/icon/settings.png';
import logout from './../../assets/icon/logout.png';
// Menu
import menu from './../../assets/icon/menu.png';
import close from './../../assets/icon/close.png';
import info from './../../assets/icon/info.png';


import{
    barBackground,
} from './../../components/home_style.js';

import {Colors} from './../../styles/colors.js';


const { primary, secondary, tertiary, darkLight, brand, green, red, blue } = Colors;


export function SideBar() {
      const [currentTab, setCurrentTab] = useState("Home");
      // To get the curretn Status of menu ...
      const [showMenu, setShowMenu] = useState(false);

      // Animated Properties...

      const offsetValue = useRef(new Animated.Value(0)).current;
      // Scale Intially must be One...
      const scaleValue = useRef(new Animated.Value(1)).current;
      const closeButtonOffset = useRef(new Animated.Value(0)).current;

      return (
        <SafeAreaView style={barBackground.container}>

          <View style={{ justifyContent: 'flex-start', padding: 20 }}>
            <Image source={profile} style={{
                 width:  70,
                 height: 70,

                 borderRadius: 100,

            }}></Image>




            <View style={{  }}>
              {
                // Tab Bar Buttons....
              }

              {TabButton(currentTab, setCurrentTab, "Home", home)}
              {TabButton(currentTab, setCurrentTab, "Search", search)}
              {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
              {TabButton(currentTab, setCurrentTab, "Settings", settings)}
              {TabButton(currentTab, setCurrentTab, "About", info)}

            </View>

            <View>
              {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
            </View>

          </View>

          {
            <Text style={{
            color: 'green'}}
            ></Text>
          }

          <Animated.View style={{
            flexGrow: 1,
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 15,
            paddingVertical: 0,
            borderRadius: showMenu ? 15 : 0,
            // Transforming View...
            transform: [
              { scale: scaleValue },
              { translateX: offsetValue }
            ]
          }}>


            <Animated.View style={{
              transform: [{
                translateY: closeButtonOffset
              }]
            }}>
              <TouchableOpacity onPress={() => {
                // Do Actions Here....
                // Scaling the view...
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()

                Animated.timing(offsetValue, {
                  // YOur Random Value...
                  toValue: showMenu ? 0 : 230,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()

                Animated.timing(closeButtonOffset, {
                  // YOur Random Value...
                  toValue: !showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()

                setShowMenu(!showMenu);
              }}>

                <Image source={showMenu ? close : menu} style={{
                  width: 20,
                  height: 20,
                  tintColor: 'black',
                  marginTop: 40,

                }}></Image>

              </TouchableOpacity>

              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingTop: 15,
                paddingBottom: 5
              }}>{currentTab}</Text>


            </Animated.View>


      </Animated.View>

        </SafeAreaView>
      );
    }

    // For multiple Buttons...
    const TabButton = (currentTab, setCurrentTab, title, image) => {
      return (

        <TouchableOpacity onPress={() => {
          if (title == "LogOut") {
            // Do your Stuff...
          } else {
            setCurrentTab(title)
          }
        }}>
          <View style={{
            flexDirection: "row",
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor: currentTab == title ? 'white' : 'black',
            paddingLeft: 13,
            paddingRight: 35,
            borderRadius: 8,
            marginTop: 0
          }}>

            <Image source={image} style={{
              width: 25, height: 25,
              tintColor: currentTab == title ? "green" : "white"
            }}></Image>

            <Text style={{
              fontSize: 15,
              fontWeight: 'bold',
              paddingLeft: 15,
              color: currentTab == title ? "green" : "white"
            }}>{title}</Text>

          </View>
        </TouchableOpacity>
      );
    }
