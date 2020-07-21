import { NotebookTools, INotebookTracker } from '@jupyterlab/notebook';
import { IDocumentManager } from '@jupyterlab/docmanager';
/**
 * The plugin registration information.
 */
const plugin = {
    activate: (app, tracker, docmanager) => {
        new OrchestIntegrationExtension(tracker, app, docmanager);
    },
    id: 'orchestintegration:orchestintegrationPlugin',
    autoStart: true,
    requires: [INotebookTracker, IDocumentManager]
};
/**
 * A notebook extension that adds visual cell tags to Notebook cells.
 */
export class OrchestIntegrationExtension extends NotebookTools.Tool {
    constructor(tracker, app, docmanager) {
        super();
        window._orchest_app = app;
        window._orchest_tracker = tracker;
        window._orchest_docmanager = docmanager;
    }
}
/**
 * Export the plugin as default.
 */
export default plugin;
