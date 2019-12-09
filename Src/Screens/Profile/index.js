import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import Style from '../../../Style'

class Profile extends Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    this.setState({name: this.props.navigation.getParam('name')})
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Text style={Style.customText}>
          Welcome {this.state.name}
        </Text>
        <Button
          title='Back'
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

export default Profile
