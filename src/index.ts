import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  NotebookTools, INotebookTracker, NotebookPanel, NotebookTracker
} from '@jupyterlab/notebook';

import {
  DocumentManager, IDocumentManager
} from '@jupyterlab/docmanager';
/**
 * The plugin registration information.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  activate: (
    app: JupyterFrontEnd,
    tracker: NotebookTracker,
    docmanager: DocumentManager,
  ) => {
    new OrchestIntegrationExtension(tracker, app, docmanager);
  },
  id: 'orchestintegration:orchestintegrationPlugin',
  autoStart: true,
  requires: [INotebookTracker]
};

declare global {
  interface Window { _orchest_app: JupyterFrontEnd; _orchest_tracker: INotebookTracker; _orchest_docmanager: IDocumentManager}
}

/**
 * A notebook extension that adds visual cell tags to Notebook cells.
 */
export
  class OrchestIntegrationExtension extends NotebookTools.Tool {

  constructor(tracker: NotebookTracker, app: JupyterFrontEnd, docmanager: DocumentManager) {
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