const app = Application.currentApplication();
app.includeStandardAdditions = true;

const { buttonReturned } = app.displayDialog('Нажмите одну из кнопок', {
    buttons: ['Первая', 'Вторая'],
})

app.displayDialog(`Вы нажали кнопку "${buttonReturned}"`);

Progress.description = 'Строка прогресса';
Progress.totalUnitCount = 100;

for(let i = 0; i <=100; i++) {
    Progress.completedUnitCount = i;

    delay(0.1);
}
