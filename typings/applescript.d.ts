declare namespace Application {
    let currentApplication: () => App;
}

type App = {
    includeStandardAdditions: boolean;
    doShellScript: (script: string) => string;
    displayDialog: typeof DisplayDialog;
    displayNotification: DisplayNotification;
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

/**
 * Display Dialog
 * 
 * Use the display dialog command, provided by the Standard Additions scripting addition to show a basic dialog message to the user. The result of the command is the button the user clicked in the dialog.
 * 
 * @param text - Text to display
 * @param options - Display dialog options 
 */
declare function DisplayDialog<T>(text: string, options?: DisplayDialogOpts & { defaultAnswer?: T }): {
    buttonReturned: DialogButton;
}
//  & T extends string ? {
//     textReturned: string;
// } : {}

/**
 * Progress
 * 
 * For script apps, this progress reporting takes the form of a dialog window containing a progress bar, descriptive text, and a Stop button.
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

type DisplayNotification = (message: string, options: NotificationOpts) => void;

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