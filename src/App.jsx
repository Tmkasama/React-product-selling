import React, { Component } from 'react'
import Header from './components/Header'
import Items from './components/Items'
import Footer from './components/Footer'
import Categories from './components/Categories'
import ShowFullItem from './components/ShowFullItem'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Цагаан сандал',
          img: 'whitechair.webp',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          category: 'chairs',
          price: '33.99',
        },
        {
          id: 2,
          title: 'Ширээ',
          img: 'table.webp',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          category: 'tables',
          price: '54.67',
        },
        {
          id: 3,
          title: 'Буйдан',
          img: 'sofa.webp',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          category: 'sofa',
          price: '67.67',
        },
        {
          id: 4,
          title: 'Ламп',
          img: 'lights.jpg',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          category: 'light',
          price: '98.67',
        },
        {
          id: 5,
          title: 'Цагаан ширээ',
          img: 'whitetable.webp',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          category: 'tables',
          price: '154.67',
        },
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items
    
    this.addToOrder = this.addToOrder.bind(this)

    this.deleteOrder = this.deleteOrder.bind(this)

    this.chooseCategory = this.chooseCategory.bind(this)

    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onShowItem={this.onShowItem}
            onAdd={this.addToOrder}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    // console.log(category)
    if (category == 'all') {
      this.setState({
        currentItems: this.state.items,
      })
      return
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category == category),
    })
  }

  deleteOrder(id) {
    // console.log(id)
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach((el) => {
      if (el.id == item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }

    // console.log(this.state.orders)
  }
}

export default App
