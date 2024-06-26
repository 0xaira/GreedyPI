'use client'
import {
  downvoteQuestion,
  upvoteQuestion
} from '@/lib/actions/question.action'
import { toggleSaveQuestion } from '@/lib/actions/user.action'
import { formatAndDivideNumber } from '@/lib/utils'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { viewQuestion } from '@/lib/actions/interaction.action'

interface Props {
  type: string;
  itemId: string;
  userId: string;
  upvotes: number;
  hasupVoted: boolean;
  downvotes: number;
  hasdownVoted: boolean;
  hasSaved?: boolean;
}

const Votes = ({
  type,
  itemId,
  userId,
  upvotes,
  hasupVoted,
  downvotes,
  hasdownVoted,
  hasSaved
}: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  const handleSaved = async () => {
    await toggleSaveQuestion({
      userId: JSON.parse(userId),
      questionId: JSON.parse(itemId),
      path: pathname
    })
  }
  const handleVote = async (action: string) => {
    if (!userId) {
      return
    }

    if (action === 'upvote') {
      if (type === 'Question') {
        await upvoteQuestion({
          questionId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname
        })
      } else if (type === 'Answer') {
        // await upvoteAnswer({
        //   questionId: JSON.parse(itemId),
        //   userId: JSON.parse(userId),
        //   hasupVoted,
        //   hasdownVoted,
        //   path: pathname,
        // });
      }

      // todo: TOAST
    } else if (action === 'downvote') {
      if (type === 'Question') {
        await downvoteQuestion({
          questionId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname
        })
      } else if (type === 'Answer') {
        // await upvoteAnswer({
        //   questionId: JSON.parse(itemId),
        //   userId: JSON.parse(userId),
        //   hasupVoted,
        //   hasdownVoted,
        //   path: pathname,
        // });
      }

      // todo: TOAST
    }
  }
  useEffect(() => {
    viewQuestion({
      questionId: JSON.parse(itemId),
      userId: userId ? JSON.parse(userId) : undefined
    })
  }, [itemId, userId, pathname, router])
  return (
    // All Container
    <div className="flex gap-5">
      {/* upvote downvote container */}
      <div className="flex-center gap-2.5 ">
        {/* Upvote container */}
        <div className="flex-center gap-1.5">
          <Image
            src={
              hasupVoted
                ? '/assets/icons/upvoted.svg'
                : '/assets/icons/upvote.svg'
            }
            width={18}
            height={18}
            alt="upvote"
            className="cursor-pointer"
            onClick={() => {
              handleVote('upvote')
            }}
          />
          <div className="flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1">
            <p className="subtle-medium text-dark400_light900">
              {formatAndDivideNumber(upvotes)}
            </p>
          </div>
        </div>

        {/* Downvote container */}
        <div className="flex-center gap-1.5">
          <Image
            src={
              hasdownVoted
                ? '/assets/icons/downvoted.svg'
                : '/assets/icons/downvote.svg'
            }
            width={18}
            height={18}
            alt="downvote"
            className="cursor-pointer"
            onClick={() => {
              handleVote('downvote')
            }}
          />
          <div className="flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1">
            <p className="subtle-medium text-dark400_light900">
              {formatAndDivideNumber(downvotes)}
            </p>
          </div>
        </div>
      </div>

      <Image
        src={
          hasSaved
            ? '/assets/icons/star-filled.svg'
            : '/assets/icons/star-red.svg'
        }
        width={18}
        height={18}
        alt="save"
        className="cursor-pointer"
        onClick={handleSaved}
      />
    </div>
  )
}

export default Votes
