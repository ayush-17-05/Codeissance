document
  .getElementById("reminderForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const reminderType = document.getElementById("reminderType").value;
    const reminderName = document.getElementById("reminderName").value;
    const reminderTime = document.getElementById("reminderTime").value;
    const reminderDate = document.getElementById("reminderDate").value;

    // Create a reminder object
    const reminder = {
      type: reminderType,
      name: reminderName,
      time: reminderTime,
      date: reminderDate,
    };

    // Display the reminder
    displayReminder(reminder);
  });

function displayReminder(reminder) {
  const reminderList = document.getElementById("reminderList");
  const reminderItem = document.createElement("div");
  reminderItem.className = "reminder-item";
  reminderItem.innerHTML = `<strong>${reminder.type}:</strong> ${reminder.name} on ${reminder.date} at ${reminder.time}`;

  reminderList.appendChild(reminderItem);
}
