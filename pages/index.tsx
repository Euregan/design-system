import { useState } from 'react'
import Background from '../ui/Background'
import Deck from '../ui/Deck'
import type { Slide } from '../ui/Deck'

const previous = (current: Slide): Slide => {
  switch (current) {
    case 'illustration':
      return 'illustration'
    case 'page':
      return 'illustration'
    case 'old':
      return 'page'
    case 'new':
      return 'old'
    case 'search':
      return 'new'
    case 'select':
      return 'search'
    case 'autocomplete':
      return 'select'
    case 'filteredSelect':
      return 'autocomplete'
  }
}

const next = (current: Slide): Slide => {
  switch (current) {
    case 'illustration':
      return 'page'
    case 'page':
      return 'old'
    case 'old':
      return 'new'
    case 'new':
      return 'search'
    case 'search':
      return 'select'
    case 'select':
      return 'autocomplete'
    case 'autocomplete':
      return 'filteredSelect'
    case 'filteredSelect':
      return 'filteredSelect'
  }
}

const IndexPage = () => {
  const [slide, setSlide] = useState<Slide>('page')

  return (
    <Background
      onRightClick={() => setSlide(previous(slide))}
      onLeftClick={() => setSlide(next(slide))}
    >
      <Deck display={slide} />
    </Background>
  )
}

export default IndexPage
