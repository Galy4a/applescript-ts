declare namespace Application {
    let currentApplication: () => App;
}

type App = {
    includeStandardAdditions: boolean;
    doShellScript: (script: string) => string;
    /**
     * Display Dialog
     * 
     * Use the `display dialog` command, provided by the Standard Additions scripting addition to show a basic dialog message to the user.
     * The result of the command is the button the user clicked in the dialog.
     * 
     * Use the display dialog command’s optional `default answer parameter` to collect text, such as a username or email address, as your script runs.
     *      
     * {@link https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/DisplayDialogsandAlerts.html|More}
     */
    displayDialog: typeof DisplayDialog;
    /**
     * Display notification
     * 
     * Use the `display notification` command to show notifications, such as status updates as files are processed.
     * Notifications are shown as alerts or banners, depending on the user’s settings in System Preferences > Notifications.
     * 
     * To show a notification, provide the display notification command with a string to display.
     * Optionally, provide values for the with `title`, `subtitle`, and `sound name` parameters to provide additional information and an audible alert when the notification appears.
     * 
     * {@link https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/DisplayNotifications.html|More}
     */
    displayNotification: DisplayNotification;
    /**
     * Choose file
     * 
     * Use the `choose file` command to prompt the user to select a file.
     * 
     * If your script requires specific types of files for processing, you can use the choose file command’s optional of `type` parameter to provide a list of acceptable types.
     * Types may be specified as extension strings without the leading period (such as "jpg" or "png") or as uniform type identifiers (such as "public.image" or "com.apple.iwork.pages.sffpages").
     * 
     * To let the user choose more than one file, include the choose file command’s optional `multiple selections allowed` parameter.
     * 
     * {@link https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/PromptforaFileorFolder.html|More}
     */
    chooseFile: ChooseFile;
    /**
     * Choose folder
     * 
     * Use the `choose folder` command to prompt the user to select a folder, such as an output folder or folder of images to process.
     * 
     * To let the user choose more than one folder, include the choose folder command’s optional `multiple selections allowed` parameter.
     * 
     * {@link https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/PromptforaFileorFolder.html|More}
     */
    chooseFolder: ChooseFolder;
    /**
     * Choose file name
     * 
     * Use the `choose file` name command to display a save dialog that lets the user enter a file name and choose an output folder.
     * The result of the choose file name command is a path to a potential file. This file may or may not already exist.
     * 
     * {@link https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/PromptforaFileName.html|More}
     */
    chooseFileName: ChooseFileName;
    /**
     * Choose from list
     * 
     * Use the `choose from list` command to prompt the user to select from a list of strings.
     * 
     * The choose from list command can optionally let the user choose multiple items by setting the `multiple selections allowed` parameter to true.
     * For this reason, the result of the command is always a `list` of selected strings.
     * This list may be empty if the `empty selection allowed` parameter has been specified and the user dismissed the dialog without making a selection.
     * 
     * {@link https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/PromptforaChoicefromaList.html|More}
     */
    chooseFromList: chooseFromList;
    /**
     * Choose color
     * 
     * Use `choose color` command to ask the user to select a color from a color picker dialog.
     * The command accepts an optional `default color` parameter, and produces an RGB color value as its result.
     * 
     * {@link https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/PromptforaColor.html|More}
     */
    chooseColor: ChooseColor
    say: Say;
}

type DialogButton = string;

declare enum DialogIcon {
    None = 'none',
    Stop = 'stop',
    Caution = 'caution'
}

type DisplayDialogOpts = {
    /**
     * Dialog Buttons
     * 
     * By default, a dialog produced by the display dialog command has two buttons — Cancel and OK (the default). Use the buttons parameter to provide a list of between one and three buttons.
     */
    buttons?: DialogButton[];
    /**
     * Default dialog button
     * 
     * You can optionally use the default button parameter to configure one as the default — it’s highlighted and pressing the Return key activates it to close the dialog.
     */
    defaultButton?: DialogButton;
    /**
     * Cancel dialog button
     * 
     * You can use the cancel button parameter to configure one as the cancel button—pressing Escape or Command-Period (.) activates it to close the dialog and produce a user cancelled error.
     */
    cancelButton?: DialogButton;
    /**
     * Dialog icon
     * 
     * Dialogs can also include an icon, providing users with a visual clue to their importance. You can direct the display dialog command to a specific icon by its file path, or resource name or ID if the icon is stored as a resource within your script’s bundle. You can also use the standard system icons stop, note, and caution.
     */
    withIcon?: DialogIcon;
    /**
     * Default dialog answer
     * 
     * default answer parameter automatically adds a text entry field to the resulting dialog. Any string you provide for the parameter appears in the text field when the dialog displays. Providing an empty string ("") produces an empty text field. When the dialog dismisses, any text from the field is returned in a text returned property of the display dialog command’s result.
     */
    defaultAnswer?: string;
}

declare function DisplayDialog<T>(text: string, options?: DisplayDialogOpts & { defaultAnswer?: T }): T extends string ? {
    buttonReturned: string;
    textReturned: string;
} : {
    buttonReturned: string;
}

/**
 * Progress
 * 
 * For script apps, this progress reporting takes the form of a dialog window containing a progress bar, descriptive text, and a Stop button.
 * 
 * {@link https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/DisplayProgress.html|More}
 */
declare namespace Progress {
    /**
     * Progress total steps
     * 
     * Configures the total number of steps to be reported in the progress. For example, if the script will process 5 images, then the value for progress total steps would be 5.
     */
    let totalUnitCount: number;
    /**
     * Progress completed steps
     * 
     * Configures the number of steps completed so far. For example, if the script has processed 3 of 5 images, then the value of progress completed steps would be 3.
     */
    let completedUnitCount: number;
    /**
     * Progress description
     * 
     * Text to display when reporting progress. Use this is an opportunity to let the user know what’s happening. For example, it could indicate that images are being processed.
     */
    let description: string;
    /**
     * Progress additional description
     * 
     * Additional text to display when reporting progress. Use this is an opportunity to provide even more detailed information about what’s happening. For example, it could indicate the specific task being performed, and how much more processing is remaining.s
     */
    let additionalDescription: string;
}

declare const delay: (seconds: number) => void;

declare enum NotificationSound {
    Frog = 'Frog',
}

type NotificationOpts = {
    withTitle?: string;
    subtitle?: string;
    soundName?: NotificationSound;
}

type DisplayNotification = (message: string, options?: NotificationOpts) => void;

declare enum SayUsing {
    Alex = 'Alex',
}

type SayOpts = {
    using?: SayUsing;
    speakingRate?: number;
    pitch?: number;
    modulation?: number;
}

type Say = (message: string, options: SayOpts) => void;

type ChooseFileOpts = {
    withPrompt?: string;
    ofType?: string[];
    multipleSelectionsAllowed?: boolean;
}

type ChooseFile = (options?: ChooseFileOpts) => string[]

type ChooseFolder = (options?: Omit<ChooseFileOpts, 'ofType'>) => string[]

type ChooseFileNameOpts = {
    withPrompt?: string;
}

type ChooseFileName = (options?: ChooseFileNameOpts) => string

type ChoicesList = string[]

type ChooseFromListOpts = {
    withPrompt?: string;
    defaultItems?: string;
    emptySelectionsAllowed?: boolean;
}

type chooseFromList = (choices: ChoicesList, options?: ChooseFromListOpts) => string | false

type Color = [number, number, number]

type ChooseColorOpts = {
    defaultColor?: Color;
}

type ChooseColor = (options?: ChooseColorOpts) => Color;