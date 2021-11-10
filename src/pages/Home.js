import React from 'react';
import Hero from '../components/Hero';
import SearchCity from '../components/SearchCity';
import Welcome from '../components/Welcome';
import CityList from '../components/CityList';
import Footer from '../components/Footer';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      featuredCities: null,
    };
  }

  changeKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value });
  };

  getFeaturedCities = () => {
    const url = 'http://developers.zomato.com/api/v2';
    axios.get(url, {
      headers: {
        'user-key': '65c18d6c2cb5c06c8a354fa2b5171d0',
      },
      params: {
        city_ids: '74,11052,170',
      },
    });
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
          />
          <CityList title="Result" cities={citiesDummy} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
