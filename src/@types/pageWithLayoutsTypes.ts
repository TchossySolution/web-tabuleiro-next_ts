import { NextPageContext } from 'next'
import { AppProps } from 'next/app'

import { ReactElement } from 'react'

import RootRestaurantLayout from '../Layout/RootRestaurantLayout'
import RootTabuleiroLayout from '../Layout/RootTabuleiroLayout'

export type PageWithTabuleiroLayoutType = NextPageContext & {
  layout: typeof RootTabuleiroLayout
}
export type PageWithRestaurantLayoutType = NextPageContext & {
  layout: typeof RootRestaurantLayout
}

export type PageWithLayoutType =
  | PageWithTabuleiroLayoutType
  | PageWithRestaurantLayoutType

export type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}

export type LayoutProps = ({
  children
}: {
  children: ReactElement
}) => ReactElement
