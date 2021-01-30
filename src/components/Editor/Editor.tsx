import React, { ReactElement } from 'react'

interface Props {
    /** Initial Content of the Editor */
    initialContent?: string
}

export default function Editor({ initialContent }: Props): ReactElement {
  return (
    <div>
      {initialContent && <p>P</p>}
      <h1>Here is the editor Component</h1>
    </div>
  )
}

Editor.defaultProps = {
  initialContent: undefined,
}

