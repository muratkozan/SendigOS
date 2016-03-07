var activity = new Activity("folderview")
activity.name = i18n("Desktop")
activity.wallpaperPlugin = "image"
activity.wallpaperMode = "SingleImage"
activity.currentConfigGroup = Array("Wallpaper", "image")
activity.writeConfig("wallpaper", "/usr/share/wallpapers/default")
activity.writeConfig("wallpaperposition", "2")

activity.currentConfigGroup = new Array('ToolBox')
activity.writeConfig('corner', '1')
activity.writeConfig('offset', '0')

var screenrect = screenGeometry(0)

var panel = new Panel("panel")
panel.location = "bottom"
panel.height = screenGeometry(panel.screen).height > 899 ? 45 : 45
launcher = panel.addWidget("launcher")
launcher.writeConfig("ShowAppsByName","true")
launcher.globalShortcut = "Alt+F1"
panel.addWidget("showdesktop")

	var icontasks = panel.addWidget("icontasks")
	icontasks.writeConfig("groupClick","1")
	//icontasks.writeConfig("iconScale","49")
	icontasks.writeConfig("unity","true")
	icontasks.writeConfig("launcherIcons","false")
	icontasks.writeConfig("maxRows","1")
	icontasks.writeConfig("mediaButtons","true")
	icontasks.writeConfig("middleClick","0")
	icontasks.writeConfig("previewSize","200")
	icontasks.writeConfig("rotate","false")
	icontasks.writeConfig("showOnlyCurrentActivity","false")
	icontasks.writeConfig("showOnlyCurrentDesktop","false")
	icontasks.writeConfig("showOnlyCurrentScreen","false")
	icontasks.writeConfig("showProgress","true")
	icontasks.writeConfig("showSeparator","0")
	icontasks.writeConfig("sortingStrategy","1")
	icontasks.writeConfig("spacing","10")
	icontasks.writeConfig("style","0")
	icontasks.writeConfig("toolTips","2")
	icontasks.writeConfig("highlightWindows","false")
	
	//icontasks.writeConfig("Enabled","true")
	icontasks.currentConfigGroup = new Array('Launchers') //CONFIGURE THE LAUNCHERS 
	icontasks.writeConfig("Items","file:///usr/share/applications/kde4/dolphin.desktop?wmClass=Dolphin,file:///usr/share/applications/skype.desktop,file:////usr/share/applications/vlc.desktop?wmClass=vlc,file:///usr/share/applications/chromium-browser.desktop")

systray = panel.addWidget("systemtray")
i = 0;
if (hasBattery) {
    systray.currentConfigGroup = new Array("Applets", ++i)
    systray.writeConfig("plugin", "battery")
}

systray.currentConfigGroup = new Array("Applets", ++i)
systray.writeConfig("plugin", "message-indicator")
systray.currentConfigGroup = new Array("Applets", ++i)
systray.writeConfig("plugin", "org.kde.networkmanagement")
systray.currentConfigGroup = new Array("Applets", ++i)
systray.writeConfig("plugin", "org.packagekit.updater")
systray.currentConfigGroup = new Array("Applets", ++i)
systray.writeConfig("plugin", "notifier")

clock = panel.addWidget("digital-clock")
clock.writeConfig("showDate", "false")
clock.writeConfig("dateStyle","0")
clock.writeConfig("plainClockColor", "255,255,255")
clock.writeConfig("plainClockDrawShadow","false")
clock.writeConfig("showSeconds","false")
clock.writeConfig("showTimeZone","false")
clock.writeConfig("useCustomColor", "false")

	locked="true"

// icons change.
for (var i = 0; i < panelIds.length; ++i) {                                           
    var panel = panelById(panelIds[i]) 
    var widgetIds = panel.widgetIds
                                                                                      
    for (var j = 0; j < widgetIds.length; ++j) {                                      
        var widget = panel.widgetById(widgetIds[j]);

        if (widget && (widget.type == 'quickaccess') &&
            (widget.readConfig("icon", "") != "user-home")) {
                widget.writeConfig("icon", "user-home")
        } // if quickaccess

        if (widget && (widget.type == 'launcher') &&
            (widget.readConfig("icon", "") != "/usr/share/regataos/regataos.png")) {
                widget.writeConfig("icon", "/usr/share/regataos/regataos.png")
        } // if launcher

        if (widget && (widget.type == 'lancelot_launcher') &&
            (widget.readConfig("icon", "") != "/usr/share/regataos/regataos.png")) {
                widget.writeConfig("icon", "/usr/share/regataos/regataos.png")
        } // if lancelot_launcher
    } // for widgets in panel
} // for panel
