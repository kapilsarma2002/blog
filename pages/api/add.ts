import { validateRoute } from "../../lib/auth"
import { useState } from 'react'
import prisma from "../../lib/prisma"
import process from "process"

export default validateRoute(async (req: any, res: any, user: any) => {

  const { title, desc, content } = req.body;
  const id = user.userId
  // const { REACT_APP_SUPER_KEY } = process.env;  
  // const key = REACT_APP_SUPER_KEY as string


  try {

    const _ = await prisma.blog.create({
      data: {
        authorId: id,
        title: title,
        desc: desc,
        content: content
      }
    })
  
    res.json('successfully added to database!')

  } catch(e) {
    res.status(402)
    res.json('blog could not be added!')
  }
})
