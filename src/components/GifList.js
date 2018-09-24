import React from 'react'

function GifList(props){
  return (
    <ul>{props.list.map(gif => {
      return <li><img src={gif.images.original.url} /></li>
    })}</ul>
  )
}

export default GifList