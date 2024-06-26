import { getUserAnswers } from '@/lib/actions/answer.action'
import { SearchParamsProps } from '@/types'
import React from 'react'
import AnswerCard from '../cards/AnswerCard'
interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string;
}

const AnswerTab = async ({ searchProps, userId, clerkId }: Props) => {
  const result = await getUserAnswers({ userId })

  return (
      <>
        {result.answers.map((item) => (
          <AnswerCard
            key={item._id}
            clerkId={clerkId}
            _id={item._id}
            question={item.question}
            author={item.author}
            upvotes={item.upvotes.length}
            createdAt={item.createdAt}
          />
        ))}
      </>
  )
}

export default AnswerTab
