import { NotebookTools, INotebookTracker } from '@jupyterlab/notebook';
/**
 * The plugin registration information.
 */
const plugin = {
    activate: (app, tracker) => {
        new OrchestIntegrationExtension(tracker, app);
    },
    id: 'orchestintegration:orchestintegrationPlugin',
    autoStart: true,
    requires: [INotebookTracker]
};
/**
 * A notebook extension that adds visual cell tags to Notebook cells.
 */
export class OrchestIntegrationExtension extends NotebookTools.Tool {
    constructor(tracker, app) {
        super();
        this.tracker = null;
        this.app = null;
        this.tracker = tracker;
        this.app = app;
        window.app = this.app;
        window.tracker = this.tracker;
    }
}
/**
 * Export the plugin as default.
 */
export default plugin;
