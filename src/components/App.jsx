import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './SearchBar/SearchBar';
import { Button } from './Button/Button';
import FetchImages from 'Helpers/PixabayAPI';

export default class App extends Component {
  state = {
    gallery: [],
    page: 1,
    per_page: 12,
    query: '',
    loading: false,
  };
  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (prevState.page !== page) {
      this.setState({ loading: true });
      try {
        const arr = await FetchImages(page, query);
        this.setState(prev => ({ gallery: [...prev.gallery, ...arr] }));
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const { page, per_page } = this.state;
      const arr = await FetchImages(page);
      this.setState({
        gallery: arr,
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState({ loading: false });
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query !== e.target.elements.search.value) {
      this.setState(prev => ({
        query: e.target.elements.search.value,
        page: 1,
        gallery: [],
      }));
    } else {
      alert('you already here');
    }
  };
  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { gallery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery gallery={gallery} />
        <Button onLoadMore={this.handleLoadMore} />
      </>
    );
  }
}
