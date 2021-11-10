import axios from 'axios';
import React from 'react';
import { API } from '../config/api';

class City extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
    };
  }

  getCityData = (city_id) => {
    const url = `${API.zomato.baseUrl}/cities`;

    axios
      .get(url, {
        headers: {
          'user-key': API.zomato.api_key,
        },
        params: {
          city_ids: `${city_id}`,
        },
      })
      .then(({ data }) => {
        const city = data.location_suggestions[0];
        this.setState({ city });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    const { city_id } = this.props.match.params;
    console.log(this.props.match.params);
    this.getCityData(city_id);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          {this.state.city ? (
            <div className="row">
              <div className="col">
                <h4 className="text-success">
                  Restaurant in {this.state.city.name},
                  {this.state.city.country_name}
                </h4>
              </div>
            </div>
          ) : (
            <h4 className="text-danger py-5">City not found!</h4>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default City;
