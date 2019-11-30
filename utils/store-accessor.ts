import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import MyModule from '~/store/mymodule'

/* eslint import/no-mutable-exports: 0 */
let myModule: MyModule

function initialiseStores(store: Store<any>): void {
  myModule = getModule(MyModule, store)
}

export { initialiseStores, myModule }
