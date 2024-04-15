'use server'

import User from '@/database/user.model'
import { connectToDatabase } from '../mongoose'
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from './shared.types'
import { revalidatePath } from 'next/cache'
import Question from '@/database/question.model'

export async function getUserById (params: any) {
  try {
    connectToDatabase()
    const { userId } = params
    const user = await User.findOne({ clerkId: userId })

    return user
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function createUser (userData: CreateUserParams) {
  try {
    connectToDatabase()

    const newUser = await User.create(userData)
    return newUser
  } catch (error) {
    console.log(error)
    throw error
  }
}

// Update User Server Action
export async function updateUser (params: UpdateUserParams) {
  try {
    connectToDatabase()
    const { clerkId, updateData, path } = params

    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true
    })

    revalidatePath(path)
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function deleteUser (params: DeleteUserParams) {
  try {
    connectToDatabase()
    const { clerkId } = params

    const user = await User.findOneAndDelete({ clerkId })

    if (!user) {
      throw new Error('User not found')
    }
    const userQuestionIds = await Question.find({ author: user._id }).distinct(
      '_id'
    )

    await Question.deleteMany({ author: user._id })

    // TODO: delete user answers, comments, etc

    const deletedUser = await User.findByIdAndDelete(user._id)
    return deletedUser
  } catch (err) {
    console.log(err)
    throw err
  }
}