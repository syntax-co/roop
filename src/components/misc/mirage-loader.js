import { useEffect } from 'react'



export default function MirageLoader({size=80,color='white'}) {

  useEffect(() => {
    async function getLoader() {
      const { mirage } = await import('ldrs')
      mirage.register()
    }
    getLoader()
  }, [])

  return (
    <div className='w-full h-full
    flex items-center justify-center'
    >
      <l-mirage 
      color="white"
      size={80}
      >

      </l-mirage>
    </div>
  )
}