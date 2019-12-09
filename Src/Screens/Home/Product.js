import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { View, Text, Button, Container, Form, Label, Item, Input} from 'native-base'
import Style from '../../../Style'
import Axios from 'axios'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      stock: 0
    }
  }

  addProduct = async () => {
    try {
      const result = await Axios.post('http://192.168.0.200:3000/product', {
        name: this.state.name,
        stock: this.state.stock
      })
      console.log(result)
      this.props.navigation.goBack()
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    const { isLoading, data, name, stock } = this.state
    return (
      <Container style={{margin: 15}}>
      <View>
        <Text>{name}</Text>
        <Text>{stock}</Text>
        <Form>
          <Item floatingLabel>
            <Label>Product Name</Label>
            <Input onChangeText={value => this.setState({name: value})}/>
          </Item>
          <Item floatingLabel>
            <Label>Stock</Label>
            <Input onChangeText={value => this.setState({stock: value})}/>
          </Item>
        </Form>

      </View>
      
      <Button onPress={() => this.addProduct()} style={{margin: 15, borderRadius: 10}}>
        <Text style={{textAlign: 'center'}}>Save</Text>
      </Button>
      </Container>
    )
  }
}

export default Home
