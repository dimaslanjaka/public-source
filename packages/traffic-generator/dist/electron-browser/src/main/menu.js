"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var electron_context_menu_1 = (0, tslib_1.__importDefault)(require("electron-context-menu"));
var electron_1 = require("electron");
function default_1() {
    //console.log("context menu show");
    return (0, electron_context_menu_1.default)({
        prepend: function (_defaultActions, parameters, _browserWindow) { return [
            {
                label: "Rainbow",
                // Only show it when right-clicking images
                visible: parameters.mediaType === "image",
            },
            {
                label: "Search Google",
                // Only show it when right-clicking text
                visible: parameters.selectionText.trim().length > 0,
                click: function () {
                    electron_1.shell
                        .openExternal("https://google.com/search?q=" + encodeURIComponent(parameters.selectionText))
                        .then(function (r) { return console.log(r); });
                },
            },
            {
                label: "Open Settings",
                click: function () {
                    var settings = {
                        height: 500,
                        width: 400,
                        titleBarStyle: "hidden",
                        webPreferences: {
                            nodeIntegration: true,
                            enableRemoteModule: true,
                        },
                    };
                    if (process.platform == "win32") {
                        settings.frame = false;
                    }
                    else {
                        settings.titleBarStyle = "hidden";
                    }
                    var win = new electron_1.BrowserWindow(settings);
                    win.loadFile("views/settings.html").then(function (r) { return console.log(r); });
                },
            },
        ]; },
    });
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VsZWN0cm9uLWJyb3dzZXIvc3JjL21haW4vbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2RkFBZ0Q7QUFDaEQscUNBQWdEO0FBRWhEO0lBQ0UsbUNBQW1DO0lBQ25DLE9BQU8sSUFBQSwrQkFBVyxFQUFDO1FBQ2pCLE9BQU8sRUFBRSxVQUFDLGVBQWUsRUFBRSxVQUFVLEVBQUUsY0FBYyxJQUFLLE9BQUE7WUFDeEQ7Z0JBQ0UsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLDBDQUEwQztnQkFDMUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxTQUFTLEtBQUssT0FBTzthQUMxQztZQUNEO2dCQUNFLEtBQUssRUFBRSxlQUFlO2dCQUN0Qix3Q0FBd0M7Z0JBQ3hDLE9BQU8sRUFBRSxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUNuRCxLQUFLLEVBQUU7b0JBQ0wsZ0JBQUs7eUJBQ0YsWUFBWSxDQUFDLGlDQUErQixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFHLENBQUM7eUJBQzNGLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxlQUFlO2dCQUN0QixLQUFLLEVBQUU7b0JBQ0wsSUFBTSxRQUFRLEdBQTZDO3dCQUN6RCxNQUFNLEVBQUUsR0FBRzt3QkFDWCxLQUFLLEVBQUUsR0FBRzt3QkFDVixhQUFhLEVBQUUsUUFBUTt3QkFDdkIsY0FBYyxFQUFFOzRCQUNkLGVBQWUsRUFBRSxJQUFJOzRCQUNyQixrQkFBa0IsRUFBRSxJQUFJO3lCQUN6QjtxQkFDRixDQUFDO29CQUNGLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLEVBQUU7d0JBQy9CLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO3FCQUN4Qjt5QkFBTTt3QkFDTCxRQUFRLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztxQkFDbkM7b0JBRUQsSUFBTSxHQUFHLEdBQUcsSUFBSSx3QkFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4QyxHQUFHLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLENBQUMsQ0FBQztnQkFDbEUsQ0FBQzthQUNGO1NBQ0YsRUF0Q3lELENBc0N6RDtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUM7QUEzQ0QsNEJBMkNDIn0=