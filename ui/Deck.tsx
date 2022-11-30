import type { ReactElement } from 'react'
import DesignSystemIllustration from './DesignSystemIllustration'
import DemoSite from './DemoSite'
import Stack from './Stack'

export type Slide =
  | 'illustration'
  | 'page'
  | 'old'
  | 'new'
  | 'search'
  | 'select'
  | 'autocomplete'
  | 'filteredSelect'
  | 'filters'
  | 'stack'
  | 'reactAria'
  | 'vanillaExtract'
  | 'storybook'
  | 'eslint'

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
    case 'filters':
      return <DemoSite display={display} />

    case 'stack':
    case 'reactAria':
    case 'vanillaExtract':
    case 'storybook':
    case 'eslint':
      return <Stack display={display} />
  }
}

export default Deck
