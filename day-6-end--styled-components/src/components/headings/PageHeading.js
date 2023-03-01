// 1 ONE
import styled from 'styled-components'

// styled.h2 create for me an h2 element

const PageHeading = styled.h2`
  //color: #3c7a89;
  color: ${function (props) { // 4 Four :::  This is how to use the theme value
    return props.theme.primaryColour
  }};

  //Arrow syntax way
  color: ${(props) => props.theme.primaryColour};
`

export default PageHeading;
