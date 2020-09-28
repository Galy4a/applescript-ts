export function displayDialog(text: string, app: App) {
    app.displayDialog(text);
}

export function getPathContent(path: string, app: App) {
    const content = app.doShellScript(`ls ${path}`);

    return content.split(/\s/);
}
