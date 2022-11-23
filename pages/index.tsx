import { useState } from 'react'
import Background from '../ui/Background'
import DemoSite from '../ui/DemoSite'
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
      {false && <DesignSystemIllustration display={display} />}
      <DemoSite />
    </Background>
  )
}

export default IndexPage
