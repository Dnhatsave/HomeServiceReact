import { request, gql } from 'graphql-request'

const MASTER_URL = 'https://api-sa-east-1.hygraph.com/v2/clsei8kur165x01w6gebclo2p/master'

const getSlider = async() =>{
    const query = gql`
    query Sliders {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
`
    const result = await request(MASTER_URL, query);
    return result;
}

const getCategories = async() => {
  const query = gql`
  query getCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  `

  const result = await request(MASTER_URL, query);
  return result;
}


const getBusinessList = async() => {
  const query = gql`
  query getBusinessList {
    businessLists {
      id
      name
      email
      contactPerson
      category {
        name
      }
      about
      adress
      images {
        url
      }  
    }
  }
  
  `

  const result = await request(MASTER_URL, query);
  return result;
}

export default{
    getSlider,
    getCategories,
    getBusinessList
}
