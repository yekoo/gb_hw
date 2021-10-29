import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavoritesAmount, UserProps } from './user.js'
import { renderToast } from './lib.js'


window.addEventListener('DOMContentLoaded', () => {
  const user: UserProps = getUserData();
  // const userName = user.username;
  const favoritBooks: number = getFavoritesAmount();
  renderUserBlock(user.username, user.avatarURL, favoritBooks);

  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})