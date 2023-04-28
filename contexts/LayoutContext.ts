import { Layout } from '@/types'
import { createContext } from 'react'

const LayoutContext = createContext<Layout | null>(null)

export default LayoutContext