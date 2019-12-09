import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import Product from '../Screens/Home/Product'

const HomeNavigation = createStackNavigator({
  Home,
  Profile,
  Product
}, {
  headerMode: 'none',
  initialRouteName: 'Home'
})

export default createAppContainer(HomeNavigation)
