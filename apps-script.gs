// Google Apps Script: привяжите к Google Таблице и опубликуйте как Web App.
function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Ответы') || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Ответы');
  if (sh.getLastRow() === 0) sh.appendRow(['Дата ответа','Имя','Гостей','Присутствие','Комментарий','Событие']);
  sh.appendRow([new Date(), d.name || '', d.guests || '', d.attendance || '', d.comment || '', d.event || '']);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
