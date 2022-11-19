import { useState } from 'react'
import Background from '../ui/Background'
import DesignSystemIllustration from '../slides/DesignSystemIllustration'

const IndexPage = () => {
  const [display, setDisplay] = useState<'illustration' | 'page'>(
    'illustration'
  )

  return (
    <Background
      onClick={() =>
        setDisplay(display === 'illustration' ? 'page' : 'illustration')
      }
    >
      <DesignSystemIllustration display={display} />
    </Background>
  )
}

export default IndexPage
