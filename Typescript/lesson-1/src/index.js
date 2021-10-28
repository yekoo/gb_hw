'use strict';
exports.__esModule = true;
var search_form_js_1 = require('./search-form.js');
var search_results_js_1 = require('./search-results.js');
var user_js_1 = require('./user.js');
var lib_js_1 = require('./lib.js');
window.addEventListener('DOMContentLoaded', function () {
  (0, user_js_1.renderUserBlock)('0');
  (0, search_form_js_1.renderSearchFormBlock)();
  (0, search_results_js_1.renderSearchStubBlock)();
  (0, lib_js_1.renderToast)({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, { name: 'Понял', handler: function () { console.log('Уведомление закрыто'); } });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF3RDtBQUN4RCx5REFBMkQ7QUFDM0QscUNBQTJDO0FBQzNDLG1DQUFzQztBQUV0QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7SUFDMUMsSUFBQSx5QkFBZSxFQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BCLElBQUEsc0NBQXFCLEdBQUUsQ0FBQTtJQUN2QixJQUFBLHlDQUFxQixHQUFFLENBQUE7SUFDdkIsSUFBQSxvQkFBVyxFQUNULEVBQUMsSUFBSSxFQUFFLDJEQUEyRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFDcEYsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxjQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQSxDQUFBLENBQUMsRUFBQyxDQUNyRSxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJTZWFyY2hGb3JtQmxvY2sgfSBmcm9tICcuL3NlYXJjaC1mb3JtLmpzJ1xuaW1wb3J0IHsgcmVuZGVyU2VhcmNoU3R1YkJsb2NrIH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0cy5qcydcbmltcG9ydCB7IHJlbmRlclVzZXJCbG9jayB9IGZyb20gJy4vdXNlci5qcydcbmltcG9ydCB7IHJlbmRlclRvYXN0IH0gZnJvbSAnLi9saWIuanMnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICByZW5kZXJVc2VyQmxvY2soJzAnKVxuICByZW5kZXJTZWFyY2hGb3JtQmxvY2soKVxuICByZW5kZXJTZWFyY2hTdHViQmxvY2soKVxuICByZW5kZXJUb2FzdChcbiAgICB7dGV4dDogJ9Ct0YLQviDQv9GA0LjQvNC10YAg0YPQstC10LTQvtC80LvQtdC90LjRjy4g0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQtdCz0L4g0L/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4JywgdHlwZTogJ3N1Y2Nlc3MnfSxcbiAgICB7bmFtZTogJ9Cf0L7QvdGP0LsnLCBoYW5kbGVyOiAoKSA9PiB7Y29uc29sZS5sb2coJ9Cj0LLQtdC00L7QvNC70LXQvdC40LUg0LfQsNC60YDRi9GC0L4nKX19XG4gIClcbn0pXG4iXX0=