import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BABACA',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header: {
    height: Platform.OS === 'ios' ? 70 : 50,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#770099',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  footer: {
    height: Platform.OS === 'ios' ? 70 : 50,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#770099',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  posts: {
    padding: 15,
    marginBottom: 15,
  },
  post: {
    padding: 20,
    backgroundColor: '#DDDDDD',
    height: 110,
    marginBottom: 10
  },
  title: {
    color: '#333333',
    fontSize: 15,
    fontWeight: 'bold',
  },
  author: {
    marginBottom: 5,
    color: '#999999',
    fontSize: 12,
  },
  descriptionBody: {
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    padding: 5,
  },
  description: {
    marginTop: 5,
    color: '#666666',
    fontSize: 12,
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Post da KB 111',
        description: 'Uma descrição legal',
        author: 'Autor desconhecido',
      },
      {
        id: 2,
        title: 'Post da KB',
        description: 'Outra descrição',
        author: 'Autor desconhecido',
      },
      {
        id: 3,
        title: 'Post da KB',
        description: 'Outra descrição',
        author: 'Autor desconhecido',
      },
      {
        id: 4,
        title: 'Post da KB',
        description: 'Outra descrição',
        author: 'Autor desconhecido',
      },
      {
        id: 5,
        title: 'Post da KB',
        description: 'Outra descrição',
        author: 'Autor desconhecido',
      },
    ],
  };

  addNewPost = () => {
    this.setState({
      posts: [...this.state.posts, {
        id: Math.random(),
        title: 'Novo post da KB ',
        description: 'Descrição',
        author: 'Autor desconhecido',
      }]
    });
  }

  delPost = (id) => {
    this.setState({
      posts: [...this.state.posts.filter(post => (post.id !== id))],
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Aplicativo do Knowledge basket</Text>
        </View>

        <ScrollView style={styles.posts}>
          {posts.map(post => (
            <TouchableOpacity style={styles.post} key={post.id} onPress={() => this.delPost(post.id)}>
              <Text style={styles.title} >{post.title}</Text>
              <Text style={styles.author}>{post.author}</Text>
              <ScrollView style={styles.descriptionBody}>
                <Text style={styles.description}>{post.description}</Text>
              </ScrollView>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.footer} onPress={this.addNewPost}>
          <Text style={styles.footerText}>Adicionar post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
