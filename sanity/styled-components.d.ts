import 'styled-components'
import type {useTheme} from '@sanity/ui'

type SanityTheme = ReturnType<typeof useTheme>

declare module 'styled-components' {
  export interface DefaultTheme extends SanityTheme {}
}
