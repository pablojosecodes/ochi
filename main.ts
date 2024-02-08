import { App, Notice, Plugin, PluginSettingTab, Setting, addIcon } from 'obsidian';

import { icons } from "src/icons";
import { AsyncZippable, strToU8, zip } from 'fflate';
import { createMochiCards, parseCardData, saveFile } from 'src/parse_utils';


const path = require("path");
const dialog = require("electron").remote.dialog;

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}


export default class ObsidianToMochiPlugin extends Plugin {
	settings: MyPluginSettings;

	/**
	 * Loads the content of the currently active file.
	 * 
	 * This function retrieves the active file from the app's workspace.
	 * If there is an active file, it reads its content and returns it.
	 * If no file is active, it returns null.
	 * 
	 * @returns A Promise that resolves to the content of the active file as a string, or null if no file is active.
	 */
	async loadFileContent(): Promise<string | null> {
		let activeFile = this.app.workspace.getActiveFile();
		if (activeFile) {
			let fileContent = await this.app.vault.read(activeFile);
			return fileContent
		}
		return null
	}


	

	/**
	 * Processes the active file content and saves it as a .edn file on transform icon click.
	 * Displays notices based on the content availability and processing outcome.
	 * 
	 * @param evt - The mouse event from the ribbon icon click.
	 */
	async handleTransformIconClick(evt: MouseEvent): Promise<void> {
		const content = await this.loadFileContent();

		const options = {
            title: "Select a folder",
            properties: ["openDirectory"],
            defaultPath: "",
          };

          const directory_path = await dialog.showOpenDialog(null, options);
		  if (!directory_path.canceled) {
            let card_path = path.join(
				directory_path.filePaths[0],
              `cards.mochi`
            );
			console.log(card_path)
			if (content) {
				const cards = await parseCardData(content);
				if (cards) {
					const mochiCards = await createMochiCards(cards);
					const buffer = strToU8(mochiCards);
	
					const files: AsyncZippable = {
						'data.edn': buffer
					};
	
					await zip(files, async (err, data) => {
						if (err) {
							console.log(err);
							throw err;
						} else await saveFile(card_path, data);
					});
				} else {
					new Notice("No Card Content!");
				}
			} else {
				new Notice("No Content Open");
			}
		}
		else{
			new Notice("Path Canceled!");
		}
		
	}


	async onload() {
		await this.setupSettings();

		addIcon(icons.transform.key, icons.transform.svgContent);

		// Create the key binding for card creation
		const transformIcon = this.addRibbonIcon(icons.transform.key, 'Mochi Plugin- Convert!', this.handleTransformIconClick.bind(this));

		// Perform additional things with the ribbon
		transformIcon.addClass('my-plugin-ribbon-class');

		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		const statusBarItemEl = this.addStatusBarItem();
		statusBarItemEl.setText('Status Bar Text');

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new TheSettingTab(this.app, this));

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	// Runs when the plugin is disabled
	onunload() {
		new Notice("See you later!");
	}

	async setupSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class TheSettingTab extends PluginSettingTab {
	plugin: ObsidianToMochiPlugin;

	constructor(app: App, plugin: ObsidianToMochiPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
