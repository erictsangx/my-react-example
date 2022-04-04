import React, { memo, useState } from 'react'

interface CounterProps {
  title: string
  defaultCount?: number
}

function Counter({ title, defaultCount = 0 }: CounterProps) {
  const [count, setCount] = useState(defaultCount)

  console.log(`render Counter: ${title}`)

  return (
    <div className="border p-2">
      <button
        className="border"
        type="button"
        onClick={() => setCount((c) => c + 1)}
      >
        {title}: {count}
      </button>
    </div>
  )
}

const MemoCounter = memo(Counter)

export function MemoExample(): JSX.Element {
  const [count, setCount] = useState(0)

  console.log(`render parent`)

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="border p-2 col-span-2">
        <button
          className="border"
          type="button"
          onClick={() => setCount((c) => c + 1)}
        >
          parent: {count}
        </button>
      </div>
      <Counter title="non-memo" />
      <MemoCounter title="memo" />

      <Counter defaultCount={10} title="non-memo with default count" />
      <MemoCounter defaultCount={10} title="memo with default count" />
    </div>
  )
}
