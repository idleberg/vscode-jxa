import { commands, type ExtensionContext } from 'vscode';
import { osacompile, osascript } from './osa.ts';
import { pick } from './processes.ts';
import { createBuildTask } from './task.ts';

async function activate(context: ExtensionContext): Promise<void> {
	context.subscriptions.push(
		commands.registerTextEditorCommand('extension.jxa.run', async () => {
			return await osascript();
		}),

		commands.registerTextEditorCommand('extension.jxa.compile', async () => {
			return await osacompile('scpt');
		}),

		commands.registerTextEditorCommand('extension.jxa.compileBundle', async () => {
			return await osacompile('scptd');
		}),

		commands.registerTextEditorCommand('extension.jxa.compileApp', async () => {
			return await osacompile('app');
		}),

		commands.registerTextEditorCommand('extension.jxa.createBuildTask', async () => {
			return await createBuildTask();
		}),

		commands.registerCommand('extension.jxa.openSettings', () => {
			commands.executeCommand('workbench.action.openSettings', '@ext:idleberg.jxa');
		}),

		commands.registerTextEditorCommand('extension.jxa.terminateProcess', async () => {
			await pick();
		}),
	);
}

export { activate };
