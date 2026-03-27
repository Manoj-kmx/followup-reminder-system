function checkFollowUps() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");
  var data = sheet.getDataRange().getValues();
  var today = new Date();

  for (var i = 1; i < data.length; i++) {
    var name = data[i][0];
    var email = data[i][1];
    var lastContact = new Date(data[i][2]);

    var diffDays = (today - lastContact) / (1000 * 60 * 60 * 24);

    if (diffDays > 2) {
      MailApp.sendEmail({
        to: "your@email.com",
        subject: "Follow-up Reminder",
        body: "Follow up with " + name + " (" + email + ")"
      });
    }
  }
}
