import React, { useState } from 'react'
import Addtodo from '../components/Addtodo'
import Todoos from '../components/Todoos'

const page = () => {
  return (
    <div>
      <main>
        TODO APP WITH NEXT + TYPESCRIPT
        <Addtodo/>
        <Todoos/>
      </main>
    </div>
  )
}

export default page
