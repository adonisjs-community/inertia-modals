import { HttpContext } from '@adonisjs/core/http'

export class Modal extends HttpContext {
  static HEADER_MODAL = 'X-Inertia-Modal'
  static HEADER_BASE_URL = 'X-Inertia-Modal-Base-Url'
  static HEADER_USE_ROUTER = 'X-Inertia-Modal-Use-Router'
}
