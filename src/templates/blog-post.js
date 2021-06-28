import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {graphql} from "../../.cache/gatsby-browser-entry";

const Container = styled.div`
  display: flex;
`
const Title = styled.h1`
  display: flex;
`
class BlogPost extends Component {
  contentfulBlog;
  render() {
    const { title } = this.props.data.contentfulBlog
    return (
      <Container>
        <Title>{title}</Title>
      </Container>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const Query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
    }
  }
`
