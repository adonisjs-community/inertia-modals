/*
|--------------------------------------------------------------------------
| Configure hook
|--------------------------------------------------------------------------
|
| The configure hook is called when someone runs "node ace configure <package>"
| command. You are free to perform any operations inside this function to
| configure the package.
|
| To make things easier, you have access to the underlying "ConfigureCommand"
| instance and you can use codemods to modify the source files.
|
*/

import ConfigureCommand from '@adonisjs/core/commands/configure'

export async function configure(command: ConfigureCommand) {
  const codemods = await command.createCodemods()

  await codemods.updateRcFile((rcFile) => {
    rcFile.addProvider('@adonisjs-community/inertia-modals/providers/modal_provider')
  })

  await codemods.registerMiddleware('router', [
    {
      name: 'redirect_middleware',
      path: '@adonisjs-community/inertia-modals/middlewares/redirect_middleware',
    },
  ])
}
