import axios from 'axios';
import React from 'react';
import CityList from '../components/CityList';
import Hero from '../components/Hero';
import SearchRestaurant from '../components/SearchRestaurant';
import Welcome from '../components/Welcome';
import { API } from '../config/api';
import citiesDummy from '../data/citiesDummy';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      featuredCities: null,
      restauantsResultSearch: null,
      restaurants: null,
      keywordSearch: '',
    };
  }

  changeKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value });
  };

  getFeaturedCities = () => {
    const url = `${API.zomato.baseUrl}/cities`;
    axios
      .get(url, {
        headers: {
          'user-key': API.zomato.api_key,
        },
        params: {
          city_ids: '74,11052,170',
        },
      })
      .then(({ data }) => {
        if (data.state === 'success') {
          this.setState({ featuredCities: data.location_suggestions });
        }
      });
  };
  getRestaurants = () => {
    axios
      .get(API.zomato.baseUrl + '/list')
      .then(({ data }) => {
        const restaurants = data.restaurants;
        this.setState({ restaurants });
      })
      .catch((e) => console.log(e));
  };
  searchHandler = (event) => {
    const keyword = this.state.keyword;

    const url = `${API.zomato.baseUrl}/search`;
    axios
      .get(url, {
        params: {
          q: keyword,
        },
      })
      .then(({ data }) => {
        const restaurants = data.restaurants;
        this.setState({
          restaurants,
          keyword: '',
          citiesKeywordSearch: keyword,
        });
      })
      .catch((e) => console.log(e));
  };

  componentDidMount() {
    console.log('componentDidMount()');
    this.getRestaurants();
  }
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Welcome />
        <div className="container mt-3 mb-3">
          <CityList cities={citiesDummy} title="Featured Cities" />
          <SearchRestaurant
            value={this.state.keyword}
            onChangeKeywordHandler={this.changeKeywordHandler}
            onClickSearch={this.searchHandler}
          />
          {this.state.keywordSearch !== '' ? (
            <CityList
              title="Result"
              cities={this.state.restauantsResultSearch}
              showSubtitle={true}
              subtitle={this.state.keywordSearch}
            />
          ) : (
            <CityList cities={this.state.restaurants} />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
