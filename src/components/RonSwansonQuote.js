import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

const RonSwansonQuote = (props) => {
  return (
    <Feed.Event>
      <Feed.Content>
        <Feed.Summary>
          {props.quote}
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  )
}

export default RonSwansonQuote
