import { renderBlock } from './lib.js'

// export function renderUserBlock (favoriteItemsAmount) {
export function renderUserBlock (userName:string, avatarURL:string, favoriteItemsAmount:number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarURL}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}

export interface UserProps {
  username: string
  avatarURL: string
}

export function getUserData():UserProps{
  //  через консоль браузера пришлось разместить эти значения :)
  //  window.localStorage["user"] = '{"username":"Ivan", "avatarURL":"./img/avatar.png"}'

  const localUserDataString:unknown = window.localStorage['user'];
  const localUserData:UserProps = JSON.parse(String(localUserDataString));
  return localUserData;
}

export function getFavoritesAmount():number{
  const localAmountString:unknown = window.localStorage['favoritesAmount'];
  // if(typeof localAmountString === "number" )
  return Number(localAmountString);
}