import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    const disposable = vscode.commands.registerCommand('dotnet-run-button.run', () => {

        const workspaceFolders = vscode.workspace.workspaceFolders;

        if (!workspaceFolders) {
            vscode.window.showErrorMessage("No project folder open");
            return;
        }

        const cwd = workspaceFolders[0].uri.fsPath;

        const terminal = vscode.window.createTerminal({
            name: "dotnet run",
            cwd: cwd
        });

        terminal.show();
        terminal.sendText("dotnet run");
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}