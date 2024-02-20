local spaces = require("hs.spaces")
local screen = require("hs.screen")

hs.hotkey.bind({'command'}, 'escape', function()
	local BUNDLE_ID = "net.kovidgoyal.kitty"

	function getMainWindow(app)
		local win = nil
		while win == nil do
			win = app:mainWindow()
		end
		return win
	end

	function moveWindow(kitty, space)
		local win = getMainWindow(kitty)
		local isFullScreen = win:isFullScreen()

		if isFullScreen then
			hs.eventtap.keyStroke("fn", "f", 0, kitty)
		end

		winFrame = win:frame()
		local focusedWin = hs.window.focusedWindow()

		if focusedWin and focusedWin:screen() then
			local scrFrame = focusedWin:screen():fullFrame()
			winFrame.w = scrFrame.w
			winFrame.y = scrFrame.y
			winFrame.x = scrFrame.x
			win:setFrame(winFrame, 0)
		end

		spaces.moveWindowToSpace(win, space)

		if isFullScreen then
			hs.eventtap.keyStroke("fn", "f", 0, kitty)
		end

		win:focus()
	end

	local kitty = hs.application.get(BUNDLE_ID)
	if kitty ~= nil and kitty:isFrontmost() then
		kitty:hide()
	else
		local space = spaces.activeSpaceOnScreen()
		local mainScreen = screen.mainScreen()
		if kitty == nil and hs.application.launchOrFocusByBundleID(BUNDLE_ID) then
			local appWatcher = nil
			appWatcher = hs.application.watcher.new(function(name, event, app)
				if event == hs.application.watcher.launched and app:bundleID() == BUNDLE_ID then
					getMainWindow(app):move(hs.geometry({ x = 0, y = 0, w = 1, h = 1 }))
					app:hide()
					moveWindow(app, space)
					appWatcher:stop()
				end
			end)
			appWatcher:start()
		end
		if kitty ~= nil then
			moveWindow(kitty, space)
		end
	end
end)

hs.hotkey.bind(_, "f10", function()
	local BUNDLE_ID = "com.github.wez.wezterm"

	function getMainWindow(app)
		local win = nil
		while win == nil do
			win = app:mainWindow()
		end
		return win
	end

	function moveWindow(wezterm, space)
		local win = getMainWindow(wezterm)
		local isFullScreen = win:isFullScreen()

		if isFullScreen then
			hs.eventtap.keyStroke("fn", "f", 0, wezterm)
		end

		winFrame = win:frame()
		local focusedWin = hs.window.focusedWindow()

		if focusedWin and focusedWin:screen() then
			local scrFrame = focusedWin:screen():fullFrame()
			winFrame.w = scrFrame.w
			winFrame.y = scrFrame.y
			winFrame.x = scrFrame.x
			win:setFrame(winFrame, 0)
		end

		spaces.moveWindowToSpace(win, space)

		if isFullScreen then
			hs.eventtap.keyStroke("fn", "f", 0, wezterm)
		end

		win:focus()
	end

	local wezterm = hs.application.get(BUNDLE_ID)
	if wezterm ~= nil and wezterm:isFrontmost() then
		wezterm:hide()
	else
		local space = spaces.activeSpaceOnScreen()
		local mainScreen = screen.mainScreen()
		if wezterm == nil and hs.application.launchOrFocusByBundleID(BUNDLE_ID) then
			local appWatcher = nil
			appWatcher = hs.application.watcher.new(function(name, event, app)
				if event == hs.application.watcher.launched and app:bundleID() == BUNDLE_ID then
					getMainWindow(app):move(hs.geometry({ x = 0, y = 0, w = 1, h = 1 }))
					app:hide()
					moveWindow(app, space)
					appWatcher:stop()
				end
			end)
			appWatcher:start()
		end
		if wezterm ~= nil then
			moveWindow(wezterm, space)
		end
	end
end)
