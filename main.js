/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ObsidianToMochiPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/icons.ts
var icons = {
  transform: {
    key: "transform",
    svgContent: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M12 .037C5.373.037 0 5.394 0 12c0 6.606 5.373 11.963 12 11.963c6.628 0 12-5.357 12-11.963C24 5.394 18.627.037 12 .037m-.541 4.8c1.91-.13 3.876.395 5.432 1.934c1.426 1.437 2.51 3.44 2.488 5.317h2.133l-4.444 4.963l-4.445-4.963h2.313c-.001-1.724-.427-2.742-1.78-4.076c-1.325-1.336-2.667-2.11-4.978-2.303a9.245 9.245 0 0 1 3.281-.871zM6.934 6.95l4.445 4.963H9.066c0 1.724.426 2.742 1.778 4.076c1.326 1.336 2.667 2.112 4.978 2.305c-2.684 1.268-6.22 1.398-8.71-1.064c-1.427-1.437-2.512-3.44-2.489-5.317H2.488z"/></svg>'
  }
};

// main.ts
var DEFAULT_SETTINGS = {
  mySetting: "default"
};
var ObsidianToMochiPlugin = class extends import_obsidian.Plugin {
  addIcons() {
    (0, import_obsidian.addIcon)(icons.transform.key, icons.transform.svgContent);
  }
  // Runs whenever the user starts using the plugin in Obsidian 
  async onload() {
    console.log("LOADING");
    await this.loadSettings();
    this.addIcons();
    const transformIcon = this.addRibbonIcon(icons.transform.key, "Mochi Plugin- Convert!", (evt) => {
      new import_obsidian.Notice("Hi from Mochi!");
      let activeFile = this.app.workspace.getActiveFile();
      console.log(typeof activeFile);
      console.log(activeFile);
    });
    transformIcon.addClass("my-plugin-ribbon-class");
    const statusBarItemEl = this.addStatusBarItem();
    statusBarItemEl.setText("Status Bar Text");
    this.addCommand({
      id: "open-sample-modal-simple",
      name: "Open sample modal (simple)",
      callback: () => {
        new SampleModal(this.app).open();
      }
    });
    this.addCommand({
      id: "sample-editor-command",
      name: "Sample editor command",
      editorCallback: (editor, view) => {
        console.log(editor.getSelection());
        editor.replaceSelection("Sample Editor Command");
      }
    });
    this.addCommand({
      id: "open-sample-modal-complex",
      name: "Open sample modal (complex)",
      checkCallback: (checking) => {
        const markdownView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (markdownView) {
          if (!checking) {
            new SampleModal(this.app).open();
          }
          return true;
        }
      }
    });
    this.addSettingTab(new SampleSettingTab(this.app, this));
    this.registerDomEvent(document, "click", (evt) => {
      console.log("click", evt);
    });
    this.registerInterval(window.setInterval(() => console.log("setInterval"), 5 * 60 * 1e3));
  }
  // Runs when the plugin is disabled
  onunload() {
    console.log("UNLOADING");
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var SampleModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Woah!");
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var SampleSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Setting #1").setDesc("It's a secret").addText((text) => text.setPlaceholder("Enter your secret").setValue(this.plugin.settings.mySetting).onChange(async (value) => {
      this.plugin.settings.mySetting = value;
      await this.plugin.saveSettings();
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyIsICJzcmMvaWNvbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEFwcCwgRWRpdG9yLCBNYXJrZG93blZpZXcsIE1vZGFsLCBOb3RpY2UsIFBsdWdpbiwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZywgYWRkSWNvbiB9IGZyb20gJ29ic2lkaWFuJztcblxuaW1wb3J0IHsgaWNvbnMgfSBmcm9tIFwic3JjL2ljb25zXCI7XG5cblxuLy8gUmVtZW1iZXIgdG8gcmVuYW1lIHRoZXNlIGNsYXNzZXMgYW5kIGludGVyZmFjZXMhXG5cbmludGVyZmFjZSBNeVBsdWdpblNldHRpbmdzIHtcblx0bXlTZXR0aW5nOiBzdHJpbmc7XG59XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IE15UGx1Z2luU2V0dGluZ3MgPSB7XG5cdG15U2V0dGluZzogJ2RlZmF1bHQnXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzaWRpYW5Ub01vY2hpUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblx0c2V0dGluZ3M6IE15UGx1Z2luU2V0dGluZ3M7XG5cdFxuXHRhZGRJY29ucygpIHtcblx0XHRhZGRJY29uKGljb25zLnRyYW5zZm9ybS5rZXksIGljb25zLnRyYW5zZm9ybS5zdmdDb250ZW50KTtcblx0fVxuXG5cdFxuXHQvLyBSdW5zIHdoZW5ldmVyIHRoZSB1c2VyIHN0YXJ0cyB1c2luZyB0aGUgcGx1Z2luIGluIE9ic2lkaWFuIFxuXHRhc3luYyBvbmxvYWQoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJMT0FESU5HXCIpXG5cblxuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cdFx0dGhpcy5hZGRJY29ucygpXG5cblxuXHRcdC8vIFRoaXMgY3JlYXRlcyBhbiBpY29uIGluIHRoZSBsZWZ0IHJpYmJvbi5cblx0XHRjb25zdCB0cmFuc2Zvcm1JY29uID0gdGhpcy5hZGRSaWJib25JY29uKGljb25zLnRyYW5zZm9ybS5rZXksICdNb2NoaSBQbHVnaW4tIENvbnZlcnQhJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0bmV3IE5vdGljZSgnSGkgZnJvbSBNb2NoaSEnKTtcblx0XHRcdGxldCBhY3RpdmVGaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKTtcblxuXHRcdFx0Y29uc29sZS5sb2codHlwZW9mKGFjdGl2ZUZpbGUpKVxuXHRcdFx0Y29uc29sZS5sb2coYWN0aXZlRmlsZSlcblx0XHR9KTtcblxuXHRcdC8vIFBlcmZvcm0gYWRkaXRpb25hbCB0aGluZ3Mgd2l0aCB0aGUgcmliYm9uXG5cdFx0dHJhbnNmb3JtSWNvbi5hZGRDbGFzcygnbXktcGx1Z2luLXJpYmJvbi1jbGFzcycpO1xuXG5cdFx0Ly8gVGhpcyBhZGRzIGEgc3RhdHVzIGJhciBpdGVtIHRvIHRoZSBib3R0b20gb2YgdGhlIGFwcC4gRG9lcyBub3Qgd29yayBvbiBtb2JpbGUgYXBwcy5cblx0XHRjb25zdCBzdGF0dXNCYXJJdGVtRWwgPSB0aGlzLmFkZFN0YXR1c0Jhckl0ZW0oKTtcblx0XHRzdGF0dXNCYXJJdGVtRWwuc2V0VGV4dCgnU3RhdHVzIEJhciBUZXh0Jyk7XG5cblx0XHQvLyBUaGlzIGFkZHMgYSBzaW1wbGUgY29tbWFuZCB0aGF0IGNhbiBiZSB0cmlnZ2VyZWQgYW55d2hlcmVcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdvcGVuLXNhbXBsZS1tb2RhbC1zaW1wbGUnLFxuXHRcdFx0bmFtZTogJ09wZW4gc2FtcGxlIG1vZGFsIChzaW1wbGUpJyxcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XG5cdFx0XHRcdG5ldyBTYW1wbGVNb2RhbCh0aGlzLmFwcCkub3BlbigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0XG5cdFx0Ly8gVGhpcyBhZGRzIGFuIGVkaXRvciBjb21tYW5kIHRoYXQgY2FuIHBlcmZvcm0gc29tZSBvcGVyYXRpb24gb24gdGhlIGN1cnJlbnQgZWRpdG9yIGluc3RhbmNlXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAnc2FtcGxlLWVkaXRvci1jb21tYW5kJyxcblx0XHRcdG5hbWU6ICdTYW1wbGUgZWRpdG9yIGNvbW1hbmQnLFxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgdmlldzogTWFya2Rvd25WaWV3KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVkaXRvci5nZXRTZWxlY3Rpb24oKSk7XG5cdFx0XHRcdGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKCdTYW1wbGUgRWRpdG9yIENvbW1hbmQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvLyBUaGlzIGFkZHMgYSBjb21wbGV4IGNvbW1hbmQgdGhhdCBjYW4gY2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgYXBwIGFsbG93cyBleGVjdXRpb24gb2YgdGhlIGNvbW1hbmRcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdvcGVuLXNhbXBsZS1tb2RhbC1jb21wbGV4Jyxcblx0XHRcdG5hbWU6ICdPcGVuIHNhbXBsZSBtb2RhbCAoY29tcGxleCknLFxuXHRcdFx0Y2hlY2tDYWxsYmFjazogKGNoZWNraW5nOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdC8vIENvbmRpdGlvbnMgdG8gY2hlY2tcblx0XHRcdFx0Y29uc3QgbWFya2Rvd25WaWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcblx0XHRcdFx0aWYgKG1hcmtkb3duVmlldykge1xuXHRcdFx0XHRcdC8vIElmIGNoZWNraW5nIGlzIHRydWUsIHdlJ3JlIHNpbXBseSBcImNoZWNraW5nXCIgaWYgdGhlIGNvbW1hbmQgY2FuIGJlIHJ1bi5cblx0XHRcdFx0XHQvLyBJZiBjaGVja2luZyBpcyBmYWxzZSwgdGhlbiB3ZSB3YW50IHRvIGFjdHVhbGx5IHBlcmZvcm0gdGhlIG9wZXJhdGlvbi5cblx0XHRcdFx0XHRpZiAoIWNoZWNraW5nKSB7XG5cdFx0XHRcdFx0XHRuZXcgU2FtcGxlTW9kYWwodGhpcy5hcHApLm9wZW4oKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBUaGlzIGNvbW1hbmQgd2lsbCBvbmx5IHNob3cgdXAgaW4gQ29tbWFuZCBQYWxldHRlIHdoZW4gdGhlIGNoZWNrIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBUaGlzIGFkZHMgYSBzZXR0aW5ncyB0YWIgc28gdGhlIHVzZXIgY2FuIGNvbmZpZ3VyZSB2YXJpb3VzIGFzcGVjdHMgb2YgdGhlIHBsdWdpblxuXHRcdHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgU2FtcGxlU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG5cdFx0Ly8gSWYgdGhlIHBsdWdpbiBob29rcyB1cCBhbnkgZ2xvYmFsIERPTSBldmVudHMgKG9uIHBhcnRzIG9mIHRoZSBhcHAgdGhhdCBkb2Vzbid0IGJlbG9uZyB0byB0aGlzIHBsdWdpbilcblx0XHQvLyBVc2luZyB0aGlzIGZ1bmN0aW9uIHdpbGwgYXV0b21hdGljYWxseSByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhpcyBwbHVnaW4gaXMgZGlzYWJsZWQuXG5cdFx0dGhpcy5yZWdpc3RlckRvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnY2xpY2snLCBldnQpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gV2hlbiByZWdpc3RlcmluZyBpbnRlcnZhbHMsIHRoaXMgZnVuY3Rpb24gd2lsbCBhdXRvbWF0aWNhbGx5IGNsZWFyIHRoZSBpbnRlcnZhbCB3aGVuIHRoZSBwbHVnaW4gaXMgZGlzYWJsZWQuXG5cdFx0dGhpcy5yZWdpc3RlckludGVydmFsKHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZygnc2V0SW50ZXJ2YWwnKSwgNSAqIDYwICogMTAwMCkpO1xuXHR9XG5cblx0Ly8gUnVucyB3aGVuIHRoZSBwbHVnaW4gaXMgZGlzYWJsZWRcblx0b251bmxvYWQoKSB7XG5cblx0XHRjb25zb2xlLmxvZyhcIlVOTE9BRElOR1wiKVxuXHR9XG5cblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xuXHR9XG5cblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG5cdH1cbn1cblxuY2xhc3MgU2FtcGxlTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwKSB7XG5cdFx0c3VwZXIoYXBwKTtcblx0fVxuXG5cdG9uT3BlbigpIHtcblx0XHRjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcblx0XHRjb250ZW50RWwuc2V0VGV4dCgnV29haCEnKTtcblx0fVxuXG5cdG9uQ2xvc2UoKSB7XG5cdFx0Y29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG5cdFx0Y29udGVudEVsLmVtcHR5KCk7XG5cdH1cbn1cblxuY2xhc3MgU2FtcGxlU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuXHRwbHVnaW46IE9ic2lkaWFuVG9Nb2NoaVBsdWdpbjtcblxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBPYnNpZGlhblRvTW9jaGlQbHVnaW4pIHtcblx0XHRzdXBlcihhcHAsIHBsdWdpbik7XG5cdFx0dGhpcy5wbHVnaW4gPSBwbHVnaW47XG5cdH1cblxuXHRkaXNwbGF5KCk6IHZvaWQge1xuXHRcdGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG5cblx0XHRjb250YWluZXJFbC5lbXB0eSgpO1xuXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG5cdFx0XHQuc2V0TmFtZSgnU2V0dGluZyAjMScpXG5cdFx0XHQuc2V0RGVzYygnSXRcXCdzIGEgc2VjcmV0Jylcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ0VudGVyIHlvdXIgc2VjcmV0Jylcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm15U2V0dGluZylcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLm15U2V0dGluZyA9IHZhbHVlO1xuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXHRcdFx0XHR9KSk7XG5cdH1cbn1cbiIsICJleHBvcnQgY29uc3QgaWNvbnMgPSB7XG4gICAgdHJhbnNmb3JtOiB7XG4gICAgICBrZXk6IFwidHJhbnNmb3JtXCIsXG4gICAgICBzdmdDb250ZW50OlxuICAgICAgJzxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsPVwid2hpdGVcIiBkPVwiTTEyIC4wMzdDNS4zNzMuMDM3IDAgNS4zOTQgMCAxMmMwIDYuNjA2IDUuMzczIDExLjk2MyAxMiAxMS45NjNjNi42MjggMCAxMi01LjM1NyAxMi0xMS45NjNDMjQgNS4zOTQgMTguNjI3LjAzNyAxMiAuMDM3bS0uNTQxIDQuOGMxLjkxLS4xMyAzLjg3Ni4zOTUgNS40MzIgMS45MzRjMS40MjYgMS40MzcgMi41MSAzLjQ0IDIuNDg4IDUuMzE3aDIuMTMzbC00LjQ0NCA0Ljk2M2wtNC40NDUtNC45NjNoMi4zMTNjLS4wMDEtMS43MjQtLjQyNy0yLjc0Mi0xLjc4LTQuMDc2Yy0xLjMyNS0xLjMzNi0yLjY2Ny0yLjExLTQuOTc4LTIuMzAzYTkuMjQ1IDkuMjQ1IDAgMCAxIDMuMjgxLS44NzF6TTYuOTM0IDYuOTVsNC40NDUgNC45NjNIOS4wNjZjMCAxLjcyNC40MjYgMi43NDIgMS43NzggNC4wNzZjMS4zMjYgMS4zMzYgMi42NjcgMi4xMTIgNC45NzggMi4zMDVjLTIuNjg0IDEuMjY4LTYuMjIgMS4zOTgtOC43MS0xLjA2NGMtMS40MjctMS40MzctMi41MTItMy40NC0yLjQ4OS01LjMxN0gyLjQ4OHpcIi8+PC9zdmc+JyxcbiAgICB9LFxuICB9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBcUc7OztBQ0E5RixJQUFNLFFBQVE7QUFBQSxFQUNqQixXQUFXO0FBQUEsSUFDVCxLQUFLO0FBQUEsSUFDTCxZQUNBO0FBQUEsRUFDRjtBQUNGOzs7QURLRixJQUFNLG1CQUFxQztBQUFBLEVBQzFDLFdBQVc7QUFDWjtBQUdBLElBQXFCLHdCQUFyQixjQUFtRCx1QkFBTztBQUFBLEVBR3pELFdBQVc7QUFDVixpQ0FBUSxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVTtBQUFBLEVBQ3hEO0FBQUE7QUFBQSxFQUlBLE1BQU0sU0FBUztBQUNkLFlBQVEsSUFBSSxTQUFTO0FBR3JCLFVBQU0sS0FBSyxhQUFhO0FBQ3hCLFNBQUssU0FBUztBQUlkLFVBQU0sZ0JBQWdCLEtBQUssY0FBYyxNQUFNLFVBQVUsS0FBSywwQkFBMEIsQ0FBQyxRQUFvQjtBQUM1RyxVQUFJLHVCQUFPLGdCQUFnQjtBQUMzQixVQUFJLGFBQWEsS0FBSyxJQUFJLFVBQVUsY0FBYztBQUVsRCxjQUFRLElBQUksT0FBTyxVQUFXO0FBQzlCLGNBQVEsSUFBSSxVQUFVO0FBQUEsSUFDdkIsQ0FBQztBQUdELGtCQUFjLFNBQVMsd0JBQXdCO0FBRy9DLFVBQU0sa0JBQWtCLEtBQUssaUJBQWlCO0FBQzlDLG9CQUFnQixRQUFRLGlCQUFpQjtBQUd6QyxTQUFLLFdBQVc7QUFBQSxNQUNmLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFVBQVUsTUFBTTtBQUNmLFlBQUksWUFBWSxLQUFLLEdBQUcsRUFBRSxLQUFLO0FBQUEsTUFDaEM7QUFBQSxJQUNELENBQUM7QUFJRCxTQUFLLFdBQVc7QUFBQSxNQUNmLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLGdCQUFnQixDQUFDLFFBQWdCLFNBQXVCO0FBQ3ZELGdCQUFRLElBQUksT0FBTyxhQUFhLENBQUM7QUFDakMsZUFBTyxpQkFBaUIsdUJBQXVCO0FBQUEsTUFDaEQ7QUFBQSxJQUNELENBQUM7QUFFRCxTQUFLLFdBQVc7QUFBQSxNQUNmLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLGVBQWUsQ0FBQyxhQUFzQjtBQUVyQyxjQUFNLGVBQWUsS0FBSyxJQUFJLFVBQVUsb0JBQW9CLDRCQUFZO0FBQ3hFLFlBQUksY0FBYztBQUdqQixjQUFJLENBQUMsVUFBVTtBQUNkLGdCQUFJLFlBQVksS0FBSyxHQUFHLEVBQUUsS0FBSztBQUFBLFVBQ2hDO0FBR0EsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRDtBQUFBLElBQ0QsQ0FBQztBQUdELFNBQUssY0FBYyxJQUFJLGlCQUFpQixLQUFLLEtBQUssSUFBSSxDQUFDO0FBSXZELFNBQUssaUJBQWlCLFVBQVUsU0FBUyxDQUFDLFFBQW9CO0FBQzdELGNBQVEsSUFBSSxTQUFTLEdBQUc7QUFBQSxJQUN6QixDQUFDO0FBR0QsU0FBSyxpQkFBaUIsT0FBTyxZQUFZLE1BQU0sUUFBUSxJQUFJLGFBQWEsR0FBRyxJQUFJLEtBQUssR0FBSSxDQUFDO0FBQUEsRUFDMUY7QUFBQTtBQUFBLEVBR0EsV0FBVztBQUVWLFlBQVEsSUFBSSxXQUFXO0FBQUEsRUFDeEI7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNwQixTQUFLLFdBQVcsT0FBTyxPQUFPLENBQUMsR0FBRyxrQkFBa0IsTUFBTSxLQUFLLFNBQVMsQ0FBQztBQUFBLEVBQzFFO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDcEIsVUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRO0FBQUEsRUFDbEM7QUFDRDtBQUVBLElBQU0sY0FBTixjQUEwQixzQkFBTTtBQUFBLEVBQy9CLFlBQVksS0FBVTtBQUNyQixVQUFNLEdBQUc7QUFBQSxFQUNWO0FBQUEsRUFFQSxTQUFTO0FBQ1IsVUFBTSxFQUFFLFVBQVUsSUFBSTtBQUN0QixjQUFVLFFBQVEsT0FBTztBQUFBLEVBQzFCO0FBQUEsRUFFQSxVQUFVO0FBQ1QsVUFBTSxFQUFFLFVBQVUsSUFBSTtBQUN0QixjQUFVLE1BQU07QUFBQSxFQUNqQjtBQUNEO0FBRUEsSUFBTSxtQkFBTixjQUErQixpQ0FBaUI7QUFBQSxFQUcvQyxZQUFZLEtBQVUsUUFBK0I7QUFDcEQsVUFBTSxLQUFLLE1BQU07QUFDakIsU0FBSyxTQUFTO0FBQUEsRUFDZjtBQUFBLEVBRUEsVUFBZ0I7QUFDZixVQUFNLEVBQUUsWUFBWSxJQUFJO0FBRXhCLGdCQUFZLE1BQU07QUFFbEIsUUFBSSx3QkFBUSxXQUFXLEVBQ3JCLFFBQVEsWUFBWSxFQUNwQixRQUFRLGVBQWdCLEVBQ3hCLFFBQVEsVUFBUSxLQUNmLGVBQWUsbUJBQW1CLEVBQ2xDLFNBQVMsS0FBSyxPQUFPLFNBQVMsU0FBUyxFQUN2QyxTQUFTLE9BQU8sVUFBVTtBQUMxQixXQUFLLE9BQU8sU0FBUyxZQUFZO0FBQ2pDLFlBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxJQUNoQyxDQUFDLENBQUM7QUFBQSxFQUNMO0FBQ0Q7IiwKICAibmFtZXMiOiBbXQp9Cg==
