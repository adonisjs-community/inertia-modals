import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { Modal } from '../src/modal.js'

const status = 302

export default class RedirectMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const originalRedirectBack = ctx.response.redirect().back

    ctx.response.redirect().back = function (...args: any[]) {
      console.log('Redirect back intercepted:', args)
      const baseUrl = ctx.request.header(Modal.HEADER_BASE_URL)

      if (baseUrl) {
        const headers = ctx.request.headers()
        Object.entries(headers).forEach(([key, value]) => {
          if (!value) return
          ctx.response.safeHeader(key, value)
        })
        return ctx.response.redirect(baseUrl, undefined, status)
      }

      return originalRedirectBack.apply(this)
    }

    await next()
  }
}
