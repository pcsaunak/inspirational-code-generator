import Head from 'next/head'
import { GradientBackgroundCon } from '@/components/QuoteGenerator/QuoteGeneratorElements'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="This is a sample project for Quote Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>

      </GradientBackgroundCon>
    </>
  )
}
