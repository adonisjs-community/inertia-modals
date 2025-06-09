import { PageObject } from '@adonisjs/inertia/types'

declare module '@adonisjs/inertia/types' {
  interface Inertia {
    render<
      TPageProps extends Record<string, any> = {},
      TViewProps extends Record<string, any> = {},
    >(
      component: string,
      pageProps?: TPageProps,
      viewProps?: TViewProps
    ): Promise<string | PageObject<TPageProps>>
  }
}
