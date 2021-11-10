import React from 'react';
import Hero from '../components/Hero';
import SearchCity from '../components/SearchCity';
import Welcome from '../components/Welcome';
import CityList from '../components/CityList';
import Footer from '../components/Footer';
import axios from 'axios';
import { API } from '../config/api';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      featuredCities: null,
      citiesResultSearch: null,
      cityKeywordSearch: '',
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

  changeKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value });
  };

  searchHandler = (event) => {
    const keyword = this.state.keyword;

    const url = `${API.zomato.baseUrl}/cities`;
    axios
      .get(url, {
        headers: {
          'user-key': API.zomato.api_key,
        },
        params: {
          q: keyword,
        },
      })
      .then(({ data }) => {
        if (data.status === 'success') {
          this.setState({
            citiesResultSearch: data.location_suggestions,
            keyword: '',
            citiesKeywordSearch: keyword,
          });
        }
      })
      .catch((e) => console.log(e));
  };
  render() {
    const citiesDummy = [
      {
        id: 72,
        name: 'Jakarta',
        country_name: 'Indonesia',
      },
      {
        id: 99,
        name: 'Bandung',
        country_name: 'Indonesia',
      },
      {
        id: 102,
        name: 'Bali',
        country_name: 'Indonesia',
      },
    ];

    return (
      <React.Fragment>
        <Hero />
        <Welcome />
        <div className="container mt-3 mb-3">
          <CityList
            cities={this.state.featuredCities}
            title="Featured Cities"
          />
          <SearchCity
            value={this.state.keyword}
            onChangeKeywordHandler={this.changeKeywordHandler}
            onClickSearch={this.searchHandler}
          />
          {this.state.cityKeywordSearch !== '' && (
            <CityList
              title="Result"
              cities={this.state.citiesResultSearch}
              showSubtitle={true}
              subtitle={this.state.cityKeywordSearch}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
