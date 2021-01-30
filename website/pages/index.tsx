import React, { ReactElement } from 'react'
import { Editor } from '../../src/components/Editor'

interface Props {
    
}

export default function Home({}: Props): ReactElement {
    return (
        <div>
            <h1>Testing Website</h1>
            <Editor />
        </div>
    )
}
