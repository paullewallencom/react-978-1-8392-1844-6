import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Brews extends React.Component {
  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
          brand(id: "${this.props.match.params.brandId}") {
            _id
            name
            brews {
              _id
              name
              image {
                url
              }
              price
            }
          }
        }`
        }
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return <div>Brews</div>;
  }
}

export default Brews;
