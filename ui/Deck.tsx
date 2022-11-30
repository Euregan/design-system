import type { ReactElement } from 'react'
import DesignSystemIllustration from './DesignSystemIllustration'
import DemoSite from './DemoSite'

export type Slide =
  | 'illustration'
  | 'page'
  | 'old'
  | 'new'
  | 'search'
  | 'select'
  | 'autocomplete'
  | 'filteredSelect'

interface Props {
  display: Slide
}

const Deck = ({ display }: Props): ReactElement => {
  switch (display) {
    case 'illustration':
    case 'page':
      return <DesignSystemIllustration display={display} />

    case 'old':
    case 'new':
    case 'search':
    case 'select':
    case 'autocomplete':
    case 'filteredSelect':
      return <DemoSite display={display} />
  }
}

export default Deck
