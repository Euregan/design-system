import { useState } from 'react'
import Background from '../ui/Background'
import DemoSite from '../ui/DemoSite'
import Browser from '../ui/Browser'

import DesignSystemIllustration from '../slides/DesignSystemIllustration'

type Slide =
  | 'illustration'
  | 'page'
  | 'old'
  | 'new'
  | 'search'
  | 'select'
  | 'autocomplete'

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
      return 'autocomplete'
  }
}

const IndexPage = () => {
  const [illustrationDisplay, setIllustrationDisplay] = useState<
    'illustration' | 'page'
  >('illustration')
  const [demoDisplay, setDemoDisplay] = useState<'old' | 'new'>('old')
  const [slide, setSlide] = useState<Slide>('search')

  return (
    <Background
      onClick={() => {
        setIllustrationDisplay(
          illustrationDisplay === 'illustration' ? 'page' : 'illustration'
        )
        setDemoDisplay(demoDisplay === 'old' ? 'new' : 'old')
        setSlide(next(slide))
      }}
    >
      {false && <DesignSystemIllustration display={illustrationDisplay} />}
      <DemoSite display={'search'} />
    </Background>
  )
}

export default IndexPage
