import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { NotebookTools, INotebookTracker } from '@jupyterlab/notebook';
/**
 * The plugin registration information.
 */
declare const plugin: JupyterFrontEndPlugin<void>;
declare global {
    interface Window {
        app: JupyterFrontEnd;
        tracker: INotebookTracker;
    }
}
/**
 * A notebook extension that adds visual cell tags to Notebook cells.
 */
export declare class OrchestIntegrationExtension extends NotebookTools.Tool {
    private tracker;
    private app;
    constructor(tracker: INotebookTracker, app: JupyterFrontEnd);
}
/**
 * Export the plugin as default.
 */
export default plugin;
