import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  NotebookTools, INotebookTracker
} from '@jupyterlab/notebook';

import {
  IDocumentManager
} from '@jupyterlab/docmanager';
/**
 * The plugin registration information.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  activate: (
    app: JupyterFrontEnd,
    tracker: INotebookTracker,
    docmanager: IDocumentManager,
  ) => {
    new OrchestIntegrationExtension(tracker, app, docmanager);
  },
  id: 'orchestintegration:orchestintegrationPlugin',
  autoStart: true,
  requires: [INotebookTracker, IDocumentManager]
};

declare global {
  interface Window { _orchest_app: JupyterFrontEnd; _orchest_tracker: INotebookTracker; _orchest_docmanager: IDocumentManager}
}

/**
 * A notebook extension that adds visual cell tags to Notebook cells.
 */
export
  class OrchestIntegrationExtension extends NotebookTools.Tool {

  constructor(tracker: INotebookTracker, app: JupyterFrontEnd, docmanager: IDocumentManager) {
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