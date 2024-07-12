'use client'
import { HomePageFilters } from '@/constants/filters'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import { formUrlQuery } from '@/lib/utils'

const HomeFilters = () => {
  const [active, setActive] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleTypeClick = (item: string) => {
    if (active === item) {
      setActive('')
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'filter',
        value: null
      })
      router.push(newUrl, { scroll: false })
    } else {
      setActive(item)
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'filter',
        value: item.toLowerCase()
      })

      router.push(newUrl, { scroll: false })
    }
  }

  return (
    <div className="mt-11 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((filter) => {
        return (
          <Button
            key={filter.value}
            onClick={() => {
              handleTypeClick(filter.value)
            }}
            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
              active === filter.value
                ? 'bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400'
                : 'background-light800_dark300 text-light-500 hover:bg-light-800 dark:text-light-500 dark:hover:bg-dark-300'
            }`}
          >
            {filter.name}
          </Button>
        )
      })}
    </div>
  )
}

export default HomeFilters