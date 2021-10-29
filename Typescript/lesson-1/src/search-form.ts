import { renderBlock } from './lib.js'

export function renderSearchFormBlock () {
  const nowDate = new Date();
  const nextDay = getNextDayForIn(nowDate); //
  const maxDate = formatMaxDate(nowDate);   //
  const curDate = formaliseDate(nowDate);   //
  const outDate = getDayForOut(nowDate); //  curDate + 2 days

  // const maxOut = 
  

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${nextDay}" min="${curDate}" max="${maxDate}" name="checkin" onchange="updateOutInputLimits"/>
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${outDate}" min="${outDate}" max="${maxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}


//  Лучше сделать возвращаемые значени -- Даты, а уже в разметке их оборачивать форматировалкой 
//  Хотя, раз уж инпуты будут меняться, то лучше делать вычисления забирая значения прямо из нужных инпутов
function formatMaxDate(nowDate:any){
  const tempDate = new Date(nowDate);
  tempDate.setMonth(nowDate.getMonth()+2);
  //const oneDayTime = 1000*60*60*24;
  //tempDate.setTime(tempDate.getTime()-oneDayTime);
  tempDate.setDate(0);
  return formaliseDate(tempDate);
}
function getNextDayForIn(nowDate):string{
  const tempDate = new Date(nowDate);
  const curDay = tempDate.getDate();
  tempDate.setDate(curDay+1);
  return formaliseDate(tempDate);
}
function getDayForOut(nowDate):string{
  const inputDateIn = document.getElementById('check-in-date');
  console.log(inputDateIn);
  const twoDaysMSs = 1000*60*60*24*2;
  const tempDate = new Date(nowDate);
  const nowMSs = tempDate.getTime();
  tempDate.setTime(nowMSs + twoDaysMSs);

  return formaliseDate(tempDate);
}


function formaliseDate(date):string{
  let month = date.getMonth()+1;
  if(month < 10) 
    month = '0'+month;
  let day = date.getDate();
  if(day<10)
    day = '0'+day;
  return date.getFullYear()+'-'+month+'-'+day;
}


function updateOutInputLimits():string{
  console.log('Arrive date updated!');
  return '2021-10-30';
}