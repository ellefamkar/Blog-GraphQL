import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
    query {
        posts {
            author {
                name
                avatar {
                    url
                }
            }
            title
            slug
            id
            coverPhoto {
                url
            }
        }
}`;

const GET_AUTHORS_INFO = gql`
    query {
        authors {
            id
            name
            slug
            avatar {
                url
            }
        }
    }
`;

const GET_AUTHOR_INFO = gql`
    query getAuthorInfo($slug: String!) {
        author(where: {slug: $slug}) {
            avatar {
                url
            }
            field
            name
            description {
                html
            }
            post {
                coverPhoto {
                    url
                }
                slug
                id
                title
            }
        }
    }
`

const GET_BLOG_INFO = gql`
    query getBlogInfo($slug: String!) {
        post(where: {slug: $slug}) {
            author {
                name
                avatar {
                    url
                }
                field
            }
            content {
                html
            }
            coverPhoto {
                url
            }
            title
        }
}
`




export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_BLOG_INFO };