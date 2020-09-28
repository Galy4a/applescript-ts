import { displayDialog, getPathContent } from './utils';

const app = Application.currentApplication();
app.includeStandardAdditions = true;

const path = app.chooseFolder({ withPrompt: 'Choose directory:', multipleSelectionsAllowed: true });

const content = getPathContent(path[0].toString(), app);

const choose = app.chooseFromList(content, { withPrompt: 'Choose file:' });

displayDialog(choose.toString(), app);
