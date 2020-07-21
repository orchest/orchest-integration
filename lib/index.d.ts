import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { NotebookTools, INotebookTracker } from '@jupyterlab/notebook';
import { IDocumentManager } from '@jupyterlab/docmanager';
/**
 * The plugin registration information.
 */
declare const plugin: JupyterFrontEndPlugin<void>;
declare global {
    interface Window {
        _orchest_app: JupyterFrontEnd;
        _orchest_tracker: INotebookTracker;
        _orchest_docmanager: IDocumentManager;
    }
}
/**
 * A notebook extension that adds visual cell tags to Notebook cells.
 */
export declare class OrchestIntegrationExtension extends NotebookTools.Tool {
    constructor(tracker: INotebookTracker, app: JupyterFrontEnd, docmanager: IDocumentManager);
}
/**
 * Export the plugin as default.
 */
export default plugin;
