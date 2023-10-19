import { gql } from '@apollo/client';

const getAllBranches = gql`
  query {
    filiais(pagination: { limit: 30 }) {
      data {
        attributes {
          label
          telefone
          celular
          endereco
          mapa
          estado {
            data {
              attributes {
                label
                uf
              }
            }
          }
          id_filial
        }
      }
    }
  }
`;

const getAllCategories = gql`
  query {
    categories {
      data {
        attributes {
          name
          slug
        }
      }
    }
  }
`;

const getAllPosts = gql`
  query ($page: Int!, $pageSize: Int!) {
    blogPosts(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "publishedAt:desc"
    ) {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
          title
          publishedAt
          description
          slug
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;

const getAllSlides = gql`
  query {
    slideshows {
      data {
        attributes {
          banner_desktop {
            data {
              attributes {
                url
              }
            }
          }
          banner_mobile {
            data {
              attributes {
                url
              }
            }
          }
          link
        }
      }
    }
  }
`;

const getAllStates = gql`
  query {
    estados {
      data {
        attributes {
          uf
          label
        }
      }
    }
  }
`;

const getDistribuidor = gql`
  query ($distribuidor: String!) {
    distribuidores(filters: { distribuidor: { eq: $distribuidor } }) {
      data {
        id
        attributes {
          distribuidor
          title
        }
      }
    }
  }
`;

const getFaqsBySegment = gql`
  query ($segmento: String) {
    faqs(filters: { segmento: { eq: $segmento } }) {
      data {
        attributes {
          segmento
          faq {
            id
            question
            answer
          }
        }
      }
    }
  }
`;

const getPost = gql`
  query ($slug: String!) {
    blogPosts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
          content
          publishedAt
        }
      }
    }
  }
`;

const getPostsByCategory = gql`
  query ($category: String!, $page: Int!, $pageSize: Int!) {
    blogPosts(
      filters: { category: { slug: { eq: $category } } }
      pagination: { page: $page, pageSize: $pageSize }
      sort: "publishedAt:desc"
    ) {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
          title
          publishedAt
          description
          slug
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;

const getProductsById = gql`
  query ($produto: String) {
    produtos(filters: { id_produto: { eq: $produto } }) {
      data {
        attributes {
          id_produto
          nome
          valor
          valor_desconto
          percentual_desconto
          valor_com_desconto
          certificado {
            data {
              attributes {
                tipo
              }
            }
          }
          descricao
        }
      }
    }
  }
`;

const getProductsByType = gql`
  query ($tipo: String) {
    produtos(filters: { certificado: { tipo: { eq: $tipo } } }) {
      data {
        attributes {
          id_produto
          nome
          valor
          valor_desconto
          percentual_desconto
          valor_com_desconto
          certificado {
            data {
              attributes {
                tipo
              }
            }
          }
          descricao
        }
      }
    }
  }
`;

const getQuestions = gql`
  query {
    faq {
      data {
        id
        attributes {
          itens {
            id
            question
            answer
          }
        }
      }
    }
  }
`;

const getSegment = gql`
  query ($slug: String!) {
    segmentos(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          generic {
            generic
            thumb {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
          theme {
            first_color
            second_color
            third_color
            fourth_color
            icon_color
          }
          hero {
            slug
            title
            description
            image {
              data {
                attributes {
                  height
                  url
                  width
                }
              }
            }
          }
          vantagem {
            title
            subtitle
            description
          }
          card {
            id
            icon
            title
            description
            third
          }
          produto {
            id
            image {
              data {
                attributes {
                  height
                  url
                  width
                }
              }
            }
            title
            description
            link_vimeo
          }
          loja {
            name
            title
            description
            link_google
            link_apple
            image {
              data {
                attributes {
                  height
                  url
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

const getTestimonies = gql`
  query {
    depoimentos {
      data {
        id
        attributes {
          name
          rule
          description
        }
      }
    }
  }
`;

export {
  getAllBranches,
  getAllCategories,
  getAllPosts,
  getAllSlides,
  getAllStates,
  getDistribuidor,
  getFaqsBySegment,
  getPost,
  getPostsByCategory,
  getProductsById,
  getProductsByType,
  getQuestions,
  getSegment,
  getTestimonies
};
