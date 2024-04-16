'use server'
import { revalidatePath } from 'next/cache'
import { connectToDatabase } from '../mongoose'
import { CreateAnswerParams } from './shared.types'
import Answer from '@/database/answer.model'
import Question from '@/database/question.model'

export async function createAnswer (params: CreateAnswerParams) {
  try {
    connectToDatabase()

    const { content, author, question, path } = params
    const newAnswer = new Answer({
      content,
      author,
      question,
      path
    })

    await Question.findByIdAndUpdate(question, {
      $push: { answers: newAnswer._id }
    })

    // TODO : Add Interactions
    revalidatePath(path)
  } catch (err) {
    console.log(err)
    throw err
  }
}
