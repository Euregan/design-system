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
    case 'filters':
      return 'filteredSelect'
    case 'stack':
      return 'filters'
    case 'reactAria':
      return 'stack'
    case 'vanillaExtract':
      return 'reactAria'
    case 'storybook':
      return 'vanillaExtract'
    case 'eslint':
      return 'storybook'
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
      return 'filters'
    case 'filters':
      return 'stack'
    case 'stack':
      return 'reactAria'
    case 'reactAria':
      return 'vanillaExtract'
    case 'vanillaExtract':
      return 'storybook'
    case 'storybook':
      return 'eslint'
    case 'eslint':
      return 'eslint'
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
