import { ReactNode } from 'react'

export interface tabHeaderType {
  text: string | ReactNode,
  operate?: undefined | ReactNode,
  publish?: undefined | boolean
}