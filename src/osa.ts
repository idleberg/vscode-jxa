import { platform } from 'node:os';
import { window } from 'vscode';
import { getConfig } from 'vscode-get-config';
import { getOutName, spawnPromise } from './util.ts';

const outputChannel = window.createOutputChannel('JXA');

async function osacompile(compileTarget: string): Promise<void> {
	const { ignoreOS, osacompile, showNotifications } = await getConfig('jxa');

	// might become useful in a future release
	const options = { ...osacompile };

	if (platform() !== 'darwin' && ignoreOS !== true) {
		window.showWarningMessage('This command is only available on macOS');
		return;
	}

	const doc = window.activeTextEditor?.document;

	if (!doc) {
		console.error('[idleberg.jxa] Document not found');
		return;
	}

	await doc.save();

	const outName = getOutName(doc.fileName, compileTarget);
	const args: string[] = ['-o', outName];

	args.push('-l', 'JavaScript');

	if (options.executeOnly === true) {
		args.push('-x');
	}

	if (compileTarget === 'app' && options.stayOpen === true) {
		args.push('-s');
	}

	if (compileTarget === 'app' && options.startupScreen === true) {
		args.push('-u');
	}

	args.push(doc.fileName);

	try {
		await spawnPromise('osacompile', doc.fileName, args, outputChannel);

		if (showNotifications) {
			window.showInformationMessage(`Successfully compiled '${doc.fileName}'`);
		}
	} catch (error) {
		console.error('[idleberg.jxa]', error instanceof Error ? error.message : error);

		outputChannel.show();

		if (showNotifications) {
			window.showErrorMessage('Failed to compile or exited with error (see output for details)');
		}
	}
}

async function osascript(): Promise<void> {
	const { ignoreOS, osascript, showNotifications } = await getConfig('jxa');

	if (platform() !== 'darwin' && ignoreOS !== true) {
		window.showWarningMessage('This command is only available on macOS');
		return;
	}

	const doc = window?.activeTextEditor?.document;

	if (!doc) {
		console.error('[idleberg.jxa] Document not found');
		return;
	}

	const args: string[] = [];

	if (doc.isDirty) {
		const lines = doc.getText().split('\n');

		for (const line of lines) {
			args.push('-e', line);
		}
	} else {
		args.push(doc.fileName);
	}

	if (osascript.outputStyle.trim().length > 0 && osascript.outputStyle.trim().length <= 2) {
		args.unshift('-s', osascript.outputStyle.trim());
	}

	args.unshift('-l', 'JavaScript');

	try {
		await spawnPromise('osascript', doc.fileName, args, outputChannel);
	} catch (error) {
		console.error('[idleberg.jxa]', error instanceof Error ? error.message : error);
		outputChannel.show();

		if (showNotifications) {
			window.showErrorMessage('Failed to run script or exited with error (see output for details)');
		}
	}
}

export { osacompile, osascript };
