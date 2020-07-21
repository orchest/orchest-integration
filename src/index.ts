import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  NotebookTools, INotebookTracker, NotebookPanel
} from '@jupyterlab/notebook';

/**
 * The plugin registration information.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  activate: (
    app: JupyterFrontEnd,
    tracker: INotebookTracker,
  ) => {
    new OrchestIntegrationExtension(tracker, app);
  },
  id: 'orchestintegration:orchestintegrationPlugin',
  autoStart: true,
  requires: [INotebookTracker]
};

declare global {
  interface Window { _orchest_app: JupyterFrontEnd; _orchest_tracker: INotebookTracker; }
}

/**
 * A notebook extension that adds visual cell tags to Notebook cells.
 */
export
  class OrchestIntegrationExtension extends NotebookTools.Tool {

  private tracker: INotebookTracker = null;
  private app: JupyterFrontEnd = null;

  constructor(tracker: INotebookTracker, app: JupyterFrontEnd) {
    super();
    this.tracker = tracker;
    this.app = app;

    window._orchest_app = this.app;
    window._orchest_tracker = this.tracker;
  }


}

/**
 * Export the plugin as default.
 */
export default plugin;