import { useState } from 'react'

import Wrapper from '../../common/Wrapper/Wrapper'
import Sidebar from '../../common/Sidebar/Sidebar'

const initialPoints = [
  { title: 'Route 111', id: Math.random().toString(36).slice(-6), order: 1 },
  { title: 'Route 222', id: Math.random().toString(36).slice(-6), order: 2 },
  { title: 'Route 333', id: Math.random().toString(36).slice(-6), order: 3 },
]

const Main = () => {
  const [points, setPoints] = useState(initialPoints)

  return (
    <Wrapper>
      <Sidebar points={points} setPoints={setPoints} />
      <section className='yandex-map'>
        {points.map((point) => {
          return <p key={point.id}>{point.title}</p>
        })}
      </section>
    </Wrapper>
  )
}

export default Main
