import { useState } from 'react'
import Background from '../ui/Background'
import DemoSite from '../ui/DemoSite'
import DesignSystemIllustration from '../slides/DesignSystemIllustration'

const IndexPage = () => {
  const [illustrationDisplay, setIllustrationDisplay] = useState<
    'illustration' | 'page'
  >('illustration')
  const [demoDisplay, setDemoDisplay] = useState<'old' | 'new'>('old')

  return (
    <Background
      onClick={() => {
        setIllustrationDisplay(
          illustrationDisplay === 'illustration' ? 'page' : 'illustration'
        )
        setDemoDisplay(demoDisplay === 'old' ? 'new' : 'old')
      }}
    >
      {false && <DesignSystemIllustration display={illustrationDisplay} />}
      <DemoSite display={demoDisplay} />
    </Background>
  )
}

export default IndexPage
