import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('extysq','img/avatar.png', 8)
  const nowDate = new Date();
  //const dateIn = formatNowDate(nowDate);
  //const dateOut = formatMaxDate(nowDate);
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})


/*function formatNowDate(nowDate:any){
  // const nowDate = new Date(time);
  //  2021-05-11
  const year = nowDate.getFullYear();

  let month:any = nowDate.getMonth()+1;
  if(month<10)
    month = "0"+month;

  let date:any = nowDate.getDate();
  if(date<10)
    date =  "0"+date;

  
  return year+"-"+month+"-"+date;
}*/

/*function formatMaxDate(nowDate:any){
  const tempDate = new Date(nowDate.getTime());
  if(tempDate.getMonth()==12){
    tempDate.setMonth(1)
  }
  return "2021-11-20";
}
const nowTime = Date.now();
const nowDate = formatNowDate(nowTime);
const maxDate = formatMaxDate(nowTime);
*/