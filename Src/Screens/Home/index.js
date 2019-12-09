import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { View, Text, Button, Container, Content, Card } from 'native-base'
import Style from '../../../Style'
import Axios from 'axios'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentDidMount() {
    this.getData()
    
    this.subs = [
      this.props.navigation.addListener('willFocus', () => {
        this.setState({isLoading: false})
        this.getData()
      })
    ]
  }

  getData = async () => {
    try {
      const result = await Axios.get('http://192.168.0.200:3000/product')
      console.log(result.data)
      this.setState({data: result.data.result, isLoading: false})
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    const { isLoading, data } = this.state
    return (
      <Container style={{backgroundColor: '#3498db'}}>
      {isLoading ? (
        <ActivityIndicator size='large' style={{flex: 1, backgroundColor: '#f5f5f5', opacity: 0.5}} color='#e74c3c' />
      ):(
        <View style={{margin: 15}}>
          {data.map(product => (
            <Card style={{padding: 5, elevation: 0, borderRadius: 10}} key={product.id}>
              <Text>Name: {product.name}</Text>
              <Text>Stock: {product.stock}</Text>
            </Card>
          ))}
          
        </View>      
      )}
      <Button 
        onPress={() => this.props.navigation.navigate('Product')}
        style={{margin: 15, borderRadius: 10}}>
        <Text style={{textAlign: 'center'}}>Add Product</Text>
      </Button>
      </Container>
    )
  }
}

export default Home
