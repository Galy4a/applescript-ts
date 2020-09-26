const app = Application.currentApplication();
app.includeStandardAdditions = true;

const { buttonReturned } = app.displayDialog('Нажмите одну из кнопок', {
    buttons: ['Первая', 'Вторая'],
})

app.displayNotification(`Вы нажали кнопку "${buttonReturned}"`);

Progress.description = 'Строка прогресса';
Progress.totalUnitCount = 10;

for(let i = 0; i <=10; i++) {
    Progress.completedUnitCount = i;

    delay(0.1);
}

const files = app.chooseFile();

app.displayDialog(typeof files);

const choose = app.chooseFromList(['1', '2', '3'], {
    withPrompt: 'Выберите один из выриантов'
});

app.displayDialog(`Вы выбрали: ${choose}`);

const color = app.chooseColor();

app.displayDialog(color.toString());
